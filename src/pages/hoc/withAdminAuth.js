import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

function withAdminAuth(WrappedComponent) {
    return function AdminAuthComponent(props) {
        const router = useRouter();

        useEffect(() => {
            const fetchProtectedData = async () => {
                const token = Cookies.get('token');
                try {
                    const response = await axios.get('/protected-endpoint', {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    // Periksa apakah pengguna adalah admin
                    const user = JSON.parse(Cookies.get('userData'));
                    if (user.role !== 'admin') {
                        router.push('/unauthorized'); // Arahkan ke halaman Unauthorized
                    }
                } catch (error) {
                    if (error.response && error.response.status === 401) {
                        const refreshToken = Cookies.get('refreshToken');
                        try {
                            const response = await axios.post('/refresh-token-endpoint', {
                                refreshToken: refreshToken
                            });
                            Cookies.set('token', response.data.token);
                            fetchProtectedData();
                        } catch (refreshError) {
                            if (refreshError.response && refreshError.response.status === 401) {
                                // Jika refresh token juga habis, arahkan pengguna ke halaman login
                                Cookies.remove('token');
                                Cookies.remove('refreshToken');
                                router.push('/login');
                            }
                        }
                    }
                }
            };
            fetchProtectedData();
        }, []);

        return <WrappedComponent {...props} />;
    }
}

export default withAdminAuth;

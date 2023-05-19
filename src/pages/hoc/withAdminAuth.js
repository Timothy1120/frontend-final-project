import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

function withAdminAuth(WrappedComponent, endpoint, method = 'get') {
    return function AdminAuthComponent(props) {
        const router = useRouter();
        useEffect(() => {
            const fetchProtectedData = async () => {
                const token = Cookies.get('token');
                try {
                    const options = {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    };
                    let response;
                    if (method === 'get') {
                        response = await axios.get(endpoint, options);
                    } else if (method === 'post') {
                        response = await axios.post(endpoint, props.data, options);
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

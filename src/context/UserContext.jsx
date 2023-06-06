import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = Cookies.get('token'); // Mengambil token dari cookies
            if (token) {
                try {
                    const res = await axios.get('http://localhost:7000/api/current-user', {
                        headers: { 'Authorization': `Bearer ${token}` },
                    });

                    setUser(res.data.data);

                } catch (error) {
                    console.error(error);
                }
            }
        };
        fetchUser();
    }, []);

    // function to handle logout
    const handleLogout = () => {
        Cookies.remove('token');
        Cookies.remove('refreshToken');
        setUser(null);
    };
    return (
        <UserContext.Provider value={{ user, setUser, handleLogout }}>
            {children}
        </UserContext.Provider>
    );
};

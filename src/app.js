import Routers from './Routers';
import React, { useState, useEffect } from 'react';

function App()  {
    const [token, setToken] = useState(null);
    const [isValidToken, setIsValidToken] = useState(false);

    useEffect(() => {
        const checkToken = async () => {
        try {
            const response = await fetch('https://api.example.com/token-check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
            });

            if (response.ok) {
            setIsValidToken(true);
            } else {
            setIsValidToken(false);
            }
        } catch (error) {
            console.error('Erro ao verificar token:', error);
            setIsValidToken(false);
        }
        };

        if (token) {
        checkToken();
        }
    }, [token]);
    return ( <Routers/> ) }

export default App;
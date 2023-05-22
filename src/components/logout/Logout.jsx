import React, { useEffect } from 'react';

const LogoutPage = () => {
    useEffect(() => {
        window.location.href = 'https://ragnets-tasks.vercel.app/login';
    }, []);

    return <div>Logging out...</div>;
};

export default LogoutPage;
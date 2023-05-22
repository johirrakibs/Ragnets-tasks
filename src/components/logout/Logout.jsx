import React, { useEffect } from 'react';

const LogoutPage = () => {
    useEffect(() => {
        window.location.href = '/login';
    }, []);

    return <div>Logging out...</div>;
};

export default LogoutPage;
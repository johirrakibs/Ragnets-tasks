import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LogoutPage = () => {
    useEffect(() => {
        // window.location.href = '/login';

    }, []);

    return <div><Link to="/login">LogOut</Link></div>;
};

export default LogoutPage;
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    let auth = null; 
    let access_admin = localStorage.getItem("auth-admin");
    if(access_admin) auth = true;

    return auth ? <Outlet /> : <Navigate to="/" />;
} 

export default PrivateRoute;


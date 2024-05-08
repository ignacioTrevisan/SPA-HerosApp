import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../auth/context/authContext'
import { Navigate, useLocation } from 'react-router-dom';
import { LoginPage } from '../auth/pages/loginPage';

export const PrivateRoutes = ({ children }) => {

    const { logged } = useContext(AuthContext);
    const { pathname, search } = useLocation();
    const lastPage = pathname + search;

    localStorage.setItem('lastPage', lastPage)

    return (logged) ?
        children
        :
        <Navigate to="/login" />
}
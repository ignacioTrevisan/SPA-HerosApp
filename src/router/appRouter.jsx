import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../ui'
import { HeroesRoutes } from '../heroes/routes/heroesRoutes';
import { LoginPage } from '../auth/pages/loginPage';
import { PrivateRoutes } from './privateRoutes';
import { PublicRoutes } from './publicRoutes';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='login' element={
                    <PublicRoutes>
                        <LoginPage />
                    </PublicRoutes>
                } />

                <Route path='/*' element={
                    <PrivateRoutes>
                        <HeroesRoutes />
                    </PrivateRoutes>
                } />


            </Routes>

        </>
    )
}

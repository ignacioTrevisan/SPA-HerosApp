import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../ui'
import { HeroesRoutes } from '../heroes/routes/heroesRoutes';
import { LoginPage } from '../auth/pages/loginPage';

export const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path='login' element={<LoginPage />} />

                <Route path='/*' element={<HeroesRoutes />} />

            </Routes>

        </>
    )
}

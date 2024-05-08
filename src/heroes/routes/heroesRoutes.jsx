import React from 'react'
import { Navbar } from '../../ui'
import { DcPages, MarvelPages, SearchPage, HeroePage } from '../pages'
import { LoginPage } from '../../auth/pages/loginPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import { getHeroesByPublisher } from '../helpers/getHeroeByPulbisher'

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path='marvel' element={<MarvelPages />} />
                    <Route path='dc' element={<DcPages />} />
                    <Route path='search' element={<SearchPage />} />
                    <Route path='hero/:id' element={<HeroePage />} />
                    {/* <Route path='login' element={<LoginPage />} /> */}
                    <Route path='/' element={<Navigate to='/marvel' />} />

                </Routes>

            </div>
        </>
    )
}

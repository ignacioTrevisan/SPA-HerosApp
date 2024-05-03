import React from 'react'
import { HeroesList } from '../components/index'

export const MarvelPages = () => {
    return (
        <div className='animate__animated animate__fadeIn'>
            <h1>Marvel Pages</h1>
            <hr />

            <HeroesList publisher={'Marvel Comics'} />
        </div>
    )
}

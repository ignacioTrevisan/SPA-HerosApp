import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

export const HeroesCard = ({ hero }) => {

    const [animacion, setAnimacion] = useState();

    const cambiarAnimacion = () => {
        setAnimacion('col animate__animated animate__pulse');
    }
    const quitarAnimacion = () => {
        setAnimacion('col');
    }
    const imgUrl = useMemo(() => `/heroes/${hero.id}.jpg`, [hero])
    return (
        <div
            className={animacion}
            onMouseEnter={cambiarAnimacion}
            onMouseLeave={quitarAnimacion}
        >
            <div className='card'>
                <div className='row no-gutters'>
                    <div className='col-4'>
                        <img src={imgUrl} className='card-img' alt={hero.superhero} />
                    </div>

                    <div className='col-8'>

                        <div className='card-body'>

                            <h5 className='card-title' aria-label='buscarHero'>{hero.superhero}</h5>
                            <p className='card-text'>{hero.alter_ego}</p>
                            {(hero.alter_ego !== hero.characters) && (<p>{hero.characters}</p>)}
                            <p className='card-text'>
                                <small className='text-muted'>{hero.first_appearance}</small>
                            </p>
                            <Link to={`/hero/${hero.id}`} >Ver mas</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

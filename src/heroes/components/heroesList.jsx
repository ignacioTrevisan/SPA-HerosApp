import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroeByPulbisher';
import { HeroesCard } from './heroesCard';

export const HeroesList = ({ publisher }) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    return (
        <ul>
            <div className='row rows-cols1 row-cols-md-3 g-3'>
                {heroes.map(hero => <li key={hero.id}><HeroesCard hero={hero} /></li>)}
            </div>
        </ul>
    )
}

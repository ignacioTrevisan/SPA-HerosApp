import React, { useEffect, useState } from 'react'
import { UseForm } from '../../hook/useForm'
import { useFormAction, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { GetHeroesByNames } from '../helpers';
import { HeroesCard } from '../components';

export const SearchPage = () => {

    const { searchText, OnInputchange } = UseForm({
        searchText: '',
    });
    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const onSearchSubmit = (event) => {
        event.preventDefault();
        if (searchText.trim().length <= 1) return;
        navigate(`?q=${searchText}`);
    }

    const [heroeFind, setHeroeFind] = useState();
    useEffect(() => {
        setHeroeFind(GetHeroesByNames(q));
    }, [q])
    const showSearch = (q.length === 0);

    const showHeroNotFound = (q.length !== 0 && heroeFind && heroeFind.length === 0);


    return (
        <>
            <h1>search</h1>
            <div className='row'>
                <div className='col-5'>

                    <h4 style={{ display: showSearch || showHeroNotFound ? '' : 'none' }}>Searching...</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type='text'
                            placeholder='Search a hero'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={OnInputchange}
                        />
                        <button className='btn btn-outline-primary mt-1'>
                            Search
                        </button>
                    </form>
                </div>
                <div className='col-7'>
                    <h4>Results</h4>
                    <hr />

                    <div
                        className='alert alert-primary animate__animated animate__fadeIn'
                        style={{ display: showSearch ? '' : 'none' }}
                    >
                        Search a hero
                    </div>
                    <div
                        className='alert alert-danger animate__animated animate__shakeX'
                        style={{ display: showHeroNotFound ? '' : 'none' }}
                    >
                        No hero with <b>{q}</b>
                    </div>





                    {heroeFind && heroeFind.map(hero =>
                        <HeroesCard key={hero.id} hero={hero} />
                    )}
                </div>

            </div>
        </>
    )
}

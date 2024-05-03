import React from 'react'
import { Heroes } from '../data/heroes'

export const getHeroesById = (id) => {
    const heroes = Heroes.find(item => item.id === id);
    return heroes;

}

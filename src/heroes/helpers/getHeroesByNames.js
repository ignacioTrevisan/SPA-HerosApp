import { Heroes } from "../data/heroes";

export const GetHeroesByNames = (name = '') => {
    name = name.toLocaleLowerCase().trim();
    if (name.length <= 0) return [];

    return (Heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes(name)
    ));

}
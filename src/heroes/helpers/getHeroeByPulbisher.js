import { Heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {

    const verifyPublisher = Heroes.filter(item => item.publisher === publisher);

    if (verifyPublisher.length > 0) {
        return verifyPublisher;
    } else {
        throw new Error(`${publisher} is not a valid publisher`);
    }
}
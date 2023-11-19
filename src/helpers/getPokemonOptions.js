import pokemonApi from "@/api/pokemonApi";

/**
 * Returns an array of numbers representing the Pokemons available in the game.
 * @returns {number[]} An array of numbers representing the Pokemons available in the game.
 */
export const getPokemons = () => {
    const pokemonsArr = Array.from(Array(650));

    return pokemonsArr.map((_, index) => index + 1);
}


/**
 * Returns an array of four random Pokemon names.
 *
 * @returns {Promise<Array<string>>} An array of four Pokemon names.
 */
const getPokemonOptions = async () => {
    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5); // Ordena los pokemons de forma aleatoria

    const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4));

    return pokemons;
}

/**
 * Returns an array of objects containing the name and id of four pokemons.
 * @param {Array} [pokemonIds=[]] - An array of four pokemon ids.
 * @returns {Promise<Array>} - A promise that resolves to an array of four objects containing the name and id of each pokemon.
 */
export const getPokemonNames = async ([a, b, c, d] = []) => {
    // const {data} =  await pokemonApi.get(`/1`);
    // console.log(data.id, data.name);

    // array of promises
    const promiseArr = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ];

    // Make the petitions with array of promises
    const [p1, p2, p3, p4] = await Promise.all(promiseArr).then();

    return [
        {name: p1.data.name, id: p1.data.id},
        {name: p2.data.name, id: p2.data.id},
        {name: p3.data.name, id: p3.data.id},
        {name: p4.data.name, id: p4.data.id},
    ]
}

export default getPokemonOptions;
import axios from "axios";

/**
 * Axios instance for making requests to the PokeAPI.
 * @type {import('axios').AxiosInstance}
 */
const pokemonApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon",
});

export default pokemonApi;
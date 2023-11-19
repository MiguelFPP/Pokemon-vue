import pokemonApi from "@/api/pokemonApi"

describe('PokemomApi', () =>{
    test('axios debe estar configurado con la url base de la api', () =>{
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    })
})
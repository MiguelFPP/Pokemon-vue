import getPokemonOptions, { getPokemons, getPokemonNames } from "@/helpers/getPokemonOptions"

describe('gePokemonOptions helpers', () => {
    test('debe de regresar un arreglo de numeros', () => {
        const pokemons = getPokemons();


        expect(pokemons.length).toBe(650) // 650 numeros
        expect(pokemons[0]).toBe(1) // El primer indece es el numero 1
        expect(pokemons[500]).toBe(501) // El indice 500 es el numero 501
        expect(pokemons[649]).toBe(650) // El ultimo indice es el numero 650
    })

    test("debe de retornar un arreglo de 4 elementos con nombres de pokemon", async () => {
        const pokemons = await getPokemonNames([1, 2, 3, 4]);

        expect(pokemons.length).toBe(4);
        expect(pokemons).toStrictEqual([ // toStrictEqual -> Compara objetos
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
        ]);
    })

    test("getPokemonsOptions debe de retornar un arreglo mezclado", async () => {
        const pokemons = await getPokemonOptions();
        
        expect(pokemons.length).toBe(4);
        expect(pokemons).toStrictEqual([ // toStrictEqual -> Compara objetos
            { name: expect.any(String), id: expect.any(Number) }, // expect.any(String) -> Cualquier string
            { name: expect.any(String), id: expect.any(Number) }, // expect.any(Number) -> Cualquier numero
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) }
        ]);
    })
})
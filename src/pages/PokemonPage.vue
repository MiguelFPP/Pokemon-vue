<template lang="es">
    <h1 v-if="!pokemon"> Espere por favor... </h1>

    <div v-else>
        <h1>Quien es este pokemon?</h1>
    
        <PokemonPicture :pokemon_id="pokemon.id" :showPokemon="showPokemon" /> <!-- : for numbers -->
    
        <PokemonOptions :pokemons="pokemonArr" />
    </div>

</template>
<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    components: { PokemonOptions, PokemonPicture },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false
        }
    },
    methods: {
        async mixPokemonArray(){
            this.pokemonArr = await getPokemonOptions();

            const rndInt = Math.floor(Math.random() * 4); // number between 0 and 3
            this.pokemon = this.pokemonArr[rndInt]; // pokemon to guess
        }
    },
    mounted() {
        this.mixPokemonArray(); // load pokemon options
    }
}
</script>
<style lang="">
    
</style>
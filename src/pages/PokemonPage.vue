<template lang="es">
    <h1>Quien es este pokemon?</h1>

    <PokemonPicture :pokemon_id="151" :showPokemon="true" /> <!-- : for numbers -->

    <PokemonOptions :pokemons="pokemonArr" />
</template>
<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    components: { PokemonOptions, PokemonPicture },
    data() {
        pokemonArr: []
    },
    methods: {
        async mixPokemonArray(){
            this.pokemonArr = await getPokemonOptions();
        }
    },
    mounted() {
        this.mixPokemonArray();
    }
}
</script>
<style lang="">
    
</style>
<template lang="es">
    <h1 v-if="!pokemon"> Espere por favor... </h1>

    <div v-else>
        <h1>Quien es este pokemon?</h1>
    
        <PokemonPicture :pokemon_id="pokemon.id" :showPokemon="showPokemon" /> <!-- : for numbers -->
    
        <PokemonOptions :pokemons="pokemonArr"
        @selection="checkAnswer" /> <!-- received the evento from component son -->
    </div>

    <div v-if="showAnswer">
        <h2 class="fade-in">{{ message }}</h2>
        <button @click="newGame">Nuevo Juego</button>
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
            showPokemon: false,
            showAnswer: false,
            message : ''
        }
    },
    methods: {
        async mixPokemonArray(){
            this.pokemonArr = await getPokemonOptions();

            const rndInt = Math.floor(Math.random() * 4); // number between 0 and 3
            this.pokemon = this.pokemonArr[rndInt]; // pokemon to guess
        },
        checkAnswer(id){
            this.showPokemon = true;
            this.showAnswer = true;
            if (id == this.pokemon.id) {
                this.message = `Correcto, el pokemon es ${this.pokemon.name}`;
            }else{
                this.message = `Incorrecto, el pokemon es ${this.pokemon.name}`;
            }
        },
        newGame(){
            this.showPokemon = false;
            this.showAnswer = false;
            this.message = '';
            this.pokemon = null;
            this.mixPokemonArray();
        }
    },
    mounted() {
        this.mixPokemonArray(); // load pokemon options
    }
}
</script>
<style lang="">
    
</style>
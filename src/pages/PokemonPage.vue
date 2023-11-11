<template lang="es">
    <h1>Quien es este pokemon?</h1>

    <PokemonPicture :pokemon_id="151" :showPokemon="true" /> <!-- : for numbers -->

    <PokemonOptions />
</template>
<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';

export default {
    components: { PokemonOptions, PokemonPicture }
}
</script>
<style lang="">
    
</style>
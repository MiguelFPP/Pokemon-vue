<template lang="">
    <div class="options-container">
        <ul>
            <li>Charmander</li>
            <li>Bulbasaur</li>
            <li>Squirtle</li>
            <li>Pikachu</li>
        </ul>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
    /* Pokemon Options */
ul {
    list-style-type: none;
}

li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    justify-content: center;
}
</style>
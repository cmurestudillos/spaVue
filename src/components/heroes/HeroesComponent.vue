<template>
    <div>
        <h1>Heroes <small>Marvel y DC</small></h1>
        <hr>
        <CardComponent></CardComponent>
    </div>
</template>

<script>
// Componentes
import CardComponent from '../shared/card/CardComponent.vue';

export default {
    name: 'HeroesComponent',
    components: {
        CardComponent
    } 
}
</script>
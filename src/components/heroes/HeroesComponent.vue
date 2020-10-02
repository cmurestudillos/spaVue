<template>
    <div>
        <h1>Heroes <small>Marvel y DC</small></h1>
        <hr>
        <b-card-group columns>
            <div id="cards" class="card shadow animated fadeIn slow" v-for="heroe in heroes" :key="heroe.nombre">
                <b-card :img-src="heroe.img" :img-alt="heroe.nombre" :img-title="heroe.nombre" class="mb-2 card-img-top">
                    <b-card-title><h5>{{heroe.nombre}}</h5></b-card-title>
                    <b-card-text>{{heroe.bio}}</b-card-text>
                    <b-card-text><small class="text-muted"><strong>Año:</strong> {{ heroe.aparicion }}</small></b-card-text>
                    <b-button href="#" class="btn btn-4 btn-block">Ver mas...</b-button>
                </b-card>
            </div>

        </b-card-group>  

    </div>
</template>

<script>
// Componentes Bootstrap-vue
import { BCard } from 'bootstrap-vue';
import customData from '../../data/heroes.json'

export default {
    name: 'HeroesComponent',
        components: {
      BCard
    },
    data(){
        return {
            heroes: customData
        }
    }
}
</script>
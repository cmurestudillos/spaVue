<template>
    <b-card-group columns>
        <div id="cards" class="card shadow animated fadeIn slow" v-for="heroe in heroes" :key="heroe.nombre">
            <b-card :img-src="require(`../../../assets/img/${heroe.img}`)" :img-alt="heroe.nombre" :img-title="heroe.nombre" class="mb-2 card-img-top">
                <b-card-title><h5>{{heroe.nombre}}</h5></b-card-title>
                <b-card-text>{{heroe.bio}}</b-card-text>
                <b-card-text><small class="text-muted"><strong>Año:</strong> {{ heroe.aparicion }}</small></b-card-text>
                <router-link :to="'/heroe/' + heroe.nombre" class="btn btn-4 btn-block" >Ver mas...</router-link>
            </b-card>
        </div>
    </b-card-group>   
</template>

<script>
// Componentes Bootstrap-vue
import { BCard } from 'bootstrap-vue';
// Datos a cargar
import customData from '../../../data/heroes.json';
export default {
    name: 'CardComponent',
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
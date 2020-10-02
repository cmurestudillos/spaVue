<template>
    <div>
        <h1>Buscando: <small>{{ palabra }}</small></h1>
        <hr>

        <div class="row animated fadeIn slow" v-if="heroes.length == 0">
            <div class="col-md-12">
                <div class="alert alert-info" role="alert">
                    No existen resultados sobre la busqueda realizada: {{ palabra }}
                </div>
            </div>
        </div>
        <CardComponent v-if="heroes.length != 0"></CardComponent>
    </div>
</template>

<script>
// Datos a cargar
import customData from '../../data/heroes.json';
// Componentes
import CardComponent from '../shared/card/CardComponent.vue';

export default {
  name: 'BuscadorComponent',
  components: {
      CardComponent
  },
  mounted(){
    // Recogemos el parametro de busqueda
    this.palabra = this.$route.params.palabra; 
    // Llamamos al metodo
    this.buscarHeroes(this.palabra);
  },
  data(){
    return {
        heroes: [],
        palabra: ''
    }
  },
  methods: {
    // Metodo para buscar los articulos
    buscarHeroes(palabra){
      // Log de seguimiento
      console.log('BuscadorComponent.vue - Metodo buscarHeroes');
        palabra = palabra.toLowerCase();
        for (let index = 0; index < customData.length; index++) {
            if (customData[index].nombre === palabra){
                // Recogemos el parametro id del articulo seleccionado
                this.heroes = customData[index];
            }
        }
    }
  }               
}
</script>
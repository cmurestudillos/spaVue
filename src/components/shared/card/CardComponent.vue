<template>
    <b-card-group columns>
        <b-card img-src="https://placekitten.com/g/400/450" title="Card title that wraps to a new line" img-alt="Image" img-top>
        <b-card-text>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This content is a little bit longer.
        </b-card-text>
        </b-card>
    </b-card-group>   
</template>

<script>

export default {
    name: 'CardComponent',
    components: {
      BCard
    },
    mounted(){
        // Recogemos el parametro id del articulo seleccionado
        this.heroeId = this.$route.params.id; 
        // Llamamos al metodo
        this.getHeroe(this.heroeId);
    },      
    data(){
        return {
            heroe: []
        }
    },
    methods: {
        // Metodo para obtener datos del articulo seleccionado
        getHeroe(heroeId){
            // Log de seguimiento
            console.log('CardComponent.vue - Metodo getHeroe');

            axios.get('data/heroes.json' + heroeId + '.json')
            .then( res => {
                if(res.data.heroe){
                    this.heroe = res.data.heroe;
                    console.log('this.heroe');
                }
            });
        }
    }        
}
</script>
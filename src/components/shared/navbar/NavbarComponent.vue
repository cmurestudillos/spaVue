<template>
    <div>
    <b-navbar toggleable="lg" type="light" variant="light" class="navbar navbar-expand-lg navbar-dark bg-custom">
            <router-link :to="'/heroes'" class="active">
                <img src="../../../assets/img/A-64.png" width="30" height="30" title="Superheroes">
            </router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item href="/heroes">Heroes</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-form @submit.prevent="buscarHeroe">
            <b-form-input nombre="buscar" v-model="buscarTexto" size="sm" class="mr-sm-2" placeholder="Buscar Heroe ..." ></b-form-input>
            <b-button size="sm" variant="outline-success" class="my-2 my-sm-0" type="submit">Buscar</b-button>
            </b-nav-form>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
</template>

<script>
import { BNavbar, BNavbarNav, BNavbarToggle  } from 'bootstrap-vue';

export default {
    name: 'NavbarComponent',
    components: {
      BNavbar,
      BNavbarNav,
      BNavbarToggle
    },
    data(){
        return {
            buscarTexto: null
        }
    },      
    methods: {
        // Metodo para buscar items en la pagina
        buscarHeroe(){
            // Log de seguimiento
            console.log('NavbarComponent.vue - Metodo buscarHeroe');

            this.$router.push('/buscar/' + this.buscarTexto);
        }        
    }           
}
</script>
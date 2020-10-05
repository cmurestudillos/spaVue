<template>
    <div>
    <b-navbar toggleable="lg" type="light" variant="light" class="navbar navbar-expand-lg navbar-dark bg-custom">
            <router-link :to="'/heroes'">
                <img src="../../../assets/img/A-64.png" width="30" height="30" title="Superheroes">
            </router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item href="/heroes" class="active">Heroes</b-nav-item>
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
    }          
}
</script>
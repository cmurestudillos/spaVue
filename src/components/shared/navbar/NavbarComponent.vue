<template>
    <div>
    <b-navbar toggleable="lg" type="light" variant="light" class="navbar navbar-expand-lg navbar-dark bg-custom">
            <b-navbar-brand href="#">
                <img src="assets/logo.png" class="d-inline-block align-top" width="30" height="30" title="Superheroes">
            </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item href="#">Heroes</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar Heroe ..."></b-form-input>
            <b-button size="sm" variant="outline-success" class="my-2 my-sm-0" type="submit">Buscar</b-button>
            </b-nav-form>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
</template>

<script>
import { BNavbar, BNavbarNav, BNavbarBrand, BNavbarToggle  } from 'bootstrap-vue';
export default {
    name: 'NavbarComponent',
    components: {
      BNavbar,
      BNavbarNav,
      BNavbarBrand,
      BNavbarToggle
    }    
}
</script>
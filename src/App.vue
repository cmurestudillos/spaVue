<template>
  <div id="app">
    <router-view></router-view>
     <FooterComponent></FooterComponent>
  </div>

</template>

<script>
// Componentes comunes
import FooterComponent from './components/shared/footer/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    FooterComponent
  }
}
</script>

<style>
  /* Estilos */
  @import './assets/css/styles.css';
</style>

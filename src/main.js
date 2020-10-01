import Vue from 'vue';
import App from './App.vue';
// Rutas
import router from './routes/index';

// ---------------------------------------------------------------//
// Configuracion para test/produccion                             //
// ---------------------------------------------------------------//
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

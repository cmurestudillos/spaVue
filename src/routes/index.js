import Vue from 'vue';
// Rutas
import VueRouter from 'vue-router';

// Componentes
import HelloWorld from '../components/HelloWorld.vue';

// ---------------------------------------------------------------//
// Configuracion del enrutamiento                                 //
// ---------------------------------------------------------------//
Vue.use(VueRouter);

const routes = [
    {path: '/', component: HelloWorld},
    {path: '/home', component: HelloWorld}
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
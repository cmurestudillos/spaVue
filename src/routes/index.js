import Vue from 'vue';
// Rutas
import VueRouter from 'vue-router';

// Componentes
import HeroesComponent from '../components/heroes/HeroesComponent.vue';

// ---------------------------------------------------------------//
// Configuracion del enrutamiento                                 //
// ---------------------------------------------------------------//
Vue.use(VueRouter);

const routes = [
    {path: '/', component: HeroesComponent},
    {path: '/heroes', component: HeroesComponent}
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
import Vue from 'vue';
// Rutas
import VueRouter from 'vue-router';

// Componentes
import HeroesComponent from '../components/heroes/HeroesComponent.vue';
import HeroeComponent from '../components/heroe/HeroeComponent.vue';

// ---------------------------------------------------------------//
// Configuracion del enrutamiento                                 //
// ---------------------------------------------------------------//
Vue.use(VueRouter);

const routes = [
    {path: '/', component: HeroesComponent},
    {path: '/heroes', component: HeroesComponent},
    {path: '/heroe/:nombre', component: HeroeComponent},
    {path: '*', component: HeroesComponent }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
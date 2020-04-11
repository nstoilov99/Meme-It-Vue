import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/meme/List.vue'
import Register from './components/auth/Register.vue'
import Login from './components/auth/Login.vue'
import MemeCreate from './components/meme/Create.vue'

Vue.use(VueRouter);



function anonymousGuard(to, from, next) {
    if (Vue.cookie.get('x-auth-token')!== null) {
        next('/');
    } else {
        next();
    }
}

function authGuard(to, from, next) {
    if (Vue.cookie.get('x-auth-token') === null) {
        next('/login');
    } else {
        next();
    }
}


const routes = [
    { path: '/', component: Home },
    {
        path: '/login', component: Login, beforeEnter: anonymousGuard
    },
    {
        path: '/register', component: Register, beforeEnter: anonymousGuard
    },
    {
        path: '/meme-create', component: MemeCreate, beforeEnter: authGuard
    },
    // {
    //     path: '*', component: NotFound
    // }
];

export default new VueRouter({
    mode: 'history',
    routes
});
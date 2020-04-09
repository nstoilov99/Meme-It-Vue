import Vue from 'vue';
import VueRouter from 'vue-router';

import Register from './components/auth/Register.vue'
import Login from './components/auth/Login.vue'

Vue.use(VueRouter);

// function anonymousGuard() {
//     // if (localStorage.getItem('token') !== null) {
//     //     next('/');
//     // } else {
//     //     next();
//     // }
// }

// function authGuard(to, from, next) {
//     if (localStorage.getItem('token') === null) {
//         next('/sign-in');
//     } else {
//         next();
//     }
// }


const routes = [
    // { path: '/', component: Home },
    {
        path: '/login', component: Login
    },
    {
        path: '/register', component: Register
    },
    // {
    //     path: '*', component: NotFound
    // }
];

export default new VueRouter({
    mode: 'history',
    routes
});
import Vue from 'vue';
import VueRouter from 'vue-router';


import Register from './components/auth/Register.vue'
import Login from './components/auth/Login.vue'

Vue.use(VueRouter);



function anonymousGuard(to, from, next) {
    if (Vue.cookie.get('x-auth-token')!== null) {
        next('/');
    } else {
        next();
    }
}

// function authGuard(to, from, next) {
//     if (localStorage.getItem('x-auth-token') === null) {
//         next('/sign-in');
//     } else {
//         next();
//     }
// }


const routes = [
    // { path: '/', component: Home },
    {
        path: '/login', component: Login, beforeEnter: anonymousGuard
    },
    {
        path: '/register', component: Register, beforeEnter: anonymousGuard
    },
    // {
    //     path: '*', component: NotFound
    // }
];

export default new VueRouter({
    mode: 'history',
    routes
});
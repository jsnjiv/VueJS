import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import Home from './views/Home.vue'

Vue.use(Router)

let routers = new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import ('./views/About.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () =>
                import ('./views/Contact.vue'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ('./views/Login.vue')
        }
    ]
})

routers.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})

export default routers
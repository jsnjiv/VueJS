import Vue from 'vue'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
// import store from './store'
import Axios from 'axios'

Vue.prototype.$http = Axios;
Vue.config.productionTip = false;

const token = localStorage.getItem('token')
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'
import axios from 'axios'

Vue.config.productionTip = false
VueCookies.config('3d', '', '', true, 'Lax')
axios.defaults.baseURL = 'http://localhost:3000'



new Vue({
    router,
    store,
    VueCookies,
    render: (h) => h(App),
}).$mount('#app')

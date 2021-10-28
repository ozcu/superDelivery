import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false
VueCookies.config('3d', '', '', true, 'Lax')
axios.defaults.baseURL = 'http://localhost:3000'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
    router,
    store,
    VueCookies,
    render: (h) => h(App),
}).$mount('#app')

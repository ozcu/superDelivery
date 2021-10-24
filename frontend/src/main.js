import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false
VueCookies.config('3d', '', '', true,'Lax')

new Vue({
    router,
    store,
    VueCookies,
    render: (h) => h(App),
}).$mount('#app')

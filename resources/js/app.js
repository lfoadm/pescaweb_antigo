require('./bootstrap');


window.Vue = require('vue');
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

import User from './Helpers/User'

window.User = User

window.EventBus = new Vue();


//const files = require.context('./', true, /\.vue$/i)
//files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('AppHome', require('./components/AppHome.vue').default);
import router from './Router/router'

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    router
});

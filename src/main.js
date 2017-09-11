
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import Router from './config/router.js'

Vue.use(VueRouter);

new Vue({
    el: '#app',

    render: h => h(App),

    router: new VueRouter(Router)
});

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import Router from './config/router.js'

Vue.use(VueRouter);

new Vue({
    el: '#app',

    render: h => h(App),
    
    mounted() {
        var FontSize = window.innerWidth / (750/100);
        var html = document.querySelector('html');
        
        html.style.fontSize = FontSize + 'px';
    },

    router: new VueRouter(Router)
});
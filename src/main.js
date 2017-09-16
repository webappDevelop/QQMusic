
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import Router from './config/router.js'

Vue.use(VueRouter);

new Vue({
    el: '#app',
    render: h => h(App),
    mounted(){
        var FontSize = window.innerWidth / (750/100);
        var html = document.querySelector('html');
        html.style.fontSize = FontSize + 'px';
        
        
        var oriSetItem = localStorage.setItem;
        localStorage.setItem = function( key, value ){
            
            var event = new Event("setItemEvent");
            event.newValue = value;
            event.newKey = key;
            window.dispatchEvent(event);

            oriSetItem.apply(this, arguments);

        }

    },

    router: new VueRouter(Router)
});
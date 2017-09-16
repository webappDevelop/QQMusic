
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import Router from './config/router.js'

Vue.use(VueRouter);

new Vue({
    el: '#app',
    data: { 
        time: 1
    },
    render: h => h(App),
    mounted(){
        var FontSize = window.innerWidth / (750/100);
        var html = document.querySelector('html');
        
        html.style.fontSize = FontSize + 'px';

        
        var oldTime = new Date().getTime();

        setInterval(function(){
            var currentTime = new Date().getTime();
            this.time = Math.floor((currentTime - oldTime) / 1000);
            this.time = this.time / 5;
            if(Number.isInteger(this.time)){
                localStorage.setItem('time',this.time);
            }
        },1000)
        
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
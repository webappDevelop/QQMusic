
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import Router from './config/router.js'

Vue.use(VueRouter);

new Vue({
    el: '#app',
    data: { 
        time: 0
    },
    render: h => h(App),
    mounted(){
        var FontSize = window.innerWidth / (750/100);
        var html = document.querySelector('html');
        html.style.fontSize = FontSize + 'px';

        var index = 1;
        var oldTime = new Date().getTime();
        localStorage.setItem('time',this.time);

        setInterval(function(){
            var currentTime = new Date().getTime();
            this.time = Math.floor((currentTime - oldTime) / 1000);
            this.time = this.time / 60;
            if(Number.isInteger(this.time)){
                localStorage.setItem('time',this.time);
            }
        },1000)
    },

    router: new VueRouter(Router)
});
<template>
    <div class="main">
        <compo-header class="header" @changed="animation=arguments[0]"></compo-header>

    <transition :name="animation">
        <router-view></router-view>
    </transition>
    
        <compo-footer></compo-footer>
    </div>
</template>

<script>

    import Header from './components/header.vue'
    import Footer from './components/footer.vue'

    export default {
        data(){
            return{
                animation: 'slide'
            }
        },
        methods: {
            // argume: function(){
            //     console.log(arguments[0]);
            // }
        },
        components: {
            'compo-header': Header,
            'compo-footer': Footer
        }
    }
</script>

<style lang="scss">
    @import './assets/css/common.scss';
</style>


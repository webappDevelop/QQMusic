<template>
    <div class="main">
        <compo-header class="header"></compo-header>

    <transition name="slide">
        <router-view></router-view>
    </transition>
    
        <compo-footer></compo-footer>
    </div>
</template>

<script>

    import Header from './components/header.vue'
    import Footer from './components/footer.vue'

    export default {
        components: {
            'compo-header': Header,
            'compo-footer': Footer
        }
    }
</script>

<style lang="scss">
    @import './assets/css/common.scss';
</style>


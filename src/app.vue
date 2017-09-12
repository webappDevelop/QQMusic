<template>
    <div>
        <compo-header class="header"></compo-header>

        <router-view></router-view>
        
        <router-link to="/play">播放</router-link>
        <compo-footer class="footer"></compo-footer>
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


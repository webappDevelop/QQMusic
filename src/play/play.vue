
<template>
    <div>
        
        <!-- <compo-header></compo-header> -->

        <!-- <compo-content></compo-content> -->

        <compo-footer></compo-footer>

    </div>
</template>


<script>

    import Header from './header.vue'
    import Footer from './footer.vue'
    import Content from './content.vue'

    export default {
        components: {
            'compo-header': Header,
            'compo-footer': Footer,
            'compo-content': Content

        }
    }
</script>

<style lang="scss">
    .header,.footer{
        display: none;
    }
</style>

<style>
    body{
        font-family: "微软雅黑";
    }
    .router-link-exact-active{
        display: none;
    }
</style>




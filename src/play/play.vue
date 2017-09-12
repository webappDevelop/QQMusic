
<template>
    <div>
        
        <compo-header></compo-header>

        <compo-footer></compo-footer>

    </div>
</template>


<script>

    import Header from './header.vue'
    import Footer from './footer.vue'

    export default {
        components: {
            'compo-header': Header,
            'compo-footer': Footer
        }
    }
</script>




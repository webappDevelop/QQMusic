<template>
    <div class="login">
        <div class="abolish">
            <router-link to="/my">取消</router-link>
        </div>
        <div class="qq-login" @click="pop"></div>
        <div class="from">
            <input type="number">

        </div>
    </div>
</template>

<script>
export default {
    methods: {
        pop(){

        }
    },
    mounted(){

    }
}
</script>


<style lang="scss">
    .from{
        
    }

    .login{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background: url(../img/login-bg.png) no-repeat center center;
        background-size: cover;
    }
    .abolish{
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        font-size: 0.3rem;
        a{
            color: #fff;
        }
    }
    .qq-login{
        height: .8rem;
        width: 5rem;
        position: absolute;
        bottom: 2.1rem;
        left: 0;
        right: 0;
        margin: auto;
    }
</style>

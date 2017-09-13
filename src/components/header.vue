<template>
    <header>
        <nav class="nav">
            <div><i></i></div>
            <div class="list">
                <router-link to="my">我的</router-link>
                <router-link to="musicHall">音乐馆</router-link>
                <router-link to="find">我的</router-link>
            </div>
            <div></div>
        </nav>
        <div class="search">
            
        </div>
    </header>
</template>

<script>
    export default {
        data(){
            return{
                selected: 1
            }
        }
    }
</script>


<style lang="scss" scoped>
    
    header{
        background-color: #31c27c;
    }
    .nav{
        display: flex;
        height: 0.74rem;
        padding: 0 0.25rem;
        font-size: 0.34rem;
        color: #fff;

        div{
            flex: 1;
        }
        .list{
            flex: 5;
            line-height: 0.74rem;
            

            .selected{
                font-weight: bold;
            }
            a{
                display: inline-block;
                padding: 0 0.25rem;
                color:#fff;
                text-decoration: none;
            }
        }
    }
    
</style>



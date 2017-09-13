<template>
    <header>
        <nav class="nav">
            <div><i></i></div>
            <div class="list">
                <a href="#">我的</a>
                <a href="#">音乐馆</a>
                <a href="#">发现</a>
            </div>
            <div></div>
        </nav>
    </header>
</template>

<script>
    export default {}
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
            
            a{
                display: inline-block;
                padding: 0 0.25rem;
                color:#fff;
                text-decoration: none;
            }
        }
    }
    
</style>



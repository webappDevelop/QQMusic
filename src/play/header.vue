<template>
    <header>
        <div class="play-header">
            <a href="#"><img class="play-menu" src="./img/icon-menu.svg" alt=""></a>
            <h1 class="play-name">Just Dance</h1>
            <a href="#"><img class="play-more" src="./img/icon-more.svg" alt=""></a>
        </div>
    </header>
</template>

<script>
export default {
    
    
}
</script>

<style lang="scss">
    .header,.footer{
        display: none;
    }
    
</style>

<style lang="scss" scoped>
    
    .play-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 0.38rem;
        height: 0.71rem;

        .play-name{
            font-size: 0.38rem;
            font-weight: 100;
        }

        a{
            font-size: 0.28rem;
        }

        .play-menu,.play-more{
            width: 0.4rem;
        }

    }

</style>

<template>
    <div class="recent-play">
        <div class="recent-play-mod">
            <div class="menu-btn">
                <img src="../img/the-left-arrow.svg">
                最近播放
            </div>
        </div>

        <div class="recent-play-round">
            <div class="round-play ">
                <img src="../img/icon-play-now.svg" alt="">
                <p>随机播放全部</p>
            </div>
            <div class="round-play-manager">
                <img src="../img/icon-list-collect.svg" alt="">
                <p>管理</p>
            </div>
        </div>
        <div class="music-main">
            <div>
                <div class="music-info">
                    <p>安静的听完这首歌</p>
                    <p>覃桢 · 366次告白</p>
                </div>
                <div>

                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
p{
    margin: 0
}
    .music-main{
        padding-left: .3rem;

        .music-info{
            font-size: 0.3rem;
        }
    }



    .recent-play{
        font-size: 0;
        width: 100%;
        overflow: hidden;

        &-mod{
            width: 100%;
            height: 100%;
        }
        &-round{
            font-size: 0.3rem;
            height: 1.1rem;
            display: flex;
            border-bottom: 0.01rem solid #e6e6e6;
            div{
                height: 100%;
            }
            img{
                width: .46rem;
                margin: 0 .25rem;
                // margin-top: calc((1.1rem - 0.46rem) / 2 );
            }
        }
        .round-play{
            width: 5.97rem;
            display: flex;
        }
        .round-play-manager{
            flex: 1;
            display: flex;
            img{
                margin-left: 0;
            }
            a{
                display: inline-block;
                height: 100%;
            }
        }
    }

    .menu-btn{
        position: relative;
        width: 100%;
        height: 0.75rem;
        background: #31c27c;
        font-size: 0.28rem;
        color: #fff;
        text-align: center;
        line-height: 0.75rem;

        img{
            position: absolute;
            left: 0.3rem;
            top: 0.21rem;
            width: 0.3rem;
        }
    }

    .header,
    .footer{
        display: none;
    }
    
</style>

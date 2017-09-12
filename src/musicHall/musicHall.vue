<template>
    <div class="MusicHall">
        <div class="classifyMenu">
            <div class="singer">
                <img src="./img/singer.svg" />
                <i>歌手</i>
            </div>
            <div class="ranking">
                <img src="./img/ranking-list.svg" />
                <i>排行</i>
            </div>
            <div class="broadcasting">
                <img src="./img/broadcasting-station.svg" />
                <i>电台</i>
            </div>
            <div class="classify">
                <img src="./img/classify.svg" />
                <i>分类歌单</i>
            </div>
            <div class="mv">
                <img src="./img/mv.svg" />
                <i>视频MV</i>
            </div>
            <div class="special">
                <img src="./img/special.svg" />
                <i>数字专辑</i>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .MusicHall{
        width: 100%;
        margin: 0;
    }

    .classifyMenu{
        width: 100%;
        height: 1.6rem;
        padding: 0.4rem 0;

        div{
            width: calc(33.33333% - 0.4rem);
            height: calc(1.6rem / 2);
            line-height: calc(1.6rem / 2);
            font-size: 0.28rem;
            float: left;
            color: #222222;
            padding-left: 0.4rem;

            img{
                float: left;
                margin-top: 0.1rem;
                margin-right: 0.17rem;
            }

            i{
                
                font-style: normal;
            }
        }

        .singer img{
            width: 0.54rem;
            height: 0.59rem;
        }

        .ranking img{
            width: 0.6rem;
            height: 0.6rem;
        }

        .broadcasting img{
            width: 0.57rem;
            height: 0.57rem;
        }

        .classify img{
            width: 0.6rem;
            height: 0.6rem;
        }

        .mv img{
            width: 0.62rem;
            height: 0.6rem;
        }

        .special img{
            width: 0.8rem;
            height: 0.8rem;
            margin-left: -0.1rem;
            margin-top: -0.01rem;
            margin-right: 0.07rem;
        }
    }
</style>
<template>
    <transition name="slide">
        <div class="recent-play">
            <div class="recent-play-mod">
                <div class="menu-btn">

                    <router-link to="/my"><img src="../img/the-left-arrow.svg"></router-link>
                    
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
            <div class="recents">
                <div class="recent-play-main">
                    <div class="music-main">
                        <div class="music-info">
                            <p>安静的听完这首歌</p>
                            <p><img src="../img/icon-counter.svg" alt="">覃桢 · 366次告白</p>
                        </div>
                        <div class="music-listen-time">
                            <img src="../img/icon-headset-gray.svg" alt="">
                            <p><span> 6</span></p>
                            <p><img src="../img/icon-more.svg" alt=""></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>


<style lang="scss" scoped>

    .recents{
        height: calc(100% - 1.85rem);
        overflow: scroll;
    }
    p{
        margin: 0
    }
    .recent-play-main{
        padding-left: .3rem;
    }
    .music-main{
        display: flex;
        border-bottom: 0.01rem solid #e6e6e6;
        .music-info{
            width: 5.48rem;
            height: 0.7rem;
            padding: 0.2rem 0;
            font-size: 0.3rem;
            p{
                width: calc(100% - 0.4rem)
            }
            img{
                float: left;
                margin-right: .1rem;
            }
            >:first-child{
                font-size: 0.29rem;
                line-height: 0.29rem;
            }
            
            >:last-child{
                font-size: 0.21rem;
                color: #666;
                margin-top: 0.08rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        .music-listen-time{
            display: flex;
            font-size: 0.18rem;
            line-height: 1.1rem;
            color: #666;
            img{
                width: 0.24rem;
                margin-right: .2rem;
            }
            span{
                margin-right: 0.35rem;
            }
        }
    }



    .recent-play{
        font-size: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: 99;
        background: #fff;
        &-mod{
            width: 100%;
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
            }
            p{
                line-height: 1.1rem;
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
    
</style>

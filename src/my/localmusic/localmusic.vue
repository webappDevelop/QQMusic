<template>
    <div class="recent-play">
        <div class="recent-play-mod">
            <div class="menu-btn">

                <router-link to="/my"><img src="../img/the-left-arrow.svg"></router-link>
                
                本地歌曲
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
           
            <div class="recent-play-main" @click="play(index)" :key="obj.id" v-for="(obj,index) in songslist">
                <div class="music-main">
                    <div class="music-info">
                        <p v-text="obj.title"></p>
                        <p><img src="../img/icon-counter.svg" alt=""><span v-text="obj.singer[0].name">覃桢</span>&nbsp;<span v-text="obj.album.name"> · 366次告白</span></p>
                    </div>
                    <div class="music-listen-time">
                        <p><img src="../img/icon-more.svg" alt=""></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ajax from '../../assets/js/ajax.js'

export default {
    data(){
        return {
            songslist: [],

       }
    },
    methods: {
        play(index){

           localStorage.setItem('currentPlay',JSON.stringify(this.songslist[index]));

        }
    },
    created(){
         this.songslist = JSON.parse(localStorage.getItem('localmusic'));
    }
}
</script>



<style lang="scss" scoped>

    .recents{
        height: calc(100% - 2.95rem);
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
                width: calc(100% - 0.4rem);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            img{
                float: left;
                margin-right: .1rem;
            }
            >:first-child{
                font-size: 0.29rem;
                line-height: 0.32rem;
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
            flex: 1;
            font-size: 0.18rem;
            line-height: 1.1rem;
            color: #666;
            position: relative;
            img{
                width: 0.24rem;
                position: absolute;
                top: 0;
                bottom: 0;
                right: .4rem;
                margin: auto;
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
        background: #fff;
        overflow: hidden;

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

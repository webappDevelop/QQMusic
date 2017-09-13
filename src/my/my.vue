<template>
    <div class="container">
        <section class="login-area">
            <div id="noLogin" class="display">
                <div class="none-login">
                    <h1>登录听歌，畅想高品质和无损品质曲库</h1>
                </div>
                <div>
                    <button class="login-btn">立即登录</button>
                </div>
            </div>
            <div id="login-success">
                <div class="login-title">
                    <a class="listen-time"> <img src="./img/icon-listen.svg">12分钟</a>
                    <a class="avatar"><img src="./img/avatar.jpg"></a>
                    <a class="dredge-green"><img src="./img/icon-green-ti.svg"><img src="./img/icon-zuan.svg" class="center">  开通</a>
                </div>
                <div class="user-area">
                    <div class="line"></div>
                    <div class="user-name">云</div>
                </div>
                <div class="icons"><img src="./img/icon-forgive-vip.png" alt=""></div>
            </div>

            
        </section>
        <section>
            <div class="user-option">
                <div>
                    <img src="./img/icon-song-list.svg">
                    <p>本地歌曲</p>
                    <p><span>477</span></p>
                </div>
                <div>
                    <img src="./img/icon-download.svg">
                    <p>下载歌曲</p>
                    <p><span>477</span></p>
                </div> 
                <div>
                    <router-link to="/History">
                        <img src="./img/icon-play-lately.svg">
                        <p> 最近播放</p>
                        <p><span>477</span></p>
                    </router-link> 
                </div>
                <div>
                    <img src="./img/icon-mylike.svg">
                    <p>我喜欢</p>
                    <p><span>477</span></p>
                </div>
                <div>
                    <img src="./img/icon-play-mv.svg">
                    <p>下载MV</p>
                </div> 
                <div>
                    <img src="./img/icon-buy-music.png">
                    <p>已购音乐</p>
                </div>
            </div>
            
        </section>

        <section>
            <div class="radio-station">
                <div class="radio-station-avatar">
                    <img src="./img/icon-play-gray.svg" alt="">
                </div>
                <div class="radio-station-meg">
                    <p>个性电台</p>
                    <p><span>听专属于的你音乐</span></p>
                </div>
            </div>
            <div class="radio-station none-margin">
                <div class="radio-station-avatar">
                    <img src="./img/icon-run.svg" alt="">
                </div>
                <div class="radio-station-meg">
                    <p>跑步店淘</p>
                    <p><span>qq音乐X腾讯公益111111111111111111111111111</span></p>
                </div>
            </div>
        </section>

        <section class="music-list">
            <div class="list-header">
                <div class="title-avatar"></div>
                <div class="list">
                    <span @click="isShow=1"  :class="isShow && 'active'">自建歌单 <i>{{count}}</i></span> <span class="split"></span> <span @click="isShow=0" :class="!isShow && 'active'">收藏歌单</span>d
                </div>
                <div class="list-option">
                    <a><img src="./img/icon-plus.svg" alt=""></a>
                    <a><img src="./img/icon-list-collect.svg" alt=""></a>
                </div>
            </div>
            <div class="music-list-area" v-if="isShow">
                <div class="login-success display">
                    <div class="music-list">
                        <div class="music-list-avatar">
                        </div>
                        <div class="music-list-meg">
                            <p>清清</p>
                            <p><span><img src="./img/icon-counter.svg" alt="">听专属于的你音乐</span></p>
                        </div>
                        <div class="more">
                            <a><img src="./img/icon-next.svg" alt=""></a>
                        </div>
                    </div>
                    <div class="music-list">
                        <div class="music-list-avatar">
                        </div>
                        <div class="music-list-meg">
                            <p>清清</p>
                            <p><span><img src="./img/icon-counter.svg" alt="">听专属于的你音乐</span></p>
                        </div>
                        <div class="more">
                            <a><img src="./img/icon-next.svg" alt=""></a>
                        </div>
                    </div>
                </div>
                <div class="log-out ">
                    <div class="music-list">
                        <div class="music-list-avatar">
                        </div>
                        <div class="music-list-meg">
                            <p>新建歌单</p>
                        </div>
                        <div class="more">
                            <a><img src="./img/icon-next.svg" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="collect-music"  v-if="!isShow">
                <div class="has-music display">
                     <div class="music-list">
                        <div class="music-list-avatar">
                        </div>
                        <div class="music-list-meg">
                            <p>清清</p>
                            <p><span><img src="./img/icon-counter.svg" alt="">听专属于的你音乐</span></p>
                        </div>
                        <div class="more">
                            <a><img src="./img/icon-next.svg" alt=""></a>
                        </div>
                    </div>
                </div>
                <div class="no-has-music">
                    没有收藏歌单
                </div>
            </div>
        </section>
    </div>
</template>


<script>
    export default {
        data(){
            return{
                count: '',
                isShow: 1,
                isLogin: 1
            }
        },
        methods:{
        }
    }
</script>


<style lang="scss" scoped>
    .collect-music{
        font-size: .3rem;
        height: 1.1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: .01rem solid #e6e6e6;
    }
    .music-list{
        font-size: 0;
        color: #6c6c6c;
        span{
            font-size: 0.28rem;
        }
        i{
            font-size: 0.18rem;
            font-style: normal;
        }
        .list-header{
            height: 1.1rem;
            display: flex;
            overflow: hidden;
            img{
                width: .38rem;
            }
            .title-avatar{
                width: 1.3rem;
            }
            .list{
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        
        .list-option{
            width: 1.5rem;
            display: flex;
            align-items: center;

            >:first-child{
                margin-right: 0.4rem;
            }
        }
        .split{
            height: .32rem;

            border-right: 0.01rem solid #000;
            margin: 0 0.2rem;
        }
        .active{
            color: #000 !important;
        }
        .music-list{
            border-top: .01rem solid #f4f4f4;
            font-size: 0;
            display: flex;

            span{
                font-size: .23rem;
                display: block;
                width: 4.68rem;
                color: #c7c7c7;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            img{
                float: left;
                margin-right: .22rem;
            }
            &-avatar{
                width: 1.3rem;
                height: 1.3rem;
                background: url(./img/2.jpg) no-repeat center center;
                background-size: cover;
                align-items: center;
                justify-content: center;
            }
            &-meg{
                >:first-child{
                    margin-bottom: 0.18rem;
                    text-indent: 0.2rem;
                    line-height: 0.27rem;
                }
                p{ 
                    font-size: .27rem;
                    color: #000;
                }
                img{
                    margin-left: 0.2rem;
                }
                flex: 1;
                align-items: center;
                padding: .28rem 0;
            }
            
            
        }
        .more{
            width: 1.5rem;
            font-size: 0.24rem;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                display: inline-block;
                margin: 0;
            }
        }
    }
    .log-out{
        .music-list-avatar{
            background: none;
            background-color: #f7f7f7;
            position: relative;
            &:before,
            &:after{
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                margin: auto;
                width: 0.02rem;
                height: .38rem;
                background: #31C27C;
            }
            &:after{
                transform: rotate(90deg)
            }
        }
        .music-list{

            &-meg{
                display:flex;
                >:first-child{
                    margin: 0;
                }

            }
        }
    } 
    .display{
        display: none !important;
    }
    .radio-station{
        margin-top: .32rem;
        border-top: .1rem solid #f4f4f4;
        font-size: 0;
        display: flex;

        img{ 
            width: .5rem;
        } 
        p{ 
            font-size: .3rem;
        }
        span{
            font-size: .23rem;
            display: block;
            width: 4.68rem;
            color: #c7c7c7;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        &-avatar{
            width: 1.3rem;
            height: 1.3rem;
            background: url(./img/1.jpg) no-repeat center center ;
            background-size: cover;
            margin-right: 0.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &-meg{
            flex: 1;
            padding: .3rem 0;
            border-bottom: 0.01rem solid #e6e6e6;
        }
    }
    .none-margin{
        margin-top: 0 ;
        border-top: .02rem solid transparent ;
        border-bottom: .1rem solid #f4f4f4;

        .radio-station-meg{
            border-bottom: none;
        }
    }
    p{
        margin: 0
    }
    .login-area{
        height: 2.27rem;
        text-align: center;
            font-size: 0;
        div{
            font-size: 0;
        }
    }
    #noLogin{
        .none-login{
            padding: 0.66rem 0 0.52rem;
            h1{
                font-size: 0.30rem;
                font-weight: normal;
                // margin: 0.66rem auto 0.52rem;
            }
        }
        .login-btn{
            -webkit-appearance: none;
            display: inline-block;
            outline: none;
            border: none;
            background: none;
            color: #31c27c;
            font-size: 0.34rem;
            border: 1px solid #43c887;
            padding: 0.16rem 0.58rem;
            letter-spacing: 2px;
            border-radius: 3px;
        }
    }
    #login-success{
        font-size: 0;
        padding-top: 0.23rem;
        a{
            font-size: 0.22rem;
            line-height: 0.32rem;
        }
        img{
            height: .36rem;
        }
        .login-title{
            display: flex;
            align-items: center;
            justify-content: center;
            .center{
                position: absolute;
                top: 0.1rem;
                left: .24rem;
                width: 0.22rem;
            }
            img{
                float: left;
                margin-right: 0.05rem;
            }
        }    
        .avatar{
            height: 1.1rem;
            width: 1.1rem;
            margin: 0 0.4rem;
            border-radius: 50%;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
                margin: 0;
            }
        }
        .listen-time,
        .dredge-green{
            box-sizing: content-box;
            padding: 0.13rem .16rem;
            border: 1px solid #bdbdbd;
            border-radius: 0.44rem;
        }
        .dredge-green{
            position: relative;
        }
        .user-area{
            display: flex;
            align-items: center;
            justify-content: center;
            d{
                width: 2.2rem;
                border-top: 0.01rem solid #000;
                position: absolute;
                z-index: -1;
            }
            .user-name{
                width: 1.48rem;
                height: .64rem;
                line-height: .64rem;
                background: #fff;
                font-size: 0.3rem;
            }
        }
       .icons{
           img{
               display: block;
               margin: 0 auto;
           }
       }
    }
    .user-option{
        // display: flex;
        overflow: hidden;
        font-size: 0;
        p{
            margin: 0;
            text-align: center;
        }
        span{
            font-size: .17rem;
            color: #666;
        }
        a{
            color: #000;
            text-decoration: none;
        }   
        img{
            width: .68rem;
            height: .68rem;
            display: block;
            margin: 0 auto;
        }
        div{
            width: calc(100% / 3);
            float: left;
            height: 1.50rem;
            justify-content: center;
            font-size: .32rem;
            margin-top: .4rem;
        }
        
    }

    
</style>


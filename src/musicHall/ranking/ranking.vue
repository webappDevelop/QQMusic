<template>
    <transition name="slide">
        <div class="ranking">
            <div class="ranking-mod">
                <div class="menu-btn">
                    <img src="./img/the-left-arrow.svg">
                    排行
                </div>
                
                <div class="ranking-body">
                    <h3 class="ranking-body-title">QQ音乐巅峰榜</h3>
                    <div class="ranking-body-select">
                        <div class="select-img" style="background: url('http://p.qpic.cn/music_cover/1Fr9IFMhWDPeUzWKVEjn3QTL2eX2QziaJmaL0ZAmsvtW71ic9IDUoYzg/300?n=1') center center; background-size: 100%;">
                            <div class="earphone">441.1万</div>
                            <img src="../img/play.svg">
                        </div>

                        <div class="select-music">
                            <ul>
                                <li><i>1</i> 追梦赤子心<span> - 鹿晗</span></li>
                                <li><i>2</i> 以父之名(Live)<span> - 吴亦凡/PG One</span></li>
                                <li><i>3</i> 不用去猜(Live)<span> - Jony J</span></li>
                            </ul>

                            <img src="./img/the-right-arrow.svg">
                        </div>
                    </div>

                    <h3 class="ranking-body-title">全球榜</h3>
                    <div class="list-of-the-world">
                        <div class="world-select">
                            <div class="select-img" style="background: url('http://p.qpic.cn/music_cover/1Fr9IFMhWDPeUzWKVEjn3QTL2eX2QziaJmaL0ZAmsvtW71ic9IDUoYzg/300?n=1') center center; background-size: 100%;">
                                <div class="earphone">442万</div>
                                <img src="../img/play.svg">
                            </div>
                            <h3>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import Ajax from '../../assets/js/ajax.js'

    export default {
        data(){
            return{
                sliders: []
            }
        },

        async created(){
            let data = await Ajax.jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=792116527&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1505284771940');
            this.sliders = data.data.songList;
        }
    }
</script>

<style lang="scss">
    .header,
    .footer{
        display: none;
    }

    ul,
    li{
        margin: 0;
        padding: 0;
        list-style: none;
    }

    i{
        font-style: normal;
    }

    .ranking{
        width: 100%;
        height: 12.25rem;
        background: #f4f4f4;
        overflow: hidden;

        &-mod{
            width: 100%;
            height: 100%;
        }
    }

    .menu-btn{
        position: relative;
        width: 100%;
        height: 0.8rem;
        background: #31c27c;
        font-size: 0.33rem;
        color: #fff;
        text-align: center;
        line-height: 0.8rem;

        img{
            position: absolute;
            left: 0.3rem;
            top: 0.21rem;
            height: 0.4rem;
        }
    }

    .ranking-body{
        width: 100%;
        height: calc(100% - 0.75rem);
        overflow-x: hidden;
        overflow-y: scroll;

        &-title{
            width: 100%;
            padding: 0.37rem 0;
            color: #040404;
            text-align: center;
            letter-spacing: 0.1rem;
            font-size: 0.34rem;
            font-weight: bold;
        }

        &-select{
            width: calc( 100% - 0.34rem );
            height: 2.42rem;
            background: #fff;
            margin: 0 auto;
            margin-bottom: 0.18rem;
        }
    }

    .select-img{
        float: left;
        position: relative;
        width: 2.42rem;
        height: 100%;

        .earphone{
            position: absolute;
            left: 0.15rem;
            bottom: -0.1rem;
            padding: 0.22rem 0;
            padding-left: 0.25rem;
            font-size: 0.18rem;
            color: #fefefe;
            background: url('../img/earphone.svg') no-repeat center left;
            background-size: 0.2rem 0.18rem;
            font-weight: normal;
        }

        img{
            position: absolute;
            bottom: 0.05rem;
            right: 0.07rem;
            width: 0.44rem;
            height: 0.44rem;
        }
    }

    .select-music{
        float: left;
        position: relative;
        width: calc( 100% - 3.17rem);
        height: calc( 100% - 0.96rem);
        padding: 0.48rem 0;
        padding-left: 0.15rem;
        padding-right: 0.6rem;

        img{
            position: absolute;
            top: 1.2rem;
            right: 0.2rem;
            width: 0.23rem;
            height: 0.33rem;
        }

        ul{
            height: 100%;
            overflow: hidden;
        }

        li{
            width: 100%;
            font-size: 0.26rem;
            letter-spacing: 0.03rem;
            color: #010101;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 0.2rem;

            span{
                color: #6d6d6d;
            }
        }
    }

    .list-of-the-world{
        width: 100%;
        height: auto;

        .world-select{
            float: left;
            width: 33%;
            height: auto;
            margin-right: 0.33333%;

            .select-img{
                position: relative;
                width: 2.47rem;
                height: 2.47rem;

                img{
                    position: absolute;
                    bottom: 0.14rem;
                    right: 0.07rem;
                    width: 0.46rem;
                    height: 0.46rem;
                }
            }

            .earphone{
                position: absolute;
                left: 0.16rem;
                bottom: 0;
                padding: 0.22rem 0;
                padding-left: 0.25rem;
                font-size: 0.21rem;
                color: #fefefe;
                background: url('../img/earphone.svg') no-repeat center left;
                background-size: 0.2rem;
            }

            &>h3{
                font-size: 0.22rem;
                padding: 0rem 0.13rem;
                margin: 0.18rem 0;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                font-weight: normal;
            }
        }
    }

    .slide-enter-active,
    .slide-leave-active{
        transition: all 0.3s;
    }

    .slide-enter,
    .slide-leave-to{
        transform: translate3d(100%, 0, 0);
    }
</style>

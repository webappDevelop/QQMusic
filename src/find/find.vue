
<template>
    <div class="outContainer" @touchstart="touchstart($event)" @touchmove="touchmove($event)" @touchend="touchend($event)">
        <a href="#">
            <div class="top-img" ref="topImg">
                <div class="topImg-content">
                    <div class="find-mgz">
                        <p>发现·杂志</p>
                    </div>
                    <div class="topImg-title">
                        <div>
                            <p>不懂这些</p>
                            <p>也配穿GUCCI？</p>
                            <p>音乐圈怪物指南</p>
                        </div>
                    </div>
                    <div class="click-browse">
                        <span>////////////</span>
                        <span>点击浏览</span>
                    </div>
                    <div class="sort">
                        <p>歌词   已是两条路上的人 -赵雷</p>
                        <p>日历   《顽童乐队 Monkee》</p>
                        <p>歌单   感觉过了一世纪，原来今天才周二</p>
                    </div>
                </div>
            </div>
        </a>

        <template v-for="(fdItem,index) in findList">
            <div class="bottom-box" :key="index">
                <a href="#">
                    <div v-for="(item,index) in fdItem.list" :key="index" class="container">
                        <div class="detrusion-news">
                            <div class="detrusion-content">
                                <h2 class="detrusion-title" v-text="item.title"></h2>
                                <div class="singer">
                                    <div>
                                        <img src="./img/musicLogo.svg" alt="">
                                    </div>
                                    <span v-text="item.singer"></span>
                                </div>

                                <div class="details">
                                    <span class="music-type" v-text="item.team"></span>
                                    <span class="reading-quantity" v-text="item.reading"></span>
                                </div>
                            </div>
                            <div class="detrusion-imgBox">
                                <img :src="item.picUrl" alt="">
                            </div>
                        </div>
                    </div>
                </a>
                <compo-carousel v-if="fdItem.sliders" :sliders="fdItem.sliders"></compo-carousel>
            </div>
        </template>
    </div> 
</template>

<style lang="scss" scoped>
    body{
        margin: 0;
    }

    p{
        margin: 0;
    }

    .outContainer{
        height: calc(100% - 2.68rem);
        overflow: auto;
        a{
            text-decoration: none !important;
        }
    }

    .top-img{
        width: 7.5rem;
        background: url('./img/topImg.png');
        background-size: cover;
    }

    .bottom-box{
        background: #fff;
    }

    .topImg-content{
        height: 100%;
        padding-top: 2.9rem;
        margin-left: .46rem;
        box-sizing: border-box;
    }

    .find-mgz,
    .topImg-title,
    .click-browse,
    .sort{
        color: #fff;
    }

    .find-mgz{
        width: 1.24rem;
        height: .32rem;
        border-left: 2px solid #fff;
        border-right: 2px solid #fff;
        border-top: 2px solid #fff;
        border-bottom: 2px solid #fff;
        margin-bottom: .15rem;
        font-size: .24rem;
        text-align: center;
    }

    .topImg-title{
        font-size: .54rem;
    }

    .click-browse{
        margin-top: .12rem;
        font-size: .26rem;
    }

    .sort{
        font-size: .22rem;
        p{
            margin-bottom: .36rem;
        }

        :first-child{
            margin-top: .33rem;
        }

        :last-child{
            margin-bottom: .90rem;
        }
    }

    .container{
        display: flex;
        margin-top: 0.16rem;
    }

    .detrusion-content{
        width: 4.4rem;
        font-size: 16px;
    }

    .detrusion-news{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: 1;
        margin-left: 0.46rem;
    }
    .detrusion-title{
        font-size: 0.36rem;
        font-weight: normal;
        margin-bottom: 0.16rem;
        color: #000;
    }

    .singer{
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
        font-size: 0.24rem;
        div{
            width: 0.24rem;
            height: 0.24rem;
            float: left;
            margin-top: 0.02rem;
            margin-right: 0.18rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        span{
            color: #000 !important;
        }
    }

    .details{
        height: 0.62rem;
        :first-child{
            margin-right: 0.27rem;
        }
    }

    .music-type,
    .reading-quantity{
        font-size: 0.24rem;
    }

    .music-type{
        color: #6e6e6e;
    }

    .reading-quantity{
        color: #757575;
    }

    .detrusion-imgBox{
        width: 2.20rem;
        height: 2.20rem;
        float: right;
        img{
            width: 100%;
            height: 100%;
        }
    }

    .carousel{
        overflow: hidden;
        margin-top: .32rem;
        margin-left: 0.46rem;
        height: 1.8rem;

        .carousel-box{
            width: 12rem;
            height: 1.8rem;
            &：after{
                content: '';
                display: block;
                clear: both;
            }
        }
    }

    .img{
        float: left;
        width: 3.08rem;
        height: 100%;
        margin-right: 0.10rem;
        img{
            width: 100%;
            height: 100%;
        }
    }


</style>

<script>

    import Ajax from '../assets/js/ajax.js'
    import Carousel from './components/carousel.vue'
    import dataUrl from 'assets/falseData/falseData.json'

    export default {

        data(){
            return {
                touchClickX: 0,
                moveX: 0,
                currentX: 0,
                topImgHeight: 0,
                findList: []
            }
        },

        created(){

            Ajax.getJson(dataUrl).then(res => {
                this.findList = res.data.findList;
            });
        },

        mounted(){
            this.topImgHeight = this.$refs.topImg.offsetHeight;
        },

        methods: {
            touchstart(e){
                this.touchClickX = e.touches[0].clientY;
            },
            touchmove(e){
                let touchMoveX = e.changedTouches[0].clientY;

                this.topImgHeight += this.currentHeight + (touchMoveX - this.touchClickX)/100;
            },
            touchend(e){
                this.currentX = this.moveX;
            }
        },

        computed:{
            moveStyle(){
                this.moveX = this.moveX > 0 ? 0 : this.moveX;
                // return `transform: translate3d: (${this.moveX})rem,0,0)`
                // return `height: ${this.moveX}rem;`
            }
        },

        components: {
            'compo-carousel': Carousel
        }
}

window.onscroll = (e) => {
    e.preventDefault();
    e.returnValue = false;
}
</script>
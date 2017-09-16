
<template>
    <div class="outContainer" @touchstart="touchstart($event)" @touchmove="touchmove($event)" @touchend="touchend($event)">
        <div class="top-img">
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

        <div class="bottom-box" :style="moveStyle">
            <div v-for="(item,index) in dutrusionList" :key="index" class="container">
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

            <!-- 轮播 -->
            <compo-carousel :sliders="sliders"></compo-carousel>
        </div>
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
    }

    .top-img{
        width: 7.5rem;
        background: url('./img/topImg.png');
        background-size: cover;
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

    import Carousel from './components/carousel.vue'

export default {
    data(){
        return {

            touchClickX: 0,
            moveX: 0,
            currentX: 0,
            transition: 0,

            dutrusionList:[
                {title: '李志,让我们的生活在一起！',singer: '年年-宋冬野', team: 'SVP乐队', reading: '阅读量 1.7万', picUrl: '/src/find/img/detrusion6.png'},
                {title: '乐坛P话|拨开版权迷雾,遇见音乐的美好!',singer: '你不是真正的快乐-五月天', team: 'SVP乐队', reading: '最新', picUrl: '/src/find/img/detrusion5.png'},
                {title: '另类摇滚史上最后一张伟大的专辑',singer: 'Heart-Shaped Box-Nrvana', team: '摇滚天空', reading: '最新', picUrl: '/src/find/img/detrusion4.png'},
                {title: '暗恋,是一场盛大的独角戏',singer: '普通人-好妹妹乐队', team: 'SVP乐队', reading: '阅读量 1.7万', picUrl: '/src/find/img/detrusion3.png'},
                {title: '【零点生活】 温柔与慈悲-新生恋爱日记',singer: '零点乐话-开场白-DJ伍洲彤', team: 'DJ伍洲彤', reading: '最新', picUrl: '/src/find/img/detrusion.png'},
                {title: '时光如梭! GD带着BIGBANG已越走越远',singer: 'Black-G-DRAGON', team: 'BlackLable', reading: '999+人点赞', picUrl: '/src/find/img/detrusion2.png'}
            ],
            sliders: [
                {id: 0, linkUrl:'#', picUrl: '/src/find/img/carousel.png'},
                {id: 1, linkUrl:'#', picUrl: '/src/find/img/carousel.png'},
                {id: 2, linkUrl:'#', picUrl: '/src/find/img/carousel.png'},
                {id: 3, linkUrl:'#', picUrl: '/src/find/img/carousel.png'}
            ]
        }
    },

    methods: {
        touchstart(e){
            this.touchClickX = e.touches[0].clientY;
        },
        touchmove(e){
            let touchMoveX = e.changedTouches[0].clientY;

            this.moveX = this.currentX + (touchMoveX - this.touchClickX)/100;
        },
        touchend(e){
            let totality = this.$el.offsetHeight,
                topHight = this.$el.children[0].offsetHeight,
                offsetY = (totality - topHight) / 100;

            this.transition = 100;
            if( this.moveX>0 ){
                this.moveX = 0;
            }
            else if(this.moveX<offsetY){
                this.moveX = offsetY;
            }

            this.currentX = this.moveX;

            setTimeout(()=>{
               this.transition = 0;
            },this.transition);
        }
    },

    computed:{
        moveStyle(){
            return `transition: all ${this.transition}ms; transform translateY(${this.moveX}rem,0,0)`
        }
    },

    components: {
        'compo-carousel': Carousel
    }
}
</script>
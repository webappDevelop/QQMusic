<template>
        <div class="ranking">
            <div class="ranking-mod">
                <div class="menu-btn">
                    <router-link to="musicHall">
                        <img src="./img/the-left-arrow.svg">
                    </router-link>
                    排行
                </div>
                
                <div class="ranking-body">
                    <h3 class="ranking-body-title">QQ音乐巅峰榜</h3>
                    <router-link tag="div" class="ranking-body-select" v-for="item in sliders.List" :key="item.id" :to="{name: 'listofsongs', params:{id: item.topID}}">
                        <div class="select-img" :style="'background: url('+item.pic_v12+') center center; background-size: 100%;'">
                            <div class="earphone">{{ item.listennum }}万</div>
                            <img src="../img/play.svg">
                        </div>

                        <div class="select-music">
                            <ul>
                                <li><i>1</i> {{ item.songlist[0].songname }}<span> - {{ item.songlist[0].singername }}</span></li>
                                <li><i>2</i> {{ item.songlist[1].songname }}<span> - {{ item.songlist[1].singername }}</span></li>
                                <li><i>3</i> {{ item.songlist[2].songname }}<span> - {{ item.songlist[2].singername }}</span></li>
                            </ul>

                            <img src="./img/the-right-arrow.svg">
                        </div>
                    </router-link>

                    <h3 class="ranking-body-title">全球榜</h3>
                    <div class="list-of-the-world" v-for="item in sliderss.List" :key="item.id">
                        <div class="world-select">
                            <div class="select-img" :style="'background: url('+item.pic_v12+') center center; background-size: 100%;'">
                                <div class="earphone">{{ item.listennum }}万</div>
                                <img src="../img/play.svg">
                            </div>
                            <h3>{{ item.ListName }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import Ajax from '../../assets/js/ajax.js'

    export default {
        data(){
            return{
                sliders: [],
                sliderss: []
            }
        },

        async created(){
            let data;
            
            await Ajax.jsonp('//c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_opt.fcg',{
                page:'index',
                format:'html',
                tpl:'macv4',
                v8debug:1
            },{param: 'jsonCallback',name: 'jsonCallback'}).then((res) => {
                data = res;
            });

            for( var i=0; i<data[0].List.length; i++ ){
                data[0].List[i].listennum = Math.ceil(data[0].List[i].listennum / 10000);
            }

            for( var n=0; n<data[1].List.length; n++ ){
                data[1].List[n].listennum = Math.ceil(data[1].List[n].listennum / 10000);
            }

            this.sliders = data[0];
            this.sliderss = data[1];
        }
    }
</script>

<style lang="scss">

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
        position: absolute;
        top: 0;
        left: 0;
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
            top: 1rem;
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
                -webkit-line-clamp: 1;
                overflow: hidden;
                font-weight: normal;
            }
        }
    }
</style>

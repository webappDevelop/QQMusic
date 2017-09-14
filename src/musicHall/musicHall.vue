<template>
    <div class="box">
        <div class="MusicHall">
            <div class="classifyMenu">
                <div class="singer">
                    <img src="./img/singer.svg" />
                    <i>歌手</i>
                </div>
                <router-link tag="div" class="ranking-li" to="ranking">
                    <img src="./img/ranking-list.svg" />
                    <i>排行</i>
                </router-link>
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

            <div class="ListTheMenu">
                <div class="MusicLibraryTitle">
                    <div class="title">歌单推荐</div>
                    <img src="./img/pull-down-menu.svg">
                </div>

                <div class="PlaylistRecommended-body">
                    <div class="individual" v-for="item in sliders">
                        <div class="individual-img" :style="'background: url('+item.picUrl+') center center; background-size: 100%;'">
                            <div class="earphone">{{ item.accessnum }}万</div>
                            <img src="./img/play.svg">
                        </div>
                        <h3>{{ item.songListDesc }}</h3>
                    </div>
                </div>
            </div>

            <div class="ListTheMenu">
                <div class="MusicLibraryTitle">
                    <div class="title">新歌速递</div>
                    <img src="./img/pull-down-menu.svg">
                </div>

                <div class="newSong-body">
                    <div class="individual">
                        <div class="individual-img" style="background: url('http://p.qpic.cn/music_cover/1Fr9IFMhWDPeUzWKVEjn3QTL2eX2QziaJmaL0ZAmsvtW71ic9IDUoYzg/300?n=1') center center; background-size: 100%;">
                            <h3>新歌</h3>
                        </div>
                        <h3>催泪大杀器！盘点演唱会经典万人大合唱呵呵哈哈哈</h3>
                    </div>

                    <div class="individual">
                        <div class="individual-img" style="background: url('http://p.qpic.cn/music_cover/1Fr9IFMhWDPeUzWKVEjn3QTL2eX2QziaJmaL0ZAmsvtW71ic9IDUoYzg/300?n=1') center center; background-size: 100%;">
                            <h3>新碟</h3>
                        </div>
                        <h3>催泪大杀器！盘点演唱会经典万人大合唱呵呵哈哈哈</h3>
                    </div>

                    <div class="individual">
                        <div class="individual-img" style="background: url('http://p.qpic.cn/music_cover/1Fr9IFMhWDPeUzWKVEjn3QTL2eX2QziaJmaL0ZAmsvtW71ic9IDUoYzg/300?n=1') center center; background-size: 100%;">
                            <h3>影视</h3>
                        </div>
                        <h3>催泪大杀器！盘点演唱会经典万人大合唱呵呵哈哈哈</h3>
                    </div>
                </div>
            </div>

            <div class="ListTheMenu">
                <div class="MusicLibraryTitle">
                    <div class="title">专栏</div>
                    <img src="./img/pull-down-menu.svg">
                </div>

                <div class="column-body">
                    <div class="column-individual">
                        <img src="./img/140625.jpg">
                        <h3>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</h3>
                    </div>

                    <div class="column-individual">
                        <img src="./img/140625.jpg">
                        <h3>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</h3>
                    </div>

                    <div class="column-individual">
                        <img src="./img/140625.jpg">
                        <h3>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</h3>
                    </div>

                    <div class="column-individual">
                        <img src="./img/140625.jpg">
                        <h3>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Ajax from '../assets/js/ajax.js'

    export default {
        data(){
            return{
                sliders: []
            }
        },

        async created(){
            let data = await Ajax.jsonp('//c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg');
            for( var i=0; i<data.data.songList.length; i++ ){
                data.data.songList[i].accessnum = (data.data.songList[i].accessnum / 10000).toFixed(1)
            }
            this.sliders = data.data.songList;
        }
    }
</script>


<style lang="scss" scoped>

    .box{
        height: calc( 100% - 2.68rem );
        overflow: scroll;
    }

    .MusicHall{
        width: 100%;
        height: 100%;
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

        .ranking-li img{
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

    .ListTheMenu{
        width: 100%;

        .PlaylistRecommended-body{
            max-height: 7.1rem;
            overflow: hidden;
        }

        .individual{
            float: left;
            width: 33%;
            height: auto;
            margin-right: 0.33333%;

            &>h3{
                font-size: 0.22rem;
                padding: 0rem 0.13rem;
                margin: 0.18rem 0;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
        }

        .individual-img{
            position: relative;
            width: 100%;
            height: 2.47rem;

            h3{
                position: absolute;
                width: 100%;
                text-align: center;
                bottom: 0.22rem;
                font-size: 0.37rem;
                color: #fff;
            }

            .earphone{
                position: absolute;
                left: 0.16rem;
                bottom: 0;
                padding: 0.22rem 0;
                padding-left: 0.25rem;
                font-size: 0.21rem;
                color: #fefefe;
                background: url('./img/earphone.svg') no-repeat center left;
                background-size: 0.2rem;
            }

            img{
                position: absolute;
                bottom: 0.14rem;
                right: 0.07rem;
                width: 0.46rem;
                height: 0.46rem;
            }
        }

        .newSong-body{
            max-height: 3.4rem;
            overflow: hidden;

            .individual>h3{
                font-weight: normal;
            }
        }

        .column-body{
            height: 5.04rem;
            overflow: hidden;

            .column-individual{
                float: left;
                width: 49.5%;
                height: auto;

                img{
                    display: block;
                    width: 100%;
                }

                h3{
                    font-size: 0.22rem;
                    padding: 0rem 0.13rem;
                    margin: 0.18rem 0;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                }
            }

            .column-individual:nth-child(odd){
                margin-right: 1%;
            }
        }
    }


    .MusicLibraryTitle{
        width: 100%;
        padding: 0.37rem 0;
        color: #040404;
        text-align: center;


        .title{
            letter-spacing: 0.1rem;
            font-size: 0.34rem;
            font-weight: bold;
        }

        img{
            float: right;
            width: 0.6rem;
            margin-right: 0.2rem;
            margin-top: -0.5rem;
            transform: rotate(-90deg);
        }
    }
</style>
<template>
  <div id="songList" class="songList">
      <div class="songList-mod">
        <div class="songList-menu-btn2">
            <router-link to="musicHall">
                <img src="../ranking/img/the-left-arrow.svg">
            </router-link>
        </div>

        <div class="songList-listSelect">
            <div class="songList-select-menu">
                <div class="songList-left">
                    <span @click="switchClick(0)" :class="index === 0 && 'span-border'">单曲</span>
                </div>
                <div class="songList-left">
                    <span @click="switchClick(1)" :class="index === 1 && 'span-border'">详情</span>
                </div>
            </div>
        </div>

        <div id="songList-left-body" :class="index !== 0 && 'display'">
            <ul>
                <li>
                    <div class="songList-musicRanking">
                        <i>1</i>
                        <span>123%</span>
                    </div>
                    <div class="songList-musicMessage">
                        <div class="songList-messageTitle">
                            <title>追梦赤子心</title>
                            <img src="../ranking/ListOfSongs/img/SQ.svg" >
                            <img src="../ranking/ListOfSongs/img/MV2.svg" >
                            <img src="../ranking/ListOfSongs/img/exclusive.svg">
                        </div>
                        <div class="songList-singerMessage">
                            吴亦凡 / 红花会PG ONE · 中国有嘻哈 第12期
                        </div>
                    </div>
                </li>

                <li>
                    <div class="songList-musicRanking">
                        <i>2</i>
                        <span>123%</span>
                    </div>
                    <div class="songList-musicMessage">
                        <div class="songList-messageTitle">
                            <title>追梦赤子心</title>
                            <img src="../ranking/ListOfSongs/img/SQ.svg" >
                            <img src="../ranking/ListOfSongs/img/MV2.svg" >
                            <img src="../ranking/ListOfSongs/img/exclusive.svg">
                        </div>
                        <div class="songList-singerMessage">
                            吴亦凡 / 红花会PG ONE · 中国有嘻哈 第12期
                        </div>
                    </div>
                </li>

                <li>
                    <div class="songList-musicRanking">
                        <i>3</i>
                        <span>123%</span>
                    </div>
                    <div class="songList-musicMessage">
                        <div class="songList-messageTitle">
                            <title>追梦赤子心</title>
                            <img src="../ranking/ListOfSongs/img/SQ.svg" >
                            <img src="../ranking/ListOfSongs/img/MV2.svg" >
                            <img src="../ranking/ListOfSongs/img/exclusive.svg">
                        </div>
                        <div class="songList-singerMessage">
                            吴亦凡 / 红花会PG ONE · 中国有嘻哈 第12期
                        </div>
                    </div>
                </li>

                <li>
                    <div class="songList-musicRanking">
                        <i>4</i>
                        <span>123%</span>
                    </div>
                    <div class="songList-musicMessage">
                        <div class="songList-messageTitle">
                            <title>追梦赤子心</title>
                            <img src="../ranking/ListOfSongs/img/SQ.svg" >
                            <img src="../ranking/ListOfSongs/img/MV2.svg" >
                            <img src="../ranking/ListOfSongs/img/exclusive.svg">
                        </div>
                        <div class="songList-singerMessage">
                            吴亦凡 / 红花会PG ONE · 中国有嘻哈 第12期
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div id="songList-right-body" :class="index !== 1 && 'display'">
            <div class="songList-rightMessageTitle">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
            <ul>
                <li>更新时间：<span>每天上午10点</span></li>
                <li>统计对象：<span>QQ音乐库内全部歌曲</span></li>
                <li>排名数量：<span></span></li>
                <li>统计算法：<span></span></li>
                <li>有效播放次数：<span></span></li>
            </ul>
        </div>
      </div>
  </div>
</template>

<script>
    import Ajax from '../../assets/js/ajax.js'

    export default {
        data(){
            return {
                index: 0,
                data: null
            }
        },

        async created(){
            let date = await Ajax.jsonp('//c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg',{
                g_tk:5381,
                uin:0,
                format:'json',
                inCharset:'utf-8',
                outCharset:'utf-8',
                notice:0,
                platform:'h5',
                needNewCode:1,
                new_format: 1,
                pic: 500,
                tpl:3,
                page:'detail',
                type:'top',
                disstid: this.$route.params.id
            });

            // this.data = data;

            // console.log( this.data );
            
        },

        

        // c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg

        methods: {
            switchClick( index ){
                this.index = index;
            }
        }
    }
</script>

<style lang="scss">
    .display{
        display: none;
    }

    .songList{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 12.25rem;
        background: #fff;
        overflow: hidden;

        &-mod{
            width: 100%;
            height: 100%;
        }
    }

    .songList-menu-btn2{
        position: relative;
        width: 100%;
        height: 4.76rem;
        background: url(https://y.gtimg.cn/music/photo_new/T002R300x300M000002LiyZW27dGjC.jpg) no-repeat center center;
        background-size: cover;
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

        .songList-menu-title,
        .songList-menu-time{
            position: absolute;
            width: 100%;
            bottom: 0.65rem;
        }

        .songList-menu-time{
            bottom: 0.25rem;
        }
    }

    .songList-listSelect{
        width: 100%;
        height: auto;

        .songList-select-menu{
            width: 100%;
            height: 0.89rem;
            border-bottom: 0.01rem solid #e6e6e6;
            font-size: 0.3rem;
            color: #666666;
        }

        .songList-left,
        .songList-right{
            float: left;
            width: 50%;
            height: 0.89rem;
            text-align: center;
            line-height: 0.89rem;

            span{
                display: inline-block;
                padding: 0 0.24rem;
                height: calc( 100% - 0.07rem );
            }

            .span-border{
                color: #31c27c;
                border-bottom: 0.07rem solid #31c27c;
            }
        }
    }

    #songList-left-body,
    #songList-right-body{
        width: 100%;
        height: 6.6rem;
        overflow: auto;
    }

    #songList-left-body{
        li{
            width: 100%;
            height: 1.1rem;
            
            &:nth-child(1){
                i{
                    color: #ff6648;
                }
            }

            &:nth-child(2){
                i{
                    color: #ff6b4e;
                }
            }

            &:nth-child(3){
                i{
                    color: #ff6446;
                }
            }
        }
    }

    .songList-musicRanking{
        float: left;
        width: 1rem;
        height: 100%;
        text-align: center;
        line-height: 0;

        i{
            display: inline-block;
            font-style: normal;
            font-size: 0.5rem;
            margin-top: 0.5rem;
            color: #666666;
        }

        span{
            display: inline-block;
            font-size: 0.12rem;
            color: #6a6a6a;
            margin-top: 0.4rem;
        }
    }

    .songList-musicMessage{
        position: relative;
        float: left;
        width: calc( 100% - 1rem );
        height: 100%;
        border-bottom: 0.01rem solid #e6e6e6;


        .songList-messageTitle{
            height: calc( 50% - 0.2rem );
            font-size: 0.3rem;
            color: #262626;
            padding-top: 0.2rem;

            title{
                display: inline;
            }

            img{
                height: 0.3rem;
            }
        }
    }

    .songList-singerMessage{
        width: 75%;
        height: 0.6rem;
        font-size: 0.22rem;
        line-height: 0.6rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    #songList-right-body{
        width: calc( 100% - 0.62rem );
        height: calc( 100% -  0.38rem);
        padding: 0 0.31rem;
        padding-top: 0.38rem;
        overflow: auto;
        font-size: 0.26rem;
        color: #808080;
    }

    .songList-rightMessageTitle{
        margin-bottom: 0.46rem;
    }
</style>

<template>
  <div id="listOfSongs" class="listOfSongs">
      <div class="listOfSongs-mod">
        <div class="menu-btn2">
            <router-link to="ranking">
                <img src="../img/the-left-arrow.svg">
            </router-link>

            <div class="menu-title" v-text="topinfo && topinfo.ListName"></div>
            <div class="menu-time">{{ toplist && toplist.date }}<span>更新</span></div>
        </div>
        <div class="listSelect">
            <div class="select-menu">
                <div class="left">
                    <span @click="switchClick(0)" :class="index === 0 && 'span-border'">单曲</span>
                </div>
                <div class="left">
                    <span @click="switchClick(1)" :class="index === 1 && 'span-border'">详情</span>
                </div>
            </div>
        </div>

        <div id="left-body" :class="index !== 0 && 'display'">
            <ul>
                <li v-for="(item, index) in toplist && toplist.songlist" :key="index">
                    <div class="musicRanking">
                        <i>1</i>
                        <span>123%</span>
                    </div>
                    <div class="musicMessage">
                        <div class="messageTitle">
                            <title v-text="item.data.songname"></title>
                            <img src="./img/SQ.svg" >
                            <img src="./img/MV2.svg" >
                            <img src="./img/exclusive.svg">
                        </div>
                        <div class="singerMessage">
                            <span v-text="item.data.singer[0].name"></span>
                            · 
                            {{ item.data.albumname }}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div id="right-body" :class="index !== 1 && 'display'"  v-html="topinfo && topinfo.info"></div>
      </div>
  </div>
</template>

<script>
    import Ajax from '../../../assets/js/ajax.js'

    export default {
        data(){
            return {
                index: 0,
                toplist: null,
                topinfo: null
            }
        },

        async created(){
            let toplist = await Ajax.jsonp('//c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg',{
                g_tk:5381,
                uin:0,
                format:'json',
                inCharset:'utf-8',
                outCharset:'utf-8',
                notice:0,
                platform:'h5',
                needNewCode:1,
                tpl:3,
                page:'detail',
                type:'top',
                topid: this.$route.params.id
            });

            this.toplist = toplist;
            this.topinfo = toplist.topinfo;

            for( var i=0; i<this.toplist.songlist.length; i++ ){
                if( this.toplist.songlist[i].data.singer.length > 1 ){
                    this.toplist.songlist[i].data.singer[0].name = this.toplist.songlist[i].data.singer[0].name +' / '+ this.toplist.songlist[i].data.singer[1].name;
                }
            }

            console.log( this.toplist.songlist[0].data.singer[0].name );
        },

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

    .listOfSongs{
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

    .menu-btn2{
        position: relative;
        width: 100%;
        height: 4.76rem;
        background: url(http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_203814024.jpg) no-repeat center center;
        background-size: 4.76rem cover;
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

        .menu-title,
        .menu-time{
            position: absolute;
            width: 100%;
            bottom: 0.65rem;
        }

        .menu-time{
            bottom: 0.25rem;
        }
    }

    .listSelect{
        width: 100%;
        height: auto;

        .select-menu{
            width: 100%;
            height: 0.89rem;
            border-bottom: 0.01rem solid #e6e6e6;
            font-size: 0.3rem;
            color: #666666;
        }

        .left,
        .right{
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

    #left-body,
    #right-body{
        width: 100%;
        height: 6.6rem;
        overflow: auto;
    }

    #left-body{
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

    .musicRanking{
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

    .musicMessage{
        position: relative;
        float: left;
        width: calc( 100% - 1rem );
        height: 100%;
        border-bottom: 0.01rem solid #e6e6e6;


        .messageTitle{
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

    .singerMessage{
        width: 75%;
        height: 0.6rem;
        font-size: 0.22rem;
        line-height: 0.6rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    #right-body{
        width: calc( 100% - 0.62rem );
        height: calc( 100% -  0.38rem);
        padding: 0 0.31rem;
        padding-top: 0.38rem;
        overflow: auto;
        font-size: 0.26rem;
        color: #808080;
    }
</style>

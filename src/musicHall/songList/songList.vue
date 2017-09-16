<template>
  <div id="songList" class="songList">
      <div class="songList-mod">
        <div class="songList-menu-btn2" v-if="cdlist" :style="'background: url('+cdlist[0].logo+') center center; background-size: 100%;'">
            <router-link to="musicHall">
                <img src="../ranking/img/the-left-arrow.svg">
            </router-link>

            <div class="menu-title" v-text="cdlist && cdlist[0].dissname"></div>
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
                <li v-for="(item, index) in songlist" :key="index">
                    <div class="songList-musicMessage" @click="play(index)">
                        <div class="songList-messageTitle">
                            <title v-text="item.title"></title>
                            <img src="../ranking/ListOfSongs/img/SQ.svg" >
                            <img src="../ranking/ListOfSongs/img/MV2.svg" >
                            <img src="../ranking/ListOfSongs/img/exclusive.svg">
                        </div>
                        <div class="songList-singerMessage" v-text="item.album.name"></div>
                    </div>
                </li>
            </ul>
        </div>

        <div id="songList-right-body" :class="index !== 1 && 'display'" v-if="cdlist" v-html="cdlist[0].desc"></div>
      </div>
  </div>
</template>

<script>
    import Ajax from '../../assets/js/ajax.js'

    export default {
        data(){
            return {
                index: 0,
                data: null,
                songlist: null,
                cdlist: null
            }
        },

        async created(){
            let data = await Ajax.jsonp('//c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg',{
                g_tk:5381,
                uin: 0,
                format: 'json',
                inCharset: 'utf-8',
                outCharset: 'utf-8',
                notice: 0,
                platform: 'h5',
                needNewCode: 1,
                new_format: 1,
                pic: 500,
                disstid: this.$route.params.id,
                type: 1,
                json: 1,
                utf8: 1,
                onlysong: 0,
                nosign: 1
            },{param: 'jsonpCallback', name: 'jp0'});

            this.data = data;
            this.cdlist = data.cdlist;
            this.songlist = this.cdlist[0].songlist;

            for( var i=0; i<this.cdlist[0].songlist.length; i++ ){
                this.songlist[i].album.name = this.songlist[0].singer[0].name+'  · '+this.songlist[i].album.name;
            }
        },

        methods: {
            switchClick( index ){
                this.index = index;
            },

            play( index ){
                localStorage.setItem('localmusic',JSON.stringify(this.songlist));
                localStorage.setItem('currentPlay',JSON.stringify(this.songlist[index]));
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

    .songList-musicMessage{
        position: relative;
        float: right;
        width: calc( 100% - 0.5rem );
        height: 100%;
        border-bottom: 0.01rem solid #e6e6e6;

        .songList-messageTitle{
            width: 90%;
            height: 0.4rem;
            font-size: 0.3rem;
            color: #000;
            padding-top: 0.2rem;

            title{
                display: inline-block;
                float: left;
                max-width: 80%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            img{
                float: left;
                height: 0.3rem;
            }
        }
    }

    .songList-singerMessage{
        width: 75%;
        height: 50%;
        font-size: 0.22rem;
        line-height: 0.6rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #666666;
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

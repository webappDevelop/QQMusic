<template>
    <header :class="convert && 'header-search'">
        <nav class="nav">
            <div><i class="catalogue-icon"></i></div>
            <div class="list">
                <router-link to="my" :class="selected===1 && 'selected'" @touchstart.native="selected=1">我的</router-link>
                <router-link to="musicHall" :class="selected===2 && 'selected'" @touchstart.native="selected=2">音乐馆</router-link>
                <router-link to="find" :class="selected===3 && 'selected'" @touchstart.native="selected=3">发现</router-link>
            </div>
            <div class="isMusic">
                <img src="../assets/img/icon-ismusic.png" alt="">
            </div>
        </nav>
        <div class="search">
            <div class="search-btn">
                <div>
                    <router-link tag="input"  to="search" class="search-input"  type="text"maxlength='18'
                    :placeholder="convert ? '搜索音乐、歌词、歌单' : '搜索'"
                    @touchstart.native="skip($event)"
                    @keydown.native.enter="add($event)"
                    @input.native="input($event)">
                    </router-link>
                    <router-link tag="div" to="" class="cancel" @touchstart.native="routerback($event)">取消</router-link>
                </div>
            </div>
        </div>
        
    </header>
</template>

<script>

    import ajax from '../assets/js/ajax.js'
    export default {
        data(){
            return{
                selected: 1,
                convert: 0,
                time: 0,
            }
        },
        mounted: function(){
            localStorage.clear();
            if(localStorage.getItem('history') === null){
                localStorage.setItem('history',JSON.stringify([]));
            }
        },
        methods: {
            routerback: function (e) {
                this.$router.back(-1);
                this.$emit('changed','slide');
                this.convert=0;
            },
            skip: function(e){
                this.$emit('changed','');
                this.convert=1;
                var tar = e.target;
                tar.setAttribute('autofocus',true);
            },
            add: function(e){
                var val = e.target.value;
                if(val === '') return;

                // localStorage.clear();
                var history = JSON.parse(localStorage.getItem('history'));
                history.unshift(val);
                console.log([...(new Set(history))]);
                localStorage.setItem('history',JSON.stringify([...(new Set(history))]));
                console.log(localStorage);
                // this.input();
            },
            input: function(e){
                console.log(e.target.value);
                if(this.time){
                    return;
                }
                this.time = 1;

                ajax.jsonp('https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp',{
                g_tk:5381,
                uin:0,
                format:'json',
                inCharset:'utf-8',
                outCharset:'utf-8',
                notice:0,
                platform:'h5',
                needNewCode:1,
                w: e.target.value,
                zhidaqu:1,
                catZhida:1,
                t:0,
                flag:1,
                ie:'utf-8',
                sem:1,
                aggr:0,
                perpage:20,
                n:20,
                p:1,
                remoteplace:'txt.mqq.all'
                }).then((res)=>{
                    console.log(res);
                    this.time = 0;
                })
            }

        }
    }
</script>


<style lang="scss" scoped>
    
    $time: 0.2s;

    header{
        height: 1.58rem;
        background-color: #31c27c;
        transition: height $time;
    }
    .header-search{
        height: 0.88rem;

        .nav{
            height: 0;
        }
        .search{

            .search-btn input{
                width: calc(100% - 2rem);
                text-indent: 0.2rem;
                background-position: -0.3rem 0.2rem;
                border-radius: 0.08rem;
            }
        }
    }

    .selected{
        font-weight: bold;
    }
    
    .nav{
        display: flex;
        height: 0.74rem;
        padding: 0 0.25rem;
        font-size: 0.32rem;
        color: #fff;
        overflow: hidden;
        transition: height $time;
        
        .catalogue-icon{
            float: left;
            height: 0.26rem;
            width: 0.37rem;
            margin-top: 0.22rem;
            margin-left: 0.1rem;
            border-top: 0.04rem solid #fff;
            border-bottom: 0.04rem solid #fff;
            position: relative;

            &:before{
                content: "";
                height: 0.04rem;
                background-color: #fff;                
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
            }
        }

        .isMusic{
            padding-top: 0.18rem;
            padding-right: 0.1rem;
            img{
                float: right;
                height: 0.46rem;
                width: 0.41rem;
            }
        }

        div{
            flex: 1;
        }
        .list{
            flex: 5;
            line-height: 0.74rem;

            .selected{
                font-weight: bold;
            }
            a{
                display: inline-block;
                padding: 0 0.25rem;
                color:#fff;
                text-decoration: none;
            }
        }
    }

    .search{
        height: 0.84rem;
        padding: 0.1rem 0.12rem;
        
        .router-link-exact-active{
            display: block;
        }
        .search-btn{
            height: 0.64rem;
            border-radius: 0.08rem;
            overflow: hidden;

            >div{
                height: 100%;
                width: calc(100% + 1rem);
            }
            
            input{
                float: left;
                border: none;
                outline: none;
                height: 0.64rem;
                width: calc(100% - 1rem);
                border-radius: 0.08rem;
                font-size: 0.30rem;
                line-height: 0.64rem;
                text-indent: 3.4rem;
                color: #fff;
                background: #2baa6b url("../assets/img/icon-search.svg") no-repeat 3.1rem 0.2rem;
                background-size: 0.28rem;
                transition: all $time;
            }

            input::-webkit-input-placeholder{
                color: rgba(255,255,255,0.9);
            }
            .cancel{
                float: left;
                height: 100%;
                width: 1rem;
                font-size: 0.3rem;
                line-height: 0.64rem;
                color: rgba(255,255,255,0.9);
            }

        }
    }
    
</style>



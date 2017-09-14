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
                    <router-link tag="input" to="my" class="search-input" type="text" :placeholder="convert ? '搜索音乐、歌词、歌单' : '搜索'" @focus.native="convert=1" @blur.native="convert=0"></router-link>
                    <div class="cancel">
                        取消
                    </div>
                </div>
            </div>
        </div>
        
        
    </header>
</template>

<script>
    export default {
        data(){
            return{
                selected: 1,
                convert: 0,
            }
        },

        methods: {
            change: function (){
                console.log('???');
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
                background: #2baa6b url("../assets/img/icon-search.svg") no-repeat 3.1rem 0.2rem;
                background-size: 0.28rem;
                transition: all $time;
            }

            input::-webkit-input-placeholder{
                color: rgba(255,255,255,0.9);
            }
            input:focus{
                width: calc(100% - 2rem);
                text-indent: 0.2rem;
                background-position: -0.3rem 0.2rem;
                border-radius: 0.08rem;
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



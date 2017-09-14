<template>
    <div class="list">
        <div class="list-mod">
            <div class="menu-btn">

                <router-link to="/my"><img src="../img/the-left-arrow.svg"></router-link>
                
                添加歌单
            </div>
        </div>
        <div>
            
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .list{
        font-size: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: 9999;
        background: #fff;
        &-mod{
            width: 100%;
        }
        &-round{
            font-size: 0.3rem;
            height: 1.1rem;
            display: flex;
            border-bottom: 0.01rem solid #e6e6e6;
            div{
                height: 100%;
            }
            img{
                width: .46rem;
                margin: 0 .25rem;
            }
            p{
                line-height: 1.1rem;
            }
        }
        .round-play{
            width: 5.97rem;
            display: flex;

            
        }
        .round-play-manager{
            flex: 1;
            display: flex;
            img{
                margin-left: 0;
            }
            a{
                display: inline-block;
                height: 100%;
            }
        }
    }
    .menu-btn{
        position: relative;
        width: 100%;
        height: 0.75rem;
        background: #31c27c;
        font-size: 0.28rem;
        color: #fff;
        text-align: center;
        line-height: 0.75rem;

        img{
            position: absolute;
            left: 0.3rem;
            top: 0.21rem;
            width: 0.3rem;
        }
    }
</style>

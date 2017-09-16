
<template>
    <div class="search-result">
        <h4>热门搜索</h4>
        <div class="keyword-list" data-unfinished="true">
            <div v-for="(item,index) in hotSearch" :key="index">{{item.k}}</div>
        </div>
        
        <div class="history">
            <div class="title">
                <span>搜索历史</span>
                <span class="clear-all" @touchstart="clearAll()">清除历史</span>
            </div>
            <div class="history-list">
                <ul>
                    <li v-for="(item,index) in history" :key="index">
                        <span>{{item}}</span>
                        <i class="clear" @touchstart="remove(index)">
                            <img src="../assets/img/icon-close.svg" alt="">
                        </i>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>

    import ajax from '../assets/js/ajax.js';
    export default {
        data(){
            return{
                hotSearch: [],
                history: JSON.parse(localStorage.getItem('history'))
            }
        },
        created: function(){
            ajax.jsonp('https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg').then((res)=>{
                this.hotSearch = res.data.hotkey;
            });
        },
        mounted: function(){

            var orignalSetItem = localStorage.setItem;
            localStorage.setItem = function(key,newValue){
                var setItemEvent = new Event("setItemEvent");
                setItemEvent.newValue = newValue;
                window.dispatchEvent(setItemEvent);
                orignalSetItem.apply(this,arguments);
            }
            // window.addEventListener("setItemEvent", function(e) {
            //     console.log('应该触发了事件吧？！');
            //     setTimeout(()=>{
            //        this.hotSearch = localStorage.getItem('history');
            //     },200)
            // });
            window.setItemEvent = function(){
                console.log('应该触发了事件吧？！');
                setTimeout(()=>{
                   this.history = localStorage.getItem('history');
                },200)
            }
        },
        methods: {
            clearAll: function(){
                this.history = [];
                localStorage.clear();
            },
            add: function(){
                localStorage.setItem('history',JSON.stringify(history));
            },
            remove: function(num){
                this.history.splice(num,1);
                this.add();
            }
        }
    }
</script>

<style lang="scss" scoped>
    
    .search-result{
        box-sizing: border-box;
        padding-top: 0.4rem;
        padding-left: 0.4rem;
        height: calc(100% - 1.98rem);
        background-color: #fff;
        position: relative;
        top: 0;
        left: 0;
        z-index: 999;

        h4{
            margin-bottom: 0.2rem;
            font-size: 0.30rem;
            font-weight: normal;
            color: rgba(0,0,0,0.7);
        }

        .keyword-list{
            padding-bottom: 0.2rem;
            height: 2.3rem;
            overflow: hidden;

            &:after{
                content: '';
                display: block;
                clear: both;
            }

            >div{
                float: left;
                padding: 0.13rem 0.2rem;
                margin: 0 0.12rem 0.2rem 0;
                border: 0.01rem solid rgba(0,0,0,0.3);
                border-radius: 0.5rem;
                font-size: 0.26rem;
            }
        }
    }

    .history{
        margin: 0;

        .title,
        li{
            padding: 0.2rem 0.38rem 0.2rem 0;
            margin: 0;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            font-size: 0.3rem;
        }

        .title{
            span{
                color: rgba(0,0,0,0.7);
            }
            .clear-all{
                color: #31c27c;
            }   
        }

        dd{
            
        }
    }

    .history-list{
        height: 6.84rem;
        overflow: auto;
        
        li{
            white-space:nowrap;
            text-overflow:ellipsis;
            overflow:hidden;
            span{
                font-size: 0.32rem;
                flex: 1;
            }
            .clear{
                width: 0.26rem;

                img{
                    width: 100%;
                }
            }
        }
        
    }
</style>

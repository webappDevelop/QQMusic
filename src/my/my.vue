<template>
    <div class="container">
        <section class="login-area">
            <div id="noLogin">
                <div class="none-login">
                    <h1>登录听歌，畅想高品质和无损品质曲库</h1>
                </div>
                <div>
                    <button class="login-btn">立即登录</button>
                </div>
            </div>
            <div id="login-success">
                <div class="login-title">
                    <a class="listen-time"><img src="./img/icon-listen.svg">12分钟</a>
                    <a class="avatar"></a>
                    <a class="dredge-green">开通</a>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
    export default {
    
    }
</script>


<style lang="scss" scoped>
    .login-area{
        height: 2.67rem;
        text-align: center;
            font-size: 0;
        div{
            font-size: 0;
        }
    }
    #noLogin{
        display: none;
        .none-login{
            padding: 0.66rem 0 0.52rem;
            h1{
                font-size: 0.30rem;
                font-weight: normal;
                // margin: 0.66rem auto 0.52rem;
            }
        }
        .login-btn{
            -webkit-appearance: none;
            display: inline-block;
            outline: none;
            border: none;
            background: none;
            color: #31c27c;
            font-size: 0.34rem;
            border: 1px solid #43c887;
            padding: 0.16rem 0.58rem;
            letter-spacing: 2px;
            border-radius: 3px;
        }
    }
    #login-success{
        font-size: 0;
        padding-top: 0.23rem;
        a{
            font-size: 0.22rem;
        }
        img{
            float: left;
            height: .32rem;
            margin-right: 0.05rem;
        }
        .login-title{
            display: flex;
            align-items: center;
            justify-content: center;
        }    
        .avatar{
            height: 1.1rem;
            width: 1.1rem;
            margin: 0 0.4rem;
        }
        .listen-time,
        .dredge-green{
            box-sizing: content-box;
            padding: 0.17rem .16rem;
            border: 1px solid #bdbdbd;
            border-radius: 22px;
        }
    }
</style>


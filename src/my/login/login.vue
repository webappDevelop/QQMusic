<template>
    <div class="login">
        <div class="abolish">
            <router-link to="/my">取消</router-link>
        </div>
        <div class="qq-login" @click="pop"></div>
        <div class="from">
            <div>

            
                <div>
                    <label>
                        账号:<input type="number">
                    </label>
                </div>
                <div>
                    <label>
                        密码:<input type="password">
                    </label>
                </div>
                <div>
                    <button class="commit">登录</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    methods: {
        pop(){

        }
    },
    mounted(){

    }
}
</script>


<style lang="scss">
    .from{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        background: rgba(0,0,0,0.5);
        font-size: .3rem;

        >div{
            text-align: center;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            width: 80%;
            height: 30%;
            color: #fff;
            
        }
        input{
            border-radius: .2rem;
            outline: none;
            margin: 0.2rem 0;
            border: none;
            padding: 0.05rem 0.1rem;
            :focus{
                outline: none
            }
        }
        .commit{
            -webkit-appearance: none;
            background: #0f0;
            // border: ;
        }
    }

    .login{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background: url(../img/login-bg.png) no-repeat center center;
        background-size: cover;
    }
    .abolish{
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        font-size: 0.3rem;
        a{
            color: #fff;
            text-decoration: none;
        }
    }
    .qq-login{
        height: .8rem;
        width: 5rem;
        position: absolute;
        bottom: 2.1rem;
        left: 0;
        right: 0;
        margin: auto;
    }
</style>

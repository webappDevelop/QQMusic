<template>
    <div class="login">
        <div class="abolish">
            <router-link to="/my">取消</router-link>
        </div>
        <div class="qq-login" @click="pop"></div>
        <div class="from" v-show="isPop">
            <transition name="popup">
                <div v-if="isPop" class="popwindow">
                    <div >
                        <label>
                            账号:<input type="number" v-model="infoObj.account" autofocus>
                        </label>
                    </div>
                    <div>
                        <label>
                            密码:<input type="password"  v-model="infoObj.password">
                        </label>
                    </div>
                    <div>
                        <button class="commit cancel" @click="cancel">取消</button>
                        <button class="commit loginbtn" @click="login">登录</button>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>

import Ajax from '../../assets/js/ajax.js'

export default {
    data(){
        return {
            isPop: false,
            userObj: [],
            infoObj: {
                account: null,
                password: null
            }
        }
    },
    methods: {
        pop(){
            this.isPop = true;
        },
        cancel(){
            this.isPop = false;
        },
        login(){
            var check = -1;
            for(var i=0;i<1;i++){
                for(var name in this.userObj[i]){
                    console.log(name,this.userObj[i][name],this.infoObj[name])
                    if(this.infoObj[name] == this.userObj[i][name]){
                        check++;
                        console.log(check);
                    }
                    if(check === 1){
                        this.$router.push({path:'/my'});
                        var temp = {
                            loging: true
                    }
                        // Object.
                        localStorage.setItem('loginSuccess',JSON.stringify(this.userObj[i]))
                    }
                }
            }   
        }
    },
    mounted(){
        Ajax.get('/src/my/login/login.json').then(res =>{
            this.userObj = res.data.user;

            // this.login()
        });
    }
}
</script>


<style lang="scss">
    .popup-enter-active,
    .popup-leave-active{
        transition: all 0.3s;
    }

    .popup-enter,
    .popup-leave-to{
        transform: translate3d(0,100%,0);
        opacity: 0;
    }

    .display{
        display: none;
    }
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
            height: 27%;
            background: rgba(22,25,40,0.8);
            color: #fff;
            border-radius: 0.3rem;
            >:first-child{
                margin-top: 0.7rem;
            }
        }
        input{
            border-radius: .2rem;
            outline: none;
            margin: 0.2rem 0 0.2rem 0.2rem;
            border: none;
            padding: 0.05rem 0.1rem;
            font-size: .3rem;
            :focus{
                outline: none
            }
        }
        .commit{
            -webkit-appearance: none;
           
            border: none;
            color: #fff;
            padding: 0.1rem 0.5rem;
            border-radius: 0.5rem;
            margin-top: 0.2rem;
            &:focus{
                outline: none;
            }
        }
        .loginbtn{
            margin-right: 0.1rem;
            background-image: linear-gradient(to bottom, #39CE79, #1CA055 100%);
        }
        .cancel{ 
            margin-left: 0.1rem;
            background-image: linear-gradient(to bottom, #39B4CE, #178198 100%);
            
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

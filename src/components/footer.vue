
<template>
    <footer :class="cutSchema ? '' : 'footer'">
        <div class="footerPlay" v-show="cutSchema" @click="cutSchema=0">
            <div class="footerPlay-cd" ref="footercd">
                <img src="/src/assets/img/1.jpg" alt="">
            </div>
            <div class="footerPlay-name">
                <h3>Just Dance</h3>
                <h4>Lady Gaga/Colby O'Donis</h4>
            </div>
            <a><img class="footerPlay-play" ref="footerPlayPlay" @click.stop="play" src="../assets/img/icon-transmit.svg" alt=""></a>
            <a><img class="footerPlay-list" @click.stop="songlist=1" src="../assets/img/icon-song-list-foot.svg" alt=""></a>
        </div>
        <div class="play-music" v-show="!cutSchema">
            <div class="play-header">
                <a @touchstart="cutSchema=1"><img class="play-menu" src="../assets/img/icon-menu.svg" alt=""></a>
                <h1 class="play-name">Just Dance</h1>
                <a href="#"><img class="play-more" src="../assets/img/icon-more.svg" alt=""></a>
            </div>

            <div class="content">
                <div class="masterplate-one">
                    <div class="author">
                        <div class="author-hr"></div>
                        <h2 class="author-name">Lady Gaga/Colby O'Donis</h2>
                        <div class="author-hr"></div>
                    </div>
                    <div class="acoustic">
                        <a>标准</a>
                        <a>MV</a>
                        <a>音效</a>
                    </div>
                    <div class="special">
                        <div class="cd">
                            <div class="special-cd" ref="playcd">
                                <img src="/src/assets/img/1.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="lyric">
                        <span>Da da doo doot-n</span>
                        <a class="lyric-desktop"><img src="../assets/img/icon-desktop.svg" alt=""></a>
                    </div>
                </div>
            </div>
            <!-- <div class="lyrics">
                <p>{{lyric}}</p>
            </div> -->
            <div class="paly-footer">
                <div class="schedule">
                    <span>{{presentItem}}</span>
                    
                    <div class="range">
                        <input type="range" :value="rangePlan" id="plan" @input="plan($event)">
                        <progress class="progress" :value="progressBar" max="100"></progress>
                    </div>
                    <span>{{sumItem}}</span>
                </div>
                <div class="play-back">
                    <a>
                        <img class="paly-select" @click="cutmodel($event)" 
                        src="../assets/img/icon-list-circulation.svg" alt="">
                    </a>
                    <a><img class="paly-cut" @click="lastMusic" src="../assets/img/icon-last.svg" alt=""></a>
                    <a><img @click="play" class="paly-transmit" src="../assets/img/icon-transmit.svg" alt=""></a>
                    <a><img class="paly-cut" @click="nextMusic" src="../assets/img/icon-next.svg" alt=""></a>
                    <a @click="songlist=1"><img class="paly-select" src="../assets/img/icon-song-list.svg" alt=""></a>
                </div>
                <div class="play-option">
                    <a><img class="addLike" src="../assets/img/icon-like.svg" alt=""></a>
                    <a><img src="../assets/img/icon-download.svg" alt=""></a>
                    <a><img src="../assets/img/icon-share.svg" alt=""></a>
                    <a><img src="../assets/img/icon-comment.svg" alt=""></a>
                </div>
                
                
                <audio class="audio" src="src/assets/mp3/1.mp3" ref="audio"></audio>
            </div>
        </div>
        <div :class="cutSchema ? '' : 'setting'"></div>
        <div :class="cutSchema ? '' : 'setting2'"></div>
        <div class="songList" v-show="songlist">
            <div class="songList-list">
            <div class="songList-option">
                <a>
                    <img class="paly-select" @click="cutmodel($event)" 
                    src="../assets/img/icon-list-circulation.svg" alt="">
                    <span>列表循环</span>
                </a>
                <div class="songList-options">
                    <a><img src="../assets/img/icon-download.svg" alt=""></a>
                    <a><img src="../assets/img/icon-add-List.svg" alt=""></a>
                    <a><img src="../assets/img/icon-empty-list.svg" alt=""></a>
                </div>
            </div>
            <div class="MusicList">
                <div class="MusicList-song MusicList-song-play">
                    <div class="MusicList-songName">
                        <p>
                            All About That Bass 
                            <span> - Meghan Trainor </span>
                        </p>
                        <img src="../assets/img/icon-play-center.svg" alt="">
                    </div>
                    <div class="MusicList-right">
                        <a><img src="../assets/img/icon-like.svg" alt=""></a>
                        <a><img src="../assets/img/icon-close.svg" alt=""></a>
                    </div>
                </div>
                <div class="MusicList-song">
                    <div class="MusicList-songName">
                        <p>
                            All About That Bass 
                            <span> - Meghan Trainor </span>
                        </p>
                        <img v-show="0" src="../assets/img/icon-play-center.svg" alt="">
                    </div>
                    <div class="MusicList-right">
                        <a><img src="../assets/img/icon-like.svg" alt=""></a>
                        <a><img src="../assets/img/icon-close.svg" alt=""></a>
                    </div>
                </div>
                
            </div>
            <div class="songList-close" @click="songlist=0">关闭</div>
            </div>
            <div class="songList-mask" @click="songlist=0" v-show="songlist"></div>
        </div>
    </footer>
</template>

<script>

    import suspend from '../assets/img/icon-suspend.svg'
    import paly from '../assets/img/icon-transmit.svg'
    import circulate from '../assets/img/icon-list-circulation.svg' //列表循环
    import one from '../assets/img/icon-one-circulate.svg' //单曲循环
    import random from '../assets/img/icon-random-circulate.svg' //随机播放
    import base64 from 'js-base64'//歌词解析
    import ajax from '../assets/js/ajax.js'
    // import lyrics from './src/assets/lyric/1.krc'//

    export default {

        data(){
            return {
                // mp3,
                cutSchema: 1,
                cut: 0,
                presentItem: '00:00',
                sumItem: '00:00',
                rangePlan: 0,
                progressBar: 0,
                repeat: 1,
                count: 0,
                audio: 0,
                songlist: 0,
                // lyric: "",
                music: 0
            }
        },
        mounted: function(){
            
            this.audio = this.$refs.audio;
            // ajax.get('/src/assets/lyric/1.krc').then((res)=>{
            //     console.log(res.data);
            // });
            // console.log(this.lyric);
            // this.lyric = base64.decode();
            // var vm = this;
            this.music = {
                
                songList: ['src/assets/mp3/1.mp3','src/assets/mp3/2.mp3','src/assets/mp3/3.mp3'],
                item: this,
                key: null,//用来清除帧动画
                palyTransmit: document.querySelector('.paly-transmit'),
                footerPlayPlay: this.$refs.footerPlayPlay,
                playcd: this.$refs.playcd,//播放时的专辑图片
                footercd: this.$refs.footercd,//底部的专辑图片
                rangePlan: document.querySelector('.progress'),
                progressBar: document.querySelector('#plan'),
                transmit: function(){
                    
                    this.item.cut = !this.item.cut;
                    console.log(this.item.cut);
                    var frame = ()=>{
                        this.item.count+=0.1;
                        this.playcd.style = "transform: rotate("+this.item.count+"deg)";
                        this.footercd.style = "transform: rotate("+this.item.count+"deg)";
                        this.key = requestAnimationFrame(frame);
                    }

                    if( this.item.cut ){
                        this.item.audio.play();
                        this.palyTransmit.src = suspend;
                        this.footerPlayPlay.src = suspend;
                        frame();
                    }else{
                        this.item.audio.pause();
                        this.palyTransmit.src = paly;
                        this.footerPlayPlay.src = paly;

                        window.cancelAnimationFrame(this.key);
                    }
                    
                    this.item.sumItem = this.transTime( this.item.audio.duration || 0 );

                    this.item.audio.ondurationchange = ()=>{
                        this.item.sumItem = this.transTime(this.item.audio.duration);//总时间
                    }
                    
                    this.item.audio.addEventListener('timeupdate', ()=> {
                        this.updateProgress(this.item.audio);
                    }, false);

                },

                //进度条
                updateProgress: function(audio) {
                    
                    var value = audio.currentTime / audio.duration || 0;
                    
                    this.item.rangePlan = value * 100;
                    this.item.progressBar = value * 100;
                    
                    if( this.item.cut && audio.ended ){
                        
                        this.palyTransmit.src = paly;
                        this.item.rangePlan = 0;
                        this.item.progressBar = 0;
                        window.cancelAnimationFrame(this.key);

                        if( this.item.repeat == 2 ){
                            console.log("11111111");
                            this.item.cut = 0;
                            this.transmit();
                        }

                        if( this.item.repeat == 0 ){
                            console.log("222222");
                            this.switch(2);
                        }

                        if( this.item.repeat == 1 ){
                            console.log("3333333");
                            this.switch(1);
                        }

                    }

                    this.item.presentItem = this.transTime(audio.currentTime);//当前播放时间
                    
                },

                //时间转换
                transTime: function(value) {
                    // console.log(value);
                    var time = "";
                    var h = parseInt(parseInt(value) / 3600);
                    value %= 3600;
                    var m = parseInt(value / 60);
                    var s = parseInt(value % 60);
                    if (h > 0) {
                        time = this.formatTime(h + ":" + m + ":" + s);
                    } else {
                        time = this.formatTime(m + ":" + s);
                    }
                    
                    return time;
                },

                //格式化时间
                formatTime: function(value) {
                    var time = "";
                    var s = value.split(':');
                    var i = 0;
                    for (; i < s.length - 1; i++) {
                        time += s[i].length == 1 ? ("0" + s[i]) : s[i];
                        time += ":";
                    }
                    time += s[i].length == 1 ? ("0" + s[i]) : s[i];
                    
                    this.dates = time;
                    return time;
                },

                init: function(){
                    this.item.presentItem = "00:00";//时间
                    this.item.sumItem = "00:00";//时间
                    this.item.rangePlan = 0;//进度条
                    this.item.progressBar = 0;//进度按钮
                    window.cancelAnimationFrame(this.key);//暂停转动
                    if(this.item.cut){
                        this.item.cut = 0;
                    }else{
                        this.item.cut = 1;
                    }
                    
                },
                //切歌
                switch: function( judge ){
                    
                    var random = Math.floor(Math.random()*this.songList.length);
                    
                    if( judge == 2 ){
                        index = random;
                    }

                    if( judge == -1 || judge == 1 ){
                        
                        var srcIndex = this.item.audio.currentSrc.indexOf('src/');
                        var src = this.item.audio.currentSrc.slice(srcIndex,this.item.audio.currentSrc.length);
                        var index = this.songList.indexOf(src);

                        index += judge;

                        if( index == -1 ){
                            index = this.songList.length-1;
                        }
                        
                        if( index == this.songList.length ){
                            
                            index = 0;
                        }

                    }
                    
                    this.item.audio.src = this.songList[index];
                    
                    this.init();
                    this.transmit();

                }
            }
        },
        methods: {
            
            play(){
                
                this.music.transmit();

            },

            plan(event){

                var audio = document.querySelector('.audio');

                this.rangePlan = event.target.value;
                this.progressBar = event.target.value;
                audio.currentTime = audio.duration * (plan.value /100);

                if( !this.cut ){
                    this.progressBar = this.progressBar;
                    this.rangePlan = this.rangePlan;
                }

            },

            cutmodel( event ){
                var eve = event.target;
                this.repeat++;

                //列表循环
                if( this.repeat == 1 ){
                    eve.src = circulate;
                }

                //单曲循环
                if( this.repeat == 2 ){
                    eve.src = one;
                }

                //随机播放
                if( this.repeat == 3 ){
                    eve.src = random;
                    this.repeat = 0;
                }
                
            },

            lastMusic(){

                if( this.repeat == 0 ){
                    this.music.switch(2);
                }
                
                if( this.repeat == 1 || this.repeat == 2 ){
                    this.music.switch(-1);
                }
                
            },

            nextMusic(){

                if( this.repeat == 0 ){
                    this.music.switch(2);
                }

                if( this.repeat == 1 || this.repeat == 2 ){
                    this.music.switch(1);
                }

            }

        }
        
    }
</script>


<style lang="scss">
    
    @import '../assets/css/common.scss';

</style>


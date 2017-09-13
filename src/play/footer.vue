
<template>
    <footer>
        <div class="footerPlay" v-show="cutSchema" @click="cutSchema=0">
            <div class="footerPlay-cd"></div>
            <div class="footerPlay-name">
                <h3>Just Dance</h3>
                <h4>Lady Gaga/Colby O'Donis</h4>
            </div>
            <a><img class="footerPlay-play" ref="footerPlayPlay" @click.stop="play" src="./img/icon-transmit.svg" alt=""></a>
            <a><img class="footerPlay-list" src="./img/icon-song-list-foot.svg" alt=""></a>
        </div>
        <div class="play-music" v-show="!cutSchema">
            <div class="play-header">
                <a @touchstart="cutSchema=1"><img class="play-menu" src="./img/icon-menu.svg" alt=""></a>
                <h1 class="play-name">Just Dance</h1>
                <a href="#"><img class="play-more" src="./img/icon-more.svg" alt=""></a>
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
                            <img src="" alt="">
                        </div>
                    </div>
                    <div class="lyric">
                        <span>Da da doo doot-n</span>
                        <a class="lyric-desktop"><img src="./img/icon-desktop.svg" alt=""></a>
                    </div>
                </div>
            </div>

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
                        src="./img/icon-list-circulation.svg" alt="">
                    </a>
                    <a><img class="paly-cut" @click="lastMusic" src="./img/icon-last.svg" alt=""></a>
                    <a><img @click="play" class="paly-transmit" src="./img/icon-transmit.svg" alt=""></a>
                    <a><img class="paly-cut" @click="lastMusic" src="./img/icon-next.svg" alt=""></a>
                    <a><img class="paly-select" src="./img/icon-song-list.svg" alt=""></a>
                </div>
                <div class="play-option">
                    <a><img class="addLike" src="./img/icon-like.svg" alt=""></a>
                    <a><img src="./img/icon-download.svg" alt=""></a>
                    <a><img src="./img/icon-share.svg" alt=""></a>
                    <a><img src="./img/icon-comment.svg" alt=""></a>
                </div>

                <audio class="audio" src="http://ws.stream.qqmusic.qq.com/201949026.m4a?fromtag=46" ref="audio"></audio>
            </div>
        </div>
    </footer>
</template>

<script>

    import suspend from './img/icon-suspend.svg'
    import paly from './img/icon-transmit.svg'
    import circulate from './img/icon-list-circulation.svg' //列表循环
    import one from './img/icon-one-circulate.svg' //单曲循环
    import random from './img/icon-random-circulate.svg' //随机播放

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
                music: 0
            }
        },
        mounted: function(){

            console.log(this);
            this.music = {

                item: this,
                audio: this.$refs.audio,//document.querySelector('.audio');
                palyTransmit: document.querySelector('.paly-transmit'),
                footerPlayPlay: this.$refs.footerPlayPlay,
                transmit: ()=>{
                    
                    item.cut = !item.cut;

                    if( item.cut ){
                        audio.play();
                        palyTransmit.src = suspend;
                        footerPlayPlay.src = suspend;
                    }else{
                        audio.pause();
                        palyTransmit.src = paly;
                        footerPlayPlay.src = paly;
                    }

                    item.sumItem = transTime(audio.duration);//总时间

                    audio.addEventListener('timeupdate', function () {
                        updateProgress(audio);
                    }, false);

                },

                //进度条
                updateProgress: (audio)=> {

                    var value = audio.currentTime / audio.duration;
                    var rangePlan = document.querySelector('progress');
                    var progressBar = document.querySelector('#plan');
                    item.rangePlan = value * 100;
                    item.progressBar = value * 100;
                    
                    if(audio.ended){
                        palyTransmit.src = paly;
                        item.cut = 0;
                    }

                    item.presentItem = transTime(audio.currentTime);//当前播放时间

                },

                //时间转换
                transTime: (value)=> {
                    var time = "";
                    var h = parseInt(parseInt(value) / 3600);
                    value %= 3600;
                    var m = parseInt(value / 60);
                    var s = parseInt(value % 60);
                    if (h > 0) {
                        time = formatTime(h + ":" + m + ":" + s);
                    } else {
                        time = formatTime(m + ":" + s);
                    }
                    
                    return time;
                },

                //格式化时间
                formatTime: (value)=> {
                    var time = "";
                    var s = value.split(':');
                    var i = 0;
                    for (; i < s.length - 1; i++) {
                        time += s[i].length == 1 ? ("0" + s[i]) : s[i];
                        time += ":";
                    }
                    time += s[i].length == 1 ? ("0" + s[i]) : s[i];
                    
                    item.dates = time;
                    return time;
                }
            }
        },
        methods: {
            
            play(){
                
                var item = this;
                var audio = this.$refs.audio;//document.querySelector('.audio');
                var palyTransmit = document.querySelector('.paly-transmit');
                var footerPlayPlay = this.$refs.footerPlayPlay;
                transmit();

                function transmit(){
                    
                    item.cut = !item.cut;

                    if( item.cut ){
                        audio.play();
                        palyTransmit.src = suspend;
                        footerPlayPlay.src = suspend;
                    }else{
                        audio.pause();
                        palyTransmit.src = paly;
                        footerPlayPlay.src = paly;
                    }

                    item.sumItem = transTime(audio.duration);//总时间

                    audio.addEventListener('timeupdate', function () {
                        updateProgress(audio);
                    }, false);

                }

                //进度条
                function updateProgress(audio) {

                    var value = audio.currentTime / audio.duration;
                    var rangePlan = document.querySelector('progress');
                    var progressBar = document.querySelector('#plan');
                    item.rangePlan = value * 100;
                    item.progressBar = value * 100;
                    
                    if(audio.ended){
                        palyTransmit.src = paly;
                        item.cut = 0;
                    }

                    item.presentItem = transTime(audio.currentTime);//当前播放时间

                }

                //时间转换
                function transTime(value) {
                    var time = "";
                    var h = parseInt(parseInt(value) / 3600);
                    value %= 3600;
                    var m = parseInt(value / 60);
                    var s = parseInt(value % 60);
                    if (h > 0) {
                        time = formatTime(h + ":" + m + ":" + s);
                    } else {
                        time = formatTime(m + ":" + s);
                    }
                    
                    return time;
                }

                //格式化时间
                function formatTime(value) {
                    var time = "";
                    var s = value.split(':');
                    var i = 0;
                    for (; i < s.length - 1; i++) {
                        time += s[i].length == 1 ? ("0" + s[i]) : s[i];
                        time += ":";
                    }
                    time += s[i].length == 1 ? ("0" + s[i]) : s[i];
                    
                    item.dates = time;
                    return time;
                }

            },

            plan(event){

                var audio = document.querySelector('.audio');

                this.rangePlan = event.target.value;
                this.progressBar = event.target.value;
                audio.currentTime = audio.duration * (plan.value /100);

            },

            cutmodel( event ){
                var eve = event.target;
                this.repeat++;

                if( this.repeat == 1 ){
                    eve.src = circulate;
                }

                if( this.repeat == 2 ){
                    eve.src = one;
                }

                if( this.repeat == 3 ){
                    eve.src = random;
                    this.repeat = 0;
                }

            },

            lastMusic(){
                
                

            }

        }
        
    }
</script>


<style lang="scss">
    
    @import './css/footer.scss';

</style>


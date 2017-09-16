
<template>
    <footer :class="cutSchema ? '' : 'footer'">
        <div class="footerPlay" v-show="cutSchema" @click="unfold">
            <div class="footerPlay-noPlay" v-show="!songJons">QQ音乐 听你想听的歌</div>
            <div class="footerPlay-cd" ref="footercd" v-show="songJons">
                <img v-if="presentPlay" :src="`https://y.gtimg.cn/music/photo_new/T002R150x150M000${(presentPlay.album && presentPlay.album.mid) || presentPlay.data.albummid}.jpg`" alt="">
            </div>
            <div class="footerPlay-name" v-if="songJons">
                <h3 v-text="presentPlay && ( presentPlay.title || presentPlay.data.songname)"></h3>
                <h4 v-text="presentPlay && (( presentPlay.album && presentPlay.album.name) || (presentPlay.data.albumname))"></h4>
            </div>
            <div>
                <a><img class="footerPlay-play" ref="footerPlayPlay" @click.stop="play" src="../assets/img/icon-transmit.svg" alt=""></a>
                <a><img class="footerPlay-list" @click.stop="poppingSongList" src="../assets/img/icon-song-list-foot.svg" alt=""></a>
            </div>
        </div>
        <div class="play-music" v-show="!cutSchema && presentPlay">
            <div class="play-header">
                <a @touchstart="cutSchema=1"><img class="play-menu" src="../assets/img/icon-menu.svg" alt=""></a>
                <h1 class="play-name" v-text="presentPlay && (presentPlay.title || presentPlay.data.songname)">Just Dance</h1>
                <a href="#"><img class="play-more" src="../assets/img/icon-more.svg" alt=""></a>
            </div>

            <div class="content">
                <div class="masterplate-one">
                    <div class="author">
                        <div class="author-hr"></div>
                        <h2 class="author-name" v-text="presentPlay && ((presentPlay.album && presentPlay.album.name) || (presentPlay.data.albumname))"></h2>
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
                                <img v-if="presentPlay" :src="`https://y.gtimg.cn/music/photo_new/T002R150x150M000${(presentPlay.album && presentPlay.album.mid) || presentPlay.data.albummid}.jpg`" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="lyric">
                        <span>Da da doo doot-n</span>
                        <a class="lyric-desktop"><img src="../assets/img/icon-desktop.svg" alt=""></a>
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
                        :src="cutPlayPattern" alt="">
                    </a>
                    <a><img class="paly-cut" @click="lastMusic" src="../assets/img/icon-last.svg" alt=""></a>
                    <a><img @click="play" class="paly-transmit" src="../assets/img/icon-transmit.svg" alt=""></a>
                    <a><img class="paly-cut" @click="nextMusic" src="../assets/img/icon-next.svg" alt=""></a>
                    <a @click="poppingSongList"><img class="paly-select" src="../assets/img/icon-song-list.svg" alt=""></a>
                </div>
                <div class="play-option">
                    <a><img class="addLike" src="../assets/img/icon-like.svg" alt=""></a>
                    <a><img src="../assets/img/icon-download.svg" alt=""></a>
                    <a><img src="../assets/img/icon-share.svg" alt=""></a>
                    <a><img src="../assets/img/icon-comment.svg" alt=""></a>
                </div>
                <audio class="audio" ref="audio"></audio>
            </div>
        </div>
        <div class="setting" v-if="presentPlay" v-show="!cutSchema"><img :src="`https://y.gtimg.cn/music/photo_new/T002R150x150M000${(presentPlay.album && presentPlay.album.mid) || presentPlay.data.albummid}.jpg`" alt=""></div>
        <div :class="cutSchema ? '' : 'setting2'" v-if="presentPlay"></div>
        <div class="songList" v-show="songlist">
            <div class="songList-list">
            <div class="songList-option">
                <a>
                    <img class="paly-select" @click="cutmodel($event)" 
                    :src="cutPlayPattern" alt="">
                    <span v-text="cutPlayPatternEx"></span>
                </a>
                <div class="songList-options">
                    <a><img src="../assets/img/icon-download.svg" alt=""></a>
                    <a><img src="../assets/img/icon-add-List.svg" alt=""></a>
                    <a><img src="../assets/img/icon-empty-list.svg" alt=""></a>
                </div>
            </div>
            <div class="MusicList">
                <div class="MusicList-song" v-for="(item,index) in songJons" @click="popupList(index)" :class=" item.id == presentPlay && (presentPlay.id || presentPlay.data.songid) ? 'MusicList-song-play' : '' " :key="item.id">
                    <div class="MusicList-songName">
                        <p>
                            {{item.title || item.data.songname}}
                            <span> - {{(item.album && item.album.name) || item.data.albumname}} </span>
                        </p>
                        <img v-show="item.id == presentPlay && (presentPlay.id || presentPlay.data.songid)" src="../assets/img/icon-play-center.svg" alt="">
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
                presentPlay: null,
                songJons: null,
                cutPlayPattern: '/src/assets/img/icon-list-circulation.svg',
                cutPlayPatternEx: '列表循环',
                music: 0
            }
        },

        created(){
            window.addEventListener("setItemEvent",  (e)=> {

                this.songJons = JSON.parse(localStorage.getItem("localmusic"));

                if(e.newKey === "currentPlay"){
                    
                    this.presentPlay = JSON.parse(e.newValue);
                    this.cut = 1;
                    this.music.init();
                    this.music.transmit();

                }
            });
        },

        mounted: function(){
            this.audio = this.$refs.audio;

            this.music = {
                
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
                    
                    var frame = ()=>{
                        this.item.count+=0.1;
                        this.playcd.style = "transform: rotate("+this.item.count+"deg)";
                        this.footercd.style = "transform: rotate("+this.item.count+"deg)";
                        this.key = requestAnimationFrame(frame);
                    }

                    if( this.item.cut ){
                        this.item.audio.src = `http://ws.stream.qqmusic.qq.com/${this.item.presentPlay.id || this.item.presentPlay.data.songid}.m4a?fromtag=46`;
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
                        this.item.audio.addEventListener('timeupdate', ()=> {
                            this.updateProgress(this.item.audio);
                        }, false);
                    }

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
                           
                            this.item.cut = 0;
                            this.transmit();
                        }

                        if( this.item.repeat == 0 ){
                            
                            this.switch(2);
                        }

                        if( this.item.repeat == 1 ){
                            
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
                    
                    var random = Math.floor(Math.random()*this.item.songJons.length);
                    var ine = 0;
                    
                    if( judge == 2 ){
                        ine = random;
                    }

                    if( judge == -1 || judge == 1 ){
                        
                        this.item.songJons.forEach(function(element,index) {
                            if( element.id === this.item.presentPlay.id ){
                                ine = index;
                            }
                        }, this);

                        ine += judge;

                        if( ine == -1 ){
                            index = this.item.songJons.length-1;
                        }
                        
                        if( ine == this.item.songJons.length ){
                            ine = 0;
                        }

                    }
                    
                    localStorage.setItem("currentPlay",JSON.stringify(this.item.songJons[ine]))
                    
                    // this.init();
                    // this.transmit();

                }
            }
        },
        methods: {
            
            play(){

                if( !this.presentPlay ){
                    
                    localStorage.setItem("currentPlay",JSON.stringify(JSON.parse(localStorage.getItem("localmusic"))[0]));
                }else{

                    this.music.transmit();
                }
            },
            popupList(index){
                // console.log(JSON.stringify(this.songJons[index]));
                localStorage.setItem("currentPlay",JSON.stringify(this.songJons[index]));

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
            poppingSongList(){
                
                if( this.songJons ){

                    this.songlist = 1;

                    //等待渲染完成后执行
                    this.$nextTick(() => {
                    
                        var MusicList = document.querySelector('.MusicList');
                        var MusicListSongPlay = document.querySelector('.MusicList-song-play');
                        var top = MusicListSongPlay.offsetTop;//offsetTop参考父类最近的地位元素
                        
                        MusicList.scrollTop = top;

                    });
                }
                

            },
            cutmodel( event ){
                var eve = event.target;
                this.repeat++;

                //列表循环
                if( this.repeat == 1 ){
                    this.cutPlayPatternEx = '列表循环';
                    this.cutPlayPattern = circulate;
                }

                //单曲循环
                if( this.repeat == 2 ){
                    this.cutPlayPatternEx = '单曲循环';
                    this.cutPlayPattern = one;
                }

                //随机播放
                if( this.repeat == 3 ){
                    this.cutPlayPatternEx = '随机播放';
                    this.cutPlayPattern = random;
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

            },
            unfold(){

                if( this.songJons ){
                    this.cutSchema = 0;
                }

            }

        }
        
    }
</script>


<style lang="scss">
    
    @import '../assets/css/common.scss';

</style>


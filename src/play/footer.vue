
<template>
    <footer class="paly-footer">
        <div class="schedule">
            <span>00:00</span>
            <div class="range">
                <div class="progress-bar"></div>
            </div>
            <span>00:00</span>
        </div>
        <div class="play-back">
            <a><img class="paly-select" src="./img/icon-list-circulation.svg" alt=""></a>
            <a><img class="paly-cut" src="./img/icon-last.svg" alt=""></a>
            <a><img @click="play" class="paly-transmit" src="./img/icon-transmit.svg" alt=""></a>
            <a><img class="paly-cut" src="./img/icon-next.svg" alt=""></a>
            <a><img class="paly-select" src="./img/icon-song-list.svg" alt=""></a>
        </div>
        <div class="play-option">
            <a><img class="addLike" src="./img/icon-like.svg" alt=""></a>
            <a><img src="./img/icon-download.svg" alt=""></a>
            <a><img src="./img/icon-share.svg" alt=""></a>
            <a><img src="./img/icon-comment.svg" alt=""></a>
        </div>
        <audio class="audio" :src="mp3"></audio>
    </footer>
</template>

<script>
    import mp3 from './mp3/Love Story - Taylor Swift.mp3'
    export default {

        data(){
            return {
                mp3,
                cut: 0
            }
        },
        methods: {
            play(){
                var audio = document.querySelector('.audio');
                this.cut = !this.cut;
                if( this.cut ){
                    audio.play();
                    
                }else{
                    audio.pause();
                    // this.cut = 0;
                }
            }
        }
    }
</script>


<style lang="scss">
    
    @import './FooterCss/css.scss';

</style>


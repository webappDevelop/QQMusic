<template>
    <div class="carousel">
        <div class="carousel-box" @touchstart="touchstart($event)" @touchmove="touchmove($event)" @touchend="touchend($event)" :style="moveStyle" >
            <a v-for="slider in sliders" :key="slider.id" :href="slider.linkUrl" class="img">
                <img :src="slider.picUrl" alt="">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            touchClickX: 0,
            moveX: 0,
            currentX: 0,
            transition: 0

        }
    },
    props: ['sliders'],
    methods: {
        touchstart(e){
             this.touchClickX = e.touches[0].clientX;
        },
        touchmove(e){
            let touchMoveX = e.changedTouches[0].clientX;

            this.moveX = this.currentX + (touchMoveX - this.touchClickX)/100;

        },
        touchend(e){
            console.log(this.$el)

            let viewWinWidth = this.$el.offsetWidth,
                boxWidth = this.$el.children[0].offsetWidth,
                offsetX = (viewWinWidth - boxWidth)/100;

            
            this.transition = 400;
            if( this.moveX>0 ){
               this.moveX = 0;

            }
            else if(this.moveX<offsetX){
                this.moveX = offsetX;
            }

            this.currentX = this.moveX;

            setTimeout(()=> {
                this.transition = 0;
            }, this.transition);
        }
    },

    computed:{
        moveStyle(){
            return `transition: all ${this.transition}ms; transform: translate3d(${this.moveX}rem,0,0)`
        }
    }
}
</script>

<style lang="scss" scoped>

    .carousel{
        overflow: hidden;
        margin-top: .32rem;
        margin-left: 0.46rem;
        height: 1.8rem;

        .carousel-box{
            width: 12rem;
            height: 1.8rem;
            &：after{
                content: '';
                display: block;
                clear: both;
            }
        }
    }

    .img{
        float: left;
        width: 3.08rem;
        height: 100%;
        margin-right: 0.10rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>
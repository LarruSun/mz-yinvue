<template>
    <div class="main">
        <div class="mySlider">
            <swiper-img :myImg="myPicture"></swiper-img>
        </div>
        <div class="playing" v-for="item in items">
          <playing :film="item"></playing>
        </div>
        <div class="more" @click="toMovies">
           <more-btn></more-btn>
        </div>
        <div class="divice">
          <div class="line line2"></div>
          <div class="line line1">即将上映</div>
          <div class="line line2"></div>
        </div>
        <div  class="playingAfter" v-for="itemAfter in itemsAfter">
          <playing-after :filmAfter="itemAfter"></playing-after>
        </div>
        <div class="more" @click="toMovies1">
          <more-btn></more-btn>
        </div>
      <router-view></router-view>
    </div>
</template>

<script>
//    const Hello = resolve => require(['@/components/Hello'],resolve)
    import navbar from '../components/main/Navbar.vue'
    import playing from '../components/main/Playing.vue'
    import playingAfter from '../components/main/PlayingAfter.vue'
    import moreBtn from '../components/main/moreBtn.vue'
    import swiperImg from '../components/main/swiperImg.vue'
    import  {mapGetters} from 'vuex'
    import Router from 'vue-router'
    var route = new Router();
//    import {swiper,swiperSlide} from 'vue-awesome-swiper'
    export default {
        name: 'main',
        components:{
          playing,
          playingAfter,
          moreBtn,
          swiperImg
        },
        data () {
          return {
            swiperOption: {
              // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
              notNextTick: true,
              // swiper configs 所有的配置同swiper官方api配置
              autoplay: 3000,
            },
            showfilm:true,
          }
        },
      methods:{
        changShowfilm(showDetiale){
            this.showfilm = showDetiale;
            console.info(showDetiale);
        },
        toMovies(){
            console.info(23636);
            route.push('/movies')
        },
        toMovies1(){
          console.info(5555);
          route.push('/movies/true')

        }
      },
      computed:{
        ...mapGetters({
            items:'getPlayingData',
            itemsAfter:'getAfterPlayingData',
            myPicture:'getSwiperPicture'
        })
      },
      created(){
         this.$store.dispatch('nowPlayingList',[5,1]);
         this.$store.dispatch('afterPlayingList',[5,1]);
         this.$store.dispatch('imgList');

      }
    }
</script>

<style scoped>
  .main{
      overflow: hidden;
      margin-top: -10px;
  }
  .divice{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      width: 100%;

  }
.line1{
  width: 65px;
  height: 20px;
  border-radius: 5px;
  line-height: 20px;
  background: #a7a7a7;
  color: #eee;
}
.line2{
  width: 40%;
  height: 1px;
  background-color: #ccc;
}

</style>

<template>
    <div class="swiperImg">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="i in myImg">
          <img :src="i.imageUrl">
        </swiper-slide>
        <!-- Optional controls -->
      </swiper>
    </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
        name: 'swiperImg',
        components:{
          swiper,
          swiperSlide
        },
        props:['myImg'],
        data () {
            return {
                swiperOption: {
                  // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
                  // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                  notNextTick: true,
                  // swiper configs 所有的配置同swiper官方api配置
                  autoplay: 3000,
                  loop:true
                }
            }
        },
        methods:{
            getImg(){
                  console.info(this.myImg);
            }
        },
        created(){
            this.getImg();
        }
    }
</script>

<style scoped>
    .swiperImg{

    }
    img{
        width: 100%;
        hight:200px;
    }
</style>

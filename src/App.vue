<template>
  <div id="app">
    <!--v-on:changSide="showSide"-->
    <navbar></navbar>
    <!--v-if="flagShowSide"-->
    <transition name="sideL">
      <sidebar></sidebar>
    </transition>
    <div class="toTop"  @click="toTops" id="myToTop">
      <div class="circle">
        <i class="iconfont icon-top myFont"></i>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import navbar from './components/main/Navbar.vue'
  import sidebar from './components/main/SideBar.vue'
  import toTop from './components/toTop/ToTop.vue'
  import ToTop from "./components/toTop/ToTop";
  import {mapGetters} from 'vuex'
  export default {
  name: 'app',
  data(){
    return {
    }
  },
  components: {
    ToTop, navbar,
      sidebar
  },
  methods:{
    getScrollHt(){
      window.onscroll = function getScroll() {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if(scrollTop >= 200){
          document.getElementById('myToTop').style.bottom = '10px';
          console.info(document.getElementById('myToTop').style.bottom);
        }else{
          document.getElementById('myToTop').style.bottom = '-100px';
          console.info(document.getElementById('myToTop').style.bottom);
        }
      }
    },
    toTops(){
      var timer = null;
      timer = setInterval(function () {
        //兼容
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        var speed = 0;
        if(scrollTop <= 1024){
          speed = scrollTop/4;
        }else {
          speed = Math.ceil(scrollTop/5);
        }
        document.body.scrollTop = document.documentElement.scrollTop = scrollTop - speed;
        if(scrollTop == 0){
          clearInterval(timer);
        }
      },20)
    }
  },
  computed:{
    ...mapGetters({
      Totop:'getTopBtn'
    })
  },
  created(){
    this.getScrollHt();
  }

}
</script>

<style>
  @import 'assets/styles/reset.css';
  @import 'assets/styles/icon.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body{
       background: #eee;
  }
  .toTop{

    position: fixed;
    bottom: -100px;
    right: 10px;
    z-index: 505;
    transition:1s all ease ;
    -webkit-transition:1s all ease ;

  }
  .toTop .circle{

    width: 48px;
    height: 48px;
    border-radius: 50%;
    text-align: center;
    line-height: 48px;
    background-color: rgba(0,0,0,0.7);
    color: #fff;

  }
  .myFont{
    font-size: 25px;
  }


</style>

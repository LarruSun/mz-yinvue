<template>
         <div class="toTop"  @click="toTops" id="myToTop">
           <div class="circle">
             <i class="iconfont icon-top myFont"></i>
           </div>
         </div>
</template>

<script>
    export default {
        name: 'toTop',
        data () {
            return {}
        },
        methods:{

        },
      created(){

      }
    }
</script>

<style scoped>
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

<template>
   <div id="addressBack">
     <div id="address2">
       <div class="addressNav">
         <span style="font-size: 14px">宝安区</span>
       </div>
       <address1 v-for="i in 10"></address1>
     </div>
     <router-view></router-view>
   </div>
</template>

<script>
    import address1 from '../../components/moviesAddressComponent/address.vue'
    export default {
        name: 'app',
        components:{
          address1
        },
        data () {
            return {
                msg: 'Welcome'
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
    #addressBack{
        background-color: #fff;
    }
    .addressNav{
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: left;
        background-color: #E1E1E1;
        margin-top: -10px;
        font-size: 12px;
        color: #636363;
        letter-spacing: 1px;
    }
  .addressNav span{
      margin-left: 10px;
  }
</style>

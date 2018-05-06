<template>
    <div class="sidebar" v-show="show" @click="changShow">
          <div class="sideB">
                <div class="showSideList">
                  <ul>
                    <li  v-for="item in items">
                      <router-link :to="item.url">
                        <div>{{item.name}}</div>
                        <div> > </div>
                      </router-link>
                    </li>
                  </ul>
                </div>
          </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
        name: 'sidebar',
        data () {
            return {
              items:[
                {name:'首页',url:'/main'},
                {name:'影片',url:'/movies'},
                {name:'影院',url:'/address'},
                {name:'商城',url:'/main'},
                {name:'演出',url:'/main'},
                {name:'我的',url:'/main'},
                {name:'卖座卡',url:'/main'},
              ]
            }
        },
        methods:{
          changShow(){
              this.$store.dispatch('changSideShow',false)
          }
        },
      computed:{
        ...mapGetters({
            show:'getSideShow'
        })
      }
    }
</script>

<style scoped>

    .sidebar{
        position:fixed;
        left:0;
        top:49px;
        right: 0;
        z-index: 5;
        width: 70%;
        height: 100%;
        background-color:#282828;
    }

    .sidebar ul{
        width: 100%;
        list-style: none;
        font-size: 14px;
        color: #9a9a9a;
    }
    .sidebar ul li{
        line-height: 50px;
        height: 50px;
    }
    .sidebar ul li a div:first-child{
        margin-left: 20px;
        float: left;
        color: #9a9a9a;
    }
    .sidebar ul li a div:last-child{
        margin-right: 20px;
        float: right;
        font-size: 16px;
        color: #777777;
    }
</style>

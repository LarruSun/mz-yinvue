<template>
    <div class="navbar">
      <div class="clear1"></div>
      <nav id="toolbar">
        <div class="left">
          <a href="javascript: void 0;">
            <div class="toolbar-title-icon" @click="showSideBar1">
              <i class="iconfont icon-list"></i>
            </div>
            <div class="toolbar-title">
              {{filmName}}
            </div>
          </a>
        </div>
        <div class="right">
          <a href="javascript: void 0;">
            <div id="user" class="toolbar-title-icon">
              <i class="iconfont icon-user"></i>
            </div>
            <div class="toolbar-title-icon leftLoad">
              <span>深圳</span>
              <i class="iconfont icon-dropdown"></i>
              <img src="../../assets/load2.gif" v-show="showLoad">
            </div>
          </a>
        </div>
      </nav>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
        name: 'navbar',
        data () {
            return {
              flagShowSide:false,
            }
        },
        methods:{
          showSideBar1:function () {
              if(!this.show){
                this.$store.dispatch('changSideShow',true);
              }else {
                this.$store.dispatch('changSideShow',false);
              }
              console.info(this.show);
          },
          showSideBar:function () {
              if(this.flagShowSide){
                  this.flagShowSide = false;
              }else {
                  this.flagShowSide = true;
              }
              this.$emit('changSide',this.flagShowSide);
            }
        },
        computed:{
          ...mapGetters({
              show:'getSideShow',
              filmName:'getFilmName',
              showLoad:'getloadFlag'
          })
        }
    }
</script>

<style scoped>
    .clear1{
      clear: both;
    }
    .navbar{
        position: fixed;
        top: 0;
        height: 50px;
        width: 100%;
        background: black;
        line-height:50px;
    }
    .leftLoad{
        position: relative;
    }
    .leftLoad img{
      display: inline-block;
      width: 20px;
      height: 20px;
      opacity: 0.5;
      position: absolute;
      right: -38px;
      top: 15px;
      z-index: 400;
    }
    .navbar .toolbar-title-icon{

       color:#999;
       font-size: 14px;
       margin-left: 20px;
    }
    .left div{
       float: left;
    }
    .right div{
      float: right;
    }
    #user{
      margin-right: 10px;
    }
    .toolbar-title{
        color: #fff;
        font-size: 14px;
        margin-left: 20px;
    }

</style>

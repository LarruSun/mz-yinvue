<template>
    <div class="address" @click="goMovieChild">
      <router-link to="/moviesChild">
            <div class="content">
              <div class="addressTop">
                <div class="addressLeft">
                  <div class="addressName">
                    深圳中影城市影院
                  </div>
                  <div>
                    <i class="iconfont icon-zuo"></i>
                  </div>
                  <div>
                    <i class="iconfont icon-tong"></i>
                  </div>
                </div>
                <div class="addressRight">
                  >
                </div>
              </div>
              <div class="addressCenter">
                <div class="eat">可乐爆米花</div>
              </div>
              <div class="addressFooter" id="footer">
                <div>深圳市宝安区西乡街道107栋</div>
                <div>距离未知</div>
              </div>
            </div>
            <div class="diviceLine">

            </div>
        </router-link>
    </div>
</template>

<script>
  import Router from 'vue-router'
  const router = new Router();
    export default {
        name: 'address',
        data () {
            return {

            }
        },
        methods:{
            goMovieChild(){
                router.push('/moviesChild');
                console.info(router);
            }
        }
    }
</script>

<style scoped>
    .address{
      text-align: left;
      background-color: #fff;
      clear: both;
    }
    .content{
        margin-left: 10px;
    }
    .addressTop{
       display: flex;
       justify-content: space-between;
    }
    .addressLeft,
    .addressRight{
      margin-top: 20px;
    }
    .addressLeft div{
        float: left;
    }
    .addressLeft i{
      margin-left: 5px;
    }
    .addressLeft .icon-zuo{
        color: #FC8558;
    }
    .addressLeft .icon-tong{
      color: #88AEC8;
    }
    .addressRight{
        margin-right: 10px;
        font-size: 18px;
        color: lightgray;
    }
    .addressName{
        font-size: 16px;
        color: #000000;
    }
    .addressCenter,
    .addressFooter{
        margin-top: 10px;
        clear: both;
    }
    .addressFooter{
        margin-bottom: 20px;
        padding-top: 10px;
        font-size: 12px;
        color: lightgray;
    }
    .addressFooter div:last-child{
        margin-top: 10px;
    }
    .addressCenter div{
        float: left;
        font-size: 12px;
        padding:2px 4px 1px;
        border-radius: 3px;
        margin-left: 5px;
        color: #fff;
    }
    .eat{
        background-color: #51add0;
    }
    .diviceLine{
        width: 100%;
        height: 1px;
        background-color: #E1E1E1;
    }
</style>

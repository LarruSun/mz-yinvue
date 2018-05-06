<template>
    <div class="movieInfoAfter">
        <div class="moviesInfoFloat" @click="toMInfoAfter">
            <div class="moviesInfoImg">
               <img :src="filmAfter.poster.thumbnail">
            </div>
            <div class="moviesAlt">
                <div class="moviesInfoTop">
                  <div class="moviesInfoName">
                      {{filmAfter.name}}
                  </div>
                  <div class="moviesInfoScore">
                      <span>
                        >
                      </span>
                  </div>
                </div>
                <div class="moviesInfoCenter">{{filmAfter.intro}}</div>
                <div class="moviesInfoFooter">
                    <div class="moviesInfoCount">
                        <span>
                          {{dateAfter}}上映
                        </span>
                        <span>
                           {{weeksAfter}}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="moviesInfoLine"></div>
    </div>
</template>

<script>
  import Router from 'vue-router'
  import moment from 'moment'

  const router = new Router();

    export default {
        name: 'movieInfoAfter',
        data () {
            return {
              weeksAfter:'',
              dateAfter:''
            }
        },
      props:['filmAfter'],
      methods:{
        toMInfoAfter(){
          this.$store.dispatch('changeMovieName',this.filmAfter.name);
          router.push('/film/detaileInfo/'+this.filmAfter.id);
        },
        changTime(){
            this.dateAfter = moment(this.filmAfter.premiereAt).format('MM月DD日');
            let myTime  = moment(this.filmAfter.premiereAt).format('d');
            var arr = ['','星期一','星期二','星期三','星期四','星期五','星期六','星期日'];
            this.weeksAfter = arr[myTime];
        },
      },
      created(){
        this.changTime();
      }
    }
</script>

<style scoped>
    .movieInfoAfter{
      width: 90%;
      overflow: hidden;
      margin: 0 auto;
      margin-top: 20px;
    }
    .moviesInfoImg{
      float: left;
    }
    .moviesInfoImg img{
      width: 60px;
      height: 82.56px;
    }
    .moviesAlt{
      float: left;
      width: 70%;
      margin-left: 20px;
    }
    .moviesInfoTop{
      overflow: hidden;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .moviesInfoName{
        font-size: 16px;
    }
    .moviesInfoScore{
      font-size: 18px;
      color: lightgray;
    }
    .moviesInfoFooter{
      overflow: hidden;
    }
    .moviesInfoTop div:first-child{
      float: left;
    }
    .moviesInfoTop div:last-child{
      float: right;
    }
    .moviesInfoCount{
      text-align: left;
      margin-top: 15px;
      font-size: 12px;
      color: #ffb375;
    }
    .moviesInfoLine{
      border-bottom: 1px dashed #8E8E8E;
      width: 100%;
      clear: both;
      height: 10px;
    }
    .moviesInfoCenter{
      text-align: left;
      color: #8e8e8e;
      font-size: 12px;
    }
</style>

<template>
    <div id="back">
      <div class="movies">
        <div class="title">
           <div class="title1"  @click="changeMovieNow">
              正在上映
           </div>
           <div class="title2" @click="changeMovieAfter">
              即将上映
           </div>
        </div>
        <div class="myMoviesConponent" v-for="itemNow in itemsMovies">
            <movies-info v-if="changMoviesNowFlag" :filmMovie="itemNow"></movies-info>
        </div>
        <div class="myMoviesConponent" v-for="itemAfter in itemsAfterMovies">
          <movies-info-after v-if="changMoviesAfterFlag" :filmAfter="itemAfter"></movies-info-after>
        </div>

      </div>
    </div>
</template>

<script>
    import moviesInfo from '../../components/movieComponent/MoviesInfo.vue'
    import moviesInfoAfter from '../../components/movieComponent/MoviesInfoAfter.vue'
    import {mapGetters} from 'vuex'
    import Router from 'vue-router'
    const route = new Router
    export default {
        name: 'movies',
        components:{
          moviesInfo,
          moviesInfoAfter
        },
        data () {
            return {
              changMoviesNowFlag:true,
              changMoviesAfterFlag:false,
              count:0,
              scrollflags:0,
              addMoviesNow:[],
              addMOviesAfter:[]
            }
        },
        computed:{
            addFilmNow:()=>{
//                console.info(777)
                if(this.itemsMovies){
                  this.addMoviesNow.push(this.itemsMovies);
//                  console.info(888)
                }
            },
          ...mapGetters({
              pageCount:'getMypage',
              myHeight:'getScollHeight',
              itemsMovies:'getPlayingData',
              itemsAfterMovies:'getAfterPlayingData',
          }),

        },
        methods:{
          changeMovieNow(){
            if(this.changMoviesNowFlag == false){
                  this.changMoviesAfterFlag = false;
                  this.changMoviesNowFlag = true;
                  var showNow =  document.getElementsByClassName('title1')[0];
                  var showAfter =  document.getElementsByClassName('title2')[0]
                    showNow.style.borderBottomStyle = 'solid';
                    showNow.style.borderBottomColor = '#fe6e00';
                    showNow.style.borderBottomWidth = '3px';
                    showAfter.style.borderBottomStyle = 'solid';
                    showAfter.style.borderBottomColor = '#fff';
                    showAfter.style.borderBottomWidth = '1px';
              }
              this.changeScrollflags();
              console.info(this.changMoviesNowFlag,this.changMoviesAfterFlag );
            },
          changeMovieAfter(){
                if(this.changMoviesAfterFlag == false){
                  this.changMoviesAfterFlag = true;
                  this.changMoviesNowFlag = false;
                  var showNow =  document.getElementsByClassName('title1')[0];
                  var showAfter =  document.getElementsByClassName('title2')[0];
                  showAfter.style.borderBottomStyle = 'solid';
                  showAfter.style.borderBottomColor = '#fe6e00';
                  showAfter.style.borderBottomWidth = '3px';
                  showNow.style.borderBottomStyle = 'solid';
                  showNow.style.borderBottomColor = '#fff';
                  showNow.style.borderBottomWidth = '1px';
                }
                this.changeScrollflags();
               console.info(this.changMoviesNowFlag,this.changMoviesAfterFlag );
          },
          toDetail(){
              route.push('/movies/detaileInfo');
          },
          getQuery(){
            window.scrollTo(0,0); //滚动条回到顶部
            if(this.$route.params.flag){
                  this.changeMovieAfter();
              }else {
                  this.changeMovieNow();
              }
          },
          sendGet(){
            $this.$store.dispatch('nowPlayingList',[7,$this.pageCount]);
            $this.$store.dispatch('afterPlayingList',[7,$this.pageCount]);
          },
          changeScrollflags(){
            this.scrollflags = 0;
          },
          getScollHight(){
              var $this = this;
              var countF = 200;

            window.onscroll=function getScrollTop(){
              var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
//              var scrollTopFlag = (document.documentElement.scrollHeight-document.documentElement.clientHeight)-scrollTop
              var scrollTopFlag = document.documentElement.scrollHeight == document.documentElement.clientHeight + scrollTop
//                console.info(scrollTop);
              if(scrollTopFlag && $this.scrollflags == 0){
                    $this.scrollflags++;
                    $this.$store.dispatch('changPageCount',2);
                    if($this.changMoviesNowFlag){
                      $this.$store.dispatch('nowPlayingList',[7,$this.pageCount]);
                    }else if($this.changMoviesAfterFlag){
                      $this.$store.dispatch('afterPlayingList',[7,$this.pageCount]);
                      console.info('page1')
                    }
              }else if(scrollTopFlag && $this.scrollflags == 1){
                    $this.scrollflags++;
                    $this.$store.dispatch('changPageCount',3);
                    if($this.changMoviesNowFlag){
                      $this.$store.dispatch('nowPlayingList',[7,$this.pageCount]);
                    }else if($this.changMoviesAfterFlag){
                      $this.$store.dispatch('afterPlayingList',[7,$this.pageCount]);
                      console.info('page2')
                    }
                   console.info('this.scrollflags'+$this.scrollflags);
              }else if(scrollTopFlag && $this.scrollflags == 2){
                    $this.scrollflags++;
                    $this.$store.dispatch('changPageCount',4);
                    if($this.changMoviesNowFlag){
                      $this.$store.dispatch('nowPlayingList',[7,$this.pageCount]);
                    }else if($this.changMoviesAfterFlag){
                      $this.$store.dispatch('afterPlayingList',[7,$this.pageCount]);
                      console.info('page3')
                    }
              }else if(scrollTopFlag && $this.scrollflags == 3){
                    $this.scrollflags++;
                    console.info($this.scrollflags);
                    $this.$store.dispatch('changPageCount',5);
                    if($this.changMoviesNowFlag){
                      $this.$store.dispatch('nowPlayingList',[7,$this.pageCount]);
                    }else if($this.changMoviesAfterFlag){
                      $this.$store.dispatch('afterPlayingList',[7,$this.pageCount]);
                    }
              };
            }
          }
        },
      mounted(){
        this.getQuery();
      },
      created(){
        this.$store.dispatch('nowPlayingList',[7,1]);
        this.$store.dispatch('afterPlayingList',[7,1]);
        this.getScollHight();
      }
    }
</script>

<style scoped>
  #back{
      background: #F9F9F9;
  }
  .title{
    width: 90%;
    margin: 0 auto;
    margin-top: -10px;
    overflow: hidden;
    border-bottom: 1px solid orange;
    font-size: 16px;
  }
  .title1{
    float: left;
    width:50%;
    line-height: 46px;
    border-bottom: 3px solid #fe6e00;
  }
  .title2{
    float: right;
    width:50%;
    line-height: 46px;
  }
  .myMoviesConponent{
    overflow: hidden;
  }
</style>

<template>
    <div class="moviesInfo">
        <div class="moviesInfoFloat" @click="toMInfoAfter">
            <div class="moviesInfoImg">
              <img :src="filmMovie.poster.thumbnail">
            </div>
            <div class="moviesAlt">
                <div class="moviesInfoTop">
                    <div class="moviesInfoName">
                      {{filmMovie.name}}
                    </div>
                    <div class="moviesInfoScore">
                      <span>
                        {{filmMovie.grade}}
                      </span>
                      <span>
                        >
                      </span>
                    </div>
                </div>
                <div class="moviesInfoCenter"
                     style="white-space:nowrap;
                          text-overflow:ellipsis;
                          -o-text-overflow:ellipsis;
                          overflow: hidden;">{{filmMovie.intro}}</div>
                <div class="moviesInfoFooter">
                    <div class="moviesInfoCount">
                      <span>
                        {{filmMovie.scheduleCount}}
                      </span>
                      <span>
                         家电影院上映
                      </span>
                    </div>
                    <div class="moviesInfoSale">
                      <span>{{filmMovie.watchCount}}</span>
                      <span>人购票</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="moviesInfoLine"></div>
    </div>
</template>

<script scoped>
    import Router from 'vue-router'
    import moment from 'moment'
    const router = new Router();
    export default {
        name: 'moviesInfo',
        data () {
            return {
              weeksNow:'',
              dateNow:''
            }
        },
      props:['filmMovie'],
      methods:{
            toMInfoAfter(){
              this.$store.dispatch('changeMovieName',this.filmMovie.name);
              router.push('/film/detaileInfo/'+this.filmMovie.id);
            }
      }
    }
</script>

<style scoped>
    .moviesInfo{
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
      margin-bottom: 15px;
    }
    .moviesInfoTop .moviesInfoName{
        float: left;
        font-size: 16px;
    }
    .moviesInfoTop .moviesInfoScore{
        float: right;
    }
    .moviesInfoScore span:first-child{
        color: #fc7103;
        font-size: 16px;
    }
    .moviesInfoScore span:last-child{
        color: lightgray;
        font-size: 18px;
    }

    .moviesInfoFooter{
        overflow: hidden;
    }
    .moviesInfoFooter .moviesInfoCount{
        float: left;
    }
    .moviesInfoFooter div span:first-child{
      color: #8aa2bf;
    }
    .moviesInfoFooter div span:last-child{
      color: #8e8e8e;
    }
    .moviesInfoSale{
        float: right;
    }
    .moviesInfoLine{
        border-bottom: 1px dashed #8E8E8E;
        width: 100%;
        clear: both;
        height: 10px;
    }
    .moviesInfoCenter{
        margin-bottom: 15px;
        text-align: left;
        color: #8e8e8e;
        font-size: 12px;
    }
</style>

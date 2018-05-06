<template>
    <div class="playing">
        <div class="img" @click="toChildInfo">
          <div>
            <img :src="film.cover.origin">

            <div class="playingInfo">
              <div class="playingName">
                <span>{{film.name}}</span>
                <p>{{film.scheduleCount}}家影院上映 {{film.watchCount}}人购票</p>
              </div>
              <div class="playingScore">
                {{film.grade}}
             </div>
            </div>
          </div>
          <div class="clearFloat">

          </div>
        </div>
    </div>
</template>

<script>
    import Router from 'vue-router'
    var route = new Router();
    export default {
        name: 'playing',
        coponents:{

        },
        props:['film'],
        data () {
            return {

            }
        },
        created:function () {
//              this.$ajax.get('./src/logo.png').then(function (e) {
//                   console.info(e);
//              })
        },
      methods:{
            getData(){
//                this.$ajax.get('../../static/logo.png').then(function (e) {
//                      console.info(e);
//                })
            },
            toChildInfo(){
              this.$store.dispatch('changeMovieName',this.film.name);
              route.push('/film/detaileInfo/'+this.film.id);
            }
      }
    }
</script>

<style scoped>
  .playing{
      width: 90%;
      margin: 0 auto;
      margin-top: 10px;
      background: #fff;
  }
  .playing img {
    width: 100%;
  }
  .playingInfo{
    width: 100%;
  }
  .playingInfo .playingName{
    float: left;
    margin: 10px;
  }
  .playingName{
      text-align: left;
  }
  .playingInfo .playingName p{
    color: #999;
    margin-top: 4px;
  }
  .playingInfo .playingScore{
    float: right;
    margin: 10px;
    color: #f78360;
    font-size: 18px;
  }
  .clearFloat{
    clear: both;
  }

</style>

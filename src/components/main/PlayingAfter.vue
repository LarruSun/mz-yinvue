<template>


    <div class="playingAfter">

        <div class="playingAfterInfo" @click="toChildInfo">
          <img :src="filmAfter.cover.origin" >
          <div class="info">
              <div class="left">{{filmAfter.name}}</div>
              <div class="right">{{mydate}} 上映</div>
              <div class="clearFloat"></div>
          </div>
        </div>
    </div>
</template>

<script>
  import Router from 'vue-router'
  import moment from 'moment'
  var route = new Router();

    export default {
        name: 'playingAfter',
        data () {
            return {
                mydate:'',
            }
        },
        props:['filmAfter'],
        methods:{
        toChildInfo(){
          this.$store.dispatch('changeMovieName',this.filmAfter.name);
          route.push('/film/detaileInfo/'+this.filmAfter.id);
        },
        dataChange(){
//          this.date = moment().format('YYYY 年 MM 月 DD 日',this.$props.filmAfter.premiereAt);
          this.mydate = moment(this.filmAfter.premiereAt).format(' M 月 DD 日');
        }
      },
      created(){
        this.dataChange();
      },
      computed:{

      }
    }
</script>

<style scoped>

    .playingAfterInfo{
      width: 90%;
      margin: 0 auto;
      margin-top: 10px;
      background: #fff;
    }
    .playingAfterInfo img{
        width: 100%;
    }
    .info .left{
        float: left;
        margin: 10px;
    }
    .info .right{
        float: right;
        margin: 10px;
        font-size: 10px;
        color: RGB(245, 162, 125);
    }
    .clearFloat{
        clear: both;
    }
</style>

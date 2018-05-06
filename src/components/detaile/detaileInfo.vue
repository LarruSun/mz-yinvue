<template>
    <div class="detaileInfo">
        <div class="detaileInfoImg">
           <img :src="getDetaile.cover.origin">
        </div>
        <div class="iconTitle">
          <div class="leftIcon"></div><p class="titleDeatile">影片简介</p>
        </div>
        <div class="clearDetaile"></div>
        <div class="contentInfo">
              <ul>
                  <li>
                    <span class="letterSpace4">
                      <span>导</span>
                      <span>演</span>
                    </span>：{{getDetaile.director}}
                  </li>
                  <li>
                    <span class="letterSpace4 leftJob leftMar">
                      <span>主</span>
                      <span>演：</span>
                    </span>
                    <div class="rightName">
                      <span  v-for="i in getDetaile.actors">{{i.name}}&nbsp;&nbsp;|</span>
                      <p></p>
                    </div>
                  </li>
                  <li>
                      <span>地区语言：</span><span>{{getDetaile.nation}}（{{getDetaile.language}}）</span>
                  </li>
                  <li>
                      <span class="letterSpace4 leftJob">
                        <span>类</span>
                        <span>型：</span>
                      </span>
                      <div class="rightName">
                        <p>{{getDetaile.category}}</p>

                      </div>
                  </li>
                  <li>
                    <span>上映日期：</span><span>{{dateTime}}上映 传参实验</span>
                  </li>
                  <li>
                      <div class="detaileInformation">
                        {{getDetaile.synopsis}}
                      </div>
                  </li>
              </ul>
              <div class="saleBtn">
                  立即购票
              </div>
          </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import moment from 'moment'
    export default {
        name: 'detaileInfo',
        data () {
            return {
              arrCategory1:[],
              dateTime:''
            }
        },
      methods:{
           changDetaileMovie(){
               this.$store.dispatch('changDetailInfo',this.$route.params.id);
           },
            dateChangDetail(){
               this.dateTime = moment(this.getDetaile.premiereAt).format('MM 月 DD 日')
            }
      },
      created(){
            this.changDetaileMovie();
      },
      mounted(){
//            this.getCategory();
        this.dateChangDetail();
      },
      computed:{
        ...mapGetters({
            getDetaile:'getDetaileInfo'
        })
      }
    }
</script>

<style>
    .detaileInfoImg img{
        width: 100%;
        height: auto;
    }
    .detaileInfo{
        margin-top: -10px;
        text-align: left;
    }
    .iconTitle{
        margin-top: 20px;
    }
    .titleDeatile{
        margin-top: 6px;
        padding-left: 20px;
        float: left;
        font-size: 16px;
    }
    .leftMar{
        margin-top: 2px;
    }
    .clearDetaile{
        clear: both;
    }
    .leftIcon{
        float: left;
        width: 18px;
        height: 25px;
        background-color: orange;
    }
    .contentInfo{
        margin-left: 20px;
        text-align: left;
        margin-top: 20px;
    }
    .contentInfo ul{
        font-size: 12px;
    }
    .contentInfo ul li{
        margin-top: 20px;
        width: 100%;
    }
    .letterSpace4 span:last-child{
        margin-left: 22px;
    }
    .leftJob{
        float: left;
    }
    .rightName span{
        padding-left: 5px;
        padding-right: 5px;
        margin-top: -2px;
        display: inline-block;
        line-height: 20px;
    }
    .detaileInformation{
        text-align: left;
        letter-spacing: 1px;
        line-height: 20px;
        padding-right: 10px;
        text-indent: 25px;
    }
    .saleBtn{
        width: 140px;
        height: 30px;
        background-color: orange;
        color: #fff;
        border-radius: 18px;
        text-align: center;
        line-height: 30px;
        position: fixed;
        bottom: 20px;
        left: 27%;
    }
</style>

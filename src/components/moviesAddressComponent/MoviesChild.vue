<template>
    <div class="movieChild">
        <div class="movTopImg">
          <img src="//static.m.maizuo.com/v4/static/app/asset/66461d1a02a9eaa64876c90952c42aed.png">
        </div>
        <div class="mybackground">
          <div class="movCenter1  movCenter2">
            <div class="centerIcon">
              <i class="iconfont icon-chair"></i>
            </div>
            <div class="centerRight">
              <div class="centerRightInfo">
                <span class="centerTic">订座票</span>
                <div  class="centerBtn">立即订座</div>
              </div>
              <div class="centerRightInfo1">
                选好场次及作为到影院自助取票
            </div>
            </div>
          </div>
          <div class="movCenter1">
            <div class="centerIcon">
              <i class="iconfont icon-chair"></i>
            </div>
            <div class="centerRight">
              <div class="centerRightInfo">
                <span class="centerTic">订座票</span>
                <div  class="centerBtn">立即订座</div>
              </div>
              <div class="centerRightInfo1">
                选好场次及作为到影院自助取票
            </div>
            </div>
          </div>
          <div class="movCenter1">
            <div class="centerIcon">
              <i class="iconfont icon-chair"></i>
            </div>
            <div class="centerRight">
              <div class="centerRightInfo">
                <span class="centerTic">订座票</span>
                <div  class="centerBtn">立即订座</div>
              </div>
              <div class="centerRightInfo1">
                选好场次及作为到影院自助取票
            </div>
            </div>
          </div>
          <div class="movCenter1">
            <div class="centerIcon">
              <i class="iconfont icon-chair"></i>
            </div>
            <div class="centerRight">
              <div class="centerRightInfo">
                <span class="centerTic">订座票</span>
                <div  class="centerBtn">立即订座</div>
              </div>
              <div class="centerRightInfo1">
                选好场次及作为到影院自助取票
             </div>
            </div>
            <div id="clearF"></div>
          </div>
          <div class="movFooter">
              <div>
                  <div class="circle"><i class="iconfont icon-ticket"></i></div>
                  <div>取票</div>
              </div>
              <div>
                  <div class="circle"><i class="iconfont icon-glasses"></i></div>
                  <div>3D</div>
              </div>
              <div>
                  <div class="circle"><i class="iconfont icon-parking"></i></div>
                  <div>停车</div>
              </div>
              <div>
                  <div class="circle">
                    <i class="iconfont icon-gift"></i>
                  </div>
                  <div>优惠</div>
              </div>
              <div>
                  <div class="circle"><i class="iconfont icon-bus"></i></div>
                  <div>交通</div>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'movieChild',
        data () {
            return {}
        }
    }
</script>

<style scoped>
    .movieChild{
        margin-top: -11px;
    }
    .mybackground{
        background-color: #fff;
    }
    .movCenter1{
        margin-top: 25px;
        border-bottom: 1px dashed #ff8160;
    }
    .movCenter2{
        padding-top: 50px;
        margin-top: -25px;
    }
    .movTopImg img{
      width: 100%;
      height: auto;
    }

    .movCenter1{
        clear: both;
        margin-left: 20px;
        margin-right: 20px;
    }
    .movCenter1{
        background: #fff !important;
        height: 80px;
    }
    .centerIcon{
        float: left;
        color: #ff8160;
        margin-top: 10px;
    }
    .centerIcon i{
        font-size: 28px;
    }
    #clearF{
        clear:both;
    }
    .centerRight{
        float: left;
        width: 85%;
        margin-left: 10px;
    }
    .centerRightInfo{
        width: 100%;
        overflow: hidden;
        font-size: 15px;
    }
    .centerRightInfo1{
        text-align: left;
        font-size: 12px;
        color: #737373;
    }
    .centerTic{
        float: left;
        margin-bottom: 20px;
        margin-top: 10px;
    }
    .centerBtn{
        float: right;
        background-color: #fe8233;
        color: #fff;
        width: 94px;
        border-radius: 38px;
        height: 30px;
        line-height:30px;
    }
    .movFooter{
        margin: 10px;
    }
    .movFooter >div{
        float: left;
        width: 20%;
    }
    .movFooter div i{
        font-size: 30px;
        color: #fe8233;
    }
    .circle{
      border: 1px solid darkblue;
      border-radius:30px;
      height: 30px;
      width: 30px;
      margin-left: 15px;
      margin-bottom: 5px;
    }
</style>

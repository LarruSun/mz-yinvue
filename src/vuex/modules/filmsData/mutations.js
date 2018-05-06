/**
 * Created by Administrator on 2017/7/18.
 */
const mutations = {
    changPlayingData(state,data){
        if(state.playingData == ''){
          console.info('第一页')
          state.playingData = data.films; //请求到的数据中的films数组赋值给playingData
        }else{
          console.info('第二页')
          var arr = state.playingData.concat(data.films);
          state.playingData = arr;
          console.info(state.playingData);
        };
    },
    changAfterPlayingData(state,data){
       //请求到的数据中的films数组赋值给playingData
      if(state.afterPlaying == ''){
         state.afterPlaying = data.films;
      }else{
          var arrAfter = state.afterPlaying.concat(data.films);
          state.afterPlaying = arrAfter;
      }
    },
  changSwiperPicture(state,data){
    state.swiperPicture = data.billboards;//请求到的数据中的films数组赋值给afterPlaying
  },
  //改变detaileId
  changDetalieInfo(state,data){
      state.detaileInfo = data.film;
      console.info( state.detaileInfo );
  },
  changLoadFlagShow(state,e){
    state.loadFlag = e;
  },
  changLoadFlagHide(state,e){
    state.loadFlag = e;
  }
}

export  default mutations

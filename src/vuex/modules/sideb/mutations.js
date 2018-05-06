/**
 * Created by Administrator on 2017/7/18.
 */
const mutations = {

    changSideShow (state,isShow){
        state.sideShow = isShow;
        console.info('mutation')
    },
    changePage(state,pageCount){
        state.page = pageCount;
    },
    changeScollHeight(state,myHeight){
      state.scollHeight = myHeight;
    },
    changFilmName(state,moviename){
      state.filmName = moviename;
    },
    changTotop(state,topFlag){
      state.showTopBtn = topFlag;
    },
}

export  default mutations

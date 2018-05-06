/**
 * Created by Administrator on 2017/7/18.
 */
export const changSideShow = ({commit},isShow)=>{commit('changSideShow',isShow)
}
// changePage 更改page
export const changPageCount = ({commit},pageCount)=>{commit('changePage',pageCount)
  console.info('page');
}
export const changeScollH = ({commit},myHeight)=>{commit('changeScollHeight',myHeight)
  console.info('myHeight');
}

export const changeMovieName = ({commit},moviename)=>{commit('changFilmName',moviename)
  console.info('myHeight');
}

export const changTotopBtn = ({commit},topFlag)=>{commit('changTotop',topFlag)
  console.info('myHeight');
}

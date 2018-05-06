/**
 * Created by Administrator on 2017/7/18.
 */
import axios from 'axios'

// export const changPlayingData = ({commit},isShow)=>{commit('changSideShow',isShow)
//   console.info(123);
// }

const _get = ({url,query},commit)=>{
      let _url='';
      commit('changLoadFlagShow',true);
      if(query){
          _url = `http://localhost:8079/v4/api${url}?${query}`
      }else {
          _url = `http://localhost:8079/v4/api${url}`
      }

      return axios.get(_url).then((res)=>{

        if(res.status>=200 && res.status<300){
          commit('changLoadFlagHide',false);
            return res.data
        }else {
          return Promise.reject(new Error(res.status))
        }
      })
}

//获取正在上映的电影数据

export const nowPlayingList=({commit},pageArr)=>{
    let count = pageArr[0];
    let page = pageArr[1];
    const url = '/film/now-playing'
    const query = `count=${count}&page=${page}&t=`+new Date().getTime()

    return _get({url,query},commit).then((res)=>{
        if(res.status === 0){
          // console.info(res.data);
          return commit('changPlayingData',res.data);
        }else {
          return Promise.reject(new Error('failed',res.status))
        }
    }).catch((error)=>{
        return Promise.reject(error)
    })
}
//获取即将上映的数据
export const afterPlayingList=({commit},pageArr)=>{
  let count = pageArr[0];
  let page = pageArr[1];
  // console.info(9999);
  const url = '/film/coming-soon'
  const query = `count=${count}&page=${page}&t=`+new Date().getTime()

  return _get({url,query},commit).then((res)=>{
    if(res.status === 0){
      // console.info(res.data);
      return commit('changAfterPlayingData',res.data);
    }else {
      return Promise.reject(new Error('failed',res.status))
    }
  }).catch((error)=>{
    return Promise.reject(error)
  })
}
//获取轮播图片
export const imgList=({commit})=>{
  // console.info(9999);
  const url = '/billboard/home'
  const query = `&t=`+new Date().getTime()

  return _get({url,query},commit).then((res)=>{
    if(res.status === 0){
      console.info(res.data);
      return commit('changSwiperPicture',res.data);
    }else {
      return Promise.reject(new Error('failed',res.status))
    }
  }).catch((error)=>{
    return Promise.reject(error)
  })
}

//获取detail的数据
export const changDetailInfo=({commit},id)=>{
  // console.info(9999);
  const url = '/film/'+id
  const query = `&t=`+new Date().getTime()

  return _get({url,query},commit).then((res)=>{
    if(res.status === 0){
      console.info(res.data);

      return commit('changDetalieInfo',res.data);
    }else {
      return Promise.reject(new Error('failed',res.status))
    }
  }).catch((error)=>{
    return Promise.reject(error)
  })
}


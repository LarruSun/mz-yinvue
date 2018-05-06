/**
 * Created by Administrator on 2017/7/18.
 */
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
    playingData:[],
    afterPlaying:[],
    swiperPicture:[],
    detaileInfo:{},
    detaileGet:false,
    loadFlag:false
}

export default { state,actions,mutations,getters }

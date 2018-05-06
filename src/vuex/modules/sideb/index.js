/**
 * Created by Administrator on 2017/7/18.
 */
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
    sideShow:false,
    page:1,
    scollHeight:0,
    filmName:'',
    showTopBtn:false,
}

export default { state,actions,mutations,getters }

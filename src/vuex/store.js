/**
 * Created by Administrator on 2017/7/18.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import sideb from './modules/sideb'
import filmsData from './modules/filmsData'
Vue.use(Vuex)


export default new Vuex.Store({
    modules:{sideb,filmsData}
})


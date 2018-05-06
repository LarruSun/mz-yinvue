// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'   //axios不需要Vue.use()
import store from './vuex/store'
Vue.config.productionTip = false
//是否是开发环境


Vue.use('flexble')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  swiper,
  swiperSlide,
  template: '<App/>',
  components: { App }
})

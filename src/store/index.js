import Vue from 'vue'
import Vuex from 'vuex'
import movie from './modules/movie'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movie
  }
})

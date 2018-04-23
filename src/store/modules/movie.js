import request from 'superagent'
import jsonp from 'superagent-jsonp'

const state = {
  hotmovies: []
}

const mutations = {
  getMovie (state, payload) {
  }
}

const actions = {
  getMovie ({ commit }) {
    request
      .get('https://api.douban.com/v2/movie/in_theaters?count=8')
      .use(jsonp)
  }
}

export default {
  state,
  mutations,
  actions
}

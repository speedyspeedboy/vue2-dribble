import request from 'superagent'
// import jsonp from 'superagent-jsonp'

const state = {
  dypic: [],
  apikey: 'd07c464d79587f342c608751fd48b9c2',
  info: '',
  length: '',
  language: '',
  vote: ''
}

const mutations = {
  getMovie (state, payload) {
    state.dypic = payload.res
  },
  getDetails (state, payload) {
    state.info = payload.info
    state.length = payload.length
    state.language = payload.language
    state.vote = payload.vote
  }
}

const actions = {
  getMovie ({commit}, payload) {
    request
      .get('https://api.themoviedb.org/3/movie/' + payload.id + '/images?api_key=' + state.apikey)
      .then((res) => {
        commit({ type: 'getMovie', res: res.body.backdrops })
        // this.dypic = res.body.backdrops
        // console.log(this.dypic[0].file_path)
      })
      .catch(function (err) {
        console.log(err.message, err.response)
      })
  },
  getDetails ({commit}, payload) {
    request
      .get('https://api.themoviedb.org/3/movie/' + payload.id + '?api_key=' + state.apikey)
      .then((res) => {
        // if (!err) {
        commit({
          type: 'getDetails',
          info: res.body.overview,
          length: res.body.runtime,
          language: res.body.original_language,
          vote: res.body.vote_average
        })
        // this.info = res.body.overview
        // this.length = res.body.runtime
        // this.language = res.body.original_language
        // this.vote = res.body.vote_average
      })
      .catch(function (err) {
        console.log(err.message, err.response)
      })
  }
}

export default {
  state,
  mutations,
  actions
}

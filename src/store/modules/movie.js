import request from 'superagent'

const state = {
  dypic: []
}

const mutations = {
  getMovie (state) {
    request
      .get('https://api.themoviedb.org/3/movie/' + this.$route.params.id + '?api_key=' + this.apikey)
      .then(res => {
        // if (!err) {
        // console.log(res.body)
        // console.log(res.body.overview)
        // console.log()
        this.info = res.body.overview
        this.length = res.body.runtime
        this.language = res.body.original_language
        this.vote = res.body.vote_average
      })
      .catch(function (err) {
        console.log(err.message, err.response)
      })
    request
      .get('https://api.themoviedb.org/3/movie/' + this.$route.params.id + '/images?api_key=' + this.apikey)
      .then((res) => {
        console.log(res.body)
        // console.log('https://image.tmdb.org/t/p/original/' + res.body.backdrops)
        state.dypic = res.body.backdrops
        console.log(state.dypic[0].file_path)
      })
      .catch(function (err) {
        console.log(err.message, err.response)
      })
  }
}

const actions = {
  getMovie ({ commit }) {
    request
      .get('https://api.themoviedb.org/3/movie/' + this.$route.params.id + '?api_key=' + this.apikey)
      .then(res => {
        // if (!err) {
        // console.log(res.body)
        // console.log(res.body.overview)
        // console.log()
        this.info = res.body.overview
        this.length = res.body.runtime
        this.language = res.body.original_language
        this.vote = res.body.vote_average
      })
      .catch(function (err) {
        console.log(err.message, err.response)
      })
    request
      .get('https://api.themoviedb.org/3/movie/' + this.$route.params.id + '/images?api_key=' + this.apikey)
      .then((res) => {
        console.log(res.body)
        // console.log('https://image.tmdb.org/t/p/original/' + res.body.backdrops)
        this.dypic = res.body.backdrops
        console.log(this.dypic[0].file_path)
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

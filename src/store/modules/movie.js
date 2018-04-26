import request from 'superagent'
import jsonp from 'superagent-jsonp'

const state = {
  moviePicture: []
}

const mutations = {
  getMovie (state, payload) {
    state.moviePicture = payload.res
  }
}

const actions = {
  getMovie ({ commit }) {
    request
      .get('https://api.themoviedb.org/3/movie/245891/images?api_key=d07c464d79587f342c608751fd48b9c2')
      .use(jsonp)
      .end((err, res) => {
        if (!err) {
          commit({
            type: 'getMovies',
            tag: 'moviePicture',
            res: res.body.backdrops
          })
          console.log(res.body.backdrops)
        }
      })
  }
}

export default {
  state,
  mutations,
  actions
}

import request from 'superagent'

const state = {
  upcoming_pic: [],
  pop_pic: [],
  horpic: [],
  apikey: 'd07c464d79587f342c608751fd48b9c2'
}

const mutations = {
  getCardMovie (state, payload) {
    switch (payload.tag) {
      case 'upcoming':
        state.upcoming_pic = payload.res
        break
      case 'pop':
        state.pop_pic = payload.res
        break
      case 'horizon':
        state.horpic = payload.res
        break
      default:
        state.upcoming_pic = payload.res
    }
  }
}

const actions = {
  getCardMovie ({commit}) {
    request
      .get('https://api.themoviedb.org/3/movie/popular?api_key=' + state.apikey)
      .then((res) => {
        // console.log(state.apikey)
        // console.log(res.body)
        // console.log(res.body.results)
        commit({
          type: 'getCardMovie',
          res: res.body.results,
          tag: 'pop'
        })
      })
      .catch(function (err) {
        console.log(err.message, err.response)
      })
    request
      .get('https://api.themoviedb.org/3/movie/upcoming?api_key=' + state.apikey + '&page=1')
      .then((res) => {
        commit({
          type: 'getCardMovie',
          res: res.body.results,
          tag: 'upcoming'
        })
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

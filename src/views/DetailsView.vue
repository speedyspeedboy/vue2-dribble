<template>
  <div>
    <div class="testimg">
      <router-link to="/home" replace>
        <i class="back iconfont icon-back1"></i>
      </router-link>
      <!-- <transition name="scale"> -->
        <!-- <img src="https://image.tmdb.org/t/p/original//umC04Cozevu8nn3JTDJ1pc7PVTn.jpg" :class="{big: big}" @click="onClick"> -->
        <img v-if="dypic[0]" :src="'https://image.tmdb.org/t/p/w1280/' + dypic[0].file_path" @click="onClick">
      <!-- </transition> -->
    </div>
    <div class="info">
      <a>{{ length }}min</a>
      <a>{{ language }}</a>
      <a>{{ vote }}</a>
    </div>
    <div class="scrolldiv">
      <ul class="scrollhor" >
        <li v-if="dypic" v-for="item in dypic" :key="item.message">
          <div class="album">
            <img :src="'https://image.tmdb.org/t/p/w780/' + item.file_path">
          </div>
        </li>
      </ul>
    </div>
    <div class="intro">
      <span>{{ info }}</span>
    </div>
  </div>
</template>

<script>
import request from 'superagent'
// import

export default {
  data () {
    return {
      big: false,
      apikey: 'd07c464d79587f342c608751fd48b9c2',
      info: '',
      length: '',
      language: '',
      vote: '',
      dypic: []
    }
  },
  methods: {
    onClick () {
      this.big = !this.big
    }
  },
  created () {
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
</script>

<style lang="scss" scoped>
// .scale-enter-active, .scale-leave-active {
//   transition: all .5s;
// }
// .scale-enter, .scale-leave-to {
//   // opacity: 0;
//   // transform: scale(0.5);
//   // height: 50%;
//   // float: right;
//   visibility: hidden;
// }
.testimg {
  height: auto;
  width: 100%;
  img {
    // height: 100%;
    width: 100%;
    margin: 0 auto;
    // margin-top: -200px;
    transition: all .5s;
  }
  .big {
    transform: scale(0.5);
  }
}
.back {
  position: absolute;
  float: left;
  z-index: 1000;
  top: 25px;
  left: 25px;
  font-size: 25px;
  // font-weight: 900;
  font-weight: bold;
  color: rgba(240, 236, 236, 1);
}
.info {
  width: 100%;
  display: flex;
  margin-top: 10px;
  // background: lightskyblue;
  a {
    display: block;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    width: 33.33%;
    border-right: solid 0.1rem #eee;
  }
}
.album {
  margin:20px 20px;
  width: 200px;
  height: 130px;
  overflow: hidden;
  // border: 1px solid cornflowerblue;
  position: relative;
  border-radius: 10px;
  img {
    height: 100%;
    width: auto;
    left:50%;
    position: relative;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
  }
}
.scrollhor {
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 10px;
  margin-bottom: -10px;
  li {
    display: inline-block;
  }
}
.intro {
  margin: 20px;
}
.scrolldiv {
  overflow: hidden;
}
</style>

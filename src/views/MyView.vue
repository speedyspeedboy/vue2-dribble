<template>
  <div>
    <div class="testimg">
      <!-- <transition name="scale"> -->
        <!-- <img src="https://image.tmdb.org/t/p/original//umC04Cozevu8nn3JTDJ1pc7PVTn.jpg" :class="{big: big}" @click="onClick"> -->
        <img src="https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg" @click="onClick">
      <!-- </transition> -->
    </div>
    <div class="info">
      <a>{{ length }}min</a>
      <a>{{ language }}</a>
      <a>{{ vote }}</a>
    </div>
    <div class="scrolldiv">
      <ul class="scrollhor" >
        <li v-for="item in pic" :key="item.message">
          <div class="album">
            <img :src="'https://image.tmdb.org/t/p/original/' + item.file_path">
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

export default {
  data () {
    return {
      big: false,
      items: 3,
      apikey: 'd07c464d79587f342c608751fd48b9c2',
      info: '',
      length: '',
      language: '',
      vote: '',
      pic: []
    }
  },
  methods: {
    onClick () {
      this.big = !this.big
    }
  },
  created () {
    request
      .get('https://api.themoviedb.org/3/movie/299536?api_key=' + this.apikey)
      .then(res => {
        // if (!err) {
        // console.log(res.body)
        console.log(res.body.overview)
        console.log()
        this.info = res.body.overview
        this.length = res.body.runtime
        this.language = res.body.original_language
        this.vote = res.body.vote_average
      })
      .catch(function (err) {
        console.log(err.message, err.response)
      })
    request
      .get('https://api.themoviedb.org/3/movie/299536/images?api_key=' + this.apikey)
      .end((err, res) => {
        if (!err) {
          console.log(this.info)
          // console.log('https://image.tmdb.org/t/p/original/' + res.body.backdrops)
          this.pic = res.body.backdrops
        }
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
  height: 400px;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    // margin-top: -200px;
    transition: all .5s;
  }
  .big {
    transform: scale(0.5);
  }
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
  border: 1px solid cornflowerblue;
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

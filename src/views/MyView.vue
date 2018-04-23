<template>
  <div>
    <div class="testimg">
      <!-- <transition name="scale"> -->
        <img src="../assets/big.jpg" :class="{big: big}" @click="onClick">
      <!-- </transition> -->
    </div>
    <div class="info">
      <a>length</a>
      <a>language</a>
      <a>rating</a>
    </div>
    <ul class="scrollhor" >
      <li v-for="item in items" :key="item">
        <div class="album">
          <img src="../assets/horzin.jpg">
        </div>
      </li>
    </ul>
    <div class="intro">
      <p>巨石强森饰演的灵长类动物学家一直与人类保持距离, 却跟极为聪明的银背大猩猩乔治有着深厚的感情。但是一次基因实验出错, 让这只温驯的大猩猩变成狂怒难驯的庞然巨兽。更可怕的是, 其他动物也发生了同样基因异变。他必须阻止这场全球性的灾难, 更重要是要拯救他的好友乔治。</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      big: false,
      items: 3
    }
  },
  methods: {
    onClick () {
      this.big = !this.big
    }
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
  img {
    width: 100%;
    margin-top: -200px;
    transition: all .5s;
  }
  .big {
    transform: scale(0.5);
  }
}
.info {
  width: 100%;
  display: flex;
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
  li {
    display: inline-block;
  }
}
.intro {
  margin: 20px;
}
</style>

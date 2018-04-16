<template>
  <div class="home">
    <header-bar></header-bar>
    <router-view></router-view>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar'
import FootBar from '../components/FootBar'
export default {
  name: 'home',
  data () {
    return {}
  },
  components: { HeaderBar, FootBar }
}
</script>

<style lang="scss" scoped>
.home {
  background: linear-gradient(165deg, rgb(255, 142, 93) 50%, rgb(255, 255, 255) 50%)no-repeat;
  background-size: 100% 250px;
  background-attachment: fixed;
}
</style>

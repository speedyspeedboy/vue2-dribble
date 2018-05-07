<template>
  <div class="home">
    <router-view></router-view>
    <!-- <foot-bar></foot-bar> -->
  </div>
</template>

<script>
import FootBar from '../components/FootBar'
export default {
  name: 'home',
  data () {
    return {}
  },
  components: { FootBar }
}
</script>

<style lang="scss" scoped>
.home {
  // height: 400px;
  padding-bottom: 60px;
}
</style>

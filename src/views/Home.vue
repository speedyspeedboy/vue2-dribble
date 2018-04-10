<template>
  <div>
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

</style>

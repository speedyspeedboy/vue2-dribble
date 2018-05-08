<template>
  <div class="homeview">
      <header-bar></header-bar>
      <!-- <keep-alive> -->
      <card></card>
      <!-- </keep-alive> -->
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar'
import Card from '../components/Card'
export default {
  name: 'homeview',
  data () {
    return {}
  },
  components: { HeaderBar, Card }
}
</script>

<style lang="scss" scoped>
.homeview {
  // height: 400px;
  // background: linear-gradient(165deg, rgb(255, 142, 93) 50%, rgb(255, 255, 255) 50%)no-repeat;
  // background-size: 100% 250px;
  // background-attachment: fixed;
}
</style>

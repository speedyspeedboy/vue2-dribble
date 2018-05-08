<template>
  <div class="all">
    <div class="headbar">
      <p>Popular</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerbar',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.all {
  /* z-index: 1000; */
  /* position: fixed; */
  height: 30px;
  width: 100%;
  /* top: 10px; */
  /* margin-top: 10px; */
  line-height: 30px;
  // background: darkturquoise;
}
.headbar {
  margin-top: 25px;
  padding: 0 20px;
  p {
    font-size: 1.7rem;
    font-weight: bolder;
  }
}
</style>

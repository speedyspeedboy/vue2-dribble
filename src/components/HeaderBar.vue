<template>
  <div class="all">
    <div class="headbar">
      <p>NEW</p>
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
    font-size: 2rem;
    font-weight: bold;
  }
}
</style>

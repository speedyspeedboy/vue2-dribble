<template>
  <div class="footer">
    <div class="tab-item home"><img src="../assets/home.png"></div>
    <div class="tab-item search"><img src="../assets/search.png"></div>
    <div class="tab-item my"><img src="../assets/user.png"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.footer {
  z-index: 1000;
  position: fixed;
  bottom: 0px;
  // right: 0px;
  height: 50px;
  // line-height: 60px;
  width: 100%;
  // background: deepskyblue;
  display: flex;
  .tab-item {
    flex: 1;
    // width: 20px;
    // background: salmon;
    // height: 50px;
    // line-height: 50px;
    text-align: center;
    // margin-top: 5px;
    img {
      width: 40px;
      height: 40px;
    }
  }
}
</style>

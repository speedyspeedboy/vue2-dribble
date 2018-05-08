<template>
  <div class="footer">
    <div class="tab-item home"><router-link to="/home/homepage"><img src="../assets/home.png"></router-link></div>
    <div class="tab-item search"><router-link to="/home/search"><img src="../assets/search.png"></router-link></div>
    <div class="tab-item my"><router-link to="/home/my"><img src="../assets/user.png"></router-link></div>
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
  height: 60px;
  // line-height: 60px;
  width: 100%;
  background: #ffffff;
  display: flex;
  box-shadow:  0px -1px 20px rgba(138, 132, 132, 0.3);
  .tab-item {
    flex: 1;
    // width: 20px;
    // background: salmon;
    // height: 50px;
    // line-height: 50px;
    text-align: center;
    margin-top: 8px;
    img {
      width: 40px;
      height: 40px;
    }
  }
}
</style>

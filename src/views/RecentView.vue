<template>
  <div class="recentall">
    <div class="column-left">
      <div class="recentimg"><img src="../assets/recent/WechatIMG147.jpeg"></div>
      <div class="recentimg"><img src="../assets/recent/WechatIMG148.jpeg"></div>
    </div>
    <div class="column-right">
      <div class="recentimg"><img src="../assets/recent/WechatIMG149.jpeg"></div>
      <div class="recentimg"><img src="../assets/recent/WechatIMG147.jpeg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recentview',
  data () {
    return {}
  },
  components: { }
}
</script>

<style lang="scss" scoped>
.recentall {
  display: flex;
  // flex-wrap: wrap;
  // flex-direction: row;
  // text-align: center;
  // width: auto;
  width: 94%;
  margin: 0 auto;
}
.column-left{
  flex-direction: column;
  width: 50%;
  // margin: 4%;
}
.column-right {
  flex-direction: column;
  width: 50%;
  // margin: 4%;
}
.recentimg {
  // flex: 1;
  // width: 42%;
  margin: 4%;
  img {
    width: 100%;
    border-radius: 6px;
  }
}
</style>

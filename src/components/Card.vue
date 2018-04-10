<template>
  <div class="all">
    <div class="cardall">
      <div class="headscu">
        <div class="headimg">
          <img src="../assets/logo2.jpg">
          <!-- <i class="iconfont icon-shouye"></i> -->
        </div>
        <div class="des">
          <p class="pname">name</p>
        <!-- </div> -->
        <!-- <div class="divp"> -->
          <span class="pmile">mile</span>
        </div>
      </div>
      <div class="infoimg">
        <img src="../assets/dribbble3.png">
      </div>
      <div class="info">
        <p>She plays with simple shapes, lines, color and with the graphic arrangement of these elements t...</p>
      </div>
    </div>
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
.cardall {
  margin: 20px 18px;
  // background: orange;
  border-radius: 6px;
}
.headscu {
  width: 100%;
  display: flex;
  height: 40px;
  // background: rgb(205, 245, 255);
  // position: relative;
  .headimg {
    width: 40px;
    height: 40px;
    margin-top: 0;
    margin-left: 10px;
    img {
    // flex: 1;
    // position: absolute;
    // flex-direction: row;
    // float: left;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }

  .des {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    // width: 20%;
    // flex: 1;
    padding-left: 10px;
    p {
      line-height: 20px;
    }
  }
}

.infoimg {
  margin-top: 10px;
  img {
    width: 98%;
    border-radius: 2%;
  }
  span {
    display: block;
    margin-left: 2px;
  }
}
.info {
  // background: red;
  // position: absolute;
  // height: 30px;
  padding: 10px 5px;
  p {
    text-align: left;
  }
}
</style>

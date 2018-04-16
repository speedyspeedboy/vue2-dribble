<template>
  <!-- <ul>
    <li><router-link tag="div" to="/home/recent">Recent</router-link></li>
    <li><router-link tag="div" to="/home/homepage">Attention</router-link></li>
    <li><router-link tag="div" to="/home/homepage">Popular</router-link></li>
    <li class="move"></li>
  </ul> -->
  <div class="all">
    <div class="headbar">
      <p>IN THEATERS</p>
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

<style scoped>
.all {
  z-index: 1000;
  position: fixed;
  height: 30px;
  width: 100%;
  top: 0;
  background: darkturquoise;
}
.headbar {
  /* list-style: none; */
  /* display: flex; */
  /* justify-content: space-around; */
  /* padding: 10px,0,0,0; */
  /* margin-top: 15px; */
  margin-bottom: 20px;
}
li {
  list-style: none;
  /* padding: 30px; */
  font-weight: bold;
  text-align: center;
  width: 33.333%;
}

.move {
  height: 4px;
  width: 8%;
  border-top: 2px solid red;
  position: absolute;
  /* margin: auto; */
  left: 180px;
  /* right: 187px; */
  top: 45px;
  transition: left .2s ease-in-out 0s;
  /* transition: right .2s ease-in-out 0s; */
  /* -webkit-transition: left .2s ease-in-out 0s; */
  /* -webkit-transition: right .2s ease-in-out 0s; */
}
li:nth-child(1):hover~ .move {
  left: 12.5%;
}
li:nth-child(2):hover~ .move {
  left: 46%;
}
li:nth-child(3):hover~ .move {
  left: 79%;
}
</style>

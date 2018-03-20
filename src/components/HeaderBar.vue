<template>
  <ul>
    <li>Recent</li>
    <li>Attention</li>
    <li>Popular</li>
    <li class="move"></li>
  </ul>
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
ul {
  /* list-style: none; */
  display: flex;
  justify-content: space-around;
  padding: 0;
}
li {
  list-style: none;
  /* padding: 30px; */
  font-weight: bold;
}
.move {
  height: 4px;
  width: 40px;
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
  left: 50px;
}
li:nth-child(2):hover~ .move {
  left: 180px;
}
li:nth-child(3):hover~ .move {
  left: 320px;
}
</style>

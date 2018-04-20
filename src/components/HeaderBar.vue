<template>
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
  /* z-index: 1000; */
  /* position: fixed; */
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
  /* margin-bottom: 20px; */
}
</style>

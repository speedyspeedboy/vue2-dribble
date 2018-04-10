<template>
  <div>
    <div class="homehead">
      <input type="text" placeholder="Type outlet name">
      <card></card>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'
// import HeaderBar from '../components/HeaderBar'
// import FootBar from '../components/FootBar'
export default {
  name: 'homeview',
  data () {
    return {}
  },
  components: { Card }
}
</script>

<style lang="scss" scoped>
.homehead {
  text-align: center;
}
input {
  /* margin: 0 auto; */
  // margin-top: 20px;
  padding-left: 15px;
  width: 350px;
  height: 34px;
  background: #fafafa;
  border-radius: 0.3rem;
  border: 0;
  font-size: 16px;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #999999;
}

</style>

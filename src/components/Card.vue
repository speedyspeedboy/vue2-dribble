<template>
  <div class="card">
        <div class="cardall" v-for="item in items" :key="item.message">
            <img src="../assets/RMPGE.jpg">
            <h3 class="title">{{ item.message }}</h3>
            <p class="type">动画/科幻</p>
            <p class="year">2016</p>
            <div class="rating">
              <template v-for="n in full">
                <span class="star-full"></span>
              </template>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { message: 'Rampage' },
        { message: 'The Good Dinosaur The Good Dinosaur' },
        { message: '1' },
        { message: '2' },
        { message: '3' }

      ],
      full: 5
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  padding-top: 30px;
}
.cardall {
  width: 84%;
  margin: 20px auto;
  height: 150px;
  padding: 10px;
  border-radius: 6px;
  background: #ffffff;
  position: relative;
  // background: aquamarine;
  box-shadow:  2px 3px 22px 4px rgba(102, 97, 97, 0.1);
  img {
    height: 100%;
    border-radius: 6px;
    float: left;
  }
  .title {
    margin-top: 10px;
    margin-left: 120px;
    font-weight: 500;
    text-align: justify;
    line-height: 1.41;
    font-size: 1.3rem;
  }
  .type, .year {
    margin-top: 4px;
    margin-left: 120px;
    font-size: 0.5rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    // font-weight: 90;
    color: rgba(181, 187, 200, 1);
  }
  .type {
    color: rgba(130, 131, 134, 1);
  }
  .rating {
    margin-left: 120px;
    position: absolute;
    bottom: 15px;
  }
  .star-full {
    display: inline-block;
    margin-left: 2px;
    width: 1.3rem;
    height: 1.3rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==);
    background-size: 1.3rem 1.3rem;
  }
}

</style>

<template>
  <div class="page">
    Page is search
    <ul>
      <li v-for="(item, index) in $store.state.navbar.app" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'search',
  data() {
    return {
      list: []
    }
  },
  // async mounted() { // 客户端渲染
  //   const self = this
  //   const {status, data: {list}} = await axios.get('/city/list')
  //   if (status === 200) {
  //     self.list = list
  //   }
  // }
  async asyncData() { // 客户端渲染
    const {status, data: {list}} = await axios.get('http://localhost:3000/city/list')
    if (status === 200) {
      return {
        list
      }
    }
  }
}
</script>

<style lang="css">
</style>

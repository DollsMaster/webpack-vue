<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style scoped lang="scss">
div {
  font-size: 12px;
  color: red;
  span {
    font-size: 22px;
    color: green;
  }
}
</style>
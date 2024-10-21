<script setup>
import headerMenu from './components/headerMenu.vue'
import home from '../home/home.vue'
</script>

<template>
  <div class="layout">
    <header-menu></header-menu>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">

</style>
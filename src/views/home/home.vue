<script setup>
import {ref} from 'vue'
import banner from '@/components/banner/banner.vue'
import recommList from './components/recommList.vue'
</script>

<template>
  <div class="home">
    <div class="banner-main layout-direction-row">
      <banner style="width: 40%"></banner>
      <recommList style="width: 60%;padding: 0 0 0 0.75rem"></recommList>
    </div>
  </div>

</template>

<style scoped lang="scss">
.home {
  padding: 0.7rem 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  .banner-main {
    width: 1180px;
  }
}
</style>
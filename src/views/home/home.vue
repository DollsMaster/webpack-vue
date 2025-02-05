<script setup>
import {ref} from 'vue'
import banner from '@/components/banner/banner.vue'
</script>

<template>
  <div class="home">
    <div class="layout-width">
      <banner></banner>
    </div>
  </div>

</template>

<style scoped lang="scss">

.home {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
<script setup>
import navMenu from '@/components/navMenu/navMenu.vue';
import navSingin from '@/components/navMenu/navSignIn.vue'
import userInfo from '@/components/navMenu/userInfo.vue'
import {navigationBarOption} from "@/config/dictonary";
</script>

<template>
  <div class="header-menu">
    <img class="header-banner" src="../../../assets/banner.jpg" alt="">
    <div class="header-menu-compoents">
      <div class="layout-width layout-direction-row layout-center" style="height: 100%">
        <nav-menu :options="navigationBarOption"></nav-menu>
        <nav-singin></nav-singin>
        <user-info></user-info>
        <div class="search layout-center">
          <el-icon size="1.5rem"><Search /></el-icon>
        </div>
      </div>
    </div>

  </div>

</template>

<style scoped lang="scss">
.header-menu {
  position: relative;
  height: 250px;
}
.header-banner {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.header-menu-compoents {
  width: 100vw;
  height: 3.1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;

  box-shadow: 0 0 10px 0 rgba(0,0,0,.15);
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, .2);
}
.search {
  padding: 0 1rem;
  height: 100%;
  &:hover {
    transition: all 0.5s;
    background-color: rgba(0, 0, 0, .2);
    cursor: pointer;
  }
}
</style>
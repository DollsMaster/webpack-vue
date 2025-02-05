<script setup>
import {ref} from 'vue'
import banner from '@/components/banner/banner.vue'
import recommList from './components/recommList.vue'
import articleList from './components/articleList.vue'
</script>

<template>
  <div class="home">
    <div class="layout">
      <div class="banner-main layout-direction-row">
        <banner style="width: 40%"></banner>
        <recommList style="width: 60%;padding: 0 0 0 0.75rem"></recommList>
      </div>
      <div class="content">
        <div class="content-article">
          <article-list></article-list>
          <article-list></article-list>
          <article-list></article-list>
        </div>
        <div class="content-navigater">
          dsdfsdfsdfs
        </div>
      </div>

    </div>

  </div>

</template>

<style scoped lang="scss">
.home {
  padding: 0.7rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  .layout {
    width: 1180px;
  }
  .banner-main {
    width: 100%;
    height: 272px;
  }
}
.home-box_header {
  span {
    display: block;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    background-color: #61b4ca;
  }
  i {
    &:before {
      font-family: "Font Awesome 5 Free";
      content: "\f005";
    }
  }
}
.content {
  display: flex;
  flex-direction: row;
}
.content-navigater {
  width: 200px;
  height: 800px;
  border: sienna solid 1px;
}
</style>
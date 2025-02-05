<script setup>
import {ref} from 'vue'
import {newArticles} from '../../../config/dictonary'
import articleBox from '@/components/articleBox/articleBox.vue'
const articleImgs = newArticles;
const articleImgsModel = ref(articleImgs)
</script>

<template>
  <div class="article-title layout-direction-row">
    <span class="article-title-icon layout-center">
      <el-icon class="title-icon" size="1.5rem"><StarFilled /></el-icon>
    </span>
    <h1>最新文章</h1>
  </div>
  <div class="article-list">
    <article-box class="article-box" v-for="(item, index) in articleImgsModel" :data="item"></article-box>
  </div>

</template>

<style scoped lang="scss">
.article-title {
  align-items: center;
  padding: 1rem 0;
  .article-title-icon {
    margin-right: 0.4rem;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    background-color: #61b4ca;
  }
  .title-icon {
    color: #ffffff;
  }
  h1 {
    font-size: 1.2rem;
  }
}
.article-list {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .article-box {
    margin: 0 .3rem .7rem .3rem;
    flex: 0 0 20%;
    max-width: calc(20% - 0.6rem);
  }
}
</style>
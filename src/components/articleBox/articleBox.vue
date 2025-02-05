<script setup>
import {ref} from 'vue'
defineProps({
  data: Object
})
</script>

<template>
  <div class="article-wrap">
    <div class="article-img-wrap">
      <img class="article-img" :src="data.src">
    </div>

    <div class="article-name">
      <span>{{data.label}}</span>
    </div>
    <div class="article-info">
      <div class="article-owner">
        <img class="article-owner-img" :src="data.ownerImg">
        <span class="article-owner-name">{{data.owner}}</span>
      </div>
      <span>{{data.timer}}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.article-wrap {
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: 15rem;

  box-shadow: 0 3px 10px rgba(0, 0, 0, .1);
  border-radius: 1rem;
}
.article-img-wrap {
  width: 100%;
  height: 63%;
  .article-img {
    width: inherit;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem 1rem 0 0;
  }
}
.article-name {
  display: flex;
  padding: .5rem;
  span {
    width: 100%;
    color: #151b3c;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    word-break: break-all;
    -webkit-box-orient: vertical;
  }
}
.article-info {
  font-size: .7rem;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #525e54;
  .article-owner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .article-owner-name {
    margin: 0 0 0 .3rem;
    font-size: .7rem;
  }
  .article-owner-img {

    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;
  }
}
</style>
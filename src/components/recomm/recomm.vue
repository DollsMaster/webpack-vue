<script setup>
import {ref} from 'vue'
defineProps({
  src: String,
  label: String
})
const isHover = ref(false);

const img = ref(`https://www.moe-acg.com/wp-content/uploads/2024/10/5df3ec849ea45748f47ad34b2b78e25b-320x180.jpg`)
</script>

<template>
  <div class="recomm-wrap" @mouseover="isHover = true" @mouseout="isHover = false">
    <img class="recomm-img" :src="src"></img>
    <h2 class="recomm-text" :class="{'is-hover': isHover}">{{label}}</h2>
  </div>
</template>

<style scoped lang="scss">
.recomm-wrap {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, .1);
  &:hover {
    h2 {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      white-space: normal;
    }
  }

}
.recomm-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.recomm-text {
  transition: all 0.3s;
  position: absolute;
  bottom: 0;
  z-index: 1;
  padding: 0.5rem 0.3rem;
  width: 100%;
  height: 2rem;
  font-size: 0.7rem;
  color: #fff;
  text-shadow: 0 1px 3px #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
  cursor: pointer;
}
</style>
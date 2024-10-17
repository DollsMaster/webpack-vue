<script setup>
import {ref} from 'vue'
const dialogVisable = ref(false)
</script>

<template>
  <div class="user-info-wrap" @mouseover="dialogVisable = true" @mouseout="dialogVisable = false">
    <div class="user-info">
      <img src="../../assets/userAvaer.jpg" alt="">
    </div>
    <div class="user-info-dialog" :class="[dialogVisable ? 'is-active' : '']" v-show="dialogVisable">

    </div>
  </div>
</template>

<style scoped lang="scss">
.user-info-wrap {
  position: relative;
}
.user-info {
  position: relative;
  z-index: 10;
  display: flex;
  margin: .5rem;
  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
  width: 2.3rem;
  height: 2.3rem;
}
.is-active {
  animation-name: isActiveAnimation;
  animation-duration: 1s;
  transform: scale(1, 1);
}
.user-info-dialog {
  position: absolute;
  top: 0;
  right: 0;
  width: 15rem;
  height: 9rem;
  border: solid 1px red;
  background-color: white;
}

@keyframes isActiveAnimation {
  0% {
    transform: scale(0.1, 0.1);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>
<script setup>
import {ref} from 'vue'
const siginVisable = ref(false)
</script>

<template>
  <div class="nav-sigin-wrap">
    <div class="nav-sigin">
      <span>签到</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav-sigin-wrap {
  position: relative;

}
.nav-sigin {
  padding: 1rem 1.5rem;
  height: 100%;
  color: var(--sys-white-word);
  background-color: var(--sys-grey-isActive);
  cursor: pointer;
  &:hover {
    transition: all 2s;
    animation-name: navSigin;
    animation-duration: 0.5s;
    transform: rotate(0);
    &:before {
      position: absolute;
      left: 40%;
      top: 100%;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 5px 8.7px 5px;
      border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #525e54 rgba(0, 0, 0, 0);
      content: "";
      z-index: 10;
    }
    &:after {
      position: absolute;
      z-index: 1;
      top: 100%;
      left: -1.5rem;
      margin-top: 7px;
      padding: 0.3rem 3rem;
      border: solid 1px var(--sys-grey-isActive);
      white-space: nowrap;
      border-radius: 1rem;
      color: var(--sys-grey-isActive);
      content: '签到';
      background-color: #ffffff;
    }
  }
}
.sigin-btn {

}
@keyframes navSigin {
  0% {
  transform: rotate(0deg)
  }
  30% {
    transform: rotate(20deg)
  }
  60% {
    transform: rotate(-20deg)
  }
  100% {
    transform: rotate(0deg)
  }
}
</style>
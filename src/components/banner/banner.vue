<script setup>
import {ref, onMounted} from 'vue';
const bannerOptions = [
  {
    img: `https://www.moe-acg.com/wp-content/uploads/2024/10/5df3ec849ea45748f47ad34b2b78e25b-320x180.jpg`,
  },{
    img: `https://www.moe-acg.com/wp-content/uploads/2024/10/9aceae71f2531914c098df22ef65c91c-320x180.jpg`,
  },{
    img: `https://www.moe-acg.com/wp-content/uploads/2024/08/c547413099cb33641a17ecda282aca9c-320x180.jpg`,
  },{
    img: `https://www.moe-acg.com/wp-content/uploads/2023/02/d821a77b4bdf3731ac0e421fb54e55fb-320x180.jpg`,
  },{
    img: `https://www.moe-acg.com/wp-content/uploads/2024/08/c547413099cb33641a17ecda282aca9c-320x180.jpg`,
  }
]
const left = ref('0rem')
const bannerPlayTime = 3000;
const bannerRunTime = ref(0.77)
const bannerPlayIndex = ref(0)

const bannerPlay = () => {

}
const initBanner = () => {
  let index = 0
  setInterval(() => {
    if (index >= bannerOptions.length - 1) {
      index = 0
    } else {
      index += 1
    }
    bannerPlayIndex.value = index
    left.value = `transform: translateX(-${index * 30}rem)`;
  }, bannerPlayTime)
}

function bannerPlayChange(index) {
  console.log('----------------', index)
}
onMounted(() => {
  initBanner()
})

</script>

<template>
  <div class="banner-wrap">
    <ul class="banner-list" ref="bannerList" :style="[`transition: transform ${bannerRunTime}s ease-in-out;`, left]">
      <li v-for="(item, index) in bannerOptions">
        <img :src="item.img" alt="">
      </li>
    </ul>
    <ul class="banner-control">
      <li v-for="(item, index) in bannerOptions" :class="{'is-active': bannerPlayIndex === index}" @mouseover="bannerPlayChange(index)"></li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.banner-wrap {
  position: relative;
  overflow: hidden;
  width: 30rem;
  height: 17rem;
  border-radius: 1rem;
  box-shadow: 0 3px 10px rgba(0,0,0,.1);
}
.banner-list {
  position: absolute;
  display: flex;
  flex-direction: row;
  li {
    width: 30rem;
    height: 17rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
.banner-control {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  flex-direction: row;
  border: solid 1px #ffffff;
  border-radius: 10px;
  li {
    width: 15px;
    height: 8px;
    background-color: rgba(255,255,255,.2);
  }
 .is-active {
   background-color: #ffffff;
 }
}
</style>
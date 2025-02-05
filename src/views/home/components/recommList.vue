<script setup>
import {ref, onMounted} from 'vue'
import recomm from '@/components/recomm/recomm.vue'
const images = [
  {
    src: `https://i.hmoe.link/wp-content/uploads/2018/05/9367d71e77a4ec8dc4cafd2e3127a8e3.jpg`,
    label: `【汉化/GAL】恋するココロと魔法のコトバ +初回特典+说明书[3.37G]`
  },{
    src: "https://i.hmoe.link/wp-content/uploads/2024/05/aa332a75e6f90381cdbfcc4fb036677b.jpg",
    label: `【汉化/GAL】恋するココロと魔法のコトバ +初回特典+说明书[3.37G]`
  },{
    src: `https://www.moe-acg.com/wp-content/uploads/2024/09/64bebe54ca5e2d524b7fc2654e21d85a-320x180.jpg`,
    label: `【汉化/GAL】恋するココロと魔法のコトバ +初回特典+说明书[3.37G]`
  },{
    src: `https://i.hmoe.link/wp-content/uploads/2018/05/9367d71e77a4ec8dc4cafd2e3127a8e3.jpg`,
    label: `【汉化/GAL】恋するココロと魔法のコトバ +初回特典+说明书[3.37G]`
  },{
    src: "https://i.hmoe.link/wp-content/uploads/2024/05/aa332a75e6f90381cdbfcc4fb036677b.jpg",
    label: `【汉化/GAL】恋するココロと魔法のコトバ +初回特典+说明书[3.37G]`
  },{
    src: `https://www.moe-acg.com/wp-content/uploads/2024/09/64bebe54ca5e2d524b7fc2654e21d85a-320x180.jpg`,
    label: `【汉化/GAL】恋するココロと魔法のコトバ +初回特典+说明书[3.37G]`
  },{
    src: "https://i.hmoe.link/wp-content/uploads/2024/05/aa332a75e6f90381cdbfcc4fb036677b.jpg",
    label: `【汉化/GAL】恋するココロと魔法のコトバ +初回特典+说明书[3.37G]`
  },{
    src: `https://www.moe-acg.com/wp-content/uploads/2024/09/64bebe54ca5e2d524b7fc2654e21d85a-320x180.jpg`,
    label: `【汉化/GAL】恋するココロと魔法のコトバ +初回特典+说明书[3.37G]`
  }
]
const imageList = ref(images)
let index = 0;
const playTimer = 5000;

setInterval(() => {
  if (index === 2) {
    index = 0
  } else {
    index += 1
  }
  style.value = `transform: translateX(-${index * 43.5}rem);`
}, playTimer)

const style = ref(``)



</script>

<template>
  <div class="recomms-wrap">
    <div class="swiper-container">
      <div class="swiper-wrap" :style="style">
        <div class="recommList-wrap">
          <recomm class="recomm-item" v-for="(item, index) in imageList" :src="item.src" :label="item.label"></recomm>
        </div>
        <div class="recommList-wrap">
          <recomm class="recomm-item" v-for="(item, index) in imageList" :src="item.src" :label="item.label"></recomm>
        </div>
        <div class="recommList-wrap">
          <recomm class="recomm-item" v-for="(item, index) in imageList" :src="item.src" :label="item.label"></recomm>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.recomms-wrap {

}
.swiper-container {
  position: relative;
  overflow: hidden;
  height: 100%;
}
.swiper-wrap {
  transition: all 1s;
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
}
.recommList-wrap {
  margin-right: .5rem;
  width: 43rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  .recomm-item {
    flex: 0 0 calc(25% - .5rem);
    height: calc(136px - 0.5rem);
    margin: 0 0 1rem 0;
  }
  .recomm-item:nth-child(n+4) {
    margin: 0;
  }

}
</style>
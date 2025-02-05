<script setup>
import {ref, useTemplateRef, onMounted} from 'vue'
//*props
const props = defineProps({
  options: {
    type: Array,
    required: true,
    default: []
  }
})

const navHover = ref(-1)
onMounted(() => {

})

const options = props.options;
const popper = ref(null)
</script>

<template>
  <div class="nav-menu">
    <ul class="nav-menu_list layout-direction-row layout-center">
      <li class="nav-menu_item layout-center">
        <span class="nav-home_icon layout-center">
          <el-icon  size="1rem"><HomeFilled /></el-icon>
        </span>
        <span>首页</span>
      </li>
      <li
          class="nav-menu_item layout-center"
          v-for="(item, index) in options"
          @mouseover="navHover = index"
          @mouseout="navHover = -1"
      >
        <span autocapitalize="nav-menu-word">{{item.label}}</span>
        <div class="nav-child" :class="{'is-hover': navHover === index && item.child}" >
          <div class="triangle"></div>
          <ul class="nav-child-list" >
            <li class="nav-child-item" v-for="(itema) in item.child">
              {{itema.label}}
            </li>
          </ul>
        </div>

      </li>
    </ul>
  </div>

</template>

<style scoped lang="scss">
.nav-menu {
  width: 100%;
  height: 100%;
  .nav-menu_list {
    height: 100%;
    .nav-menu_item {
      position: relative;
      font-size: 1.1rem;
      width: 100%;
      height: 100%;
      .nav-menu-word {
        height: 100%;
        text-shadow: 0 0px 10px #fff !important;
      }
      &:hover {
        transition: all 0.5s;
        background-color: rgba(0, 0, 0, .2);
        cursor: pointer;
      }
    }
  }
}

.nav-child {
  transition: all 0.2s;
  transform-origin: 0% 0;
  transform: scale(.5, .5);
  visibility: hidden;
  opacity: 0;


  padding: 0.5rem 0;

  min-width: 12rem;
  position: absolute;
  left: 0;
  top: 3.1rem;

  .nav-child-list {
    transition: all 0.2s;
    padding: 0.5rem 0;
    background-color: #ffffff;
    border-radius: 9px;
    box-shadow: 0 5px 8px rgba(0,0,0,.15);
  }
  .nav-child-item {
    transition: all 0.2s;
    font-size: 0.8rem;
    padding: 0.5rem 1rem;

    &:hover {
      color: var(--sys-white-word);
      background-color: var(--sys-grey-isActive);
    }
  }
}
.nav-menu .is-hover {
  visibility: visible;
  opacity: 1;
  transform: scale(1, 1);
}


.nav-home_icon {
  margin-right: 5px;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 100%;
  background-color: rgba(255, 255, 255, .3);
}
.triangle {
  position: absolute;
  left: 20px;
  top: 0px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #ffffff;
}
</style>
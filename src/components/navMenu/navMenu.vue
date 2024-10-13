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
      <li
          class="nav-menu_item"
          v-for="(item, index) in options"
          @mouseover="navHover = index"
          @mouseout="navHover = -1"
      >
        <span>{{item.label}}</span>

        <div class="nav-child" :class="{'is-hover': navHover === index}" v-show="navHover === index && item.child">
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
  width: 100vw;
  height: 20rem;
  border: solid 1px green;
}
.nav-menu_list {

  padding: 0 4rem;
  box-shadow: 0 0 10px 0 rgba(0,0,0,.15);

  .nav-menu_item {
    position: relative;
    font-size: 1.1rem;
    padding: 1rem 1.5rem;
    &:hover {
      transition: all 0.5s;
      background-color: var(--sys-grey-navBar_hover);
      cursor: pointer;
    }
  }
}
.nav-menu .is-hover {
  transform: scale(1, 1);
}
@keyframes navHover {
  0% {
    transform: scale(0, 0);
  }

  100% {
    transform: scale(1, 1);
  }
}
.nav-child {
  animation-name: navHover;
  animation-duration: 0.2s;
  transform: scale(0.5, 0.5);
  padding: 0.5rem 0;
  min-width: 12rem;
  position: absolute;
  left: 0;
  top: 3.5rem;

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
<script setup>
import {ref, onMounted, getCurrentInstance} from 'vue'
import { getElementAbsolutePosition } from '@/utils/common.js'


const props = defineProps({
  parentRef: {
    type: String,
    required: true
  }
})

const navPoperRef = ref(null);
onMounted(() => {
  const parentDome = getCurrentInstance().parent.refs[props.parentRef];
  const result = getElementAbsolutePosition(parentDome[0])
  navPoperRef.value.style = `
    min-width: ${result.w}px;
    left: ${result.x}px;
    top: ${result.y + 10}px
  `
  document.body.appendChild(navPoperRef.value)
  console.log('parentRefparentRef', result)
})


</script>

<template>
  <div class="nav-poper" ref="navPoperRef">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.nav-poper {
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0 15px 30px 5px rgba(0,0,0,.15)
}
</style>
<template>
  <div class="layout-wrap">

  </div>
</template>
<script>
import { getTest } from "@/api/layout"
export default {
  data() {
    return {
      key: null
    }
  },
  mounted() {
    //getTest()
  },
}
</script>
<style scoped lang="scss">
.layout-wrap {
  color: red;
  background-color: aqua;
}
</style>

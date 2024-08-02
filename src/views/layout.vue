<template>
  <div class="layout-wrap">
    雾雨魔理沙
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
  text-align: center;
  color: rebeccapurple;
}
</style>

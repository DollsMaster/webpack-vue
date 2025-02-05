<script setup>
import {ref, onMounted, nextTick} from "vue";
import LoginModal from '@/components/loginModal/loginModal.vue';
import {getUserById} from "@/api/user";

const that = this;
const LoginModalRef = ref(null);

onMounted(() => {
  getUser()
  nextTick(() => {
    LoginModalRef.value.shows()
  })
})

function getUser() {
  getUserById({id: "1884496906990669826"})
      .then(res => {
        console.log(res)
      })
}


</script>

<template>
  <LoginModal ref="LoginModalRef"></LoginModal>
</template>

<style scoped lang="scss">

</style>
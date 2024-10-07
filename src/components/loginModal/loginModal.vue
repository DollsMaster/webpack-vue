<script setup>
import {ref, onMounted} from "vue";
import Login from './login.vue'
import Register from './register.vue'
import ForgetPassword from './forgetPassword.vue'
const isVisable = ref(false)
const tabIndexModel = ref(1)
const tabs = [
  {
    value: 1,
    label: '登陆'
  },{
    value: 2,
    label: '注册'
  },{
    value: 3,
    label: '找回密码'
  }
]
const tabOptions = ref(tabs)


const tabChange = (val) => {
  tabIndexModel.value = val.value;
}
const loginModalClose = () => {
  isVisable.value = !isVisable.value
}
const submit = (() => {
  const loginRef =
  console.log('submit')
});
</script>

<template>
  <div id="loginModalId" class="loginModal-wrap layout-center" v-if="isVisable">
    <div class="loginModal-shade"></div>
    <div class="loginModal-content">
      <div style="display: flex;flex-direction: row;justify-content: space-between">
        <ul class="loginModal-tab layout-direction-row">
          <li
              class="loginModal-tab-item"
              :class="{'is-active': tabIndexModel === item.value}"
              v-for="(item, index) in tabOptions"
              @click="tabChange(item)"
          >
            {{item.label}}
          </li>
        </ul>
        <div class="loginModal-content-close" @click="loginModalClose">
          <el-icon size="1rem"><Close /></el-icon>
        </div>
      </div>

      <Login ref="loginRef" v-if="tabIndexModel === 1"></Login>
      <Register v-else-if="tabIndexModel === 2"></Register>
      <ForgetPassword v-else></ForgetPassword>
    </div>
  </div>
</template>

<style scoped lang="scss">
.loginModal-wrap {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
}
//*遮罩
.loginModal-wrap .loginModal-shade {
  background-color: var(--sys-grey-shade);
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
}
//*内容
.loginModal-content {
  margin: 2rem;
  position: relative;
  z-index: 9;
  width: 30rem;
  height: auto;
  background-color: var(--sys-white-word);
  border-radius: 10px;
  .loginModal-close-icon {
    &:before {
      content: "\f00d";
    }
  }

}

#loginModalId .is-active {
  color: var(--sys-white-word);
  background-color: var(--sys-grey-isActive);
}
.loginModal-content .loginModal-tab {
  .loginModal-tab-item {
    transition: all .2s;
    padding: .7rem 1.5rem;
    background-color: var(--sys-grey-word);
    cursor: pointer;
    &:hover {
      background-color: var(--sys-grey-word_hover);
    }
    &:first-child {
      border-radius: 8px 0 0 8px;
    }
    &:last-child {
      border-radius: 0 0 8px 0;
    }
  }
}
.loginModal-content-close {
  transition: all .2s;
  padding: 0.8rem 1rem;
  border-radius: 0 8px 0 8px;
  background-color: var(--sys-grey-word);
  cursor: pointer;
  &:hover {
    color: var(--sys-white-word);
    background-color: var(--sys-grey-isActive);
  }
}

</style>
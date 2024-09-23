<script setup>
import {ref, onMounted} from "vue";
const isVisable = ref(true)
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

const loginModel = ref({
  email: '',
  password: '',
  authCode: ''
})
const tabChange = (val) => {
  tabIndexModel.value = val.value;
}
const loginModalClose = () => {
  isVisable.value = !isVisable.value
}
const submit = (() => {
  console.log('submit')
});
</script>

<template>
  <div id="loginModalId" class="loginModal-wrap" v-if="isVisable">
    <div class="loginModal-shade" @click="test()"></div>
    <div class="loginModal-content">
      <div style="display: flex;flex-direction: row;justify-content: space-between">
        <ul class="loginModal-tab">
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

      <ul class="loginModal-content-list">
        <li class="loginModal-content-item">
          <el-input
              v-model="loginModel.email"
              placeholder="您的邮箱"
          >
            <template #prefix>
              <el-icon size="1rem"><User /></el-icon>
            </template>
          </el-input>
        </li>

        <li class="loginModal-content-item">
          <el-input
              v-model="loginModel.password"
              placeholder="您的密码"
              show-password
          >
            <template #prefix>
              <el-icon size="1rem"><Lock /></el-icon>
            </template>
          </el-input>
        </li>

        <li class="loginModal-content-item">
          <el-input
              v-model="loginModel.authCode"
              placeholder="验证码"
          >
            <template #prefix>
              <el-icon size="1rem"><EditPen /></el-icon>
            </template>
          </el-input>

        </li>
      </ul>

      <el-button type="primary" icon="Promotion" color="#4caf50" style="width: 100%;color: #ffffff;border-radius: 0 0 8px 8px" @click="submit">
        登陆
      </el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.loginModal-wrap {
  position: fixed;
  top: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
//*遮罩
.loginModal-wrap .loginModal-shade {
  background-color: rgba(0,0,0,.65);
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  cursor: pointer;
}
//*内容
.loginModal-content {
  position: relative;
  z-index: 9;
  width: 500px;
  height: auto;
  background-color: #fff;
  border-radius: 10px;
  .loginModal-close-icon {
    &:before {
      content: "\f00d";
    }
  }
  .loginModal-content-list {
    padding: 1rem 1rem .5rem 1rem;
    display: flex;
    flex-direction: column;
    .loginModal-content-item {
      width: 100%;
      margin-bottom: 10px;
    }
  }
}

#loginModalId .is-active {
  color: #ffffff;
  background-color: #525e54;
}
.loginModal-content .loginModal-tab {

  display: flex;
  flex-direction: row;
  .loginModal-tab-item {
    padding: .7rem 1.5rem;
    background-color: rgba(0,0,0,.05);
    cursor: pointer;
    &:hover {
      background-color: rgba(82,94,84,.3);
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
  padding: 0.8rem 1rem;
  border-radius: 0 8px 0 8px;
  background-color: rgba(0,0,0,.05);
  cursor: pointer;
  &:hover {
    color: #ffffff;
    background-color: #525e54;
  }
}

</style>
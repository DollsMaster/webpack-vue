<script setup>
import {ref} from "vue";
const radioGroupModel = ref(1)
const radioGroupOptionsDefalut = [
  {
    value: 1,
    label: '登陆'
  },{
    value: 2,
    label: '注册'
  }
]
const radioGroupOptions = ref(radioGroupOptionsDefalut)
</script>

<template>
  <div class="loginModal-wrap">
    <div class="loginModal-shade"></div>
    <div class="loginModal-content">
      <div>
        <el-radio-group v-model="radioGroupModel">
          <el-radio-button
            v-for="item in radioGroupOptionsDefalut"
            :label="item.label"
            :value="item.value" />
        </el-radio-group>

        <div class="loginModal-close">
          <span class="loginModal-close-icon"></span>
        </div>
      </div>

      <img src="../../icons/svg/close.svg" alt="" srcset="">
      <el-icon class="el-input__icon" style="width: 100px;height: 100px"></el-icon>
      <ul class="loginModal-content-list">
        <li class="loginModal-content-item">
          <el-input
              v-model="input4"
              style="width: 240px"
              placeholder="Type something"
          >
            <template #prefix>
              <el-icon class="el-input__icon"></el-icon>
            </template>
          </el-input>
        </li>
      </ul>

    </div>
  </div>
</template>

<style scoped lang="scss">
.loginModal-wrap {
  position: fixed;
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
    display: flex;
    flex-direction: column;
    .loginModal-content-item {
      margin-bottom: 10px;
    }
  }
}

</style>
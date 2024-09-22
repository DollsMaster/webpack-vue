<script setup>
import {ref} from "vue";
const radioGroupModel = ref(0)
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
  <div id="loginModal-id" class="loginModal-wrap">
    <div class="loginModal-shade"></div>
    <div class="loginModal-content">
      <div class="loginModal-content-tab">
        <ul class="content-tab_switch">
          <li v-for="(item, index) in radioGroupOptionsDefalut" :key="item" :class="{'is-active': radioGroupModel === index}">
            <p>{{item.label}}</p>
          </li>
        </ul>

        <div class="loginModal-close">
          <el-icon><Close /></el-icon>
        </div>
      </div>

      <div class="loginModal-content-input" style="padding: 2rem">
        <ul class="loginModal-content-list">
          <li class="loginModal-content-item">
            <el-input
                v-model="input4"
                style="width: 240px"
                placeholder="您的邮箱"
            >
              <template #prefix>
                <el-icon><UserFilled /></el-icon>
              </template>
            </el-input>
          </li>
          <li class="loginModal-content-item">
            <el-input
                v-model="input4"
                style="width: 240px"
                type="password"
                show-password
                placeholder="您的密码"
            >
              <template #prefix>
                <el-icon><UserFilled /></el-icon>
              </template>
            </el-input>
          </li>
        </ul>
      </div>
      <div class="loginModal-content-submit">
        <el-button size="large" color="#4caf50" style="width: 100%;color: white">登录</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$whiteWordColor: #fff;
$tabWordColor: #151b3c;
$tabWordColorHover: rgba(82,94,84,.3);
$tabWordColorChecked: #525e54;
#loginModal-id .is-active {
  p {
    color: $whiteWordColor;
  }
  background-color: $tabWordColorChecked;
}

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


  .loginModal-content-list {
    display: flex;
    flex-direction: column;
    .loginModal-content-item {
      margin-bottom: 10px;
    }
  }
}
.loginModal-content-tab {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .content-tab_switch {
    display: flex;
    flex-direction: row;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.8rem 1.5rem;
      background-color: rgba(0,0,0,.05);
      cursor: pointer;
      &:first-child {
        border-radius: 0 0 0 0.5rem;
      }
      &:last-child {
        border-radius: 0 0 0.5rem 0;
      }
      &:hover {
        background-color: $tabWordColorHover;
      }
      p {
        color: $tabWordColor;
      }
    }
  }
  .loginModal-close {
    padding: 0.5rem 1.5rem;
    background-color: rgba(0,0,0,.05);
    border-radius: 0 0 0 0.5rem;
    &:hover {
      .el-icon {
        color: white;
      }
      background-color: $tabWordColorChecked;
    }
    .el-icon {
      font-size: 1.5rem;
      color: #525e54;
    }
  }
}


</style>
<script setup>
import {ref} from "vue";

const loginModel = ref({
  email: '',
  password: '',
  authCode: ''
})
const rules = ref({
  email: [
    {
      required: true,
      message: '请输入您的邮箱'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码'
    }
  ],
  authCode: [
    {
      required: true,
      message: '请输入验证码'
    }
  ]
})

const loginFormRef = ref(null)
const submitForm = async (formEl) => {
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <el-form
      ref="loginFormRef"
      :model="loginModel"
      :rules="rules"
      class="loginModal-content-list">
    <el-form-item prop="email">
      <el-input
          v-model="loginModel.email"
          placeholder="您的邮箱"
      >
        <template #prefix>
          <el-icon size="1rem"><User /></el-icon>
        </template>
      </el-input>

    </el-form-item>
    <el-form-item prop="password">
      <el-input
          v-model="loginModel.password"
          placeholder="您的密码"
          show-password
      >
        <template #prefix>
          <el-icon size="1rem"><Lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="authCode">
      <el-input
          v-model="loginModel.authCode"
          placeholder="验证码"
      >
        <template #prefix>
          <el-icon size="1rem"><EditPen /></el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
  <el-button type="primary" color="#4caf50" style="width: 100%;color: #ffffff;border-radius: 0 0 8px 8px" @click="submitForm(loginFormRef)">
    <el-icon size="1rem"><Promotion /></el-icon>
    登陆
  </el-button>
</template>

<style scoped lang="scss">
.loginModal-content-list {
  padding: 2rem;
}
.loginModal-content-list /deep/ .el-form-item--label-right {
  margin-bottom: 1.3rem;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
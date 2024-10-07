<script setup>
import {ref} from 'vue'
const formData = ref({
  email: '',
  authCode: '',
  password: ''
})
</script>

<template>
  <el-form class="el-form" style="padding: 1.5rem">
    <el-form-item prop="email">
      <el-input
          v-model="formData.email"
          placeholder="您的邮箱"
      >
        <template #prefix>
          <el-icon size="1rem"><User /></el-icon>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item prop="authCode">
      <el-col :span="16">
        <el-input
            v-model="formData.authCode"
            placeholder="验证码"
        >
          <template #prefix>
            <el-icon size="1rem"><User /></el-icon>
          </template>
        </el-input>
      </el-col>
      <el-col :span="8" style="padding-left: 1rem;">
        <el-button type="primary" round style="width: 90%;font-size: .9rem">发送验证码</el-button>
      </el-col>
    </el-form-item>

    <el-form-item>
      <el-input
          v-model="formData.password"
          placeholder="您的密码"
          show-password
      >
        <template #prefix>
          <el-icon size="1rem"><Lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
  <el-button type="primary" color="#4caf50" style="width: 100%;color: #ffffff;border-radius: 0 0 8px 8px" @click="submitForm(loginFormRef)">
    <el-icon size="1rem"><Promotion /></el-icon>
    发送验证码到新邮箱
  </el-button>
</template>

<style scoped lang="scss">
.el-form /deep/ .el-form-item--label-right {
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
<script setup>
import {ref} from 'vue'
const formRef = ref(null)
const formRules = ref(null)
const formData = ref({
  nickName: '',
  email: '',
  password: ''
})
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
      ref="formRef"
      :model="formData"
      :rules="formRules"
      class="form-wrap" style="padding: 2rem">
    <el-form-item style="width: 100%">
      <el-input
          v-model="formData.nickName"
          placeholder="您的昵称"
      >
        <template #prefix>
          <el-icon size="1rem"><User /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-input
          v-model="formData.email"
          placeholder="您的邮箱"
      >
        <template #prefix>
          <el-icon size="1rem"><User /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password" style="padding-left: 1rem">
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

    <el-form-item prop="password" style="width: 100%">
      <el-col :span="12">
        <el-input
            v-model="formData.password"
            placeholder="邮箱验证码"
        >
          <template #prefix>
            <el-icon size="1rem"><Lock /></el-icon>
          </template>
        </el-input>
      </el-col>
      <el-col :span="12">
        <el-button type="primary" round style="margin-left: 1rem; width: 90%;font-size: .9rem">发送验证码</el-button>
      </el-col>
    </el-form-item>
  </el-form>
  <el-button type="primary" color="#4caf50" style="width: 100%;color: #ffffff;border-radius: 0 0 8px 8px" @click="submitForm(loginFormRef)">
    <el-icon size="1rem"><Promotion /></el-icon>
    注册
  </el-button>
</template>

<style scoped lang="scss">
.form-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.form-wrap /deep/ .el-form-item {
  width: 50%;
  margin-bottom: 1.3rem;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
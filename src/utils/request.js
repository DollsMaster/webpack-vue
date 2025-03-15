import axios from "axios";
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 60000, // 请求超时时间
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
});
console.log('serviceserviceserviceservice', service)
service.interceptors.request.use((config) => {
  return config;
}, error => {

})
service.interceptors.response.use(response => {
  return response
}, error => {
  if (error.code === "ERR_NETWORK") {
    ElMessage({
      message: error.message,
      type: 'error'
    })
  }
  return Promise.reject(error)
})
export default service

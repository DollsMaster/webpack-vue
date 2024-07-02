import axios from "axios";
const service = axios.create({
  baseURL: "www.baidu.com",
  timeout: 6000,
  withCredentials: true
})
service.interceptors.request.use((config) => {
  return config
})
service.interceptors.response.use((config) => {
  return config
})
export default service;
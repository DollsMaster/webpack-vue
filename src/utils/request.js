import axios from "axios";
const service = new axios({
  baseURL: '',
  timeout: 6000
})
service.interceptors.request.use(config => {
  return config;
})
service.interceptors.response.use(response => {
  return response
})
export default service
import axios from "axios";

const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 60000, // 请求超时时间
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
});
/*

const service = new axios({
  baseURL: process.env.BASE_API,
  timeout: 6000
})
*/

console.log('serviceserviceserviceservice', service)
service.interceptors.request.use(config => {
  return config;
})
service.interceptors.response.use(response => {
  return response
})
export default service
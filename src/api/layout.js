import request from '@/utils/request'
const layoutApi = {
  test: '/test'
}
export function getTest(data) {
  return request({
    url: layoutApi.test,
    method: "post",
    data
  })
}
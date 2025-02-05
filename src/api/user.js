import request from "../utils/request";

const api = {
  getUserById: `/user/getUserById`
}

export function getUserById(data) {
  return request({
    url: api.getUserById,
    method: 'post',
    data: data
  })
}
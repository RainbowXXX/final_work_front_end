import request from './request'

export default {
  getData() {
    return request({
      url: '/user/get',
      method: 'get',
    })
  },
}


import ApiManager from '@/api/manager/ApiManager'
import { APPLICATION_JSON } from '@/api/manager/config'

export default {
  /**
   * 获取广告列表
   */
  getAdvertises() {
    const data = {
      url: '/ads',
      params: {}
    }
    return ApiManager.get(data)
  },

  postAdvertises(body) {
    const data = {
      headers: APPLICATION_JSON,
      url: '/ads',
      params: body
    }
    return ApiManager.post(data)
  },

  deleteAdvertises(id) {
    const data = {
      url: `/ads/${id}`,
      params: {}
    }
    return ApiManager.delete(data)
  },

  editAdvertises(id, body) {
    const data = {
      headers: APPLICATION_JSON,
      url: `/ads/${id}`,
      params: body
    }
    return ApiManager.put(data)
  },
  

}
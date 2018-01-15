
import ApiManager from '@/api/manager/ApiManager'
import { APPLICATION_JSON } from '@/api/manager/config'

export default {
  getConfig(type) {
    const data = {
      url: '/configs/detail',
      params: { type }
    }
    return ApiManager.get(data)
  },

  editConfig(type, content) {
    const data = {
      url: '/configs/detail',
      params: {
        type, 
        content
      }
    }
    return ApiManager.put(data)
  }
}

import ApiManager from '@/api/manager/ApiManager'
import { APPLICATION_JSON } from '@/api/manager/config'

export default {
  getTools() {
    const data = {
      url: '/tools',
      params: {}
    }
    return ApiManager.get(data)
  },

  addTools(body) {
    const data = {
      url: '/tools',
      headers: APPLICATION_JSON,
      params: body
    }
    return ApiManager.post(data)
  },

  deleteTools(id) {
    const data = {
      url: `/tools/${id}`,
      params: {}
    }
    return ApiManager.delete(data)
  },

  editTools(id, body) {
    const data = {
      url: `/tools/${id}`,
      headers: APPLICATION_JSON,
      params: body
    }
    return ApiManager.put(data)
  }
}
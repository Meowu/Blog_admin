
import ApiManager from '@/api/manager/ApiManager'

export default {
  getUsers(list) {
    const data = {
      url: '/users',
      params: {
        ...list
      }
    }
    return ApiManager.get(data)
  }
}

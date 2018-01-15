import ApiManager from '@/api/manager/ApiManager'

export default {
  getMenu() {
    const data = {
      url: '/menutree',
      parama: {}
    }
    return ApiManager.get(data)
  } 
}
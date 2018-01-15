import Api from './manager/ApiManager'

export default {
  login(username, password) {
    const data = {
      url: '/login',
      params: {}
    }
    return Api.post(data)
  }
}
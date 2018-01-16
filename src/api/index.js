import Api from './manager/ApiManager'

export default {
  login(email, password) {
    const data = {
      url: '/login',
      params: { email, password }
    }
    return Api.post(data)
  },

  getArticles(args) {
    const data = {
      url: '/articles',
      params: { ...args }
    }
    return Api.get(data)
  }
}
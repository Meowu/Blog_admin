import Api from './manager/ApiManager'
import { APPLICATION_JSON } from './manager/config'

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
  },
  postArticles(body) {
    const data = {
      headers: APPLICATION_JSON,
      url: '/articles/new',
      params: body
    }
    return Api.post(data)
  },
  putArticles(id, body) {
    const data = {
      headers: APPLICATION_JSON,
      url: `/articles/cms/${id}`,
      params: body
    }
    return Api.put(data)
  },
  getOneArticle(id) {
    const data = {
      url: `/articles/cms/${id}`,
      params: {}
    }
    return Api.get(data)
  },
  getTags() {
    const data = {
      url: '/tags',
      params: {}
    }
    return Api.get(data)
  },
  getCategories() {
    const data = {
      url: '/categories',
      params: {}
    }
    return Api.get(data)
  }
}
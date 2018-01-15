
import ApiManager from '@/api/manager/ApiManager'
import { APPLICATION_JSON } from '@/api/manager/config'

export default {
  getCategories() {
    const data = {
      url: '/categories',
      params: {}
    }
    return ApiManager.get(data)
  },

  addCategories(name) {
    const data = {
      url: '/categories',
      params: {name}
    }
    return ApiManager.post(data)
  },

  deleteCategories(id) {
    const data = {
      url: `/categories/${id}`,
      params: {}
    }
    return ApiManager.delete(data)
  },

  editCategories(id, name) {
    const data = {
      url: `/categories/${id}`,
      params: { name }
    }
    return ApiManager.put(data)
  },

  getArticles(list) {
    const data = {
      url: `/articles`,
      params: { ...list }
    }
    return ApiManager.get(data)
  },

  getArticleContent(id) {
    const data = {
      url: `/articles/${id}`,
      params: {}
    }
    return ApiManager.get(data)
  },

  postArticles(body) {
    const data = {
      url: `/articles`,
      params: body,
      headers: APPLICATION_JSON
    }
    return ApiManager.post(data)
  },

  deleteArticles(id) {
    const data = {
      url: `/articles/${id}`,
      params: {}
    }
    return ApiManager.delete(data)
  },
  
  editArticles(id, body) {
    const data = {
      headers: APPLICATION_JSON,
      url: `/articles/${id}`,
      params: {
        ...body
      }
    }
    return ApiManager.put(data)
  },

  uploadPicture (image) {
    const data = {
      url: '/upload/picture',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      params: image
    }
    return ApiManager.post(data)
  }
}
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

  /**
  获取文章列表
   */
  getArticles(args) {
    const data = {
      url: '/articles',
      params: { ...args }
    }
    return Api.get(data)
  },

  /**
  新增文章 */
  postArticles(body) {
    const data = {
      headers: APPLICATION_JSON,
      url: '/articles/new',
      params: body
    }
    return Api.post(data)
  },

  /**
  编辑文章
   */
  putArticles(id, body) {
    const data = {
      headers: APPLICATION_JSON,
      url: `/articles/cms/${id}`,
      params: body
    }
    return Api.put(data)
  },

  /**
  后台获取一篇文章
   */
  getOneArticle(id) {
    const data = {
      url: `/articles/cms/${id}`,
      params: {}
    }
    return Api.get(data)
  },

  /**
  获取全部标签
   */
  getTags() {
    const data = {
      url: '/tags',
      params: {}
    }
    return Api.get(data)
  },
  
  /**
  增加新的标签
   */
  postTags(name) {
    const data = {
      url: '/tags/new',
      params: {
        name
      }
    }
    return Api.post(data)
   },

  /**
  更改标签名
  */
  putTags(id, name) {
    const data = {
      url: `/tags/${id}`,
      params: {
        name
      }
    }
    return Api.put(data)
  },

  /**
  删除标签 */
  deleteTags(id) {
    const data = {
      url: `/tags/${id}`,
      params: {}
    }
    return Api.delete(data)
  },


  /**
    获取全部分类
   */
  getCategories() {
    const data = {
      url: '/categories',
      params: {}
    }
    return Api.get(data)
  },

  /**
    删除某个分类
   */
  deleteCategories(id) {
    const data = {
      url: `/categories/${id}`,
      params: {}
    }
    return Api.delete(data)
  },

  putCategories(id, name) {
    const data = {
      url: `/categories/${id}`,
      params: { name }
    }
    return Api.put(data)
  },
  
  /**
  新增一个分类 */
  postCategories(name) {
    const data = {
      url: `/categories/new`,
      params: { name }
    }
    return Api.post(data)
  }

}
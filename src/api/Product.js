
import ApiManager from '@/api/manager/ApiManager'
import { APPLICATION_JSON } from '@/api/manager/config'

export default {
  /**
   * 表单申请列表
   * @param {*Object} list 
   */
  getLends(list) {
    const data = {
      url: '/products/lend',
      params: {
        ...list
      }
    }
    return ApiManager.get(data)
  },


  /**
   * 获取产品列表
   * @param {object} list 
   */
  getProducts(list) {
    const data = {
      url: '/products',
      params: {
        ...list
      }
    }
    return ApiManager.get(data)
  },

  /**
   * 添加商品
   * @param {object} body 
   */
  addProducts(body) {
    const data = {
      headers: APPLICATION_JSON,
      url: '/products',
      params: body
    }
    return ApiManager.post(data)
  },

  /**
   * 删除产品
   * @param {integer} id 
   */
  deleteProducts(id) {
    const data = {
      url: `/products/${id}`,
      params: {}
    }
    return ApiManager.delete(data)
  },

  /**
   * 编辑产品
   * @param {*integer} id 
   * @param {*object} body 
   */
  editProducts(id, body) {
    const data = {
      headers: APPLICATION_JSON,
      url: `/products/${id}`,
      params: body
    }
    return ApiManager.put(data)
  },

  /**
   * 推荐产品列表
   * @param {object} list 
   */
  getHotProducts(list) {
    const data = {
      url: '/products/hot',
      params: { ...list }
    }
    return ApiManager.get(data)
  },

  addHotProducts(list) {
    const data = {
      url: '/products/hot',
      params: { ...list }
    }
    return ApiManager.post(data)
  },

  deleteHotProducts(id) {
    const data = {
      url: `/products/hot/${id}`,
      params: {}
    }
    return ApiManager.delete(data)
  },

  sortHotProducts(id, sort_index) {
    const data = {
      url: `/products/hot/${id}/sort`,
      params: { sort_index }
    }
    return ApiManager.put(data)
  },

  sortProducts(id, sort_index) {
    const data = {
      url: `/products/${id}/sort`,
      params: { sort_index }
    }
    return ApiManager.put(data)
  },

  getProductDetail(id) {
    const data = {
      url: `/products/${id}`,
      params: {}
    }
    return ApiManager.get(data)
  },

  searchProducts(id) {
    const data = {
      url: '/products/search',
      params: {id}
    }
    return ApiManager.get(data)
  },

  searchCities(id) {
    const data = {
      url: '/cities/search',
      params: {id}
    }
    return ApiManager.get(data)
  }

}
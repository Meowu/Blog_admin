import ApiManager from '@/api/manager/ApiManager'

export default {
  /**
   *管理员登录
   * @param {string} username
   * @param {string} password
   */
  login(username, password) {
    const data = {
      url: '/admin/login',
      params: {
        username,
        password
      }
    }
    return ApiManager.post(data)
  },

  /**
   * 修改昵称
   * @param {string} nickname 
   */
  reviseName(nickname) {
    const data = {
      url: '/admin/nickname',
      params: {
        nickname
      }
    }
    return ApiManager.put(data)
  },

  /**
   * 重置密码
   */
  reset(old_password, password) {
    const data = {
      url: '/admin/password',
      params: {
        old_password, 
        password
      }
    }
    return ApiManager.put(data)
  }
}
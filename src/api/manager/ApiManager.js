import axios from 'axios'
import CONFIG from './config'
import vue from 'vue'
import errorUtils from '@/utils/errorUtils'
import paramsInterceptor from '../interceptors/params'
import router from '../../router'

axios.interceptors.request.use((config) => paramsInterceptor(config))

class ApiManager {
  /**
   * 网络请求：GET方法
   * @param {Object} data 传入数据(url, params, header ···)
   */
  get (data) {
    data.method = 'get'
    return this._sendRequest(data)
  }

  /**
   * 网络请求：POST方法
   * @param {Object} data 传入数据(url, params, header ···)
   */
  post (data) {
    data.method = 'post'
    return this._sendRequest(data)
  }

  put (data) {
    data.method = 'put'
    return this._sendRequest(data) 
  }

  delete (data) {
    data.method = 'delete'
    return this._sendRequest(data)
  }

  _sendRequest(data) {
    let config = Object.assign({},CONFIG); //一定要复制一个,避免污染全局对象
    config.headers = data.headers ? data.headers : config.headers;
    config.method = data.method;
    config.url = data.url;
    config.body = data.params; //参数由拦截器分配,具体代码在 src/interceptors/params.js
    // axios.defaults.withCredentials = true;

    return axios(config).then(res => this.onSuccess(res)).catch(err => this.onFailure(err));
  }

  onSuccess(response) {
    const result = response.data;
    if (result && result.code == 0) {
      return Promise.resolve(result);
    }

    //处理业务错误
    const apiError = errorUtils.parseErrorFromResult(response);
    if (apiError.code === 1) {  // 如果登录过期了或者未登录则跳转到登录页面。
      return router.push('/login')
    }
    return Promise.reject(apiError);
  }

  onFailure(error) {
    // errorUtils.showError(error);
    if (error.type) {
      /**
       * 如果error知道了确切的类型,表明是从onSuccess
       * 的Promise reject过来的,因此不需要再次判断错误类型
       */
      return Promise.reject(error)
    }

    //处理网络错误
    const networkError = errorUtils.parseError(error);
    return Promise.reject(networkError);
  }
}

export default new ApiManager()

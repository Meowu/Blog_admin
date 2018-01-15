import toast from '@/plugin/toast'

const error = {
	code: 2,
	message: '',
	type: ''
}

export default {
	parseErrorFromResult(response) {
		const apiError = Object.assign({},error);

    if (!response) {
      //返回值为空表示发生未知错误
      apiError.code = -1;
      apiError.message = '未知错误';
			apiError.type = 'unknow';
			return apiError;
		} 

		const result = response.data;
		if (result.code == 1) {
			//code = 1 说明未登录,需要登录
      apiError.code = 1;
      apiError.message = result.message;
			apiError.type = 'nologin';
    } else {
      //返回值不为空就属于业务错误
      apiError.code = result.code;
      apiError.message = result.message;
			apiError.type = 'business'
		}

		return apiError;
	},

	parseError(err) {
		let netError = Object.assign({},error);
		netError.code = -2;
		netError.type = 'network';
		if (!err.response) {
			netError.message = err.message.indexOf('timeout') !== -1 ? '请求超时' : '请求数据失败';
		} else {
			const code = err.response.status //http状态码
			if (code >= 300 && code < 400) {
				netError.message = '资源已被重定向';
			} else if (code >= 400 && code < 500) {
				netError.message = '请求资源不存在';
			} else {
				netError.message = '服务器内部错误';
			}
		}

		return netError;
	},

	showError(error) {
		toast.showError(error.message)
		if (error.code === 1) {
			window.location = '/login';
		}
	}
}
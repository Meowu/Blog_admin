const DEFAULT_X_HEADER = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
}

const token = localStorage.getItem('BLOG_TOKEN')
console.log('token: ', token);
const DEFAULT_JSON_HEADER = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
}

const BASE_URL = 'http://127.0.0.1:3000/api/v1'
export const baseSource = ''

export default {
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    ...DEFAULT_X_HEADER,
    'x-access-token': token,
    'X-Requested-With': 'XMLHttpRequest'
  }
}

export const APPLICATION_JSON = DEFAULT_JSON_HEADER

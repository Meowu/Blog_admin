const DEFAULT_X_HEADER = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
}

const DEFAULT_JSON_HEADER = {
  'Content-Type': 'application/json'
}

const BASE_URL = 'http://api.jbangit.com:8008/cms'
export const baseSource = ''

export default {
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    ...DEFAULT_X_HEADER,
    'X-Requested-With': 'XMLHttpRequest'
  }
}

export const APPLICATION_JSON = DEFAULT_JSON_HEADER

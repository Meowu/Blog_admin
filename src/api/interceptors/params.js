import qs from 'querystring'

export default function(config) {
	const method = config.method.toLowerCase();
  const params = config.body;
  // const token = localStorage.getItem('BLOG_TOKEN')
  // params.headers['x-access-token'] = token

  if (method === 'get') {
    config.params = config.body;
    return config;
  }
  const contentType = config.headers['Content-Type'];
  const isUrlencode = !contentType || contentType.indexOf('x-www-form-urlencoded') !== -1;
  if (isUrlencode) {
    config.data = qs.stringify(params);
  } else {
    config.data = params;
  }
  
  console.log('incepted: ', config);
  return config
}
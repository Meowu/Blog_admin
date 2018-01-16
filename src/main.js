// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VueSimplemde from 'vue-simplemde'
// import 'vue-simplemde/src'
import App from './App'
import router from './router'
import Toast from './plugin/toast'

Vue.use(ElementUI)
Vue.mixin(Toast)
// Vue.use(VueSimplemde)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

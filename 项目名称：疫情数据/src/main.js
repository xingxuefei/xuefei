import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import HeyUI from 'heyui';
import axios from 'axios'
Vue.config.productionTip = false
import "heyui/themes/index.less";
Vue.prototype.axios = axios
Vue.use(HeyUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

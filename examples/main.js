import Vue from 'vue'
import App from './App.vue'

import demo from "../components/demo";
import mapComps from "../components/mapComps";
Vue.use(demo)
Vue.use(mapComps)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

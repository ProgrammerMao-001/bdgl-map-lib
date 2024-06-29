import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)


/* 全局注册views下的组件 */
function dynamicImportComponents(context) {
  context.keys().forEach(key => {
    const module = context(key);
    for (const componentName in module) {
      if (module.hasOwnProperty(componentName)) {
        Vue.component(componentName, module[componentName]);
      }
    }
  });
}
const req = require.context('./views', true, /index\.js$/);
dynamicImportComponents(req);


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

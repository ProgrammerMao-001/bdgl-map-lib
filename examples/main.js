import Vue from 'vue'
import App from './App.vue'

import ElementUI, { Tooltip } from "element-ui";
import rewriteElTooltip from "../components/utils/rewriteElTooltip";
import 'element-ui/lib/theme-chalk/index.css';
rewriteElTooltip(Tooltip);
Vue.use(ElementUI)



import directive from "../directive";
Vue.use(directive)

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

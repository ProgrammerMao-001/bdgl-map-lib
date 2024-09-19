import "./assets/styles/index.scss";
import "./utils/index";

import bdLib from "./bdLib/bdLib.vue";
import bdMap from "./bdMap/bdMap.vue";

const components = [bdLib, bdMap];
const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components,
};

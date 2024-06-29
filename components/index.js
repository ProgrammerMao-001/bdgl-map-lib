import "./assets/styles/index.scss";
import "./utils/index";

import demo from "./demo";
import mapComps from "./mapComps/mapComps.vue";
import bdLib from "./bdLib/bdLib.vue";

const components = [demo, mapComps, bdLib];
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

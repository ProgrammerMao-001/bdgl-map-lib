import "./assets/styles/index.scss";
import "./utils/index";

import demo from "./demo";
import mapComps from "./mapComps/mapComps.vue";
import bdGlDrawAreaDialog from "./bdGlDrawAreaDialog/bdGlDrawAreaDialog.vue";

const components = [demo, mapComps, bdGlDrawAreaDialog];
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

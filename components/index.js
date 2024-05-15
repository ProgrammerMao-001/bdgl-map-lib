import "./assets/styles/index.scss";
import "./utils/index";

import demo from "./demo";

const components = [demo];
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

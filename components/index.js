import "./assets/styles/index.scss";
import "./utils/index";

import bdLib from "./bdLib/bdLib.vue";
import bdMap from "./bdMap/bdMap.vue";
import bdHandleDrawLine from "./bdHandleDrawLine/bdHandleDrawLine.vue";
import bdDrivingDrawLine from "./bdDrivingDrawLine/bdDrivingDrawLine.vue";
import directive from "../directive";
import rewriteElTooltip from "./utils/rewriteElTooltip";
const components = [bdLib, bdMap, bdHandleDrawLine, bdDrivingDrawLine];
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
  directive,
  rewriteElTooltip,
  ...components,
};

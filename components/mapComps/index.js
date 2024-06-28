import mapComps from "./mapComps.vue";

mapComps.install = (Vue) => {
  Vue.component(mapComps.name, mapComps);
};

export default mapComps;

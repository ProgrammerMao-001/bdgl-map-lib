import demo from "./src/main.vue";

demo.install = (Vue) => {
  Vue.component(demo.name, demo);
};

export default demo;

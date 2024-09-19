<!--
 * @Description: 百度地图VGl版本 页面
 * @Author: mhf
 * @Date: 2024/6/28 16:52
 * @Reference: https://mapv.baidu.com/gl/docs/index.html
-->
<template></template>

<script>
export default {
  name: "bdMapVGl",
  components: {},
  mixins: [],
  props: {
    bdMap: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {},
  watch: {},
  filters: {},
  data() {
    return {};
  },
  methods: {
    /**
     * 初始化用于展示大数据的立体多边形ShapeLayer。
     * 参考文档: [ShapeLayer](https://mapv.baidu.com/gl/docs/ShapeLayer.html)
     *
     * @param {Object} [params={}] - 配置对象，包含ShapeLayer所需参数及事件处理。
     * @property {string} [params.color='rgba(0, 214, 236, 0.8)'] - 立体多边形颜色。
     * @property {boolean} [params.enablePicked=true] - 是否允许拾取交互。
     * @property {number} [params.selectedIndex=-1] - 初始选中项索引。
     * @property {string} [params.selectedColor='#ee1111'] - 选中项颜色。
     * @property {boolean} [params.autoSelect=true] - 是否根据鼠标位置自动选择。
     * @property {Array} [params.data=[]] - 数据源。
     * @property {Function} [params.onclick=() => {}] - 点击事件处理函数。
     *
     * @author: mhf
     * @time: 2024-06-29 14:54:48
     */
    initShapeLayer(params = {}) {
      console.log("initShapeLayer");
      let {
        color = "rgba(0, 214, 236, 0.8)", // 柱状图颜色
        enablePicked = true, // 是否可以拾取
        selectedIndex = -1, // 选中项
        selectedColor = "#ee1111", // 选中项颜色
        autoSelect = true, // 根据鼠标位置来自动设置选中项
        data = [], // 第一种：随参数带入这个数据
        onclick = () => {},
      } = params;

      var view = new mapvgl.View({ map: this.bdMap });
      var shapeLayer = new mapvgl.ShapeLayer(params);
      view.addLayer(shapeLayer);
      // shapeLayer.setData(jsonData); // 第二种设置数据的方式【jsonData是外部传来的json数据】
      this.bdMap.setDefaultCursor("default"); // 设置地图默认光标
    },
  },
};
</script>

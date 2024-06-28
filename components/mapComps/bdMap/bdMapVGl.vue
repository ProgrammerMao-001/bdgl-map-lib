<!--
 * @Description: 百度地图VGl版本 页面
 * @Author: mhf
 * @Date: 2024/6/28 16:52
 * @Reference: https://mapv.baidu.com/gl/docs/index.html
-->
<template>
</template>

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
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  data() {
    return {};
  },
  methods: {
    initShapeLayer(shapeConfig, jsonData) {
      let xinjiangPart = require("./xinjiangPart")
      var view = new mapvgl.View({
        map: this.bdMap
      });
      var shapeLayer = new mapvgl.ShapeLayer({
        color: 'rgba(0, 214, 236, 0.8)', // 柱状图颜色
        enablePicked: true, // 是否可以拾取
        selectedIndex: -1, // 选中项
        selectedColor: '#ee1111', // 选中项颜色
        autoSelect: true, // 根据鼠标位置来自动设置选中项
        onClick: (e) => { // 点击事件
          console.log(e);
        },
      });


      view.addLayer(shapeLayer);
      shapeLayer.setData(xinjiangPart.default);
      this.bdMap.setDefaultCursor('default');
    }
  },
};
</script>

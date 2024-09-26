<!--
 * @Description: 使用百度地图VGL版本 页面
 * @Author: mhf
 * @Date: 2024/6/29 14:58
-->
<template>
  <div class="use-bd-map-vgl">
    <bdMap
      ref="bdMap"
      ak="iTu42KR8ex0LKLEE7hilYsczAHKX2rKc"
      :mapConfig="bdMapConfig"
      :infoWindowStyle="bdInfoWindowStyle"
    ></bdMap>
  </div>
</template>

<script>
import bdMap from "../../../components/bdMap/bdMap.vue";
import chongqingPart from "../../assets/chongqing.json";

export default {
  components: { bdMap },
  data() {
    return {
      bdMapConfig: {
        center: {
          lng: 88.1166800275613,
          lat: 44.10055180881898,
        },
        zoom: 10,
        style: {
          // custom: "styleJson",
          custom: "styleId",
          styleId: "616efba0a2fe5826442ba384dc5b285c",
          styleJson: require("./../../assets/custom_map_config.json"),
        },
      }, // 百度地图基础配置
      isShowPolyLine: true,
      bdInfoWindowStyle: {
        "--popBg": "#114683", // 气泡体的背景色
        "--imgDisplay": "none", // 气泡体的图片 (可选值：block、none)
        "--closeBtnColor": "#fff", // 气泡关闭按钮的颜色
        "--titleHeight": "8px", // 气泡顶部标题高度
      },
    };
  },
  methods: {
    drawShapeLayer() {
      let xinjiangPart = require("./../../assets/xinjiangPart.js");
      this.$refs.bdMap.initShapeLayer({
        color: "rgba(0, 214, 236, 0.8)", // 柱状图颜色
        enablePicked: true, // 是否可以拾取
        selectedIndex: -1, // 选中项
        selectedColor: "#ee1111", // 选中项颜色
        autoSelect: true, // 根据鼠标位置来自动设置选中项
        data: xinjiangPart.default,
        onClick: (event) => {
          console.log(event, "xinjiangPart");
        },
      });

      var data = require("./../../assets/chongqing.json");
      var polygons = [];
      var len = data.length;
      for (var i = 0; i < len; i++) {
        var line = data[i];
        var polygon = [];
        var pt = [line[1] * 512, line[2] * 512];
        for (var j = 3; j < line.length; j += 2) {
          pt[0] += line[j] / 100 / 2;
          pt[1] += line[j + 1] / 100 / 2;
          polygon.push([pt[0], pt[1]]);
        }
        if (Math.random() > 0.5) {
          polygons.push({
            geometry: {
              type: "Polygon",
              coordinates: [polygon],
            },
            properties: {
              height: line[0] / 2,
            },
          });
        }
      }

      this.$refs.bdMap.initShapeLayer({
        color: "rgba(194, 147, 75, 0.8)", // 柱状图颜色
        enablePicked: true, // 是否可以拾取
        selectedIndex: -1, // 选中项
        selectedColor: "#ee1111", // 选中项颜色
        autoSelect: true, // 根据鼠标位置来自动设置选中项
        data: polygons,
        style: "windowAnimation", // 添加窗户动画效果
        opacity: 1,
        onClick: (event) => {
          console.log(event, "chongqingPart");
        },
      });
    },
  },
  mounted() {
    setTimeout(() => {
      this.drawShapeLayer();
    }, 2000);
    this.$nextTick(() => {});
  },
  created() {},
};
</script>

<style lang="scss">
.use-bd-map-vgl {
  width: 100vw;
  height: 100vh;
}
</style>

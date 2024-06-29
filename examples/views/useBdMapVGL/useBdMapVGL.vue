<!--
 * @Description: 使用百度地图VGL版本 页面
 * @Author: mhf
 * @Date: 2024/6/29 14:58
-->
<template>
  <mapComps
    id="map"
    ref="mapComps"
    mapType="bdMap"
    :bdMapConfig="bdMapConfig"
    :bdInfoWindowStyle="bdInfoWindowStyle"
  ></mapComps>
</template>

<script>
export default {
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

  methods: {},
  mounted() {
    console.log("this.$refs.mapComps", this.$refs.mapComps);
    this.$nextTick(() => {
      let xinjiangPart = require("./../../assets/xinjiangPart.js");
      this.$refs.mapComps.initShapeLayer({
        color: "rgba(0, 214, 236, 0.8)", // 柱状图颜色
        enablePicked: true, // 是否可以拾取
        selectedIndex: -1, // 选中项
        selectedColor: "#ee1111", // 选中项颜色
        autoSelect: true, // 根据鼠标位置来自动设置选中项
        data: xinjiangPart.default,
        onClick: (event) => {
          console.log(event, "event123");
        },
      });
    });
  },
  created() {},
};
</script>

<style lang="scss">
#map {
  width: 100vw;
  height: 100vh;
}
</style>

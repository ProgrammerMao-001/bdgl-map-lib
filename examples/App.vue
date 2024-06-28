<template>
  <div id="app">
    <mapComps
        id="map"
        ref="mapComps"
        mapType="bdMap"
        :bdMapConfig="bdMapConfig"
        :bdInfoWindowStyle="bdInfoWindowStyle"
    ></mapComps>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bdMapConfig: {
        center: {
          lng: 112.11083403138811,
          lat: 41.57631859319542,
        },
        zoom: 12,
        style: {
          // custom: "styleJson",
          custom: "styleId",
          styleId: "616efba0a2fe5826442ba384dc5b285c",
          styleJson: require("./assets/custom_map_config.json"),
        },
      }, // 百度地图基础配置
      isShowPolyLine: true,
      bdInfoWindowStyle: {
        "--popBg": "#114683", // 气泡体的背景色
        "--imgDisplay": "none", // 气泡体的图片 (可选值：block、none)
        "--closeBtnColor": "#fff", // 气泡关闭按钮的颜色
        "--titleHeight": "8px", // 气泡顶部标题高度
      },
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#map {
  width: 100vw;
  height: 100vh;
}
</style>

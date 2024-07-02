<!--
 * @Description: 使用百度地图GL版组件 页面
 * @Author: mhf
 * @Date: 2024/6/29 19:43
-->
<template>
  <div class="app-container">
    <mapComps
      id="map"
      ref="mapComps"
      mapType="bdMap"
      :bdMapConfig="bdMapConfig"
      :bdInfoWindowStyle="bdInfoWindowStyle"
      @showMarkerDetail="showMarkerDetail"
      @showPolylineDetail="showPolylineDetail"
    ></mapComps>
  </div>
</template>

<script>
import mapComps from "../../../components/mapComps/mapComps.vue";

export default {
  name: "useBdMap",
  components: { mapComps },
  mixins: [],
  props: {},
  computed: {},
  watch: {},
  filters: {},
  data() {
    return {
      bdMapConfig: {
        center: {
          lng: 120.3083403138811,
          lat: 30.27631859319542,
        },
        zoom: 12,
        style: {
          custom: "styleId",
          styleId: "c0b50646917c55ad9a85f9e67d333570",
        },
      },

      bdInfoWindowStyle: {
        "--popBg": "#114683", // 气泡体的背景色
        "--imgDisplay": "none", // 气泡体的图片 (可选值：block、none)
        "--closeBtnColor": "#fff", // 气泡关闭按钮的颜色
        "--titleHeight": "8px", // 气泡顶部标题高度
      },

      markerList: [
        {
          longitude: 120.11083403138811,
          latitude: 30.17631859319542,
          title: "标题1",
        },
        {
          longitude: 120.3083403138811,
          latitude: 30.27631859319542,
          title: "标题2",
        },
      ],
    };
  },
  methods: {
    showMarkerDetail(data) {
      console.log(data, "data");
      this.$message.success(`你点击了${data.title}`);
    },

    showPolylineDetail(e, autoViewport = false) {
      console.log(e, "e");
    },

    drawDemoMarker() {
      this.markerList.forEach((item) => {
        this.$refs.mapComps.drawMarker({
          obj: {
            lng: item.longitude,
            lat: item.latitude,
          },
          myIcon: this.$refs.mapComps.getIcon({
            url: "/useBdMap/marker.png",
            width: 33,
            height: 33,
          }),
          customObj: {
            ...item,
            remark: "百度地图绘制点位示例",
          },
          isShowInfo: true,
          isFloatShadow: false,
          isResetMakeIcon: true,
          myChooseIcon: this.$refs.mapComps.getIcon({
            url: "/useBdMap/chooseMarker.png",
            width: 33,
            height: 33,
          }),
          key: "title",
          html: `<div style="color: #fff">${item.title}</div>`,
          offsetX: 10,
          offsetY: 30,
          newZoom: 14,
          className: "markerClass",
        });
      });
    },
  },
  created() {},
  mounted() {
    this.drawDemoMarker();
  },
  destroyed() {},
};
</script>

<style lang="scss" scoped>
::v-deep .markerClass {
  //position: absolute !important; /* 或 absolute, fixed 根据实际情况选择 */
  width: 40px;
  height: 40px;
  background: rgba(0, 255, 0, 0);
  border-radius: 25px;
  transform: scale(0);
  transform-origin: center !important;
  animation: radiate 2s;
  animation-iteration-count: infinite;
  z-index: -99999 !important;
}

@keyframes radiate {
  0% {
    background: rgba(0, 255, 0, 0);
    transform: scale(0);
    z-index: -99999 !important;
  }
  to {
    background: rgba(0, 255, 0, 0.6);
    transform: scale(1.2);
    z-index: -99999 !important;
  }
}
</style>

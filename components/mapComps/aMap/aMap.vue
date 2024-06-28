<!--
 * @Description: 高德地图GL基础API 页面
 * @Author: mhf
 * @Documents: https://lbs.amap.com/api/javascript-api-v2/guide/map/3d-map
 * @Date: 2024/2/29 15:57
-->
<template>
  <div id="map-container"></div>
</template>

<script>
export default {
  name: "aMap",
  components: {},
  mixins: [],
  props: {},
  computed: {
    mapConfig() {
      return this.$attrs.mapConfig;
    }, // 获取所有的mapComps传来的props
  },
  watch: {},
  filters: {},
  data() {
    return {};
  },
  methods: {
    initMap() {
      var map = new AMap.Map("map-container", {
        rotateEnable: false, //是否开启地图旋转交互 鼠标右键 + 鼠标画圈移动 或 键盘Ctrl + 鼠标画圈移动
        pitchEnable: true, // 是否开启地图倾斜交互 鼠标右键 + 鼠标上下移动或键盘Ctrl + 鼠标上下移动
        zoom: this.mapConfig.zoom, //初始化地图层级
        pitch: this.mapConfig.pitch, // 地图俯仰角度，有效范围 0 度- 83 度
        rotation: this.mapConfig.rotation, //初始地图顺时针旋转的角度
        viewMode: "3D", //开启3D视图,默认为关闭
        zooms: [2, 20], //地图显示的缩放级别范围
        center: [this.mapConfig.center.lng, this.mapConfig.center.lat], //初始地图中心经纬度
        terrain: true, // 开启地形图
      });
      AMap.plugin(["AMap.ControlBar", "AMap.ToolBar"], function () {
        //异步加载插件
        var controlBar = new AMap.ControlBar({
          //控制地图旋转插件
          position: {
            right: "20px",
            bottom: "100px",
          },
        });
        map.addControl(controlBar);
        var toolBar = new AMap.ToolBar({
          //地图缩放插件
          position: {
            right: "20px",
            bottom: "20px",
          },
        });
        map.addControl(toolBar);
      });
    },

    /**
     * 添加点标记,实现悬浮信息窗体和点击事件 this.drawMarker({obj: {lng: 116.404, lat: 39.119}})
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-04 10:05:59
     **/
    drawMarker(params) {
      console.log(params, "高德地图DrawMarker");

      this.setMapCenterAndZoom();
      this.$emit("showMarkerDetail", {}); // 展示点位详情
    },

    /**
     * 添加线，并实现点击事件
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-06 13:11:14
     **/
    drawPolyline(params) {
      console.log(params, "高德地图DrawPolyline");
      this.$emit("showPolylineDetail", {}); // 接收父组件传来的showPolylineDetail事件（打开详情弹窗）
    },

    /**
     * 添加面，并实现点击事件
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-06 13:11:14
     **/
    drawPolygon(params) {
      console.log(params, "高德地图drawPolygon");
      this.$emit("showPolygonDetail", {}); // 接收父组件传来的showPolygonDetail事件（打开详情弹窗）
    },

    /**
     * 获取点位的自定义图标
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-04 10:20:50
     **/
    getIcon(params) {
      console.log(params, "高德地图GetIcon");
    },

    /**
     * 设置地图中心点和缩放层级
     * @param: params：{lat: 纬度, lng: 经度, zoom: 缩放层级}
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-04 16:22:17
     **/
    setMapCenterAndZoom(params = {}) {
      console.log(params, "高德地图SetMapCenterAndZoom");
    },

    /**
     * 移除对应的 点位/线段
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-04 14:07:27
     **/
    removeOverlay(params) {
      console.log(params, "高德地图RemoveOverlay");
    },

    /**
     * 实现指定路段的实时路况图层
     * @param:
     * @return: sectionObj: 路段的信息
     * @author: mhf
     * @time: 2024-03-05 17:12:48
     **/
    showRoadCondition(params) {
      console.log(params, "高德地图ShowRoadCondition");
      let sectionObj = { a: 1 };
      this.$emit("return-sectionObj", sectionObj); // 将路段信息传递给父组件
    },

    /**
     * 自适应地图里面的图层，如：绘制线段、面或者多个点的时候，使用此方法可自动将绘制的图层调整到合适的区域和层级
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-07 14:48:53
     **/
    setViewport(pointsArr) {
      console.log(pointsArr, "高德地图SetViewport");
    },
  },
  created() {},
  mounted() {
    this.initMap();
  },
  destroyed() {},
};
</script>

<style lang="scss" scoped>
@import "../mapStyles.css";
#map-container {
}
</style>

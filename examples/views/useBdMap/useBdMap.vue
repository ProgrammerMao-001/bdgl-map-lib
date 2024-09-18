<!--
 * @Description: 使用百度地图GL版【bdMap】组件 页面
 * @Author: mhf
 * @Date: 2024/6/29 19:43
-->
<template>
  <div class="use-bd-map">
    <div class="btn">
      <div>
        <el-button size="small" type="primary" @click="drawDefaultMarker"
          >绘制默认点位</el-button
        >
        <el-button size="small" type="danger" @click="removeDefaultMarker"
          >移除默认点位</el-button
        >
        <el-button size="small" type="primary" @click="drawWarningMarker"
          >绘制预警点位</el-button
        >
        <el-button size="small" type="danger" @click="removeWarningMarker"
          >移除预警点位</el-button
        >
      </div>

      <div>
        <el-button size="small" type="primary" @click="drawDefaultOverlay"
          >绘制默认自定义图层</el-button
        >
        <el-button size="small" type="danger" @click="removeDefaultOverlay"
          >移除默认自定义图层</el-button
        >
        <el-button size="small" type="primary" @click="drawCustomOverlay"
          >绘制自定义自定义图层</el-button
        >
        <el-button size="small" type="danger" @click="removeCustomOverlay"
          >移除自定义自定义图层</el-button
        >
      </div>

      <div>
        <el-button size="small" type="primary" @click="drawDefaultLine"
          >绘制默认路线</el-button
        >
        <el-button size="small" type="danger" @click="removeDefaultLine"
          >移除默认路线</el-button
        >
        <el-button size="small" type="primary" @click="drawCustomLine"
          >绘制自定义路线</el-button
        >
        <el-button size="small" type="danger" @click="removeCustomLine"
          >移除自定义路线</el-button
        >
      </div>

      <div>
        <el-button size="small" type="primary" @click="drawDefaultPolygon"
          >绘制默认多边形</el-button
        >
        <el-button size="small" type="danger" @click="removeDefaultPolygon"
          >移除默认多边形</el-button
        >
        <el-button size="small" type="primary" @click="drawCustomPolygon"
          >绘制自定义多边形</el-button
        >
        <el-button size="small" type="danger" @click="removeCustomPolygon"
          >移除自定义多边形</el-button
        >
      </div>

      <div>
        <el-button size="small" type="primary" @click="drawDefaultCircle"
          >绘制默认圆</el-button
        >
        <el-button size="small" type="danger" @click="removeDefaultCircle"
          >移除默认圆</el-button
        >
        <el-button size="small" type="primary" @click="drawCustomCircle"
          >绘制自定义圆</el-button
        >
        <el-button size="small" type="danger" @click="removeCustomCircle"
          >移除自定义圆</el-button
        >
      </div>

      <div>
        <el-button size="small" type="primary" @click="roadCondition(true)"
          >开启路况</el-button
        >
        <el-button size="small" type="danger" @click="roadCondition(false)"
          >关闭路况</el-button
        >
        <el-button size="small" type="primary" @click="drawRoadCondition(true)"
          >驾车规划</el-button
        >
        <el-button size="small" type="danger" @click="removeRoadCondition(true)"
          >移除驾车规划</el-button
        >
      </div>

      <div>
        <el-button size="small" type="warning" @click="setMapCenter"
          >改变中心点</el-button
        >
        <el-button size="small" type="warning" @click="setMapZoom"
          >改变层级</el-button
        >
        <el-button size="small" type="warning" @click="setMapView"
          >改变中心点和层级</el-button
        >
        <el-button size="small" type="warning" @click="getMapView"
          >获取边界和层级</el-button
        >
      </div>

      <div>
        <el-button size="small" type="warning" @click="screenshot"
          >截图</el-button
        >
        <el-button size="small" type="info" @click="rightContent"
          >右键菜单【不推荐使用】</el-button
        >
      </div>
    </div>

    <bdMap
      ref="bdMap"
      listenOnce
      :mapConfig="bdMapConfig"
      :infoWindowStyle="bdInfoWindowStyle"
      @map-loaded="mapLoaded"
      @map-change="handleMapChange"
      @map-click="handleMapClick"
      @return-section="getRoadSection"
      @return-marker="showMarkerDetail"
      @return-polyline="showPolylineDetail"
      @return-polygon="showPolygonDetail"
      @return-overlay="showCustomOverlayDetail"
      @return-overlay-instantiated="getOverlayInstantiated"
    />
  </div>
</template>

<script>
import bdMap from "../../../components/bdMap/bdMap.vue";
import useBdMapData from "./useBdMapData";

export default {
  name: "useBdMap",
  components: { bdMap },
  mixins: [],
  props: {},
  computed: {},
  watch: {},
  filters: {},
  data() {
    return {
      bdMapConfig: {
        ak: "OKHgYpCQmWTblbFlRCzYJWvk0HCuXsHU",
        center: {
          lng: 120.3083403138811,
          lat: 30.27631859319542,
        },
        zoom: 12,
        style: {
          custom: "styleId", // styleId
          styleId: "616efba0a2fe5826442ba384dc5b285c",
          // styleJson: require("/public/json/custom_map_style.json")
        },
      },

      bdInfoWindowStyle: {
        "--popBg": "#114683", // 气泡体的背景色
        "--imgDisplay": "none", // 气泡体的图片 (可选值：block、none)
        "--closeBtnColor": "#fff", // 气泡关闭按钮的颜色
        "--titleHeight": "8px", // 气泡顶部标题高度
      },
      defaultOverlayArr: [], // 默认自定义图层 (drawCustomOverlay)
      customOverlayArr: [], // 自定义自定义图层 (drawCustomOverlay)
    };
  },
  methods: {
    /**
     * @Event 点击点位展示详情
     * @description:
     * @author: mhf
     * @time: 2024-09-14 16:00:24
     **/
    showMarkerDetail(data) {
      console.log(data, "data");
      this.$message.success(`你点击了${data.title}`);
    },

    /**
     * @Event 点击线展示详情
     * @description:
     * @author: mhf
     * @time: 2024-09-14 16:00:38
     **/
    showPolylineDetail(data) {
      console.log(data, "data");
      this.$message.success(`你点击了${data.title}`);
    },

    /**
     * @Event 点击多边形展示详情
     * @description:
     * @author: mhf
     * @time: 2024-09-14 16:00:38
     **/
    showPolygonDetail(data) {
      console.log(data, "data");
      this.$message.success(`你点击了${data.title}`);
    },

    showCustomOverlayDetail(data) {
      console.log(data, "data");
      this.$message.success(`你点击了${data.properties.customObj.title}`);
    },

    getOverlayInstantiated(data) {
      console.log(data, "自定义图层的实例");
      if (data.properties.customObj.customType === "draw-default-overlay") {
        this.defaultOverlayArr.push(data);
      }
      if (data.properties.customObj.customType === "draw-custom-overlay") {
        this.customOverlayArr.push(data);
      }
    },

    /**
     * @Event 地图变化时做的操作【缩放 移动 拖拽】
     * @description:
     * @author: mhf
     * @time: 2024-09-14 16:00:49
     **/
    handleMapChange(config) {
      console.log(config, "config");
    },

    /**
     * @Event 地图点击
     * @description:
     * @author: mhf
     * @time: 2024-09-14 16:01:17
     **/
    handleMapClick(e) {
      console.log(e, "移除当前选中的点位和路段");
      /* 移除当前选中的点位 */
      // this.$refs.bdMap.removeOverlay({
      //   callback: (e) => e.customObj?.isChoose,
      // });
    },

    /**
     * @Event 获取驾车规划完成后的路段信息
     * @description:
     * @author: mhf
     * @time: 2024-09-14 17:20:06
     **/
    getRoadSection(data) {
      console.log(data, "路径规划的详细参数");
      this.$message.success(`总路程为${data.distance}，耗时为${data.duration}`);
    },

    /**
     * @Event 绘制预警点位
     * @description:
     * @author: mhf
     * @time: 2024-09-14 16:01:31
     **/
    drawWarningMarker() {
      useBdMapData.markerList.forEach((item) => {
        this.$refs.bdMap.drawMarker({
          obj: {
            lng: item.longitude,
            lat: item.latitude,
          },
          myIcon: this.$refs.bdMap.getIcon({
            url: "/marker/warning_marker.png",
            width: 33,
            height: 33,
          }),
          customObj: {
            ...item,
            customType: "draw-warning-marker",
            remark: "百度地图绘制预警点位",
          },
          isShowInfo: true,
          isFloatShadow: false,
          resetCenter: false,
          isResetMakeIcon: true,
          myChooseIcon: this.$refs.bdMap.getIcon({
            url: "/marker/warning_marker_choose.png",
            width: 33,
            height: 33,
          }),
          key: "title",
          html: `<div style="color: #fff">${item.title}</div>`,
          offsetX: 10,
          offsetY: 30,
          className: "markerClass",
        });
      });
    },

    /**
     * @Event 绘制默认点位
     * @description:
     * @author: mhf
     * @time: 2024-09-14 16:01:32
     **/
    drawDefaultMarker() {
      useBdMapData.defaultMarkerList.forEach((item) => {
        this.$refs.bdMap.drawMarker({
          obj: {
            lng: item.longitude,
            lat: item.latitude,
          },
          myIcon: this.$refs.bdMap.getIcon({
            url: "/marker/checkpoint.png",
            width: 33,
            height: 33,
          }),
          customObj: {
            ...item,
            customType: "draw-default-marker",
            remark: "百度地图绘制默认点位",
          },
          isShowInfo: false,
          isFloatShadow: false,
          isResetMakeIcon: true,
          myChooseIcon: this.$refs.bdMap.getIcon({
            url: "/marker/checkpoint_choose.png",
            width: 33,
            height: 33,
          }),
          key: "title",
          isLabelShow: true,
          labelText: item.title,
          labelsetX: -30,
          labelsetY: -66,
          labelStyle: {
            color: "#fff", // 文字颜色
            backgroundColor: "#cf5dda", // 背景颜色，可以使用rgba设置透明度
            border: "none", // 边框样式
            borderRadius: "5px", // 边框圆角
            padding: "5px 10px", // 文本内边距
            fontSize: "10px", // 字体大小
            fontWeight: "bold", // 字体粗细
          },
          // newZoom: 17,
          resetType: "centerAndZoom",
        });
      });
    },

    /**
     * @Event 绘制默认线
     * @description:
     * @author: mhf
     * @time: 2024-09-14 16:01:55
     **/
    drawDefaultLine() {
      useBdMapData.defaultLineList.forEach((road) => {
        this.$refs.bdMap.drawPolyline({
          pointsArr: road.pointsArr,
          customObj: {
            ...road,
            pointsArr: road.pointsArr,
            customType: "draw-default-line",
            type: "百度地图绘制默认线路",
          },
          stroke: {
            strokeStyle: "solid",
            strokeColor: "#0063ff",
            strokeWeight: 8,
            strokeOpacity: 1,
          },
          isRightDelete: true,
          isViewport: false,
        });
      });
    },

    /**
     * @Event 绘制自定义线
     * @description:
     * @author: mhf
     * @time: 2024-09-14 16:01:55
     **/
    drawCustomLine() {
      useBdMapData.lineList.forEach((road) => {
        this.$refs.bdMap.drawPolyline({
          pointsArr: road.pointsArr,
          customObj: {
            ...road,
            pointsArr: road.pointsArr,
            customType: "draw-custom-line",
            type: "百度地图绘制自定义线路",
          },
          stroke: {
            strokeStyle: "solid",
            strokeColor: "#8acdf1",
            strokeWeight: 8,
            strokeOpacity: 1,
          },
          isRightDelete: true,
          isViewport: false,
          resetViewport: true,
        });
      });
    },

    drawDefaultPolygon() {
      useBdMapData.defaultPolygonList.forEach((item, index) => {
        this.$refs.bdMap.drawPolygon({
          pointArr: item.pointArr,
          config: {
            zIndex: 10, // 层级
            fillOpacity: 0.5, // 面的不透明度
            strokeStyle: "solid", // dashed虚线、solid实线、dotted点线
            fillColor: "#5298fe", // 边框颜色
            strokeColor: "#5298fe", // 边框颜色
            strokeWeight: 5, // 边框粗细
            strokeOpacity: 1, // 边框不透明度
          },
          customObj: {
            ...item,
            customType: "draw-default-polygon",
            type: "百度地图绘制默认多边形",
          },
          isRightDelete: true, // 是否右键删除
          isResetPolygon: true,
          myChooseConfig: {
            zIndex: 11, // 层级
            fillOpacity: 0.5, // 面的不透明度
            strokeStyle: "solid", // dashed虚线、solid实线、dotted点线
            fillColor: "#FF0000", // 边框颜色
            strokeColor: "#FF0000", // 边框颜色
            strokeWeight: 5, // 边框粗细
            strokeOpacity: 1, // 边框不透明度
          },
        });
      });
    },

    drawCustomPolygon() {
      useBdMapData.polygonList.forEach((item, index) => {
        this.$refs.bdMap.drawPolygon({
          pointArr: item.pointArr,
          config: {
            zIndex: 10, // 层级
            fillOpacity: 0.5, // 面的不透明度
            strokeStyle: "solid", // dashed虚线、solid实线、dotted点线
            fillColor: "#FFF000", // 边框颜色
            strokeColor: "#FFF000", // 边框颜色
            strokeWeight: 5, // 边框粗细
            strokeOpacity: 1, // 边框不透明度
          },
          customObj: {
            ...item,
            customType: "draw-custom-polygon",
            type: "百度地图绘制自定义多边形",
          },
          isRightDelete: false, // 是否右键删除
          isResetPolygon: true,
          resetViewport: false,
          myChooseConfig: {
            zIndex: 11, // 层级
            fillOpacity: 0.5, // 面的不透明度
            strokeStyle: "solid", // dashed虚线、solid实线、dotted点线
            fillColor: "#00FFFF", // 填充颜色
            strokeColor: "#00FFFF", // 边框颜色
            strokeWeight: 5, // 边框粗细
            strokeOpacity: 1, // 边框不透明度
          },
        });
      });
    },

    drawDefaultOverlay() {
      useBdMapData.defaultOverlayList.forEach((item, index) => {
        this.$refs.bdMap.drawCustomOverlay({
          createDOM: function () {
            const img = document.createElement("img");
            img.style.width = "29px";
            img.style.height = "40px";
            img.src = item.src;
            img.draggable = false;
            return img;
          },
          point: {
            lng: item.longitude,
            lat: item.latitude,
          },
          customObj: {
            ...item,
            customType: "draw-default-overlay",
            type: "百度地图绘制默认的自定义覆盖物",
          },
          customOverlayConfig: {
            enableMassClear: true, // 是否能被统一清除掉覆盖物
            enableDraggingMap: true, // 是否可以在覆盖物位置拖拽地图
          },
          isShowInfo: true,
          infoWindowConfig: {
            html: `<div style="color: #fff">${item.title}</div>`,
            offsetX: -14, // 覆盖物水平偏移量
            offsetY: 50,
            isFloatShadow: false,
          },
        });
      });
    },

    drawCustomOverlay() {
      useBdMapData.customOverlayList.forEach((item, index) => {
        this.$refs.bdMap.drawCustomOverlay({
          createDOM: function () {
            const img = document.createElement("img");
            img.style.width = "29px";
            img.style.height = "40px";
            img.src = item.src;
            img.draggable = false;
            return img;
          },
          point: {
            lng: item.longitude,
            lat: item.latitude,
          },
          customObj: {
            ...item,
            customType: "draw-custom-overlay",
            type: "百度地图绘制自定义的自定义覆盖物",
          },
          customOverlayConfig: {
            enableMassClear: true, // 是否能被统一清除掉覆盖物
            enableDraggingMap: true, // 是否可以在覆盖物位置拖拽地图
          },
          isShowInfo: true,
          infoWindowConfig: {
            html: `<div style="color: #fff">${item.title}</div>`,
            offsetX: -14, // 覆盖物水平偏移量
            offsetY: 50,
            isFloatShadow: false,
          },
        });
      });
    },

    drawDefaultCircle() {},

    drawCustomCircle() {},

    /**
     * @Event 移除默认点位
     * @description:
     * @author: mhf
     * @time: 2024-09-14 16:02:15
     **/
    removeDefaultMarker() {
      this.$refs.bdMap.removeOverlay({
        callback: (e) => e.customObj?.customType === "draw-default-marker",
      });
    },

    /**
     * @Event 移除预警点位
     * @description:
     * @author: mhf
     * @time: 2024-09-14 16:02:15
     **/
    removeWarningMarker() {
      this.$refs.bdMap.removeOverlay({
        callback: (e) => e.customObj?.customType === "draw-warning-marker",
      });
    },

    /**
     * @Event 移除默认线
     * @description:
     * @author: mhf
     * @time: 2024-09-14 16:02:39
     **/
    removeDefaultLine() {
      this.$refs.bdMap.removeOverlay({
        callback: (e) => e.customObj?.customType === "draw-default-line",
      });
    },

    /**
     * @Event 移除自定义线
     * @description:
     * @author: mhf
     * @time: 2024-09-14 16:02:39
     **/
    removeCustomLine() {
      this.$refs.bdMap.removeOverlay({
        callback: (e) => e.customObj?.customType === "draw-custom-line",
      });
    },

    removeDefaultPolygon() {
      this.$refs.bdMap.removeOverlay({
        callback: (e) => e.customObj?.customType === "draw-default-polygon",
      });
    },

    removeCustomPolygon() {
      this.$refs.bdMap.removeOverlay({
        callback: (e) => {
          console.log(e);
          // return e.properties.customObj?.customType === "draw-custom-polygon"
        },
      });
    },

    removeDefaultCircle() {},

    removeCustomCircle() {},

    removeDefaultOverlay() {
      console.log("移除默认自定义图层");
      this.defaultOverlayArr.forEach((item) => {
        item.hide();
      });
    },

    removeCustomOverlay() {
      console.log("移除默认自定义图层");
      this.customOverlayArr.forEach((item) => {
        item.hide();
      });
    },

    /**
     * @Event 开启/关闭 路况
     * @description:
     * @author: mhf
     * @time: 2024-09-14 16:03:06
     **/
    roadCondition(flag) {
      if (flag) {
        this.$refs.bdMap.showRoadCondition({
          isShowRoadCondition: true,
          isShowMyRoad: false,
        });
      } else {
        this.$refs.bdMap.showRoadCondition({
          isShowRoadCondition: false,
          clearRoadSectionType: "traffic",
        });
      }
    },

    /**
     * @Event 驾车规划
     * @description:
     * @author: mhf
     * @time: 2024-09-14 16:58:47
     **/
    drawRoadCondition() {
      this.$refs.bdMap.showRoadCondition({
        isShowRoadCondition: true,
        isShowMyRoad: true,
        traffic_widthIcon: true,
        traffic_autoViewport: true,
        traffic_enableDragging: false,
        startPoint: {
          lng: 120.59453385817872,
          lat: 30.249204520249357,
        },
        endPoint: {
          lng: 120.1470765087298,
          lat: 30.315234617627876,
        },
        customObj: {
          title: "百度地图驾车规划路线",
          customType: "draw-road-condition",
          type: "百度地图驾车规划",
        },
      });
    },

    /**
     * @Event 移除驾车规划
     * @description:
     * @author: mhf
     * @time: 2024-09-14 16:58:47
     **/
    removeRoadCondition() {
      /* 移除驾车规划的图层 */
      this.$refs.bdMap.showRoadCondition({
        isShowRoadCondition: false,
        clearRoadSectionType: "roadCondition",
      });

      /* 移除选中驾车规划的那段线路 */
      this.$refs.bdMap.removeOverlay({
        callback: (e) =>
          e.customObj?.customType === "draw-road-condition" &&
          e.customObj?.isChoose,
      });
      /* 移除透明的辅助点击的线 */
      this.$refs.bdMap.removeOverlay({
        callback: (e) =>
          e.customObj?.traffic_customType === "traffic_transparent",
      });
    },

    mapLoaded(a) {
      console.log("mapLoaded", a);
      this.drawDefaultMarker();
      this.drawDefaultLine();
      this.drawDefaultPolygon();
      this.drawDefaultOverlay();
    },

    screenshot() {
      let url = this.$refs.bdMap.screenshot();

      // 检查 URL 是否为空
      if (!url) {
        console.error("Failed to get screenshot URL");
        return;
      }

      // 打印 URL 进行检查
      console.log("Screenshot URL:", url);

      // 创建一个隐藏的 <a> 元素
      const link = document.createElement("a");
      link.href = url;
      link.download = "screenshot.png"; // 设置文件名

      // 添加到 DOM 中
      document.body.appendChild(link);

      // 触发点击事件
      link.click();

      // 清理临时元素
      document.body.removeChild(link);
    },

    rightContent() {
      this.$refs.bdMap.addRightMenu([
        {
          text: "刷新",
          callback: () => {
            location.reload();
          },
        },
      ]);
    },

    setMapCenter() {
      this.$refs.bdMap.setMapCenter({
        lng: 120.16249203811518,
        lat: 30.21226404708224,
      });
    },

    setMapZoom() {
      this.$refs.bdMap.setMapZoom({
        zoom: 18,
      });
    },

    setMapView() {
      this.$refs.bdMap.setMapCenterAndZoom({
        lng: 121.16249203811518,
        lat: 31.21226404708224,
        zoom: 10,
      });
    },

    getMapView() {
      let viewport = this.$refs.bdMap.getMapViewport();
      let { EN, ES, WN, WS, zoom } = viewport;
      this.$message.success(
        `左上角：${JSON.stringify(WN)},左下角：${JSON.stringify(
          WS
        )},右上角：${JSON.stringify(EN)},右下角：${JSON.stringify(
          ES
        )},缩放层级：${zoom}`
      );
      console.log(viewport, "viewport");
    },
  },
  created() {},
  mounted() {},
  destroyed() {},
};
</script>

<style lang="scss" scoped>
.use-bd-map {
  width: 100vw;
  height: 100vh;
  position: relative;

  .btn {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 999;
    height: auto;
    display: flex;
    flex-direction: column;

    .el-button {
      margin: 10px 0 0 10px;
    }
  }
}

::v-deep .markerClass {
  width: 30px;
  height: 30px;
  background: rgba(255, 0, 0, 0.5);
  border-radius: 25px;
  transform: scale(0);
  transform-origin: center !important;
  animation: radiate 2s;
  animation-iteration-count: infinite;
}

@keyframes radiate {
  to {
    transform: scale(2.5);
    background: rgba(0, 0, 0, 0);
  }
}
</style>

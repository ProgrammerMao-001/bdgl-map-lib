<!--
 * @Description: 使用百度地图点聚合 页面
 * @Author: mhf
 * @Date: 2024/9/26 17:16
-->
<template>
  <div class="use-bd-marker-cluster">
    <div class="btn">
      <div>
        <el-button size="small" type="success" @click="drawMarkerCluster"
          >绘制点聚合图层</el-button
        >
        <el-button size="small" type="danger" @click="removeMarkerCluster"
          >移除点聚合图层</el-button
        >
      </div>
    </div>

    <bdMap
      ref="bdMap"
      listenOnce
      :ak="ak"
      :mapConfig="bdMapConfig"
      :infoWindowStyle="bdInfoWindowStyle"
      @map-loaded="mapLoaded"
      @map-change="handleMapChange"
      @return-cluster-children="getMarkerChildren"
      @return-cluster-point="getMarkerSelf"
    />

    <bdClusterDetailDialog ref="bdClusterDetailDialog"></bdClusterDetailDialog>
  </div>
</template>

<script>
import bdMap from "../../../components/bdMap/bdMap.vue";
import bdClusterDetailDialog from "../../../components/bdMap/bdClusterDetailDialog.vue";

export default {
  name: "useBdMarkerCluster",
  components: { bdMap, bdClusterDetailDialog },
  mixins: [],
  props: {},
  computed: {},
  watch: {},
  filters: {},
  data() {
    return {
      ak: require("/public/ak").default,
      bdMapConfig: {
        center: {
          lat: 36.539553878889485,
          lng: 114.54600561053593,
          // lng: 116.414,
          // lat: 39.915,
        },
        zoom: 10,
        style: {
          custom: "",
          styleId: "616efba0a2fe5826442ba384dc5b285c",
          styleJson: require("/public/json/custom_map_style.json"),
        },
      },

      bdInfoWindowStyle: {
        "--popBg": "#fff", // 气泡体的背景色
        "--imgDisplay": "none", // 气泡体的图片 (可选值：block、none)
        "--closeBtnColor": "#000", // 气泡关闭按钮的颜色
        "--titleHeight": "8px", // 气泡顶部标题高度
      },

      markerClusterParams: {
        // clusterArr: require("/public/markerCluster/poiData").default,
        clusterArr: require("/public/markerCluster/warningData").default,
        isCustomDialog: false, // 是否需要自定义弹窗
        titleType: ["title", "tooltip"], // ['title', 'tooltip']
        setNewIcon: true,
        setNewCenterAndZoom: ["center"], // ['center', 'zoom']
        contextTitle: "name", // 设置点位上方的标题文字的字段
        contextType: "type", // 区分点位类型的字段 【学校、医院...】
      },
    };
  },
  methods: {
    mapLoaded(e) {
      this.$refs.bdMap.drawMarkerCluster(this.markerClusterParams);
    },

    handleMapChange(config) {
      console.log(config, "config");
    },

    drawMarkerCluster() {
      this.$refs.bdMap.drawMarkerCluster(this.markerClusterParams);
    },

    removeMarkerCluster() {
      this.$refs.bdMap.removeMarkerCluster();
    },

    getMarkerChildren(data) {
      console.log(data, "需要自定义弹窗");
      this.$refs.bdClusterDetailDialog.showDialog({
        data,
      });
    },

    getMarkerSelf(data) {
      console.log("点位详情", data);
    },
  },
  created() {},
  mounted() {},
  destroyed() {},
};
</script>

<style lang="scss" scoped>
.use-bd-marker-cluster {
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
</style>

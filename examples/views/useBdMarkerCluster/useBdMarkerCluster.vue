<!--
 * @Description: 使用百度地图点聚合 页面
 * @Author: mhf
 * @Date: 2024/9/26 17:16
-->
<template>
  <div class="use-bd-marker-cluster">
    <bdMap
      ref="bdMap"
      listenOnce
      :ak="ak"
      :mapConfig="bdMapConfig"
      :infoWindowStyle="bdInfoWindowStyle"
      @map-loaded="mapLoaded"
      @map-change="handleMapChange"
    />
  </div>
</template>

<script>
import bdMap from "../../../components/bdMap/bdMap.vue";

export default {
  name: "useBdMarkerCluster",
  components: { bdMap },
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
          lng: 120.3083403138811,
          lat: 30.27631859319542,
        },
        zoom: 12,
        style: {
          custom: "styleJson",
          styleId: "616efba0a2fe5826442ba384dc5b285c",
          styleJson: require("/public/json/custom_map_style.json"),
        },
      },

      bdInfoWindowStyle: {
        "--popBg": "#114683", // 气泡体的背景色
        "--imgDisplay": "none", // 气泡体的图片 (可选值：block、none)
        "--closeBtnColor": "#fff", // 气泡关闭按钮的颜色
        "--titleHeight": "8px", // 气泡顶部标题高度
      },
    };
  },
  methods: {
    mapLoaded(e) {
      console.log(e, "e");
    },

    handleMapChange(config) {
      console.log(config, "config");
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
}
</style>

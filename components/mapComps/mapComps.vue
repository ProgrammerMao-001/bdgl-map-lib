<!--
 * @Description: 地图组件的首页 页面
 * @Author: mhf
 * @Date: 2024/2/29 16:05
-->
<template>
  <div class="map-comps">
    <aMap
      v-if="mapType === 'aMap'"
      ref="aMap"
      :mapConfig="aMapConfig"
      @showMarkerDetail="showMarkerDetail"
      @showPolylineDetail="showPolylineDetail"
      @showPolygonDetail="showPolygonDetail"
      @return-sectionObj="getSectionObj"
    />
    <bdMap
      v-if="mapType === 'bdMap'"
      ref="bdMap"
      :mapConfig="bdMapConfig"
      :infoWindowStyle="bdInfoWindowStyle"
      @showMarkerDetail="showMarkerDetail"
      @showPolylineDetail="showPolylineDetail"
      @showPolygonDetail="showPolygonDetail"
      @return-sectionObj="getSectionObj"
      @mapChange="mapChange"
    />
    <tdMap v-if="mapType === 'tdMap'" />
    <leafletMap v-if="mapType === 'leafletMap'" />
  </div>
</template>

<script>
import aMap from "./aMap/aMap.vue";
import bdMap from "./bdMap/bdMap.vue";
import tdMap from "./tdMap/tdMap.vue";
import leafletMap from "./leafletMap/leafletMap.vue";

export default {
  name: "mapComps",
  components: { aMap, bdMap, tdMap, leafletMap },
  mixins: [],
  props: {
    mapType: {
      type: String,
      default: "bdMap",
    }, // 选择的地图类型【aMap：高德地图、bdMap：百度地图、tdMap：天地图、leafletMap：leaflet地图】

    bdMapConfig: {
      type: Object,
      default: () => {
        return {
          center: {
            lng: 116.404,
            lat: 39.915,
          },
          zoom: 12,
          style: {
            custom: "", // styleId 或 styleJson
            styleId: undefined, // 发布的styleID需要与ak为同一个用户
            styleJson: undefined, // styleJson与ak无关联
          }, // 是否需要自定义地图样式
        };
      },
    }, // 百度地图基础配置
    bdInfoWindowStyle: {
      "--popBg": "#ffffff", // 气泡体的背景色
      "--imgDisplay": "block", // 气泡体的图片 (可选值：block、none)
      "--closeBtnColor": "#cccccc", // 气泡关闭按钮的颜色
      "--titleHeight": "auto", // 气泡顶部标题高度
    }, // 百度地图自定义信息窗体样式
    aMapConfig: {
      type: Object,
      default: () => {
        return {
          center: {
            lng: 116.404,
            lat: 39.915,
          },
          zoom: 12,
          pitch: 5, // 地图俯仰角度，有效范围 0 度- 83 度
          rotation: 90, // 初始地图顺时针旋转的角度
        };
      },
    }, //  高德地图基础配置
    tdMapConfig: {
      type: Object,
      default: () => {
        return {};
      },
    }, // 天地图基础配置
    leafletMapConfig: {
      type: Object,
      default: () => {
        return {};
      },
    }, //  leaflet地图基础配置
  },
  computed: {},
  watch: {},
  filters: {},
  data() {
    return {};
  },
  methods: {
    /**
     * 重置地图的中心点和缩放层级
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-06 15:51:49
     **/
    setMapCenterAndZoom(obj) {
      this.$refs[this.mapType].setMapCenterAndZoom(obj);
    },

    /**
     * 添加点标记,实现悬浮信息窗体和点击事件
     * @param: obj
     * @return:
     * @author: mhf
     * @time: 2024-03-04 11:09:46
     **/
    drawMarker(obj) {
      this.$refs[this.mapType].drawMarker(obj);
    },

    /**
     * 添加线，并实现点击事件
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-06 13:17:02
     **/
    drawPolyline(obj) {
      this.$refs[this.mapType].drawPolyline(obj);
    },

    /**
     * 添加面，并实现点击事件
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-06 13:17:02
     **/
    drawPolygon(obj) {
      this.$refs[this.mapType].drawPolygon(obj);
    },

    /**
     * 获取点位的自定义图标
     * @param: obj
     * @return:
     * @author: mhf
     * @time: 2024-03-04 11:09:46
     **/
    getIcon(obj) {
      return this.$refs[this.mapType].getIcon(obj);
    },

    /**
     * 展示点位详情
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-04 16:12:05
     **/
    showMarkerDetail(params) {
      this.$emit("showMarkerDetail", params);
    },

    /**
     * 展示线段详情
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-04 16:12:05
     **/
    showPolylineDetail(params) {
      this.$emit("showPolylineDetail", params);
    },

    /**
     * 展示面详情
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-04 16:12:05
     **/
    showPolygonDetail(params) {
      this.$emit("showPolygonDetail", params);
    },

    /**
     * 移除符合特定条件的 点位标记/线段
     * @param: obj
     * @return:
     * @author: mhf
     * @time: 2024-03-04 11:09:46
     **/
    removeOverlay(obj) {
      this.$refs[this.mapType].removeOverlay(obj);
    },

    /**
     * [传入起点和终点坐标]实现指定路段的实时路况图层
     * @param: obj
     * @return:
     * @author: mhf
     * @time: 2024-03-04 11:09:46
     **/
    showRoadCondition(obj) {
      this.$refs[this.mapType].showRoadCondition(obj);
    },

    clearRoadSection() {
      this.$refs[this.mapType].clearRoadSection();
    },

    /**
     * 获取地图中绘制的实时线段的信息
     * @param: 将地图组件中接收到的路段信息传给父组件，使用时请直接在组件上挂载
     * @return: obj：路段信息
     * @author: mhf
     * @time: 2024-03-05 16:58:56
     **/
    getSectionObj(obj) {
      // console.log(obj, "obj")
      this.$emit("return-sectionObj", obj);
    },

    /**
     * 获取地图中绘制的实时线段的信息
     * @param: 将地图组件中接收到的路段信息传给父组件，使用时请直接在组件上挂载
     * @return: obj：路段信息
     * @author: mhf
     * @time: 2024-03-05 16:58:56
     **/
    setViewport(arr) {
      this.$refs[this.mapType].setViewport(arr);
    },

    /**
     * 获取地图缩放、拖拽后的可视区坐标和层级
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-04-24 17:56:59
     **/
    mapChange(viewport) {
      // console.log(viewport, "viewport")
      this.$emit("mapChange", viewport); // 接受子组件的数据，并将子组件收到的数据传给父组件
    },
  },
  created() {},
  mounted() {},
  destroyed() {},
};
</script>

<style lang="scss" scoped>
.map-comps {
  width: 100%;
  height: 100%;
}
</style>

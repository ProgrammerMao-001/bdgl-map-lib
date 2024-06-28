<!--
 * @Description: leaflet离线地图基础操作API 页面
 * @Author: mhf
 * @Documents: https://leafletjs.cn/index.html
 * @Date: 2024/2/29 16:18
-->
<template>
  <div id="map-container"></div>
</template>

<script>
export default {
  name: "leafletMap",
  components: {},
  mixins: [],
  props: {},
  computed: {},
  watch: {},
  filters: {},
  data() {
    return {};
  },
  methods: {
    initMap() {
      var map = L.map("map-container").setView(
        [83.53420759615909, 246.38058554922884],
        13
      );
      L.tileLayer(
        "http://api0.map.bdimg.com/customimage/tile?&x={x}&y={y}&z={z}&udt=20231205&scale=1&ak=iTu42KR8ex0LKLEE7hilYsczAHKX2rKc",
        {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }
      ).addTo(map);

      map.on("click", function (e) {
        console.log(e.latlng);
      });
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

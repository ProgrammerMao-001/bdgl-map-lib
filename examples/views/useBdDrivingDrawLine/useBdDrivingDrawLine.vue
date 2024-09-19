<!--
 * @Description: 使用百度地图驾车规划生成路线组件 页面
 * @Author: mhf
 * @Date: 2024/9/19 16:57
-->
<template>
  <div>
    <div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item
          label="路段点位(自动) : "
          prop="trafficRoad.roadCoordinate"
        >
          <el-input
            v-model="formData.trafficRoad.roadCoordinate"
            disabled
            placeholder=""
          >
            <template slot="append">
              <div class="choose-class" @click="showLeafletMap('auto')">
                <i class="iconfont if-ditudingwei" /> <span>选择</span>
              </div>
            </template>
          </el-input>
        </el-form-item>
      </el-form>
    </div>

    <bdDrivingDrawLine
      ref="bdDrivingDrawLine"
      @on-response="getAutoP"
    ></bdDrivingDrawLine>
  </div>
</template>

<script>
import bdDrivingDrawLine from "../../../components/bdDrivingDrawLine/bdDrivingDrawLine.vue";
export default {
  name: "useBdDrivingDrawLine",
  components: { bdDrivingDrawLine },
  mixins: [],
  props: {},
  computed: {},
  watch: {},
  filters: {},
  data() {
    return {
      formData: {
        roadLaneList: [],
        trafficRoad: {
          roadProperties: "4",
          devName: "",
        },
      },
    };
  },
  methods: {
    showLeafletMap(type) {
      let passData = {
        title: "选择线路轨迹",
        data: this.formData.trafficRoad.roadCoordinate,
      };
      this.$refs.bdDrivingDrawLine.showDialog(passData);
    },

    getAutoP({ km, pointsArr }) {
      this.$set(this.formData.trafficRoad, "roadLength", km);
      this.$set(
        this.formData.trafficRoad,
        "roadCoordinate",
        JSON.stringify(pointsArr)
      );
      this.$set(this.formData.trafficRoad, "startLongitude", pointsArr[0].lng);
      this.$set(this.formData.trafficRoad, "startLatitude", pointsArr[0].lat);
      this.$set(
        this.formData.trafficRoad,
        "endLongitude",
        pointsArr[pointsArr.length - 1].lng
      );
      this.$set(
        this.formData.trafficRoad,
        "endLatitude",
        pointsArr[pointsArr.length - 1].lat
      );
    },
  },
  created() {},
  mounted() {},
  destroyed() {},
};
</script>

<style lang="scss" scoped></style>

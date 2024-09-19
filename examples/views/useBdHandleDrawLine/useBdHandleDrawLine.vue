<!--
 * @Description: 使用bdHandleDrawLine组件 页面
 * @Author: mhf
 * @Date: 2024/9/19 16:05
-->
<template>
  <div>
    <div>
      <el-form ref="form" :model="formData" label-width="80px">
        <el-form-item label="手动画线 : " prop="trafficRoad.handCoordinate">
          <el-input
            v-model="formData.trafficRoad.handCoordinate"
            disabled
            placeholder=""
          >
            <template slot="append">
              <div class="choose-class" @click="showLeafletMap">
                <i class="iconfont if-ditudingwei" /> <span>选择</span>
              </div>
            </template>
          </el-input>
        </el-form-item>
      </el-form>
    </div>

    <bdHandleDrawLine ref="bdHandleDrawLine" @on-response="getHandleP">
    </bdHandleDrawLine>
  </div>
</template>

<script>
import bdHandleDrawLine from "../../../components/bdHandleDrawLine/bdHandleDrawLine.vue";

export default {
  name: "useBdHandleDrawLine",
  components: { bdHandleDrawLine },
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
        data: this.formData.trafficRoad.handCoordinate,
      };
      this.$refs.bdHandleDrawLine.showDialog(passData);
    },

    getHandleP({ km, pointsArr }) {
      console.log(km, pointsArr, "收到的值");
      this.$set(
        this.formData.trafficRoad,
        "handCoordinate",
        JSON.stringify(pointsArr)
      );
    },
  },
  created() {},
  mounted() {},
  destroyed() {},
};
</script>

<style lang="scss" scoped></style>

<!--
 * @Description: 使用百度地图GL LIb插件 页面
 * @Author: mhf
 * @Date: 2024/6/29 23:26
-->
<template>
  <div>
    <el-form ref="form" :model="formData" label-width="98px">
      <el-form-item label="区域范围 : " prop="areaCoordinate">
        <el-input v-model="formData.areaCoordinate" placeholder="" disabled>
          <template slot="append">
            <div class="choose-class" @click="showMapAreaDialog">
              <i class="iconfont if-ditudingwei" /> <span>选择</span>
            </div>
          </template>
        </el-input>
      </el-form-item>
    </el-form>

    <bdLib
      ref="bdLib"
      ak="iTu42KR8ex0LKLEE7hilYsczAHKX2rKc"
      :btnList="btnList"
      @on-response="getOverlay"
    />
  </div>
</template>

<script>
import bdLib from "../../../components/bdLib/bdLib.vue";

export default {
  name: "deviceLayoutDialog",
  components: { bdLib },
  props: {},
  data() {
    return {
      formData: {},
      lineArr: [],
      btnList: ["marker", "polyline", "rectangle", "polygon", "circle"],
    };
  },
  methods: {
    showMapAreaDialog() {
      let passData = {
        data: this.formData?.areaCoordinate,
        title: "绘制区域",
      };
      this.$refs.bdLib.showDialog(passData);
    },

    getOverlay(data) {
      let pointArr = data.pointsArr || [];
      this.$set(this.formData, "areaCoordinate", JSON.stringify(pointArr));
    },
  },
  created() {},
  mounted() {},
};
</script>

<style lang="scss" scoped></style>

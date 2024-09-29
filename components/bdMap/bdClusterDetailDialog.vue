<!--
 * @Description: 百度地图点聚合点位详情弹窗 页面
 * @Author: mhf
 * @Date: 2024/9/29 13:37
-->
<template>
  <div
    class="bd-cluster-detail-dialog"
    v-if="dialogVisible"
    v-div-drag
    v-div-esc-close="hideDialog"
  >
    <div class="bd-cluster-detail-dialog-header">
      <span> 详情 </span>
      <i class="el-icon-close" @click="hideDialog"></i>
    </div>

    <div
      class="bd-cluster-item"
      v-for="(p, i) in pointsArr"
      :key="i"
      :custom-index="i"
      @click="eventDelegation"
    >
      <el-tooltip
        placement="left"
        effect="light"
        overflow
        :content="p.properties[itemKey]"
      >
        <div class="bd-cluster-item-public">{{ p.properties[itemKey] }}</div>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: "bdClusterDetailDialog",
  components: {},
  props: {
    itemKey: {
      type: String,
      default: "name",
    }, // 每一行展示的内容 key
  },
  data() {
    return {
      dialogVisible: false,
      pointsArr: [],
    };
  },
  methods: {
    showDialog(data) {
      this.dialogVisible = true;
      document.body.appendChild(this.$el);
      this.pointsArr = data;
      console.log(data);
    },

    hideDialog() {
      this.dialogVisible = false;
    },

    eventDelegation(e) {
      const child = e.target.closest(".bd-cluster-item");
      let index = child.getAttribute("custom-index");
      if (index) {
        console.log(this.pointsArr[index], "点击的那一项");
        this.$emit("return-check", this.pointsArr[index]);
      }
    },
  },
  created() {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.bd-cluster-detail-dialog {
  width: 340px;
  max-height: 600px;
  overflow-y: auto;
  padding: 10px;
  z-index: 2000 !important;
  position: absolute;
  right: 20px;
  top: 100px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 4px;
  }

  .bd-cluster-item {
    padding: 6px 0;
    color: #8e8e8e;
    border-bottom: 1px solid #ccc;

    &-public {
      /* 溢出隐藏 */
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background: #dedede;
      color: #1492ff;
      cursor: pointer;
    }
  }
}
</style>

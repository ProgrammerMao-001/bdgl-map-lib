<!--
 * @Description: 百度地图点聚合点位详情弹窗 页面
 * @Author: mhf
 * @Date: 2024/9/29 13:37
 * @todo: 点击那一行的时候打开点位详情弹窗事件完善；
 * @todo: bd-cluster-item-public-type 背景色和文字颜色可通过传参配置
 * @todo: 弹窗关闭事件完善
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
      <div class="bd-cluster-item-public">
        <el-tooltip
          placement="left"
          effect="light"
          overflow
          :content="p.properties[itemKey]"
        >
          <div class="bd-cluster-item-public-title">
            {{ p.properties[itemKey] }}
          </div>
        </el-tooltip>
        <div class="bd-cluster-item-public-type">
          {{ p.properties[itemType] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bdClusterDetailDialog",
  components: {},
  props: {
    keys: {
      type: Object,
      default: () => {
        return {
          contextTitle: "contextTitle",
          contextType: "contextType",
        };
      },
    },
  },
  computed: {
    itemKey() {
      return this.keys.contextTitle;
    },
    itemType() {
      return this.keys.contextType;
    },
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
        this.$message.success(JSON.stringify(this.pointsArr[index]));
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
      &-title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &-type {
        margin-top: 4px;
        color: #909399;
        background-color: #f4f4f5;
        width: fit-content;
        padding: 2px 4px;
        border-radius: 4px;
      }
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

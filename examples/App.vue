<template>
  <div id="app">
    <div class="content">
      <div
        class="content-box"
        v-for="(item, index) in componentsList"
        :key="index"
        @click="component = item.component"
      >
        <div class="content-box-name">{{ item.name }}</div>
        <div class="content-box-remark">{{ item.remark }}</div>
      </div>
    </div>
    <component :is="component"></component>
  </div>
</template>

<script>
export default {
  computed: {},
  components: {},
  data() {
    return {
      componentsList: require("./assets/componentsList.json"),
      component: null,
    };
  },

  methods: {},
  mounted() {},
  created() {},
};
</script>

<style lang="scss">
$gap: 30px;
$columnWidth: calc((100vw - #{$gap} * 2) / 7);
$--borderColor: #e9e9e9;

* {
  margin: 0;
  padding: 0;
}

.content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(#{$columnWidth}, 1fr));
  grid-gap: $gap;
  padding: $gap;
  height: calc(100vh - #{$gap});
  box-sizing: border-box;

  &-box {
    height: 100px;
    cursor: pointer;
    border: 1px solid $--borderColor;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    width: calc(100% - #{$gap});
    padding: $gap / 2;
    border-radius: 5px;

    &-name {
      word-wrap: break-word;
      overflow-wrap: break-word;
      height: $gap;
    }

    &-remark {
      height: calc(100% - #{$gap});
      margin-top: $gap / 2;
      overflow-y: auto;
    }

    &:hover {
      border: 1px solid rgba(13, 187, 137, 0.3);
      box-shadow: 0 0 5px rgba(13, 187, 137, 0.6);
    }
  }
}
</style>

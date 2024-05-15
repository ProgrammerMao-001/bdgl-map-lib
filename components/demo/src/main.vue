<!--
 * @Description: 这个是demo 页面
 * @Author: mhf
 * @Date: 2024/5/15 17:51
-->
<template>
  <div class="a">
    main

    <div class="b">demo</div>
  </div>
</template>

<script>
export default {
  name: "demo-main",
  components: {},
  mixins: [],
  props: {},
  computed: {},
  watch: {},
  filters: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
  destroyed() {},
};
</script>

<style lang="scss" scoped>
.a {
  width: 400px;
  height: 400px;
  border: 1px solid red;

  .b {
    width: 200px;
    height: 200px;
    border: 1px solid green;
  }
}
</style>

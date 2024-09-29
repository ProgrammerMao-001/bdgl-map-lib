/**
 * @Event 改写 el-tooltip的show方法
 * @description: 传入 overflow 属性，控制是否显示tooltip
 * @author: mhf
 * @time: 2024-09-29 15:39:17
 **/
export default function rewriteElTooltip(el) {
  el.props = {
    ...el.props,
    overflow: Boolean, // 为el-tooltip追加名为'overflow'的props属性
  };
  el.methods = {
    ...el.methods,
    // 重写el-tooltip的show方法
    show() {
      // 如果设置了overflow，则判断文字是否溢出，若未溢出则不显示tooltip
      if (this.overflow) {
        if (this.$el.scrollWidth <= this.$el.clientWidth) return;
      }
      // el-tooltip自带的，保留
      this.setExpectedState(true);
      this.handleShowPopper();
    },
  };
}

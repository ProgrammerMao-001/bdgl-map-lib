export default {
  bind: function (el, binding, vnode) {
    let keydownHandler;

    const closeModal = () => {
      if (typeof binding.value === "function") {
        binding.value();
      }
    };

    keydownHandler = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", keydownHandler);

    vnode.context.$once("hook:beforeDestroy", () => {
      document.removeEventListener("keydown", keydownHandler);
    });

    // 将事件处理器存储在指令的私有变量中
    el._keydownHandler = keydownHandler;
  },
  unbind: function (el) {
    // 从元素中获取并移除事件监听器
    const keydownHandler = el._keydownHandler;
    if (keydownHandler) {
      document.removeEventListener("keydown", keydownHandler);
      delete el._keydownHandler; // 清理私有变量
    }
  },
};

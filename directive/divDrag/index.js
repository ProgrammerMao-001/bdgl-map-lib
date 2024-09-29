// draggable.js
export default {
  bind(el) {
    el.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    let isDragging = false;
    let mouseOffset = { x: 0, y: 0 };

    function handleMouseDown(e) {
      e.preventDefault();
      e.target.style.cursor = "move";
      isDragging = true;
      const offsetX = e.clientX - el.offsetLeft;
      const offsetY = e.clientY - el.offsetTop;
      mouseOffset = { x: offsetX, y: offsetY };
    }

    function handleMouseUp(e) {
      isDragging = false;
      e.target.style.cursor = "default";
    }

    function handleMouseMove(e) {
      if (!isDragging) return;
      e.target.style.cursor = "move";
      const posX = e.clientX - mouseOffset.x;
      const posY = e.clientY - mouseOffset.y;
      el.style.left = `${posX}px`;
      el.style.top = `${posY}px`;
    }

    el._dragHandlers = {
      handleMouseDown,
      handleMouseUp,
      handleMouseMove,
    };
  },
  unbind(el) {
    const { handleMouseDown, handleMouseUp, handleMouseMove } =
      el._dragHandlers || {};
    el.removeEventListener("mousedown", handleMouseDown);
    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("mousemove", handleMouseMove);
  },
};

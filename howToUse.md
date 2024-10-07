# bdgl-map-lib 快速上手指南

## todo

绘制点位 并且添加动画
绘制自定义图层 customLayer
绘制面 线 圆 箭头

1. 图层（点位，线段）点击和地图点击监听的冲突问题!!!
2. 画线阻止冒泡报错

## 安装

```bash
 npm install bdgl-map-lib --save-dev
```

## 使用



## 组件

### bdMap

##### props

| 属性名    | 默认值  | 类型      | 描述                      | 是否必填 |
|--------|------|---------|-------------------------|------|
| inline | true | Boolean | 行内表单模式 可选值：true / false |      |

#### computed

##### methods
initMap
showRoadCondition
screenshot
clearRoadSection
drawMarker
drawPolyline
drawPolygon
addRightMenu[内置，不推荐使用]
drawCustomOverlay
initShapeLayer[todo: 异步引入脚本，优化模型加载函数]
isOpenInfoWindow[内置]
getIcon[配合drawMarker使用]
removeOverlay
setMapCenterAndZoom
setMapCenter
setMapZoom
setViewport
getMapViewport
mapChange

todo:
// bdMap组件
更新图层(线、多边形、圆...)选中的样式方法：set
点聚合
```html
1. cluster脚本的动态引入（X）
2. 鼠标移动到点位上时，显示title（√）
3. 点标记的title（√）
4. 点击点位后改变点的样式【选中的黑点】（√）
5. 同一个经纬度有多个点展示弹窗（√）
6. 点的点击事件（√）
```

// bdMap组件
// bdDrivingDrawLine,bdHandleDrawLine组件未整理

##### slots

##### emits




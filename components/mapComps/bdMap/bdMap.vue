<!--
 * @Description: 百度地图基础操作API 页面
 * @Author: mhf
 * @Documents: https://lbsyun.baidu.com/index.php?title=jspopularGL
 * @Date: 2024/2/29 15:28
-->
<template>
  <div id="map-container" :style="mapStyle"></div>
</template>

<script>
export default {
  name: "bdMap",
  components: {},
  mixins: [],
  props: {
    infoWindowStyle: {
      type: Object,
      default: () => {
        return {
          "--popBg": "#ffffff", // 气泡体的背景色
          "--imgDisplay": "block", // 气泡体的图片 (可选值：block、none)
          "--closeBtnColor": "#cccccc", // 气泡关闭按钮的颜色
          "--titleHeight": "auto", // 气泡顶部标题高度
        };
      },
    },
  },
  computed: {
    mapConfig() {
      return this.$attrs.mapConfig;
    }, // 获取所有的mapComps传来的props
    mapStyle() {
      return this.infoWindowStyle;
    },
  },
  watch: {},
  filters: {},
  data() {
    return {
      bdMap: null, //  百度地图实例
      sectionObj: {
        duration: undefined, // 获取路线耗时
        distance: undefined, // 路段距离
        pointsArr: [], // 路段上的点位
      }, // 路段详情
      rightMenu: undefined, // 地图右键菜单实例
      viewport: {
        WS: undefined,
        WN: undefined,
        EN: undefined,
        ES: undefined,
        zoom: undefined,
      },
      roadCondition: [], // 自定义起点和终点绘制的路况信息
    };
  },
  methods: {
    /**
     * 初始化地图
     * @author: mhf
     * @time: 2024-03-04 10:05:19
     **/
    initMap() {
      console.log(BMapGL, "BMapGL")
      this.bdMap = new BMapGL.Map("map-container"); // 创建Map实例
      this.bdMap.centerAndZoom(
        new BMapGL.Point(this.mapConfig.center.lng, this.mapConfig.center.lat),
        this.mapConfig.zoom
      ); // 初始化地图,设置中心点坐标和地图级别
      this.bdMap.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放

      if (this.mapConfig.style?.custom) {
        const { custom, styleJson, styleId } = this.mapConfig.style;
        let config;
        if (custom === "styleJson") {
          config = { styleJson }; // styleJson与ak无关联
        } else if (custom === "styleId") {
          config = { styleId }; // 发布的styleID需要与ak为同一个用户
        }
        this.$nextTick(() => {
          this.bdMap.setMapStyleV2(config);
        });
      }
    },

    /**
     * 实现指定路段的实时路况图层并添加点击事件
     * 注意：点击事件需结合 drawPolyline的showPolylineDetail 使用【全局搜索 showPolylineDetail 就懂了】
     * @param: isShowMyRoad: 是否显示系统中配置的路线的实时路况
     * @param: isShowRoadCondition: 是否显示路况图层
     * @param: startPoint: {lat: '', lng: ''} 起点坐标
     * @param: endPoint: {lat: '', lng: ''} 终点坐标
     * @param: customObj: 自定义信息
     * @param: clearRoadSectionType: 移除图层类型(""：所有；traffic：交通流量图层；roadCondition：路径规划路层)
     * @return: sectionObj: 路段的信息(isShowMyRoad为true时可用)
     * @Demo:    this.showRoadCondition({
     *              isShowRoadCondition: true,
     *              isShowMyRoad: true,
     *              startPoint: {
     *                lng: 120.741951,
     *                lat: 30.742613,
     *              },
     *              endPoint: {
     *                lng: 120.741951,
     *                lat: 31.742613,
     *              },
     *          })
     * @author: mhf
     * @time: 2024-03-05 14:29:01
     **/
    showRoadCondition(params = {}) {
      // console.log(params, "百度地图ShowRoadCondition");
      let {
        isShowRoadCondition = true, // 是否显示路况图层
        isShowMyRoad = false, // 是否显示系统中配置的路线
        startPoint = {
          lng: undefined, // 120.741951
          lat: undefined, // 30.742613
        },
        endPoint = {
          lng: undefined,
          lat: undefined,
        },
        customObj = {},
        clearRoadSectionType = "",
      } = params;

      let pointsArr = [];
      let that = this;

      if (isShowRoadCondition) {
        if (isShowMyRoad) {
          // 将起点和终点转换为经纬度点对象
          const startMarker = new BMapGL.Point(startPoint.lng, startPoint.lat);
          const endMarker = new BMapGL.Point(endPoint.lng, endPoint.lat);

          var searchComplete = (results) => {
            if (transit.getStatus() == BMAP_STATUS_SUCCESS) {
              var plan = results.getPlan(0);
              pointsArr = that.makePointsArr(plan._lines); // 路段中所有的点位数组
              this.sectionObj = {
                duration: plan.getDuration(true),
                distance: plan.getDistance(true),
                pointsArr,
                params,
              };
              /* 删除起点和终点的Marker图标 */
              this.$nextTick(() => {
                this.bdMap.removeOverlay(results._end.marker);
                this.bdMap.removeOverlay(results._start.marker);
              });
              /* 绘制一条透明路段实现点击事件 */
              that.drawPolyline({
                pointsArr,
                customObj: {
                  ...customObj,
                  pointsArr,
                },
                stroke: {
                  strokeStyle: "solid",
                  strokeColor: "#fff",
                  strokeWeight: 9,
                  strokeOpacity: 0,
                },
                isRightDelete: false,
                isViewport: false,
              });
            }
          };
          var transit = new BMapGL.DrivingRouteLine(this.bdMap, {
            renderOptions: {
              map: this.bdMap,
              autoViewport: false,
              enableDragging: false,
              lineLayerStyle: {
                strokeTextureUrl: null,
                showTraffic: true,
                // lineLayerColor: {
                //     color: '#ffffff',
                //     opacity: 1,
                // }
              },
            },
            onSearchComplete: searchComplete,
            onPolylinesSet: () => {
              this.$emit("return-sectionObj", this.sectionObj); // 将路段信息传递给父组件
            },
          });

          // this.bdMap.setViewport([startMarker, endMarker])
          transit.search(startMarker, endMarker);
          this.roadCondition.push(transit);
        } else {
          this.bdMap.setTrafficOff(); // 移除交通流量图层
          this.$nextTick(() => {
            this.bdMap.setTrafficOn(); // 开启交通路况图层 方法1
          });
          // this.bdMap.addTileLayer(new BMapGL.TrafficLayer()); // 加载交通图层 方法2
          // this.bdMap.setTrafficOff(); // 移除交通流量图层
        }
      } else {
        this.$nextTick(() => {
          this.clearRoadSection(clearRoadSectionType);
        });
      }
    },

    /**
     * @Event 将指定数组嵌套的数据转成扁平化的点位数据
     * @description:
     * @author: mhf
     * @time: 2024-02-01 13:57:20
     **/
    makePointsArr(arr) {
      return arr.flatMap((item) => item.points);
    },

    /**
     * 移除交通流量图层 和 路径规划路层
     * @param: type: ""：移除所有；traffic：交通流量图层；roadCondition：路径规划路层
     * @return:
     * @author: mhf
     * @time: 2024-05-22 13:35:55
     **/
    clearRoadSection(type = "") {
      const { bdMap, roadCondition } = this;
      if (shouldClear("traffic", type)) {
        bdMap.setTrafficOff();
      }
      if (shouldClear("roadCondition", type)) {
        roadCondition.forEach((condition) => condition.clearResults());
      }
      function shouldClear(layerType, requestedType) {
        return requestedType === layerType || requestedType === "";
      }
    },

    /**
     * 添加点标记,实现悬浮信息窗体和点击事件 this.drawMarker({obj: {lng: 116.404, lat: 39.119}})
     * @param: obj 点位对象
     * @param: myIcon 自定义图标,
     * @param: customObj 自定义参数,
     * @param: isReturn 是否返回marker对象
     * @param: isShowInfo 是否显示信息窗口
     * @param: isFloatShadow 是否需要添加气泡阴影，默认为true
     * @param: isShowInfo值为 true 时使用， key 显示信息窗口的key,即绘制点位时自定义对象customObj里面的key,
     * @param: isResetCenterZoom 是否在点击点位时重置地图中心点和缩放级别
     * @param: isResetMakeIcon 是否给点击的marker设置选中的图标
     * @param: myChooseIcon 自定义选中的图标（点击点位时，替换的图标，isResetMakeIcon为true时使用）,
     * @param: offsetX: 偏移量X 水平
     * @param: offsetY: 偏移量Y 垂直
     * @param: html: 信息窗体内容，如：`<span style="line-height: 60px;margin-left: 10px;color: #ff6b00">${item.name}</span>`
     * @param: newZoom: 点击点位后地图更改的缩放级别
     * @return: isReturn === true ? marker对象 : null
     * @author: mhf
     * @time: 2024-03-04 10:05:59
     **/
    drawMarker(params = {}) {
      // console.log(params, "百度地图DrawMarker");
      let {
        obj,
        myIcon,
        customObj,
        isReturn = false,
        isShowInfo = false,
        isFloatShadow = true,
        key,
        isResetCenterZoom = true,
        isResetMakeIcon = false,
        myChooseIcon,
        offsetX = 0,
        offsetY = 0,
        isLabelShow = false,
        labelsetX = 0,
        labelsetY = 0,
        labelText = undefined,
        labelStyle = undefined,
        html = undefined,
        newZoom = 17,
      } = params;
      let point = new BMapGL.Point(obj.lng, obj.lat); // 创建点
      let marker = new BMapGL.Marker(point, {
        icon: myIcon ? myIcon : null,
        enableDragging: false, // 实现可拖拽
      }); // 创建标注
      marker.setZIndex(1); // 设置点位层级
      if (isLabelShow) {
        // 创建文本标注
        let label = new BMapGL.Label(labelText, {
          offset: new BMapGL.Size(labelsetX, labelsetY), // 设置文本偏移量，使文本显示在标注点的上方
        });
        if (labelStyle) {
          label.setStyle(labelStyle);
        }
        marker.setLabel(label);
      }
      marker.customObj = customObj;
      this.bdMap.addOverlay(marker);
      const markerClick = (e) => {
        // console.log("点击了标注", e, e.target.customObj);
        if (isResetCenterZoom) {
          /* 重置地图中心点和缩放级别 */
          this.setMapCenterAndZoom({
            lng: e.target.customObj.longitude,
            lat: e.target.customObj.latitude,
            zoom: newZoom,
          });
        }
        if (isResetMakeIcon) {
          /* 给点击的marker设置选中的图标 */
          let chooseMarker = new BMapGL.Marker(point, {
            icon: myChooseIcon ? myChooseIcon : null,
          }); // 创建选中的点位的图标
          chooseMarker.customObj = {
            ...customObj,
            isChoose: true, // 用于标识该标注是否被选中
          }; // 其实只是需要 customObj 中的某个属性值【key】就是用来判断删除的那个【key】

          // this.bdMap.removeOverlay(marker); // 移除当前点击的marker
          this.removeOverlay({
            callback: (e) => e.customObj?.isChoose,
          }); // 移除上一个选中的marker
          chooseMarker.setZIndex(2); // 设置点位层级
          this.bdMap.addOverlay(chooseMarker);

          chooseMarker.addEventListener("click", (e) => {
            /* 给选中的marker添加点击事件 */
            this.$emit("showMarkerDetail", e.target.customObj); // 接收父组件传来的showMarkerDetail事件（打开详情弹窗）
          });
        }
        this.$emit("showMarkerDetail", e.target.customObj); // 接收父组件传来的showMarkerDetail事件（打开详情弹窗）
      };
      marker.addEventListener("click", markerClick);

      if (isShowInfo) {
        marker.addEventListener("mouseover", (e) => {
          console.log(e, "e");
          this.isOpenInfoWindow({
            flag: true,
            html: html ? html : e.target.customObj[key],
            offsetX: offsetX,
            offsetY: offsetY,
            marker: point,
            isFloatShadow,
          });
        });

        marker.addEventListener("mouseout", () => {
          this.isOpenInfoWindow({ flag: false });
        });
      }
      return isReturn ? marker : null;
    },

    /**
     * 添加线，并实现点击事件
     * @param: pointsArr：点位数组 [{lng: 120.123, lat: 30.123}, ...]
     * @param: customObj 自定义参数 { key: value, ... }
     * @param: stroke 线段样式
     * @param: isRightDelete 是否右键删除
     * @return:
     * @author: mhf
     * @time: 2024-03-06 11:14:28
     **/
    drawPolyline(params = {}) {
      // console.log(params, "百度地图drawPolyline");
      let {
        pointsArr = [],
        customObj = {},
        stroke = {
          strokeStyle: "solid",
          strokeColor: "#5298fe",
          strokeWeight: 9,
          strokeOpacity: 1,
        },
        isRightDelete = false,
        isViewport = true,
      } = params;

      let pointsGlArr = pointsArr.map(
        (item) => new BMapGL.Point(item.lng, item.lat)
      );
      let polyline = new BMapGL.Polyline(pointsGlArr, stroke);
      polyline.customObj = customObj; // 添加自定义参数
      this.bdMap.addOverlay(polyline); // 绘制折线
      if (isViewport) {
        this.bdMap.setViewport(pointsArr); // 调整地图视野
      }
      polyline.addEventListener("click", (e) => {
        console.log("点击了", e);
        this.$emit("showPolylineDetail", e.target.customObj); // 接收父组件传来的showPolylineDetail事件（打开详情弹窗）
        e.domEvent.stopPropagation();
      });
      if (isRightDelete) {
        polyline.addEventListener("rightclick", (e) => {
          let txtMenuItem = [
            {
              text: "删除",
              callback: () => {
                /* 移除当前线段 */
                this.bdMap.removeOverlay(polyline);
                /* 移除当前显示的右键菜单 */
                this.bdMap.removeContextMenu(this.rightMenu);
                /* 取消线段点击事件监听器，防止再次触发右键菜单 */
                polyline.removeEventListener("rightclick");
              },
            },
          ];
          this.addRightMenu(txtMenuItem);
        });
      }
    },

    /**
     * 添加面，并实现点击事件
     * @param: pointArr：点位数组 [{lng: 116.387112, lat: 39.920977}, ...]
     * @param: config: 面的配置
     * @param: customObj 自定义参数 { key: value, ... }
     * @return:
     * @author: mhf
     * @time: 2024-03-07 13:31:56
     **/
    drawPolygon(params = {}) {
      console.log(params, "百度地图DrawPolygon");
      let {
        pointArr = [],
        config = {
          zIndex: 10, // 层级
          fillOpacity: 0.8, // 面的不透明度
          strokeStyle: "solid", // dashed虚线、solid实线、dotted点线
          strokeColor: "#5298fe", // 边框颜色
          strokeWeight: 6, // 边框粗细
          strokeOpacity: 1, // 边框不透明度
        },
        customObj,
        isRightDelete = false, // 是否右键删除
      } = params;
      let pointGlArr = pointArr.map(
        (item) => new BMapGL.Point(item.lng, item.lat)
      );
      var polygon = new BMapGL.Polygon(pointGlArr, config);
      polygon.customObj = customObj;
      this.bdMap.addOverlay(polygon);
      this.bdMap.setViewport(pointArr);
      polygon.addEventListener("click", (e) => {
        console.log("点击了面", e);
        this.$emit("showPolygonDetail", e.target.customObj); // 接收父组件传来的showPolygonDetail事件（打开详情弹窗）
      });
      if (isRightDelete) {
        polygon.addEventListener("rightclick", (e) => {
          let txtMenuItem = [
            {
              text: "删除",
              callback: () => {
                /* 移除当前线段 */
                this.bdMap.removeOverlay(polygon);
                /* 移除当前显示的右键菜单 */
                this.bdMap.removeContextMenu(this.rightMenu);
                /* 取消线段点击事件监听器，防止再次触发右键菜单 */
                polygon.removeEventListener("rightclick");
              },
            },
          ];
          this.addRightMenu(txtMenuItem);
        });
      }
    },

    /**
     * 添加或移除信息窗口
     * @param: flag: true: 添加 false: 移除
     * @param: html: 信息窗口内容
     * @param: offsetX: 偏移量X 水平
     * @param: offsetY: 偏移量Y 垂直
     * @param: marker: 点位对象,如：new BMapGL.Point(lng, lat);
     * @param: isFloatShadow: 是否需要气泡阴影，默认是；
     * @return:
     * @author: mhf
     * @time: 2024-03-04 15:43:55
     **/
    isOpenInfoWindow(params = {}) {
      let {
        flag,
        html,
        offsetX = 0,
        offsetY = 0,
        marker,
        isFloatShadow = true,
      } = params;
      if (flag) {
        var infoWindow = new BMapGL.InfoWindow(html, {
          offset: new BMapGL.Size(offsetX, offsetY), // 偏移量
        });
        if (!isFloatShadow)
          this.bdMap.getPanes().floatShadow.style.display = "none"; // 移除气泡阴影
        this.bdMap.openInfoWindow(infoWindow, marker);
      } else {
        this.bdMap.closeInfoWindow();
      }
    },

    /**
     * 获取点位的自定义图标
     * @param: url 图标地址
     * @param: width 图标宽度
     * @param: height 图标高度
     * @param: offsetW 图片横向偏移
     * @param: offsetH 图标高度偏移
     * @return:
     * @author: mhf
     * @time: 2024-03-04 10:20:50
     **/
    getIcon(params = {}) {
      // console.log(params, "百度地图GetIcon");
      let {
        url = "/img/endPoint.png",
        width = 25,
        height = 40,
        offsetW = 0,
        offsetH = 0,
      } = params;
      return new BMapGL.Icon(url, new BMapGL.Size(width, height), {
        anchor: new BMapGL.Size(width / 2, height + 2), // 图标中央下端的尖角位置。（左右、上下）[底部居对齐]
        imageOffset: new BMapGL.Size(offsetW, offsetH), // 设置图片偏移
      });
    },

    /**
     * 移除符合特定条件的 点位标记/线段
     * @param: key：customObj的key
     * @param: value：customObj的value，用来判断是否移除
     * @param: callback：自定义回调函数，返回true则移除
     * @return:
     * @author: mhf
     * @time: 2024-03-04 14:07:27
     * @demo1:   this.removeOverlay({
     *              callback: (e) => e.customObj?.type == type
     *            })
     * @demo2:  this.removeOverlay({
     *              key: "type",
     *              value: type
     *           })
     **/
    removeOverlay(params = {}) {
      console.log(params, "百度地图RemoveOverlay");
      let { key, value, callback = () => false } = params;
      let overlaysArr = this.bdMap.getOverlays();
      /* 找到所有需要删除的标记 */
      const overlaysToRemove = overlaysArr.filter((overlay) => {
        if (key) {
          return overlay.customObj[key] === value;
        } else {
          return callback(overlay);
        }
      });
      /* 移除符合条件的标记 */
      if (overlaysToRemove.length > 0) {
        overlaysToRemove.forEach((overlay) => {
          this.bdMap.removeOverlay(overlay);
        });
      }
    },

    /**
     * 设置地图中心点和缩放层级
     * @param: params：{lat: 纬度, lng: 经度, zoom: 缩放层级}
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-04 16:22:17
     **/
    setMapCenterAndZoom(params = {}) {
      let { lat, lng, zoom = 16 } = params;
      this.bdMap.centerAndZoom(new BMapGL.Point(lng, lat), zoom);
    },

    /**
     * 自适应地图里面的图层，如：绘制线段、面或者多个点的时候，使用此方法可自动将绘制的图层调整到合适的区域和层级
     * @param: pointsArr：点位数组 [{lng: 116.387112, lat: 39.920977}, ...]
     * @return:
     * @author: mhf
     * @time: 2024-03-07 14:48:53
     **/
    setViewport(pointsArr) {
      this.bdMap.setViewport(pointsArr);
    },

    /**
     * 添加右键菜单
     * @param: txtMenuItem：菜单项数组 [{text: "文字", callback: () => {}}, ...]
     * @return:
     * @author: mhf
     * @time: 2024-03-07 15:34:10
     **/
    addRightMenu(txtMenuItem = []) {
      this.rightMenu = new BMapGL.ContextMenu();
      for (var i = 0; i < txtMenuItem.length; i++) {
        this.rightMenu.addItem(
          new BMapGL.MenuItem(txtMenuItem[i].text, txtMenuItem[i].callback, 100)
        );
      }
      this.bdMap.addContextMenu(this.rightMenu);
    },

    /**
     * 获取地图可视区坐标和层级
     * @param:
     * @return: 可视区坐标和层级
     * @author: mhf
     * @time: 2024-04-24 16:55:21
     **/
    getMapViewport() {
      let bounds = this.bdMap.getBounds(); //获取地图可视区域
      let zoom = this.bdMap.getZoom();
      let WS = bounds.getSouthWest();
      let EN = bounds.getNorthEast();
      return {
        WS, // 获取西南角的经纬度(左下角)
        WN: new BMapGL.Point(WS.lng, EN.lat), // 获取西北角的经纬度(左上角)
        EN, // 获取东北角的经纬度(右上角)
        ES: new BMapGL.Point(EN.lng, WS.lat), // 获取东南角的经纬度(右下角)
        zoom,
      };
    },

    /**
     * 监听地图缩放/拖动事件
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-04-24 17:34:05
     **/
    mapChange() {
      this.bdMap.addEventListener("zoomend", (e) => {
        this.viewport = this.getMapViewport();
        this.$emit("mapChange", this.viewport); // 将更新的数据传给父组件
        // console.log(this.viewport, "地图缩放事件");
      });

      this.bdMap.addEventListener("dragend", (e) => {
        this.viewport = this.getMapViewport();
        this.$emit("mapChange", this.viewport); // 将更新的数据传给父组件
        // console.log(this.viewport, "地图拖拽事件");
      });
    },
  },
  created() {},
  mounted() {
    this.initMap();
    this.mapChange();
  },
  destroyed() {
    // this.bdMap.removeEventListener('click', handleClick);
  },
};
</script>

<style lang="scss" scoped>
@import "../mapStyles.css";

#map-container {
}

/* 百度地图InfoWindow个性化配置 */
/* 整个气泡体 */
::v-deep .BMap_bubble_pop {
  min-height: 44px !important;
  max-height: 70px !important;

  background-color: var(--popBg) !important;
  border: 1px solid var(--popBg) !important;

  img {
    display: var(--imgDisplay); // block、none
  }
}

/* 气泡内右上角关闭按钮 */
::v-deep .BMap_bubble_buttons :nth-child(2) {
  color: var(--closeBtnColor) !important;
}

/* 气泡顶部标题 */
::v-deep .BMap_bubble_top {
  height: var(--titleHeight) !important;
}

::v-deep .BMap_bubble_center,
::v-deep .BMap_bubble_content {
  height: auto !important;
}
</style>

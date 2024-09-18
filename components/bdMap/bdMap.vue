<!--
 * @Description: 百度地图基础操作API 页面
 * @Author: mhf
 * @Documents: https://lbsyun.baidu.com/index.php?title=jspopularGL
 * @Date: 2024/2/29 15:28
-->
<template>
  <div id="map-container" :style="mapStyle">
    <bdMapVGl ref="bdMapVGl" :bdMap="bdMap" />
  </div>
</template>

<script>
import { loadBaiDuMap } from "../utils/asynchronousLoading";
import bdMapVGl from "./bdMapVGl.vue";

export default {
  name: "bdMap",
  components: { bdMapVGl },
  mixins: [],
  props: {
    listenOnce: {
      type: Boolean,
      default: false,
    }, // 是否只监听一次地图加载完成事件【默认为false】

    mapConfig: {
      type: Object,
      default: () => {
        return {
          ak: undefined, // your ak
          center: {
            lng: 116.404,
            lat: 39.915,
          },
          zoom: 12,
          style: {
            custom: "", // styleId 或 styleJson
            styleId: undefined, // 发布的styleID需要与ak为同一个用户
            styleJson: undefined, // styleJson与ak无关联
          }, // 是否需要自定义地图样式
        };
      },
    },

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
    mapStyle() {
      return this.infoWindowStyle;
    },
  },
  watch: {},
  filters: {},
  data() {
    return {
      bdMap: null, // 百度地图实例
      BMapGL: null, // 百度地图GL
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
      this.$nextTick(() => {
        loadBaiDuMap(this.mapConfig.ak).then(() => {
          console.log(BMapGL, "this.BMapGL");
          this.BMapGL = BMapGL;
          this.bdMap = new this.BMapGL.Map("map-container", {
            preserveDrawingBuffer: true,
          }); // 创建Map实例
          this.bdMap.centerAndZoom(
            new this.BMapGL.Point(
              this.mapConfig.center.lng,
              this.mapConfig.center.lat
            ),
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

          //
          const listen_tilesloaded = () => {
            this.$emit("map-loaded", {
              map: this.bdMap,
              BMapGL: this.BMapGL,
            });
            this.mapChange();
            if (this.listenOnce) {
              this.bdMap.removeEventListener("tilesloaded", listen_tilesloaded);
            }
          };
          this.bdMap.addEventListener("tilesloaded", listen_tilesloaded);
        });
      });
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
        traffic_autoViewport = false, // 驾车规划完成后是否自动调整地图视野
        traffic_showTraffic = true, // 驾车规划的线是否展示路况
        traffic_widthIcon = false, // 驾车规划出来的路段是否展示图标(默认false)
        traffic_enableDragging = false, // 起点和终点是否支持拖拽(默认false)
      } = params;

      let pointsArr = [];
      let that = this;

      if (isShowRoadCondition) {
        if (isShowMyRoad) {
          // 将起点和终点转换为经纬度点对象
          const startMarker = new this.BMapGL.Point(
            startPoint.lng,
            startPoint.lat
          );
          const endMarker = new this.BMapGL.Point(endPoint.lng, endPoint.lat);

          var searchComplete = (results) => {
            if (transit.getStatus() == BMAP_STATUS_SUCCESS) {
              var plan = results.getPlan(0);
              pointsArr = that.flattenArr(plan._lines); // 路段中所有的点位数组
              this.sectionObj = {
                duration: plan.getDuration(true), // 获取路线耗时
                distance: plan.getDistance(true), // 路段距离
                pointsArr, // 路段上的点位
                params, // 路段详情
              };
              /* 删除起点和终点的Marker图标 */
              if (!traffic_widthIcon) {
                this.$nextTick(() => {
                  this.bdMap.removeOverlay(results._end.marker);
                  this.bdMap.removeOverlay(results._start.marker);
                });
              }
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
          var transit = new this.BMapGL.DrivingRouteLine(this.bdMap, {
            renderOptions: {
              map: this.bdMap,
              autoViewport: traffic_autoViewport,
              enableDragging: traffic_enableDragging,
              lineLayerStyle: {
                strokeTextureUrl: null,
                showTraffic: traffic_showTraffic,
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
          // this.bdMap.addTileLayer(new this.BMapGL.TrafficLayer()); // 加载交通图层 方法2
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
    flattenArr(arr) {
      return arr.flatMap((item) => item.points);
    },

    /**
     * @Event 截图
     * @description: 返回当前地图组件上的图层截图base64地址
     * @author: mhf
     * @time: 2024-09-14 14:09:28
     **/
    screenshot() {
      return this.bdMap.getMapScreenshot();
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
     * @param: isShowInfo 值为 true 时使用， key 显示信息窗口的key,即绘制点位时自定义对象customObj里面的key,
     * @param: isResetMakeIcon 是否给点击的marker设置选中的图标
     * @param: myChooseIcon 自定义选中的图标（点击点位时，替换的图标，isResetMakeIcon为true时使用）,
     * @param: offsetX: 偏移量X 水平
     * @param: offsetY: 偏移量Y 垂直
     * @param: html: 信息窗体内容，如：`<span style="line-height: 60px;margin-left: 10px;color: #ff6b00">${item.name}</span>`
     * @param: newZoom: 点击点位后地图更改的缩放级别
     * @param: className: 给生成的marker添加的类名【样式可以在自己的组件中定义， 可以多个类名需用逗号隔开】
     * @param:  isLabelShow: true,
     *           labelText: "label标题",
     *           labelsetX: 10,
     *           labelsetY: -60,
     *           labelStyle: {
     *             color: "#fff", // 文字颜色
     *             backgroundColor: "#0e335b", // 背景颜色，可以使用rgba设置透明度
     *             border: "none", // 边框样式
     *             borderRadius: "5px", // 边框圆角
     *             padding: "5px 10px", // 文本内边距
     *             fontSize: "10px", // 字体大小
     *             fontWeight: "bold", // 字体粗细
     *           },
     * @return: isReturn === true ? marker对象 : null
     * @author: mhf
     * @time: 2024-03-04 10:05:59
     **/
    drawMarker(params = {}) {
      // todo 解决事件冒泡
      console.log(this.bdMap, "this.bdMap.getCenterAndZoom()");
      // console.log(params, "百度地图DrawMarker");
      let {
        obj,
        myIcon,
        customObj,
        isReturn = false,
        isShowInfo = false,
        isFloatShadow = true,
        key,
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
        resetCenter = true, // 是否重置地图中心点
        newZoom = false, // 如果newZoom为false或0，则不设置地图中心点和缩放级别(resetCenter为true时可用)
        className = undefined,
      } = params;
      let point = new this.BMapGL.Point(obj.lng, obj.lat); // 创建点
      let marker = new this.BMapGL.Marker(point, {
        icon: myIcon ? myIcon : null,
        enableDragging: false, // 实现可拖拽
      }); // 创建标注
      marker.setZIndex(1); // 设置点位层级
      if (isLabelShow) {
        // 创建文本标注
        let label = new this.BMapGL.Label(labelText, {
          offset: new this.BMapGL.Size(labelsetX, labelsetY), // 设置文本偏移量，使文本显示在标注点的上方
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
        if (resetCenter) {
          /* 重置地图中心点和缩放级别 */
          let nowZoom = this.bdMap.getZoom();
          this.setMapCenterAndZoom({
            lng: e.target.customObj.longitude,
            lat: e.target.customObj.latitude,
            zoom: newZoom || nowZoom,
          });
        }
        if (isResetMakeIcon) {
          /* 给点击的marker设置选中的图标 */
          let chooseMarker = new this.BMapGL.Marker(point, {
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
        if (className) {
          /* 可以添加多个类名 需用 , 隔开【如：markerClass,bridge】 */
          setTimeout(() => {
            let classArr = className.split(",");
            classArr.forEach((name) => marker.domElement.classList.add(name));
          }, 500);
          this.$forceUpdate();
          // marker.domElement.classList.add(className);
        }
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
          zIndex: 3,
        },
        myChooseStroke = {
          strokeStyle: "solid",
          strokeColor: "#FFFFFF",
          strokeWeight: 9,
          strokeOpacity: 1,
          zIndex: 4,
        },
        isRightDelete = false,
        isViewport = true, // 调整地图视野【注意：一次性绘制多条线段时不建议使用】
        resetViewport = false, // 是否在点击线段的时候重置地图视野
        isResetPolyline = true, // 点击线段后重置线段样式
      } = params;

      let pointsGlArr = pointsArr.map(
        (item) => new this.BMapGL.Point(item.lng, item.lat)
      );
      let polyline = new this.BMapGL.Polyline(pointsGlArr, stroke);
      polyline.setZIndex(stroke.zIndex || 3);
      polyline.customObj = customObj; // 添加自定义参数
      this.bdMap.addOverlay(polyline); // 绘制折线
      if (isViewport) {
        this.bdMap.setViewport(pointsArr); // 调整地图视野
      }

      const polylineClick = (e) => {
        if (resetViewport) {
          /* 重置地图视野 */
          this.setViewport(pointsArr);
        }
        if (isResetPolyline) {
          /* 点击线段后重置线段样式 */
          let myChoosePolyline = new this.BMapGL.Polyline(
            pointsGlArr,
            myChooseStroke
          );
          myChoosePolyline.customObj = {
            ...customObj,
            isChoose: true, // 用于标识该标注是否被选中
          };
          this.removeOverlay({
            callback: (e) => e.customObj?.isChoose,
          });
          myChoosePolyline.setZIndex(myChooseStroke.zIndex || 4);
          this.bdMap.addOverlay(myChoosePolyline);
        }
        console.error("点击了线段 - drawPolyline", e);
        this.$emit("showPolylineDetail", e.target.customObj); // 通过showPolylineDetail自定义事件，将数据传到父组件
        // todo 解决报错
        // e.stopPropagation() || e.domEvent.stopPropagation(); // 解决 如果zoom层级很小的情况下 点击 紧挨着的线段 会连续触发多次点击事件
      };

      polyline.addEventListener("click", polylineClick);

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
        (item) => new this.BMapGL.Point(item.lng, item.lat)
      );
      var polygon = new this.BMapGL.Polygon(pointGlArr, config);
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
     * 添加自定义覆盖物，并添加点击事件
     * https://lbsyun.baidu.com/index.php?title=jspopularGL/guide/CustomOverlay
     * @param: createDOM, point, customObj, customOverlayConfig, isShowInfo, infoWindowConfig
     * @demo: 创建一个图片覆盖物
     * function createDOM(config) {
     *    const img = document.createElement('img');
     *    img.style.width = '300px';
     *    img.style.height = '171px';
     *    img.src = config.url;
     *    img.draggable = false;
     *    return img;
     * }
     * @Event: customOverlay.getProperties() // 获取自定义覆盖物的属性
     * @Event: customOverlay.getPoint()  // 获取自定义覆盖物的坐标
     * @Event: customOverlay.setPoint(new this.BMapGL.Point(120, 30)) // 设置覆盖物新坐标
     * @Event: customOverlay.hide() // 隐藏自定义覆盖物【show() 显示】
     * @return: customOverlay：自定义覆盖物
     * @author: mhf
     * @time: 2024-07-24 14:00:52
     **/
    drawCustomOverlay(params = {}) {
      let {
        createDOM = () => {
          return "dom";
        }, // 创建一个文档元素,且必须有返回值【demo看注释】
        point = {
          lng: undefined, // 112.18
          lat: undefined, // 41.15
        }, // 点位经纬度
        customObj, // 自绑定属性的其他自定义参数（即元素自身的properties参数）
        customOverlayConfig = {
          offsetX: -10, // 覆盖物水平偏移量
          offsetY: -10, // 覆盖物垂直偏移量
          MinZoom: 4, // 最小显示层级
          MaxZoom: 12, // 最大显示层级
          enableMassClear: true, // 是否能被统一清除掉覆盖物
          enableDraggingMap: true, // 是否可以在覆盖物位置拖拽地图
        }, // CustomOverlay(createDom, options: Object) 构造函数的参数options配置项
        isShowInfo = false, // 是否显示信息窗口
        infoWindowConfig = {
          html: "",
          key: "",
          offsetX: 0, // 覆盖物水平偏移量
          offsetY: 0,
          isFloatShadow: false,
        }, // 信息窗口配置项(鼠标放在覆盖物上出现的window的配置项)

        isResetCenter = true, // 是否重置地图中心点
        isResetZoom = false, // 是否重置地图缩放级别
        newZoom = 10, // isResetZoom 为true时，新缩放级别.
      } = params;
      // 创建自定义覆盖物
      const defaultOverlayConfig = {
        offsetX: 0, // 覆盖物水平偏移量
        offsetY: 0, // 覆盖物垂直偏移量
        // MinZoom: 4, // 最小显示层级
        // MaxZoom: 12, // 最大显示层级
        enableMassClear: true, // 是否能被统一清除掉覆盖物
        enableDraggingMap: true, // 是否可以在覆盖物位置拖拽地图
      }; // 默认的覆盖物配置
      const overlayConfig =
        Object.keys(customOverlayConfig).length > 0
          ? customOverlayConfig
          : defaultOverlayConfig;
      const customOverlay = new this.BMapGL.CustomOverlay(createDOM, {
        point: new this.BMapGL.Point(point.lng, point.lat),
        properties: {
          customObj, // 其他自定义属性
        }, // 自绑定属性【这里的属性就是createDom(config)中的参数】
        ...overlayConfig, // 自定义覆盖物配置
      });
      this.bdMap.addOverlay(customOverlay);

      this.$emit("returnCustomOverlay", customOverlay); // 返回自定义覆盖物实例

      const customOverlayClick = (e) => {
        console.log("点击了自定义覆盖物", e.target.properties);
        if (isResetCenter) {
          /* 重置地图中心点 */
          this.setMapCenter({
            lng: e.target.point.lng,
            lat: e.target.point.lat,
          });
        }
        if (isResetZoom) {
          /* 重置地图缩放级别 */
          this.setMapZoom({ zoom: newZoom });
        }
        // if (isResetMakeIcon) {
        //   /* 给点击的marker设置选中的图标 */
        //   let chooseMarker = new this.BMapGL.Marker(point, {
        //     icon: myChooseIcon ? myChooseIcon : null,
        //   }); // 创建选中的点位的图标
        //   chooseMarker.customObj = {
        //     ...customObj,
        //     isChoose: true, // 用于标识该标注是否被选中
        //   }; // 其实只是需要 customObj 中的某个属性值【key】就是用来判断删除的那个【key】
        //
        //   // this.bdMap.removeOverlay(marker); // 移除当前点击的marker
        //   this.removeOverlay({
        //     callback: (e) => e.customObj?.isChoose,
        //   }); // 移除上一个选中的marker
        //   chooseMarker.setZIndex(2); // 设置点位层级
        //   this.bdMap.addOverlay(chooseMarker);
        //
        //   chooseMarker.addEventListener("click", (e) => {
        //     /* 给选中的marker添加点击事件 */
        //     this.$emit("showMarkerDetail", e.target.customObj); // 接收父组件传来的showMarkerDetail事件（打开详情弹窗）
        //   });
        // }
        this.$emit("showCustomOverlayDetail", e.target); // 接收父组件传来的showMarkerDetail事件（打开详情弹窗）
      };
      // 鼠标点击事件
      customOverlay.addEventListener("click", customOverlayClick);
      if (isShowInfo) {
        // 鼠标悬浮事件
        customOverlay.addEventListener("mouseover", (e) => {
          let marker = new this.BMapGL.Point(point.lng, point.lat); // 创建点
          this.isOpenInfoWindow({
            flag: true,
            html: infoWindowConfig.html
              ? infoWindowConfig.html
              : e.target.properties[infoWindowConfig.key],
            offsetX: infoWindowConfig.offsetX,
            offsetY: infoWindowConfig.offsetY,
            marker: marker,
            isFloatShadow: infoWindowConfig.isFloatShadow,
          });
        });
        // 鼠标移出事件
        customOverlay.addEventListener("mouseout", () => {
          this.isOpenInfoWindow({ flag: false });
        });
      }
    },

    /**
     * 添加或移除信息窗口
     * @param: flag: true: 添加 false: 移除
     * @param: html: 信息窗口内容
     * @param: offsetX: 偏移量X 水平
     * @param: offsetY: 偏移量Y 垂直
     * @param: marker: 点位对象,如：new this.BMapGL.Point(lng, lat);
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
        var infoWindow = new this.BMapGL.InfoWindow(html, {
          offset: new this.BMapGL.Size(offsetX, offsetY), // 偏移量
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
      return new this.BMapGL.Icon(url, new this.BMapGL.Size(width, height), {
        anchor: new this.BMapGL.Size(width / 2, height + 2), // 图标中央下端的尖角位置。（左右、上下）[底部居对齐]
        imageOffset: new this.BMapGL.Size(offsetW, offsetH), // 设置图片偏移
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
     * @param: params：{lat: 纬度, lng: 经度, zoom: 缩放层级(可不传，默认为当前缩放层级)}
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-04 16:22:17
     **/
    setMapCenterAndZoom(params = {}) {
      let nowZoom = this.bdMap.getZoom();
      let { lat, lng, zoom = nowZoom } = params;
      this.bdMap.centerAndZoom(new this.BMapGL.Point(lng, lat), zoom);
    },

    /**
     * 设置地图中心点
     * @param: params：{lat: 纬度, lng: 经度}
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-04 16:22:17
     **/
    setMapCenter(params = {}) {
      let { lat, lng } = params;
      this.bdMap.setCenter(new this.BMapGL.Point(lng, lat));
    },

    /**
     * 设置地图缩放层级
     * @param: params：{zoom: 缩放层级}
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-04 16:22:17
     **/
    setMapZoom(params = {}) {
      let { zoom } = params;
      this.bdMap.setZoom(zoom);
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
      this.rightMenu = new this.BMapGL.ContextMenu();
      for (var i = 0; i < txtMenuItem.length; i++) {
        this.rightMenu.addItem(
          new this.BMapGL.MenuItem(
            txtMenuItem[i].text,
            txtMenuItem[i].callback,
            100
          )
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
        WN: new this.BMapGL.Point(WS.lng, EN.lat), // 获取西北角的经纬度(左上角)
        EN, // 获取东北角的经纬度(右上角)
        ES: new this.BMapGL.Point(EN.lng, WS.lat), // 获取东南角的经纬度(右下角)
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
        this.$emit("map-change", this.viewport); // 将更新的数据传给父组件
        // console.log(this.viewport, "地图缩放事件");
      });

      this.bdMap.addEventListener("dragend", (e) => {
        this.viewport = this.getMapViewport();
        this.$emit("map-change", this.viewport); // 将更新的数据传给父组件
        // console.log(this.viewport, "地图拖拽事件");
      });

      this.bdMap.addEventListener("click", (e) => {
        console.error("地图点击了", e);
        this.bdMap.closeInfoWindow();
        this.$emit("map-click", e);
      });
    },

    initShapeLayer(params = {}) {
      this.$refs.bdMapVGl.initShapeLayer(params);
    },
  },
  created() {},
  mounted() {
    this.initMap();
  },
  beforeDestroy() {
    // 重要：在组件销毁时移除事件监听器，防止内存泄漏
    // this.bdMap.removeEventListener("tilesloaded", this.listen_tilesloaded);
    // this.bdMap.removeEventListener("zoomend", this.mapZoomEnd);
    // this.bdMap.removeEventListener("dragend", this.mapDragEnd);
    // this.bdMap.removeEventListener("click", this.mapClick);
  },
  destroyed() {
    // this.bdMap.removeEventListener('click', handleClick);
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/styles/mapStyles.scss";

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

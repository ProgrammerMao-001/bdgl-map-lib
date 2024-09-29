<!--
 * @Description: 百度地图基础操作API 页面
 * @Author: mhf
 * @Demo: https://lbsyun.baidu.com/index.php?title=jspopularGL
 * @API: https://mapopen-pub-jsapi.bj.bcebos.com/jsapi/reference/jsapi_webgl_1_0.html
 * @Date: 2024/2/29 15:28
-->
<template>
  <div id="map-container" :style="mapStyle">
    <bdMapVGl ref="bdMapVGl" :bdMap="bdMap" />
    <bdClusterDetailDialog ref="bdClusterDetailDialog" />
  </div>
</template>

<script>
import { loadBaiDuMap } from "../utils/asynchronousLoading";
import { flattenArr } from "../utils";
import bdMapVGl from "./bdMapVGl.vue";
import bdClusterDetailDialog from "./bdClusterDetailDialog.vue";

export default {
  name: "bdMap",
  components: { bdMapVGl, bdClusterDetailDialog },
  mixins: [],
  props: {
    ak: {
      required: true,
      type: String,
      default: "",
    },
    listenOnce: {
      type: Boolean,
      default: false,
    }, // 是否只监听一次地图加载完成事件【默认为false】

    mapConfig: {
      type: Object,
      default: () => {
        return {
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
      clusterGL: null, // 点聚合的实例
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
        loadBaiDuMap(this.ak).then(() => {
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
     * 注意：驾车规划生成的路线点击事件 需结合 drawPolyline的 return-polyline 使用
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
              pointsArr = flattenArr(plan._lines, "points"); // 路段中所有的点位数组
              this.sectionObj = {
                duration: plan.getDuration(true), // 获取路线耗时
                distance: plan.getDistance(true), // 路段距离
                pointsArr, // 路段上的点位
                params, // 路段详情
                plan,
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
                  traffic_customType: "traffic_transparent", // 绘制一条透明路段图层，以实现驾车规划线路的点击事件
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
              this.$emit("return-section", this.sectionObj); // 将路段信息传递给父组件
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
      function shouldClear(layerType, requestedType) {
        return requestedType === layerType || requestedType === "";
      }
      if (shouldClear("traffic", type)) {
        bdMap.setTrafficOff();
      }
      if (shouldClear("roadCondition", type)) {
        roadCondition.forEach((condition) => condition.clearResults());
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
            this.$emit("return-marker", e.target.customObj); // 将点位详情传给父组件
          });
        }
        this.$emit("return-marker", e.target.customObj); // 将点位详情传给父组件
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
        this.$emit("return-polyline", e.target.customObj); // 将数据传给父组件
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
      console.error(params, "百度地图DrawPolygon");
      let {
        pointArr = [],
        config = {
          zIndex: 10, // 层级
          fillOpacity: 0.5, // 面的不透明度
          strokeStyle: "solid", // dashed虚线、solid实线、dotted点线
          fillColor: "#5298fe", // 边框颜色
          strokeColor: "#5298fe", // 边框颜色
          strokeWeight: 6, // 边框粗细
          strokeOpacity: 1, // 边框不透明度
        },
        myChooseConfig = {
          zIndex: 11, // 层级
          fillOpacity: 0.8, // 面的不透明度
          strokeStyle: "solid", // dashed虚线、solid实线、dotted点线
          fillColor: "#FF0000", // 边框颜色
          strokeColor: "#FF0000", // 边框颜色
          strokeWeight: 6, // 边框粗细
          strokeOpacity: 1, // 边框不透明度
        },
        customObj,
        isRightDelete = false, // 是否右键删除
        isViewport = false, // 调整地图视野【注意：一次性绘制多个不规则面时不建议使用】
        resetViewport = true, // 是否在点击多边形的时候重置地图视野
        isResetPolygon = true, // 点击多边形后重置多边形样式
      } = params;
      let pointGlArr = pointArr.map(
        (item) => new this.BMapGL.Point(item.lng, item.lat)
      );
      var polygon = new this.BMapGL.Polygon(pointGlArr, config);
      polygon.customObj = customObj;
      this.bdMap.addOverlay(polygon);
      if (isViewport) {
        this.bdMap.setViewport(pointArr);
      }

      const polygonClick = (e) => {
        console.error("点击了多边形", e);
        if (resetViewport) {
          /* 重置地图视野 */
          this.setViewport(pointArr);
        }
        if (isResetPolygon) {
          /* 点击多边形后重置多边形样式 */
          let myChoosePolygon = new this.BMapGL.Polygon(
            pointGlArr,
            myChooseConfig
          );
          myChoosePolygon.customObj = {
            ...customObj,
            isChoose: true, // 用于标识该标注是否被选中
          };
          console.log(myChoosePolygon, "myChoosePolygon");
          this.removeOverlay({
            callback: (e) => e.customObj?.isChoose,
          });
          myChoosePolygon.setZIndex(myChooseConfig.zIndex || 11);
          this.bdMap.addOverlay(myChoosePolygon);
        }
        this.$emit("return-polygon", e.target.customObj);
      };

      polygon.addEventListener("click", polygonClick);
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
     * 添加圆，并实现点击事件
     * @param: point：{lng: 120.4295, lat: 30.2091}
     * @param: radius：半径
     * @param: config: 圆的样式配置
     * @param: customObj 自定义参数 { key: value, ... }
     * @return:
     * @author: mhf
     * @time: 2024-03-07 13:31:56
     **/
    drawCircle(params = {}) {
      console.error(params, "百度地图drawCircle");
      let {
        point = { lng: undefined, lat: undefined },
        radius,
        config = {
          zIndex: 13, // 层级
          fillOpacity: 0.5, // 面的不透明度
          strokeStyle: "solid", // dashed虚线、solid实线、dotted点线
          fillColor: "#5298fe", // 边框颜色
          strokeColor: "#5298fe", // 边框颜色
          strokeWeight: 6, // 边框粗细
          strokeOpacity: 1, // 边框不透明度
          enableEditing: false, // 是否开启编辑
        },
        myChooseConfig = {
          zIndex: 14, // 层级
          fillOpacity: 0.5, // 面的不透明度
          strokeStyle: "solid", // dashed虚线、solid实线、dotted点线
          fillColor: "#FF0000", // 边框颜色
          strokeColor: "#FF0000", // 边框颜色
          strokeWeight: 6, // 边框粗细
          strokeOpacity: 1, // 边框不透明度
          enableEditing: false, // 是否开启编辑
        },
        customObj,
        isRightDelete = false, // 是否右键删除
        isViewport = false, // 调整地图视野【注意：一次性绘制多个不规则面时不建议使用】
        resetViewport = true, // 是否在点击多边形的时候重置地图视野
        isResetCircle = true, // 点击多边形后重置多边形样式
      } = params;
      let pointGl = new this.BMapGL.Point(point.lng, point.lat);
      var circleGl = new this.BMapGL.Circle(pointGl, radius, config);
      circleGl.customObj = customObj;
      this.bdMap.addOverlay(circleGl);
      if (isViewport) {
        this.bdMap.setViewport(point);
      }

      const circleGlClick = (e) => {
        console.error("点击了圆形", e);
        if (resetViewport) {
          /* 重置地图视野 */
          this.setMapCenterAndZoom({
            lng: point.lng,
            lat: point.lat,
          });
        }
        if (isResetCircle) {
          /* 点击多边形后重置多边形样式 */
          let myChooseCircle = new this.BMapGL.Circle(
            pointGl,
            radius,
            myChooseConfig
          );
          myChooseCircle.customObj = {
            ...customObj,
            isChoose: true, // 用于标识该标注是否被选中
          };
          console.log(myChooseCircle, "myChooseCircle");
          this.removeOverlay({
            callback: (e) => e.customObj?.isChoose,
          });
          myChooseCircle.setZIndex(myChooseConfig.zIndex || 14);
          this.bdMap.addOverlay(myChooseCircle);

          // circleGl.customObj = {
          //   ...customObj,
          //   isChoose: true, // 用于标识该标注是否被选中
          // }
          // this.removeOverlay({
          //   callback: (e) => e.customObj?.isChoose,
          // });
          // circleGl.setStrokeColor(myChooseConfig.strokeColor || config.strokeColor)
          // circleGl.setFillColor(myChooseConfig.fillColor || config.fillColor)
          // circleGl.setStrokeOpacity(myChooseConfig.strokeOpacity || config.strokeOpacity)
          // circleGl.setFillOpacity(myChooseConfig.fillOpacity || config.fillOpacity)
          // circleGl.setStrokeWeight(myChooseConfig.strokeWeight || config.strokeWeight)
          // circleGl.setStrokeStyle(myChooseConfig.strokeStyle || config.strokeStyle)
          // myChooseConfig.enableEditing ? circleGl.enableEditing() : circleGl.disableEditing();
        }
        this.$emit("return-circle", e.target.customObj);
      };

      circleGl.addEventListener("click", circleGlClick);
      if (isRightDelete) {
        circleGl.addEventListener("rightclick", (e) => {
          let txtMenuItem = [
            {
              text: "删除",
              callback: () => {
                /* 移除当前线段 */
                this.bdMap.removeOverlay(circleGl);
                /* 移除当前显示的右键菜单 */
                this.bdMap.removeContextMenu(this.rightMenu);
                /* 取消线段点击事件监听器，防止再次触发右键菜单 */
                circleGl.removeEventListener("rightclick");
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

      this.$emit("return-overlay-instantiated", customOverlay); // 返回自定义覆盖物实例

      const customOverlayClick = (e) => {
        console.error("点击了自定义覆盖物", e.target.properties);
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
        //     this.$emit("return-marker", e.target.customObj); // 将点位详情传给父组件
        //   });
        // }
        this.$emit("return-overlay", e.target); // 将点位详情传给父组件
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
      let bounds = this.bdMap.getBounds(); // 获取地图可视区域
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

    /**
     * @Event 百度地图点聚合
     * @description: todo 需要对 params 完善
     * @author: mhf
     * @time: 2024-09-29 13:45:25
     **/
    drawMarkerCluster(params = {}) {
      let {
        isCustomDialog = false, // 是否需要自定义多点列表弹窗【同一个经纬度的聚合点，点击时打开的弹窗】
        titleType = [], // 顶部标题，可选值 ['title', 'tooltip']
      } = params;

      console.log("drawMarkerCluster");
      let bjpoi = require("/public/markerCluster/bjpoi");
      console.log(bjpoi, "bjpoi");

      const icons = {
        东城区: "https://mapopen-pub-jsapi.cdn.bcebos.com/static/img/place.png",
        老城区: "https://mapopen-pub-jsapi.cdn.bcebos.com/static/img/food.png",
        西城区: "https://mapopen-pub-jsapi.cdn.bcebos.com/static/img/play.png",
        其他: "https://mapopen-pub-jsapi.cdn.bcebos.com/static/img/other.png",
      };
      var indexs = ["province", "city", "area"];
      const getHTMLDOM = (context) => {
        console.log(context, "context");
        /* context: 原始数据的每一项 */
        // console.log(context, "context")
        var index = context.belongKey ?? "other"; // 聚合的条件
        var text = context.belongValue;
        var count = context.pointCount || 1; // 聚合中点的总数
        var i = indexs.indexOf(index);

        count === 1 && (i = 3);
        i < 0 && (i = 3);

        // console.log(context.belongValue, "context.belongValue")
        var div = document.createElement("div");
        div.className = "cluster-marker";
        var content = "";
        if (context.isCluster && text) {
          /* 聚合 且 聚合分类名称 存在 */
          if (context.type === Cluster.ClusterType.GEO_FENCE) {
            text = REGION[text].name;
          }
          content += '<span class="cluster-marker-title">' + text + "</span>";
          content +=
            `<span class="cluster-marker-body bg${i}">` + count + "</span>";
        }
        if (context.isCluster && !text) {
          /* 聚合 且 分类名称 不存在 */
          content +=
            `<span class="cluster-marker-body-content">` + count + "</span>";
        }
        if (!context.isCluster) {
          /* 单个点 */
          content +=
            '<span class="cluster-marker-title">' + context.name + "</span>";
        }

        div.innerHTML = content;
        return div;
      };

      function getSingleDom(context) {
        console.log("context", context.img); // 每一项
        var index = context.belongKey ?? "other"; // 聚合的条件
        var text = context.belongValue;
        var count = context.pointCount || 1; // 聚合中点的总数
        var i = indexs.indexOf(index);

        count === 1 && (i = 3);
        i < 0 && (i = 3);

        var div = document.createElement("div");
        // div.className = 'cluster-marker';
        div.className = "single-marker";
        var content = "";
        if (context.isCluster && text) {
          console.log("111");
          if (context.type === Cluster.ClusterType.GEO_FENCE) {
            text = REGION[text].name;
          }
          content += '<span class="cluster-marker-title">' + text + "</span>";
          content +=
            `<span class="cluster-marker-body bg${i}">` + count + "</span>";
        }
        if (context.isCluster && !text) {
          console.log("aaa");
          content +=
            `<span class="cluster-marker-body-content">` + count + "</span>";
        }
        if (!context.isCluster) {
          // console.log("单个点的")
          content += titleType.includes("title")
            ? /* 如果 titleType 中 包含title 则 添加顶部标题 */
              `<div class="single-marker-title">${context.name}</div>
                   <img class="single-marker-img" src="${context.img}">
                   `
            : `<img class="single-marker-img" src="${context.img}">`;
        }

        div.innerHTML = content;
        return div;
      }

      /* 判断点是否都在同一个经纬度上 */
      const isSameLatLng = (array, key = "latLng") => {
        if (array.length <= 1) return true;
        const baseLatLng = array[0][key];
        return array.every(
          (item) =>
            item[key][0] === baseLatLng[0] && item[key][1] === baseLatLng[1]
        );
      };

      // 添加聚合数据
      if (this.clusterGL) {
        return;
      }
      this.clusterGL = new Cluster.View(this.bdMap, {
        minZoom: 3, // 3-23
        maxZoom: 23, // 3-23
        clusterRadius: 10, // 距离小于该值的点会聚合至一起，默认为60，以像素为单位
        clusterMinPoints: 2, // 最小聚合点数
        clusterMaxZoom: 22, // 若地图缩放级别大于该值，则不进行聚合，标点将全部被展开
        updateRealTime: false, // 是否操作地图过程中实时进行聚合数据更新，还是操作完地图后进行更新
        waitTime: 500, // 间隔时间进行渲染数据，防止频繁操作
        fitViewOnClick: true, // 点击聚合簇放大展开

        // renderClusterStyle: {
        // type: Cluster.ClusterRender.DOM,
        // style: {
        //   anchors: [0, 1],
        //   offsetX: -20,
        //   offsetY: -9.5,
        // },
        // inject: getHTMLDOM,
        // },
        renderSingleStyle: {
          type: Cluster.ClusterRender.DOM,
          // type: Cluster.ClusterRender.WEBGL,
          // style: {
          //   width: 20,
          //   height: 20,
          //   icon:
          //     // "/marker/checkpoint.png",
          //     // ['match', ['get', 'area'], // match, get 为固定值，area 是自定义字段，可自定义
          //     // '老城区', 'https://mapopen-pub-jsapi.cdn.bcebos.com/static/img/food.png',
          //     // '西城区', 'https://mapopen-pub-jsapi.cdn.bcebos.com/static/img/play.png',
          //     // '东城区', 'https://mapopen-pub-jsapi.cdn.bcebos.com/static/img/place.png',
          //     //   'https://mapopen-pub-jsapi.cdn.bcebos.com/static/img/other.png'],
          //   // todo icon 设置
          //     [
          //       "match",
          //       ["get", "area"], // match, get 为固定值，area 是自定义字段，可自定义
          //       "老城区",
          //       icons["老城区"],
          //       "西城区",
          //       icons["西城区"],
          //       "东城区",
          //       icons["东城区"],
          //       icons["其他"],
          //     ],
          //   anchors: [0, 1],
          //   offsetX: -20,
          //   offsetY: -9.5,
          // }, // 参考：PointIconLayer.style
          inject: getSingleDom,
        }, // 非聚合点样式个性化设置
      });
      this.clusterGL.on(Cluster.ClusterEvent.CLICK, (e) => {
        console.log("ClusterEvent.CLICK", e);
        let { isCluster } = e;
        if (isCluster) {
          console.warn("聚合数量", e.target.properties.pointCount);
          console.error("点击的是点聚合的字", e.target.properties);

          let childrenPoints = this.clusterGL.getLeaves(e.id);
          console.warn(childrenPoints, "当前点击的点位列表");
          /* 判断点是否都在同一个经纬度上 */
          let isSame = isSameLatLng(childrenPoints, "latLng");
          if (isSame) {
            console.log(isCustomDialog, "isCustomDialog");
            if (isCustomDialog) {
              /* 需要自定义打开的弹窗样式 */
              console.log("需要自定义打开的弹窗样式");
              this.$emit("return-children", childrenPoints);
            } else {
              console.log("打开内置的弹窗");
              this.$refs.bdClusterDetailDialog.showDialog(childrenPoints);
            }
            console.log("没有可以展开的点位了，showDialog");
          } else {
            console.log("还能再展开");
          }
        } else {
          console.error("点击的是点位", e.properties);
          this.$message.success(JSON.stringify(e.properties));
          this.$emit("return-point", e.properties);
        }
      });
      this.clusterGL.on(Cluster.ClusterEvent.MOUSE_OVER, (e) => {
        // console.log('ClusterEvent.MOUSEOVER', e);
        // todo 鼠标移入添加 new BMapGL.InfoWindow
      });
      this.clusterGL.on(Cluster.ClusterEvent.MOUSE_OUT, (e) => {
        // console.log('ClusterEvent.MOUSEOUT', e);
        // todo 鼠标移出移出 new BMapGL.InfoWindow
      });
      var points = Cluster.pointTransformer(bjpoi.MYPOIS, (data) => {
        return {
          point: [data.location.lng, data.location.lat],
          properties: { ...data }, // 类 customObj
        };
      });
      console.log(points);
      this.clusterGL.setData(points);

      // console.log("标记点对象", this.clusterGL.getOptions())
    },

    /**
     * @Event 移除点聚合图层
     * @description:
     * @author: mhf
     * @time: 2024-09-27 13:35:58
     **/
    removeMarkerCluster() {
      this.clusterGL && this.clusterGL.destroy();
      this.clusterGL = null;
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
  position: relative;
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

<style lang="scss">
// todo 自定义 点聚合的点位样式
.cluster-marker {
  position: absolute;
  left: 0;
  top: 0;
  width: auto;
  height: 22px;
  color: #555;
  font-size: 12px;
  white-space: nowrap;
  border: 1px solid #8e8e8e;
  border-radius: 5px 5px 5px 0;
  background-color: #fffeef;
}

.cluster-marker::before {
  content: "";
  display: block;
  position: absolute;
  left: 13px;
  bottom: -13px;
  width: 0;
  height: 0;
  border: solid rgba(0, 0, 0, 0);
  border-top-color: #8e8e8e;
  border-width: 6px;
}

.cluster-marker::after {
  content: "";
  display: block;
  position: absolute;
  left: 13px;
  bottom: -12px;
  width: 0;
  height: 0;
  border: solid rgba(0, 0, 0, 0);
  border-width: 6px;
  border-top-color: #fffeef;
}

.cluster-marker span {
  display: inline-block;
  vertical-align: middle;
  padding: 3px 5px;
  height: 16px;
  line-height: 16px;
}

.cluster-marker-title {
  border-radius: 5px 0 0 0;
}

.cluster-marker-body {
  color: #fff;
  border-radius: 0 4px 4px 0;
  background-color: #dc3912;
}

.cluster-marker-body-content {
  min-width: 26px;
  text-align: center;
  color: #dc3912;
  background-color: #fffeef;
  border-radius: 4px 4px 4px 0;
}

.cluster-marker-body .bg0 {
  background-color: #dc3912;
}

.cluster-marker-body .bg1 {
  background-color: #36c;
}

.cluster-marker-body .bg2 {
  background-color: #909;
}

.cluster-marker-body .bg3 {
  background-color: #d47;
}
</style>

<style lang="scss">
$m_width: 34px;
$m_height: 34px;
$title_size: 14px;

/* 单个点位的样式 */
.single-marker {
  position: relative;
  left: 0;
  top: 0;
  width: $m_width;
  height: $m_width;
  font-size: 12px;
  text-align: center;

  &-img {
    width: 100%;
  }

  &-title {
    font-size: $title_size;
    color: #5b5959;
    background: #fff;
    height: auto;
    position: absolute;
    top: -$m_height;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    border-radius: 4px;
    padding: 2px 4px;
  }
}
</style>

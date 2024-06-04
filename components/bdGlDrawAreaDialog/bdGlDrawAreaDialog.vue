<!--
 * @Description: 百度GL地图绘制区域 页面
 * @Author: mhf
 * @Date: 2024/5/10 15:44
-->
<template>
  <!--地图绘制区域弹窗-->
  <el-dialog
    width="1300px"
    append-to-body
    v-dialog-out
    v-if="dialogVisible"
    :title="title"
    :close-on-click-modal="false"
    :visible.sync="dialogVisible"
    @close="hideDialog"
  >
    <div class="dialog-body">
      <ul class="dialog-body-panel">
        <li
          v-for="item in btnList"
          :key="item"
          :class="['bmap-btn', `bmap-${item}`]"
          :style="{
            'background-position-y': activeBtn === item ? '-52px' : '0px',
          }"
          @click="handleDraw(item)"
        ></li>
      </ul>

      <div v-if="dialogVisible" id="map-container" ref="map" class="map"></div>
    </div>

    <div slot="footer" class="dialog-footer">
      <el-button @click="hideDialog">取 消</el-button>
      <el-button type="primary" @click="handleSubmit()">保存</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { loadBaiDuDrawMap } from "@/components/bdGlDrawAreaDialog/bmpgl_lib";

export default {
  name: "bdGlDrawAreaDialog",
  components: {},
  props: {
    btnList: {
      type: Array,
      default: () => {
        return ["marker", "polyline", "rectangle", "polygon", "circle"];
      },
    }, // 按钮列表【marker：点位,polyline：折线,rectangle：矩形,polygon：多边形,circle：圆】
    mapConfig: {
      type: Object,
      default: () => {
        return {
          lng: 113.16, // 经度
          lat: 40.9556,
          zoom: 12,
          heading: 10, // 地图旋转角度
          tilt: 19, // 地图倾斜角度
          styleId: "", // 个性化地图样式 e6360ab59a74ddb51b584fb38d1cc191
          // mapType: BMAP_EARTH_MAP, // 地图类型：BMAP_EARTH_MAP 地图卫星模式，BMAP_NORMAL_MAP 普通模式
        };
      },
    }, // 地图基础配置信息
    isCustomCenter: {
      type: Boolean,
      default: false,
    }, // 是否需要自定义地图中心点（默认使用用户的位置）
    mapCenter: {
      type: Object,
      default: () => {
        return {
          lng: 113.16, // 经度
          lat: 40.9556,
        };
      },
    }, // 地图中心点（仅当isCustomCenter为false时生效）
    styleOptions: {
      type: Object,
      default: () => {
        return {
          strokeColor: "#43a8ff", // 边线颜色
          fillColor: "#43a8ff", // 填充颜色
          strokeWeight: 3, // 边线宽度，以像素为单位
          strokeOpacity: 1, // 边线透明度，取值范围0-1
          fillOpacity: 0.2, // 填充透明度，取值范围0-1
        };
      },
    }, // 自定义图形样式
    labelOptions: {
      type: Object,
      default: () => {
        return {
          borderRadius: "2px",
          background: "#FFFBCC",
          border: "1px solid #E1E1E1",
          color: "#703A04",
          fontSize: "12px",
          letterSpacing: "0",
          padding: "5px",
        };
      },
    }, // 自定义图形标注样式（提示词）
  },
  dicts: [],
  data() {
    return {
      title: "绘制区域",
      map: null,
      BMapGL: null,
      dialogVisible: false,
      activeBtn: "", // 当前激活的按钮
      markerObj: {
        e: undefined,
        point: undefined,
        address: undefined,
      }, // 点位绘制完的数据
      polylineObj: {
        e: undefined,
        pointsArr: undefined,
      }, // 折线绘制完的数据
      rectangleObj: {
        e: undefined,
        pointsArr: undefined,
      }, // 矩形绘制完的数据
      polygonObj: {
        e: undefined,
        pointsArr: undefined,
      }, //  多边形绘制完的数据
      circleObj: {
        e: undefined,
        center: undefined,
        radius: undefined,
      }, // 圆形绘制完的数据
    };
  },
  methods: {
    /**
     * 获取当前IP定位的经纬度
     * @param:
     * @return: 当前用户的经纬度
     * @author: mhf
     * @time: 2024-05-14 16:57:23
     **/
    getMyPosition() {
      return new Promise((resolve, reject) => {
        this.$nextTick(() => {
          const geolocation = new this.BMapGL.Geolocation();
          geolocation.getCurrentPosition((res) => {
            if (res && res.point) {
              resolve(res.point);
            } else {
              reject({
                lat: undefined,
                lng: undefined,
              });
            }
          });
        });
      });
    },

    /**
     * 初始化地图
     * @author: mhf
     * @time: 2024-05-15 13:41:54
     **/
    initMap() {
      this.$nextTick(() => {
        loadBaiDuDrawMap("zUX8euZSyCodQ1jFaZRZxNgWo4uzLZw1").then(() => {
          this.BMapGL = BMapGL;
          this.map = new this.BMapGL.Map("map-container");
          let latLng = this.getMyPosition();
          this.map.enableScrollWheelZoom();
          this.map.setHeading(this.mapConfig.heading);
          this.map.setTilt(this.mapConfig.tilt);
          this.map.setMapStyleV2({
            styleId: this.mapConfig.styleId,
          });

          // this.map.setMapType(this.mapConfig.mapType); // todo 异步后导致地图类型不可用？？？

          function getCoordinates(isCustomCenter, latLng, mapConfig) {
            return {
              lng: isCustomCenter ? mapConfig.lng : latLng.lng,
              lat: isCustomCenter ? mapConfig.lat : latLng.lat,
            };
          }

          // 使用提取的函数来获取坐标
          const coordinates = getCoordinates(
            !this.isCustomCenter,
            latLng,
            this.mapConfig
          );
          // 设置地图中心点和缩放级别
          this.map.centerAndZoom(
            new this.BMapGL.Point(coordinates.lng, coordinates.lat),
            this.mapConfig.zoom
          );

          this.echoMapPolygon();
        });
      });
    },

    /**
     * 回显图层（点 线 面 ...）
     * @param: todo 需完善其他类型的数据回显
     * @return:
     * @author: mhf
     * @time: 2024-05-31 16:35:25
     **/
    echoMapPolygon() {
      /* 多边形回显 */
      if (this.polygonObj.pointsArr) {
        let pointsArr = JSON.parse(this.polygonObj.pointsArr);
        let pointGlArr = pointsArr.map(
          (item) => new BMapGL.Point(item.lng, item.lat)
        );
        var polygon = new BMapGL.Polygon(pointGlArr, this.styleOptions);
        this.map.addOverlay(polygon);
        this.map.setViewport(pointsArr);
      }
    },

    /**
     * 绘制图层
     * @param: btnType：绘制类型
     * @return:
     * @author: mhf
     * @time: 2024-05-15 13:43:10
     **/
    handleDraw(btnType) {
      this.clearLayers();
      this.activeBtn = btnType;
      // 实例化鼠标绘制工具
      const drawingManager = new BMapGLLib.DrawingManager(this.map, {
        //isOpen: true,        // 是否开启绘制模式
        enableCalculate: false, // 绘制是否进行测距测面
        enableSorption: true, // 是否开启边界吸附功能
        sorptiondistance: 20, // 边界吸附距离
        circleOptions: this.styleOptions, // 圆的样式
        polylineOptions: this.styleOptions, // 线的样式
        polygonOptions: this.styleOptions, // 多边形的样式
        rectangleOptions: this.styleOptions, // 矩形的样式
        labelOptions: this.labelOptions, // label样式
      });
      if (
        drawingManager._isOpen &&
        drawingManager.getDrawingMode() === this.activeBtn
      ) {
        drawingManager.close();
        this.activeBtn === "";
      } else {
        drawingManager.setDrawingMode(this.activeBtn);
        drawingManager.open();
      }

      /* 点 */
      if (this.activeBtn === "marker") {
        let markerNum = 0;
        this.map.addEventListener("click", (e) => {
          markerNum++;
          if (markerNum > 1) {
            return;
          }
          drawingManager.close();
          this.activeBtn === "";
        });
        drawingManager.addEventListener("overlaycomplete", (e) => {
          const marker = e.overlay;
          // 获取标注的经纬度坐标
          let point = marker.getPosition();
          // 创建地理编码服务实例
          const geocoder = new this.BMapGL.Geocoder();
          // 将经纬度坐标解析为地址信息
          geocoder.getLocation(point, (result) => {
            this.markerObj = {
              e,
              point: point,
              address: result,
            };
            console.log(this.markerObj, "点");
          });
        });
      } else if (this.activeBtn === "polyline") {
        /* 折线 */
        drawingManager.addEventListener("overlaycomplete", (e) => {
          this.polylineObj = {
            e: e,
            pointsArr: e.overlay.points.map((p) => p.latLng),
          };
          console.log(this.polylineObj, "折线");
        });
      } else if (this.activeBtn === "rectangle") {
        /* 矩形 */
        // 监听矩形绘制完成事件
        drawingManager.addEventListener("overlaycomplete", (e) => {
          this.rectangleObj = {
            e,
            pointsArr: e.overlay.getPath(),
          };
          console.log(this.rectangleObj, "矩形");
        });
      } else if (this.activeBtn === "polygon") {
        /* 多边形 */
        drawingManager.addEventListener("overlaycomplete", (e) => {
          this.polygonObj = {
            e,
            pointsArr: e.overlay.getPath(),
          };
          console.log(this.polygonObj, "多边形");
        });
      } else if (this.activeBtn === "circle") {
        /* 圆 */
        // 监听圆形绘制完成事件
        drawingManager.addEventListener("overlaycomplete", (e) => {
          const circle = e.overlay;
          this.circleObj = {
            e,
            center: circle.getCenter(), // 圆心
            radius: circle.getRadius(), // 半径
          };
          console.log(this.circleObj, "圆");
        });
      }
    },

    /**
     * 清空所有图层和保存的数据
     * @author: mhf
     * @time: 2024-05-15 13:50:59
     **/
    clearLayers() {
      let overlaysArr = this.map.getOverlays();
      overlaysArr.forEach((layer) => {
        this.map.removeOverlay(layer);
      });
      this.markerObj = {
        e: undefined,
        point: undefined,
        address: undefined,
      }; // 点位
      this.polylineObj = {
        e: undefined,
        pointsArr: undefined,
      }; // 折线
      this.rectangleObj = {
        e: undefined,
        pointsArr: undefined,
      }; // 矩形
      this.polygonObj = {
        e: undefined,
        pointsArr: undefined,
      }; //  多边形
      this.circleObj = {
        e: undefined,
        center: undefined,
        radius: undefined,
      }; // 圆
    },

    showDialog(data) {
      this.title = data.title;
      this.dialogVisible = true;

      /* todo 回显的部分需优化 目前只考虑多边形一种情况 */
      this.polygonObj.pointsArr = data.data;
      /* todo 回显的部分需优化 目前只考虑多边形一种情况 */

      let that = this;
      this.$nextTick(() => {
        that.initMap();
      });
    },

    hideDialog() {
      this.activeBtn = "";
      this.map = null;
      this.dialogVisible = false;
    },

    async handleSubmit() {
      console.log("点击保存");
      let obj = this[`${this.activeBtn}Obj`]; // 不同类型对应的Obj属性名
      if (!obj.e) {
        this.$message({
          type: "error",
          message: "请先绘制图层再确定!",
        });
        return;
      }
      console.log(obj, "obj");
      this.$emit("on-response", obj);
      this.hideDialog();
    },

    /**
     * 回显数据
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-05-15 18:42:06
     **/
    echoData(data) {},
  },
  created() {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
::v-deep .el-dialog__body {
  padding: 20px 0 0 !important;
}

.dialog-body {
  padding: 0 20px;
  height: 65vh;
  overflow-y: auto;
  position: relative;

  &-panel {
    z-index: 999;
    position: absolute;
    top: 0;
    right: 30px;
    margin-left: 15px;
    padding-left: 0;
    border-radius: 0.25rem;
    height: 47px;
    box-shadow: 0 2px 6px 0 rgba(27, 142, 236, 0.5);

    .bmap-btn {
      border-right: 1px solid #d2d2d2;
      float: left;
      width: 64px;
      height: 100%;
      //background-image: url(//api.map.baidu.com/library/DrawingManager/1.4/src/bg_drawing_tool.png);
      background-image: url("../assets/img/bg_drawing_tool.png");
      cursor: pointer;
    }

    .bmap-marker {
      background-position: -65px 0;
    }

    .bmap-polyline {
      background-position: -195px 0;
    }

    .bmap-rectangle {
      background-position: -325px 0;
    }

    .bmap-polygon {
      background-position: -260px 0;
    }

    .bmap-circle {
      background-position: -130px 0;
    }
  }

  .map {
    height: 65vh;
  }
}

.dialog-footer {
  text-align: center;
  padding: 10px 0 18px;
}

ul,
li {
  list-style: none;
}

::v-deep .anchorBL img {
  display: none;
}

::v-deep .BMap_cpyCtrl span {
  display: none !important;
}
</style>

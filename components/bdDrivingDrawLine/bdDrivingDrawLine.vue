<!--
 * @Description: 百度地图驾车规划生成路线 页面
 * @Author: mhf
 * @Date: 2024/2/21 11:55
-->
<template>
  <el-dialog
    width="1300px"
    v-dialog-out
    destroy-on-close
    append-to-body
    v-if="dialogVisible"
    :title="title"
    :visible.sync="dialogVisible"
    :before-close="hideDialog"
    :close-on-click-modal="false"
  >
    <div class="dialog-body">
      <div id="map-container"></div>

      <div class="dialog-body-search">
        <el-input
          @input="searchPlace"
          @clear="searchPlace"
          clearable
          v-model="searchText"
          size="small"
          placeholder="输入关键字查询"
        ></el-input>
      </div>
      <div class="dialog-body-lng">
        <el-input
          @input="searchCenter"
          v-model="lng"
          placeholder="请输入经度查询"
          size="small"
          clearable
        ></el-input>
      </div>
      <div class="dialog-body-lat">
        <el-input
          @input="searchCenter"
          v-model="lat"
          placeholder="请输入纬度查询"
          size="small"
          clearable
        ></el-input>
      </div>

      <div>
        <div class="dialog-body-res" v-if="searchRes.length > 0">
          <div
            v-for="(item, index) in searchRes"
            :key="index"
            @click="chooseIt(item)"
          >
            <el-tooltip
              effect="light"
              :content="item.address + item.title"
              placement="right-end"
              overflow
            >
              <span> {{ item.address + item.title }} </span>
            </el-tooltip>
          </div>
        </div>
        <div
          class="dialog-body-none"
          v-else-if="searchRes.length === 0 && searchText"
        >
          <em> 没有搜索结果... </em>
        </div>
      </div>
    </div>

    <lineH />
    <div class="dialog-footer">
      <el-button @click="hideDialog">取 消</el-button>
      <el-button type="primary" @click="submitPoints">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { deepClone } from "@/utils/deepClone";
import { deviceAllList } from "@/api/systemSetting/deviceLayout";
import defaultCoordinates from "@/utils/defaultCoordinates";
export default {
  name: "bdMapDrawLinesDialog",
  components: {},
  props: {},
  dicts: [],
  data() {
    return {
      dialogVisible: false,
      title: "",
      bdMap: null,
      mapCenter: {
        lng: defaultCoordinates.longitude,
        lat: defaultCoordinates.latitude,
      }, // 地图中心点
      mapZoom: 12, // 地图缩放级别
      startPoint: {
        lng: 112.54965575904082,
        lat: 41.305581349868795,
      },
      endPoint: {
        lng: 112.5491902212557,
        lat: 41.3055680080383,
      },
      drivingTime: 0, // 驾驶时间 分钟
      drivingDistance: 0, // 行驶距离 公里
      pointsArr: [
        // {
        //   lat: 30.748406263284365,
        //   lng: 120.73957130336815
        // },
        // {
        //   lat: 30.748406263284365,
        //   lng: 120.73957130336815
        // },
        // {
        //   lat: 30.748406263284365,
        //   lng: 120.73957130336815
        // }
      ], // 最终保存的点位信息 （路段中的所有点位[包含：起点，终点]）
      mapClickListener: null, // 地图点击事件监听器
      searchText: undefined, // 查询的关键字
      searchPoint: {}, // 查找到的点位
      searchRes: [], // 查到结果
      isInsert: true,
      lng: "",
      lat: "",
      centerTimer: null,
    };
  },
  methods: {
    showDialog(data) {
      this.dialogVisible = true;
      this.title = data.title;
      if (data.data) {
        this.isInsert = false;
        // 回显线段和起点终点
        let pointsArr = JSON.parse(data.data);
        this.pointsArr = pointsArr;
        this.startPoint = pointsArr[0];
        this.endPoint = pointsArr[pointsArr.length - 1];
      } else {
      }
      this.initBdMap(data.data);
    },

    hideDialog() {
      // this.mapCenter = {
      //   lng: 120.73957130336815,
      //   lat: 30.748406263284365
      // }
      this.bdMap.destroy();
      this.bdMap = null;
      this.isInsert = true;
      removeEventListener("click", this.mapClickListener);
      this.mapClickListener = null;
      this.dialogVisible = false;
      this.lng = "";
      this.lat = "";
      this.removeSearch();
    },

    removeSearch() {
      // if (this.searchPoint) {
      //   this.removeMarker("searchPoint")
      // }
      this.searchPoint = {};
      this.searchText = undefined;
      this.searchRes = [];
    },

    submitPoints() {
      if (this.pointsArr.length < 2) this.$message.warning("请先绘制线路");
      this.$emit("on-response", {
        pointsArr: this.pointsArr,
        km: this.drivingDistance,
      });
      this.hideDialog();
    },
    drawDeviceMarker(points) {
      points.forEach((ele) => {
        let point = {
          lng: ele.longitude,
          lat: ele.latitude,
        };
        this.makePoint(
          point,
          null,
          { name: "deviceName", ...ele },
          false,
          false,
          true,
          null,
          4,
          0,
          false
        );
      });
    },
    initBdMap(flag) {
      this.$nextTick(async () => {
        this.bdMap = new BMapGL.Map("map-container");

        const res = await deviceAllList();
        if (res.data.length > 0) {
          this.drawDeviceMarker(res.data);
          // this.mapCenter.lng = res.data[0].longitude;
          // this.mapCenter.lat = res.data[0].latitude;
          if (this.isInsert) {
            this.startPoint = {
              lng: res.data[0].longitude,
              lat: res.data[0].latitude,
            };
            this.endPoint = {
              lng: Number(res.data[0].longitude) + 0.0005,
              lat: Number(res.data[0].latitude),
            };
          }
        }
        this.bdMap.centerAndZoom(
          new BMapGL.Point(this.mapCenter.lng, this.mapCenter.lat),
          this.mapZoom
        );
        this.bdMap.enableScrollWheelZoom(true);
        if (!flag) {
          // 新增则绘制起点和终点
          this.drawMarker();
        } else {
          // 编辑或者详情则回显绘制的路线
          this.drawRouteLine();
        }
        // setTimeout(() => {
        //   this.setViewport([this.startPoint, this.endPoint]);
        // }, 500);
      });
    },

    /**
     * @Event 绘制路线
     * @description:
     * @author: mhf
     * @time: 2024-02-01 11:41:40
     **/
    drawRouteLine() {
      let drivingTime = 0;
      let drivingDistance = 0;
      let pointsArr = [];
      let that = this;
      var searchComplete = function (results) {
        if (transit.getStatus() == BMAP_STATUS_SUCCESS) {
          var plan = results.getPlan(0);
          drivingTime = plan.getDuration(true); //获取时间
          drivingDistance = plan.getDistance(true); //获取距离
          pointsArr = that.makePointsArr(plan._lines); // 路段中所有的点位数组
          that.removeMarker();
        }
      };
      var transit = new BMapGL.DrivingRouteLine(this.bdMap, {
        renderOptions: {
          map: this.bdMap,
          enableDragging: true,
          autoViewport: false,
          lineLayerStyle: {
            // strokeTextureUrl: null,
            showTraffic: true,
          },
        },
        onSearchComplete: searchComplete,
        onPolylinesSet: () => {
          this.drivingTime = drivingTime;
          this.drivingDistance = this.convertDistance(drivingDistance);
          this.pointsArr = deepClone(pointsArr);
        },
      });
      let start = new BMapGL.Point(this.startPoint.lng, this.startPoint.lat);
      let end = new BMapGL.Point(this.endPoint.lng, this.endPoint.lat);
      transit.search(start, end);
    },

    /**
     * @Event 调整地图到最佳视野
     * @param: portArr 点位数组 [pot1, pot2, pot3]
     * @description:
     * @author: mhf
     * @time: 2024-02-01 10:12:24
     **/
    setViewport(portArr) {
      this.bdMap.setViewport(portArr);
    },

    /**
     * @Event 将路径单位统一成千米
     * @description: 15.9公里 -> 15.9; 500米 -> 0.5
     * @author: mhf
     * @time: 2024-02-01 10:43:07
     **/
    convertDistance(distance) {
      let resKm = 0;
      if (distance.indexOf("公里") > -1) {
        resKm = distance.substring(0, distance.indexOf("公里"));
      } else if (distance.indexOf("米") > -1) {
        resKm = distance.substring(0, distance.indexOf("米")) / 1000;
      } else {
        resKm = distance;
      }
      return resKm;
    },

    /**
     * @Event 绘制点位
     * @param: obj 点位对象,
     * @param: myIcon 自定义图标,
     *  @param: customObj 自定义参数,
     * @description: this.makePoint({lng: 116.404, lat: 39.119})
     * @author: mhf
     * @time: 2024-02-01 13:43:13
     **/
    makePoint(
      obj,
      myIcon,
      customObj,
      isDrag = false,
      isReturn = false,
      isShowInfo = false,
      html = null,
      offsetX = 0,
      offsetY = 0,
      isFloatShadow = true
    ) {
      let point = new BMapGL.Point(obj.lng, obj.lat); // 创建点
      let marker = new BMapGL.Marker(point, {
        icon: myIcon ? myIcon : null,
      }); // 创建标注
      marker.customObj = customObj;
      this.bdMap.addOverlay(marker);
      if (isShowInfo) {
        marker.addEventListener("click", (e) => {
          console.log(e, "e");
          this.isOpenInfoWindow({
            flag: true,
            html: html ? html : e.target.customObj[e.target.customObj.name],
            offsetX: offsetX,
            offsetY: offsetY,
            marker: point,
            isFloatShadow,
          });
        });
      }
      // marker.addEventListener("click", (e) => {});
    },
    /**
     * 添加或移除信息窗口-沿用了mapComp组件的方法
     * @param: flag: true: 添加 false: 移除
     * @param: html: 信息窗口内容
     * @param: offsetX: 偏移量X 水平
     * @param: offsetY: 偏移量Y 垂直
     * @param: marker: 点位对象,如：new BMapGL.Point(lng, lat);
     * @param: isFloatShadow: 是否需要气泡阴影，默认是；
     * @return:
     * @author: xxb
     * @time: 2024-06-14 15:43:55
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
        this.$nextTick(() => {
          this.bdMap.closeInfoWindow();
          if (this.drawIndex < 2) {
            // this.bdMap.removeEventListener("click", () => {
            //   console.log("移出");
            // });
            // console.log(this.mapClickListener);
            this.handleDraw();
          }
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
     * @Event: 点击地图绘制点位
     * @description:
     * @author: mhf
     * @time: 2024-02-01 17:24:04
     **/
    drawMarker() {
      let num = 0;
      this.mapClickListener = this.bdMap.addEventListener("click", (e) => {
        num++;
        let obj = {
          lng: e.latlng.lng,
          lat: e.latlng.lat,
        };
        if (num === 1) {
          this.startPoint = obj;
          var myIcon = new BMapGL.Icon(
            "/img/startPoint.png",
            new BMapGL.Size(25, 40)
          );
          this.makePoint(obj, myIcon, { name: "startPoint" });
        } else if (num === 2) {
          this.endPoint = obj;
          this.drawRouteLine();
        }
      });
    },

    /**
     * @Event 移除点位
     * @description:
     * @author: mhf
     * @time: 2024-02-01 19:36:52
     **/
    removeMarker(name = "startPoint") {
      let makerArr = this.bdMap.getOverlays();
      for (let i = 0; i < makerArr.length; i++) {
        if (makerArr[i].customObj?.name === name) {
          this.bdMap.removeOverlay(makerArr[i]); // 移除指定点位
        }
      }
      // this.bdMap.clearOverlays() // 移除所有点位
    },

    /**
     * @Event 输入关键字查询地点
     * @description:
     * @author: mhf
     * @time: 2024-02-21 15:56:42
     **/
    searchPlace(e) {
      this.searchRes = [];
      if (e) {
        const myFun = () => {
          this.searchRes = local.getResults()._pois;
        };
        var local = new BMapGL.LocalSearch(this.bdMap, {
          onSearchComplete: myFun,
        });
        local.search(e);
      } else {
        this.removeMarker("searchPoint");
      }
    },
    searchCenter(e) {
      if (this.lng && this.lat) {
        if (this.centerTimer) {
          clearTimeout(this.centerTimer);
        }
        this.centerTimer = setTimeout(() => {
          this.bdMap.centerAndZoom(
            new BMapGL.Point(this.lng, this.lat),
            this.mapZoom
          );
        }, 500);
      }
    },

    chooseIt(item) {
      this.searchPoint = item.point;
      if (this.searchPoint) {
        this.removeMarker("searchPoint");
      }
      this.makePoint(
        { lng: this.searchPoint.lng, lat: this.searchPoint.lat },
        null,
        { name: "searchPoint" },
        false
      );
      this.bdMap.centerAndZoom(item.point, 18);
    },
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
  padding: 0 20px 20px;
  min-height: 60vh;
  max-height: 65vh;
  overflow-y: auto;
  position: relative;

  #map-container {
    min-height: 60vh;
    width: 100%;

    ::v-deep .anchorBL img {
      display: none;
    }

    ::v-deep .BMap_cpyCtrl span {
      display: none !important;
    }
  }

  &-search {
    width: 300px;
    position: absolute;
    top: 20px;
    left: 40px;
    z-index: 999 !important;
  }
  &-lng {
    width: 220px;
    position: absolute;
    top: 20px;
    left: 360px;
    z-index: 999 !important;
  }
  &-lat {
    width: 220px;
    position: absolute;
    top: 20px;
    left: 600px;
    z-index: 999 !important;
  }

  &-res {
    width: 300px;
    max-height: 400px;
    position: absolute;
    top: 50px;
    left: 40px;
    z-index: 999 !important;
    padding: 10px;
    background: #fff;
    border: 1px solid #eee;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    overflow-y: auto;

    span {
      display: block;
      width: 278px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 30px;

      &:hover {
        cursor: pointer;
        border: 1px solid #409eff;
      }
    }
  }

  &-none {
    width: 300px;
    position: absolute;
    top: 54px;
    left: 40px;
    z-index: 999 !important;
    padding: 10px;
    background: #fff;
    line-height: 40px;
    border: 1px solid #eee;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
}

.dialog-footer {
  text-align: center;
  padding: 10px 0 18px;
}
</style>

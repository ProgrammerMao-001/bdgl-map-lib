<!--
 * @Description: 百度地图实现选点绘制路段 页面
 * @Author: mhf
 * @Date: 2024/9/19 16:03
-->
<template>
  <el-dialog
    width="1300px"
    destroy-on-close
    append-to-body
    v-if="dialogVisible"
    :title="title"
    :visible.sync="dialogVisible"
    :before-close="hideDialog"
    :close-on-click-modal="false"
  >
    <div class="dialog-body">
      <div class="point-self">
        <div :class="isShowLineTip ? 'point-self-top' : 'point-self-hidden'">
          <i
            :class="
              isShowLineTip ? ['el-icon-close', 'top-icon'] : 'el-icon-more'
            "
            @click="isShowLineTip = !isShowLineTip"
          />
          <div v-if="isShowLineTip" class="top-title">线路坐标</div>
        </div>
        <div v-if="isShowLineTip">
          <el-table
            v-if="isShowLineTip"
            :data="positionList"
            height="48vh"
            style="width: 300px"
          >
            <el-table-column label="#" type="index" />
            <el-table-column prop="lng" label="经度" show-overflow-tooltip>
              <template slot-scope="scope">
                {{ scope.row.lng.toFixed(6) }}
              </template>
            </el-table-column>
            <el-table-column prop="lat" label="纬度" show-overflow-tooltip>
              <template slot-scope="scope">
                {{ scope.row.lat.toFixed(6) }}
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div id="map-container"></div>

      <div class="dialog-body-tip" v-if="canEdit">
        <div v-if="isShowTip">
          鼠标点击获取起点和终点，按住左键拖动可更新路线，右击单击点位可删除
        </div>
        <i
          :class="isShowTip ? 'el-icon-close' : 'el-icon-more'"
          @click="isShowTip = !isShowTip"
        />
      </div>

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
      <div class="dialog-body-option">
        <el-checkbox v-model="showRoads" @change="handleChange"
          >展示所有路段</el-checkbox
        >
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

    <div class="dialog-footer" v-if="canEdit">
      <el-button @click="hideDialog">取 消</el-button>
      <el-button type="primary" @click="submitPoints">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
// import { deviceAllList } from "@/api/systemSetting/deviceLayout";
// import { roadAllList } from "@/api/systemSetting/roadSectionConfiguration";

let img = {
  startPoint: require("./../assets/img/startPoint.png"),
  handlePoint: require("./../assets/img/handlePoint.png"),
};

export default {
  name: "bdMapDrawLinesDialog",
  components: {},
  props: {
    canEdit: {
      type: Boolean,
      default: true,
    },
    isMany: {
      type: Boolean,
      default: false,
    }, // 是否是绘制多条线段
  },
  dicts: [],
  watch: {
    pointsArr: {
      handler(val) {
        // console.log("测试", val);
        this.positionList = val;
      },
      deep: true,
    },
  },
  data() {
    return {
      dialogVisible: false,
      title: "",
      bdMap: null,
      mapCenter: {
        lng: 120.3083403138811,
        lat: 30.27631859319542,
      },
      mapZoom: 12,
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
      drawIndex: 0, // 点击的次数
      transit: null, // 规划的路径
      searchText: undefined, // 查询的关键字
      searchPoint: {}, // 查找到的点位
      searchRes: [], // 查到结果
      polyline: null, // 路径线
      node: new BMapGL.Icon(
        // '//mapopen-pub-jsapigl.bj.bcebos.com/demoimg/zhongheyiyuan.png',
        img.handlePoint,
        new BMapGL.Size(12, 12),
        { offset: new BMapGL.Size(5, 5) }
      ), // 线段中间的节点图标
      isShowTip: true, // 是否打开提示
      isShowLineTip: false, //是否查看点位坐标
      positionList: [],
      isInsert: true,
      lng: "",
      lat: "",
      centerTimer: null,
      showRoads: true, // 是否展示所有系统中录入的路段
      allRoads: [], // 系统中录入的路段列表
      img: {
        startPoint: require("./../assets/img/startPoint.png"),
        endPoint: require("./../assets/img/endPoint.png"),
        handlePoint: require("./../assets/img/handlePoint.png"),
        Icon_road_blue_arrow: require("./../assets/img/Icon_road_blue_arrow.png"),
      },
    };
  },
  methods: {
    showDialog(data) {
      this.dialogVisible = true;
      this.title = data.title;
      this.drawIndex = 0;
      if (data.data) {
        this.isInsert = false;
        let pointsArr = JSON.parse(data.data) || [];
        this.pointsArr = this.isMany ? this.flat(pointsArr) : pointsArr;
        this.startPoint = this.pointsArr[0];
        this.endPoint = this.pointsArr.at(-1);
      } else {
      }
      this.initBdMap(data.data);
      this.getAllRoads();
    },

    hideDialog() {
      this.bdMap.removeEventListener("click", () => {});
      this.mapClickListener = null;
      this.isInsert = true;
      this.bdMap.destroy();
      this.bdMap = null;
      this.lng = "";
      this.lat = "";
      this.dialogVisible = false;
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
      if (this.pointsArr.length < 2) {
        this.$message.warning("请先绘制线路");
        return;
      }
      this.pointsArr = [];
      this.pointsArr = this.polyline.getPath(); // 获取路径上的点位
      // console.log({
      //   pointsArr: this.pointsArr,
      //   km: this.drivingDistance
      // })
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
        // const res = await deviceAllList({ deviceType: 6 });
        // // console.log("查看res", res);
        // if (res.data.length > 0) {
        //   this.drawDeviceMarker(res.data);
        //   // this.mapCenter.lng = res.data[0].longitude;
        //   // this.mapCenter.lat = res.data[0].latitude;
        //   if (this.isInsert) {
        //     this.startPoint = {
        //       lng: res.data[0].longitude,
        //       lat: res.data[0].latitude,
        //     };
        //     this.endPoint = {
        //       lng: Number(res.data[0].longitude) + 0.0005,
        //       lat: Number(res.data[0].latitude),
        //     };
        //   }
        // }
        this.bdMap.centerAndZoom(
          new BMapGL.Point(this.mapCenter.lng, this.mapCenter.lat),
          this.mapZoom
        );
        this.bdMap.enableScrollWheelZoom(true);
        if (!flag) {
          // 新增则绘制起点和终点
          this.handleDraw();
        } else {
          // 编辑或者详情则回显绘制的路线
          this.echoLine(flag);
        }
        setTimeout(() => {
          // this.mapResetView([this.startPoint, this.endPoint]);
        }, 500);
      });
    },

    /**
     * @Event 调整地图到最佳视野
     * @param: portArr 点位数组 [pot1, pot2, pot3]
     * @description:
     * @author: mhf
     * @time: 2024-02-01 10:12:24
     **/
    mapResetView(portArr) {
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
     * @param: customObj 自定义参数,
     * @param: isDrag 是否可以拖拽
     * @param: isReturn 是否返回marker对象
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
        enableDragging: isDrag, // 实现可拖拽
      }); // 创建标注
      marker.customObj = customObj;
      this.bdMap.addOverlay(marker);

      // 实现点位可以拖拽
      if (isDrag) {
        marker.addEventListener("dragend", (e) => {
          // const newPosition = e.latLng; // 获取拖拽后的坐标
          console.log("新的位置：", e);
        });
      }

      // marker.addEventListener("click", (e) => {
      //   console.log("点击了标注", e);
      // });
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
      return isReturn ? marker : null;
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
     * @Event 回显路线
     * @description:
     * @author: mhf
     * @time: 2024-02-21 11:25:52
     **/
    echoLine(receivedP) {
      let config = {
        strokeStyle: "dashed",
        strokeColor: "blue",
        strokeTexture: {
          // url: "https://mapopen-pub-jsapigl.bj.bcebos.com/svgmodel/Icon_road_blue_arrow.png",
          url: this.img.Icon_road_blue_arrow,
          width: 16,
          height: 64,
        },
        strokeWeight: 10,
        strokeOpacity: 0.8,
        node: this.node,
        zIndex: 100,
      };
      if (!this.isMany) {
        let pointsGlArr = []; // new BMapGL.Point
        const getPointGlArr = () => {
          return this.pointsArr.map(
            (item) => new BMapGL.Point(item.lng, item.lat)
          );
        };
        pointsGlArr = getPointGlArr();
        this.polyline = new BMapGL.Polyline(pointsGlArr, config);
        this.bdMap.addOverlay(this.polyline); // 绘制折线
        this.polyline.enableEditing(); // 折线可编辑
        // this.polyline.disableEditing(); // 折线不可编辑
        let pointsArr = this.polyline.getPath();
        this.makePoint(
          pointsArr[0],
          this.getIcon({
            index: 0,
            length: 0,
          }),
          { name: "handlePoint0" },
          false,
          false
        );
        this.makePoint(
          pointsArr[pointsArr.length - 1],
          this.getIcon({
            index: 1,
            length: 2,
          }),
          { name: "handlePoint1" },
          false,
          false
        );

        /* 线段回显是肯定有起点和终点，因此直接监听线段的拖拽事件即可 */
        this.polyline.addEventListener("editend", (e) => {
          let pointsArr = this.polyline.getPath();
          // 删除旧的起点终点点位图标，等拖拽结束后重新绘制
          this.removeMarker("handlePoint0");
          this.removeMarker("handlePoint1");
          this.makePoint(
            pointsArr[0],
            this.getIcon({
              index: 0,
              length: 0,
            }),
            { name: "handlePoint0" },
            false,
            false
          );
          this.makePoint(
            pointsArr[pointsArr.length - 1],
            this.getIcon({
              index: 1,
              length: 2,
            }),
            { name: "handlePoint1" },
            false,
            false
          );
        });
      }

      let polylineArr = JSON.parse(receivedP);
      polylineArr.forEach((item, index) => {
        // console.log(item, index)
        this.drawPolyLines(item, config);
      });
    },

    /**
     * @Event 手动画线（自己选择点位绘制）
     * @description:
     * @author: mhf
     * @time: 2024-02-20 17:20:10
     **/
    handleDraw() {
      // this.drawIndex = 0;
      this.pointsArr = [];
      let pointsGlArr = []; // new BMapGL.Point

      this.bdMap.removeEventListener("click", () => {});
      this.mapClickListener = this.bdMap.addEventListener("click", (e) => {
        this.pointsArr.push({ lat: e.latlng.lat, lng: e.latlng.lng });
        pointsGlArr = this.pointsArr.map(
          (item) => new BMapGL.Point(item.lng, item.lat)
        );
        this.makePoint(
          { lng: e.latlng.lng, lat: e.latlng.lat },
          this.getIcon({
            index: this.drawIndex,
            length: this.pointsArr.length,
          }),
          { name: "handlePoint" + this.drawIndex },
          false,
          false
        );
        // 绘制线段
        this.polyline = new BMapGL.Polyline(pointsGlArr, {
          strokeStyle: "dashed",
          strokeColor: "blue",
          strokeTexture: {
            url: this.img.Icon_road_blue_arrow,
            // url: "https://mapopen-pub-jsapigl.bj.bcebos.com/svgmodel/Icon_road_blue_arrow.png",
            width: 16,
            height: 64,
          },
          strokeWeight: 8,
          strokeOpacity: 0.8,
          node: this.node,
        });
        this.bdMap.addOverlay(this.polyline); // 绘制折线
        this.drivingDistance = this.convertDistance(
          this.polyline.getLength() + "米"
        );
        this.polyline.enableEditing(); // 折线可编辑
        this.drawIndex++;

        if (this.drawIndex > 1) {
          this.bdMap.removeEventListener("click", this.mapClickListener);
          this.polyline.addEventListener("editend", (e) => {
            // this.pointsArr = this.polyline.getPath() // 获取路径上的点位
            let pointsArr = this.polyline.getPath();
            // 删除旧的起点终点点位图标，等拖拽结束后重新绘制
            this.removeMarker("handlePoint0");
            this.removeMarker("handlePoint1");
            this.makePoint(
              pointsArr[0],
              this.getIcon({
                index: 0,
                length: 0,
              }),
              { name: "handlePoint0" },
              false,
              false
            );
            this.makePoint(
              pointsArr[pointsArr.length - 1],
              this.getIcon({
                index: 1,
                length: 2,
              }),
              { name: "handlePoint1" },
              false,
              false
            );
          });
          // 监听折线的移动事件
          this.polyline.addEventListener("lineupdate", (e) => {
            this.pointsArr = [];
            this.pointsArr = JSON.parse(
              JSON.stringify(this.polyline.getPath())
            );
            console.log(this.pointsArr);
          });
        }
      });
    },

    /**
     * @Event 获取图标 (第一个点是起点图标,最后一个点是终点图标，其他是别的图标)
     * @description:
     * @author: mhf
     * @time: 2024-02-21 14:21:40
     **/
    getIcon(params) {
      let {
        index,
        length,
        width = 25,
        height = 40,
        offsetW = 0,
        offsetH = 0,
      } = params;
      // return new BMapGL.Icon(
      //     `../../assets/img/${index === 0 ? "startPoint" : index === length - 1 ? "endPoint" : "handlePoint"}.png`,
      //     new BMapGL.Size(width, height),
      //     {
      //       anchor: new BMapGL.Size(width / 2, height + 2), // 图标中央下端的尖角位置。（左右、上下）[底部居对齐]
      //       imageOffset: new BMapGL.Size(offsetW, offsetH),
      //     }, // 设置图片偏移
      // );
      return new BMapGL.Icon(
        index === 0
          ? this.img.startPoint
          : index === length - 1
          ? this.img.endPoint
          : this.img.handlePoint,
        new BMapGL.Size(width, height),
        {
          anchor: new BMapGL.Size(width / 2, height + 2), // 图标中央下端的尖角位置。（左右、上下）[底部居对齐]
          imageOffset: new BMapGL.Size(offsetW, offsetH),
        } // 设置图片偏移
      );
    },

    /**
     * @Event 移除点位
     * @description:
     * @author: mhf
     * @time: 2024-02-01 19:36:52
     **/
    removeMarker(name = "startPoint") {
      let markerArr = this.bdMap.getOverlays();
      for (let i = 0; i < markerArr.length; i++) {
        if (markerArr[i].customObj?.name === name) {
          this.bdMap.removeOverlay(markerArr[i]); // 移除所有点位
        }
      }
      // this.bdMap.clearOverlays() // 移除图层
    },

    /**
     * @Event 清除覆盖物
     * @description:
     * @author: mhf
     * @time: 2024-02-19 18:09:56
     **/
    resetLine() {
      this.bdMap.clearOverlays(); // 移除图层
      this.transit?.clearResults(); // 移除绘制的路径（自动绘制路段）
      this.pointsArr = [];
      this.drivingDistance = 0;
      this.drawIndex = 0;
      this.bdMap.removeEventListener("click", this.mapClickListener);
      this.mapClickListener = null;
      this.handleDraw();
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

    flat(arr) {
      return arr.reduce((prev, curr) => {
        return prev.concat(Array.isArray(curr) ? this.flat(curr) : curr);
      }, []);
    },

    /**
     * 通用绘制线段的方法
     * @param: pointsArr点位数组, config线段配置项
     * @return:
     * @author: mhf
     * @time: 2024-07-16 18:43:56
     **/
    drawPolyLines(pointsArr, config, obj = {}) {
      let pointsGlArr = []; // new BMapGL.Point
      const getPointGlArr = () => {
        return pointsArr.map((item) => new BMapGL.Point(item.lng, item.lat));
      }; // GL点位
      pointsGlArr = getPointGlArr();
      console.log(pointsGlArr, "pointsGlArr");
      let polyline = new BMapGL.Polyline(pointsGlArr, config);
      polyline.customObj = obj;
      this.bdMap.addOverlay(polyline);
    },

    getAllRoads() {
      // roadAllList().then((res) => {
      //   if (res.code === 1) {
      //     this.allRoads = res.data;
      //     if (this.showRoads) {
      //       this.drawArrRoads();
      //     }
      //   }
      // });
    },

    drawArrRoads() {
      let obj = {
        type: "draw-all-roads",
      };
      let config = {
        strokeColor: "#1492ff",
        strokeWeight: 5,
        strokeOpacity: 1,
        strokeStyle: "solid",
        zIndex: 1,
      };
      this.allRoads.forEach((item) => {
        this.drawPolyLines(JSON.parse(item.roadCoordinate), config, obj);
      });
    },

    removeAllRoads() {
      let overlaysArr = this.bdMap.getOverlays();
      const overlaysToRemove = overlaysArr.filter((overlay) => {
        return overlay.customObj?.type === "draw-all-roads";
      });
      /* 移除符合条件的标记 */
      if (overlaysToRemove.length > 0) {
        overlaysToRemove.forEach((overlay) => {
          this.bdMap.removeOverlay(overlay);
        });
      }
    },

    handleChange(e) {
      console.log(e, "E");
      if (!e) {
        this.removeAllRoads();
      } else {
        this.drawArrRoads();
      }
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

.point-self {
  position: absolute;
  z-index: 999;
  background-color: #fff;
  left: 40px;
  border-radius: 4px;
  overflow: hidden;
  top: 60px;
  // transition: width 1s;
  &-top {
    background-color: #1492ff;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    color: #fff;

    .top-title {
      font-weight: bold;
    }

    // .top-icon {
    //   color: #fff !important;
    // }
  }

  &-hidden {
    padding: 10px;
    cursor: pointer;
    // line-height: 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
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

  &-tip {
    max-width: 300px;
    position: absolute;
    top: 20px;
    right: 40px;
    z-index: 999 !important;
    background: #fff;
    padding: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    line-height: 20px;
    display: flex;
    justify-content: space-between;
    border-radius: 4px;
    overflow: hidden;

    i {
      font-size: 16px;
      cursor: pointer;
      height: fit-content;
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

  &-option {
    width: 220px;
    position: absolute;
    top: 30px;
    left: 840px;
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

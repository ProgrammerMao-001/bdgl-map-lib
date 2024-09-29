(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bdgl-map-lib"] = factory();
	else
		root["bdgl-map-lib"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 21:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DISTRICT: function() { return /* binding */ DISTRICT; },
/* harmony export */   MYPOIS: function() { return /* binding */ MYPOIS; },
/* harmony export */   POIS: function() { return /* binding */ POIS; },
/* harmony export */   POIS2: function() { return /* binding */ POIS2; },
/* harmony export */   REGION: function() { return /* binding */ REGION; },
/* harmony export */   REGION2: function() { return /* binding */ REGION2; }
/* harmony export */ });
const POIS = [{
  "name": "如家商旅酒店(北京师范大学积水潭地铁站店)",
  "location": {
    "lat": 39.959803,
    "lng": 116.372665
  },
  "address": "志强园小区志强北园30号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "",
  "telephone": "(010)62242828",
  "detail": 1,
  "uid": "6445b9b2a9f16497a80dd84f"
}, {
  "name": "北京西北民俗快捷酒店(圆明园清华大学店)",
  "location": {
    "lat": 40.019414,
    "lng": 116.325418
  },
  "address": "北京市海淀区北大街42号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "47732a158db9f03fa80dd8d8",
  "telephone": "(010)61943083",
  "detail": 1,
  "uid": "47732a158db9f03fa80dd8d8"
}, {
  "name": "和家宾馆(北京四季青店)",
  "location": {
    "lat": 39.949138,
    "lng": 116.288469
  },
  "address": "金庄村2号院",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "cac5fc768d9bf8ea2cb96d38",
  "telephone": "(010)88444957",
  "detail": 1,
  "uid": "cac5fc768d9bf8ea2cb96d38"
}, {
  "name": "全季酒店(北京军博地铁站店)",
  "location": {
    "lat": 39.908219,
    "lng": 116.327296
  },
  "address": "羊坊店路11号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "telephone": "(010)63996375",
  "detail": 1,
  "uid": "3f29f9d0952e8fd143d63e92"
}, {
  "name": "北京秋峰阁洗浴宾馆",
  "location": {
    "lat": 40.050175,
    "lng": 116.257299
  },
  "address": "西北旺付家窑17号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "",
  "telephone": "(010)62899148",
  "detail": 1,
  "uid": "b1c556e8c2ce8e0cb426556c"
}, {
  "name": "如家酒店(北京苏州桥店)",
  "location": {
    "lat": 39.972024,
    "lng": 116.309512
  },
  "address": "小南庄400号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "d24e48eb039952adafee7a3b",
  "telephone": "(010)62657676",
  "detail": 1,
  "uid": "d24e48eb039952adafee7a3b"
}, {
  "name": "北京园北宾馆(北医三院店)",
  "location": {
    "lat": 39.985631,
    "lng": 116.367253
  },
  "address": "花园北路塔院小区朗秋园甲7号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "",
  "telephone": "(010)62355588,(010)82026833",
  "detail": 1,
  "uid": "bcaebff8b3ba904dc9e33c31"
}, {
  "name": "北京大唐科苑宾馆",
  "location": {
    "lat": 39.98476,
    "lng": 116.363643
  },
  "address": "学院路40号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "d6ee8724d529a1f9a8f0cd39",
  "telephone": "(010)62301018",
  "detail": 1,
  "uid": "d6ee8724d529a1f9a8f0cd39"
}, {
  "name": "北京盛鸿宾馆(北医三院北方院区万寿寺地铁站店)",
  "location": {
    "lat": 39.952785,
    "lng": 116.310175
  },
  "address": "紫竹院路车道沟村1号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "5ce2637d86b12648ae31e53d",
  "telephone": "(010)68729238,(010)68729338",
  "detail": 1,
  "uid": "5ce2637d86b12648ae31e53d"
}, {
  "name": "北京新兴宾馆",
  "location": {
    "lat": 39.916414,
    "lng": 116.315882
  },
  "address": "北京市海淀区西三环中路17号(近公主坟地铁站)",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "48eb005863ba61b42fe67b0a",
  "telephone": "(010)68179803",
  "detail": 1,
  "uid": "48eb005863ba61b42fe67b0a"
}, {
  "name": "如家酒店(北京北清路航天城店)",
  "location": {
    "lat": 40.091866,
    "lng": 116.267743
  },
  "address": "友谊路118号燕保辛店家园6号楼301室",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "311c7b69c083236f6da3cc4c",
  "telephone": "(010)59841710",
  "detail": 1,
  "uid": "311c7b69c083236f6da3cc4c"
}, {
  "name": "北京万寿宾馆",
  "location": {
    "lat": 39.918579,
    "lng": 116.300236
  },
  "address": "北京市海淀区万寿路甲12号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "5508504d51a7dcd2c7f02504",
  "detail": 1,
  "uid": "5508504d51a7dcd2c7f02504"
}, {
  "name": "如家商旅酒店(北京清华大学东门店)",
  "location": {
    "lat": 40.016673,
    "lng": 116.350722
  },
  "address": "双清路16号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "7a65a985695a45c0adcb66ef",
  "telephone": "(010)82411980",
  "detail": 1,
  "uid": "7a65a985695a45c0adcb66ef"
}, {
  "name": "如家酒店(北京紫竹桥店)",
  "location": {
    "lat": 39.948883,
    "lng": 116.31897
  },
  "address": "紫竹院路甲3号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "",
  "telephone": "(010)68416688-9",
  "detail": 1,
  "uid": "ffd6d4039c00869617b54b04"
}, {
  "name": "中国科技会堂",
  "location": {
    "lat": 39.913677,
    "lng": 116.339907
  },
  "address": "北京市海淀区复兴路3号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "d52831f9bed0f5be2efaa72d",
  "telephone": "(010)68518822,(010)68788854",
  "detail": 1,
  "uid": "d52831f9bed0f5be2efaa72d"
}, {
  "name": "99旅馆连锁(北京鸟巢店)",
  "location": {
    "lat": 39.997939,
    "lng": 116.376011
  },
  "address": "北京市海淀区志新东路8号苇子坑3层",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "bbff8dcfc5d8aed485420e86",
  "telephone": "(010)82387970",
  "detail": 1,
  "uid": "bbff8dcfc5d8aed485420e86"
}, {
  "name": "北京达园宾馆",
  "location": {
    "lat": 40.006474,
    "lng": 116.30643
  },
  "address": "北京市海淀区福缘门甲1号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "",
  "telephone": "(010)82153151,(010)82153152",
  "detail": 1,
  "uid": "fc7675243cfce2e34e776e04"
}, {
  "name": "99优选酒店(万寿路地铁站店)",
  "location": {
    "lat": 39.916337,
    "lng": 116.29499
  },
  "address": "北京市海淀区万寿路西街61号院",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "6e37ea388d2266626849f395",
  "telephone": "(010)68154627",
  "detail": 1,
  "uid": "6e37ea388d2266626849f395"
}, {
  "name": "钓鱼台国宾馆",
  "location": {
    "lat": 39.924944,
    "lng": 116.338225
  },
  "address": "甘家口街道阜成路2号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "",
  "telephone": "(010)58591588",
  "detail": 1,
  "uid": "7c5e480b32eb05adacb22abd"
}, {
  "name": "北京康缘快捷酒店",
  "location": {
    "lat": 39.924275,
    "lng": 116.285448
  },
  "address": "金沟河东路金和嘉园9号院8号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "7c2cc2982e8933af22022061",
  "telephone": "(010)88624617",
  "detail": 1,
  "uid": "7c2cc2982e8933af22022061"
}, {
  "name": "汉庭酒店(北京西三旗中关村东升科技园店)",
  "location": {
    "lat": 40.038512,
    "lng": 116.373896
  },
  "address": "北京朝阳区龙岗路宝盛里37号楼1-3层",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "telephone": "(010)83050577",
  "detail": 1,
  "uid": "d79dac3302c4320785420eca"
}, {
  "name": "北京天德隆宾馆",
  "location": {
    "lat": 39.957374,
    "lng": 116.366003
  },
  "address": "文慧园路索家坟小区银1楼北侧36号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "d5464cf8d7fd7b4efda77805",
  "telephone": "(010)62244645",
  "detail": 1,
  "uid": "d5464cf8d7fd7b4efda77805"
}, {
  "name": "如家酒店(北京上地安宁庄东路店)",
  "location": {
    "lat": 40.046882,
    "lng": 116.339699
  },
  "address": "清河小营安宁庄东路18号20号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "1c89f308df028add077ce86c",
  "telephone": "(010)62933350",
  "detail": 1,
  "uid": "1c89f308df028add077ce86c"
}, {
  "name": "北方朗悦酒店(北京紫竹桥店)",
  "location": {
    "lat": 39.955162,
    "lng": 116.308066
  },
  "address": "车道沟10号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "4eb3b5333af90e6c43024504",
  "telephone": "(010)68962077,(010)68962402",
  "detail": 1,
  "uid": "4eb3b5333af90e6c43024504"
}, {
  "name": "北京来顺德宾馆(上地清河高铁站店)",
  "location": {
    "lat": 40.046333,
    "lng": 116.339445
  },
  "address": "清河三街72号19幢22幢",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "04707aee07686e011c3894a2",
  "telephone": "(010)62919122",
  "detail": 1,
  "uid": "04707aee07686e011c3894a2"
}, {
  "name": "如家精选酒店(北京中关村东路店)",
  "location": {
    "lat": 39.979473,
    "lng": 116.340889
  },
  "address": "中关村东路106号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "16e857fa6b32a155fa42b2dc",
  "telephone": "(010)82121666",
  "detail": 1,
  "uid": "16e857fa6b32a155fa42b2dc"
}, {
  "name": "北京盐湖宾馆(西站莲花池东路店)",
  "location": {
    "lat": 39.904201,
    "lng": 116.341731
  },
  "address": "莲花池东路北小马厂8号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "",
  "telephone": "(010)51876917",
  "detail": 1,
  "uid": "9fbfeef2ca8df545ede4a53c"
}, {
  "name": "北京鑫盛苑宾馆(人民大学苏州街地铁站店)",
  "location": {
    "lat": 39.978652,
    "lng": 116.309991
  },
  "address": "苏州街77号院",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "a083701778968f47d22dd68a",
  "telephone": "(010)62575516,(010)62615574",
  "detail": 1,
  "uid": "a083701778968f47d22dd68a"
}, {
  "name": "速8酒店(北京武警总院永定路店)",
  "location": {
    "lat": 39.924769,
    "lng": 116.270633
  },
  "address": "永定路25号院",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "ad3c49e1ad40bb88b8bd631c",
  "telephone": "(010)82888867",
  "detail": 1,
  "uid": "ad3c49e1ad40bb88b8bd631c"
}, {
  "name": "如家商旅酒店(北京中关村苏州桥地铁站店)",
  "location": {
    "lat": 39.964771,
    "lng": 116.312324
  },
  "address": "厂洼东一街3号院",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "c787e311531931c638e4a636",
  "telephone": "(010)88551088-9",
  "detail": 1,
  "uid": "c787e311531931c638e4a636"
}, {
  "name": "北京万寿庄宾馆",
  "location": {
    "lat": 39.917761,
    "lng": 116.296409
  },
  "address": "万寿路西街7号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "",
  "telephone": "(010)59586666",
  "detail": 1,
  "uid": "a74481d616663e5ff503b849"
}, {
  "name": "硕果MAX酒店(北京中关村苏州街店)",
  "location": {
    "lat": 39.98996,
    "lng": 116.3105
  },
  "address": "海淀大街46号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "f9fd60627b4e7d060f0e6b04",
  "telephone": "(010)68666887",
  "detail": 1,
  "uid": "f9fd60627b4e7d060f0e6b04"
}, {
  "name": "北京云逸宾馆(解放军总医院第八医学中心安河桥北地铁站店)",
  "location": {
    "lat": 40.02784,
    "lng": 116.27855
  },
  "address": "马连洼天秀路天秀花园古月园26号楼1层西门",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "d3e0152a6c66bae309a8d40e",
  "telephone": "13269712287,18519783887",
  "detail": 1,
  "uid": "d3e0152a6c66bae309a8d40e"
}, {
  "name": "北京东升凯莱酒店",
  "location": {
    "lat": 40.050174,
    "lng": 116.363736
  },
  "address": "西小口路66号中关村东升科技园C-6",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "57861ea1ad40ff5715c90528",
  "detail": 1,
  "uid": "57861ea1ad40ff5715c90528"
}, {
  "name": "北京国图宾馆",
  "location": {
    "lat": 39.95174,
    "lng": 116.32846
  },
  "address": "中关村南大街33号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "",
  "telephone": "(010)88545012",
  "detail": 1,
  "uid": "b0d056f226c2367ecac3db4c"
}, {
  "name": "北京23号快捷酒店",
  "location": {
    "lat": 39.92567,
    "lng": 116.270604
  },
  "address": "永定路23号1号楼(糖业烟酒公司院内)",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "d13ece44ac484d9c364aaee6",
  "telephone": "(010)88269980",
  "detail": 1,
  "uid": "d13ece44ac484d9c364aaee6"
}, {
  "name": "北京景明园宾馆",
  "location": {
    "lat": 40.006635,
    "lng": 116.220841
  },
  "address": "北京市海淀区香山正白旗52号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "",
  "telephone": "(010)62871117",
  "detail": 1,
  "uid": "35debf29f3b9285da6da393d"
}, {
  "name": "如家酒店(北京定慧桥五路居地铁站店)",
  "location": {
    "lat": 39.935651,
    "lng": 116.27192
  },
  "address": "田村路23号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "fad6a8b185fac99125e0a012",
  "telephone": "(010)88636099",
  "detail": 1,
  "uid": "fad6a8b185fac99125e0a012"
}, {
  "name": "北京嘉诚快捷酒店",
  "location": {
    "lat": 39.893891,
    "lng": 116.301862
  },
  "address": "万丰路18号院5号楼202",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "877d28a34aba705486154191",
  "telephone": "(010)58871157",
  "detail": 1,
  "uid": "877d28a34aba705486154191"
}, {
  "name": "北京留香阁宾馆",
  "location": {
    "lat": 39.938098,
    "lng": 116.306632
  },
  "address": "师范学院附中北墙外国家经委宿舍3号楼东侧一层",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "b3f81e30db3c7327a8059db6",
  "telephone": "(010)68427802",
  "detail": 1,
  "uid": "b3f81e30db3c7327a8059db6"
}, {
  "name": "北京青竹宾馆",
  "location": {
    "lat": 39.951858,
    "lng": 116.310793
  },
  "address": "北京青竹宾馆车道沟1号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "3be122e1ccb45e4b1ef74d04",
  "telephone": "(010)68430888",
  "detail": 1,
  "uid": "3be122e1ccb45e4b1ef74d04"
}, {
  "name": "北京中协宾馆",
  "location": {
    "lat": 39.957219,
    "lng": 116.320939
  },
  "address": "法华寺街22号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "631c415706b4f67831f71d04",
  "telephone": "(010)68417677",
  "detail": 1,
  "uid": "631c415706b4f67831f71d04"
}, {
  "name": "和利宾馆(北京黑山扈路店)",
  "location": {
    "lat": 40.031784,
    "lng": 116.271856
  },
  "address": "黑山扈路37号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "3f187245fe4414e4c81b95ac",
  "telephone": "(010)62873559,13910709371",
  "detail": 1,
  "uid": "3f187245fe4414e4c81b95ac"
}, {
  "name": "北京兰州宾馆",
  "location": {
    "lat": 39.952192,
    "lng": 116.364877
  },
  "address": "北京市海淀区西直门北大街58号金晖嘉园5号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "b1c556e8c2ef8e0cb426554f",
  "detail": 1,
  "uid": "b1c556e8c2ef8e0cb426554f"
}, {
  "name": "为公快捷酒店(魏公村店)",
  "location": {
    "lat": 39.959155,
    "lng": 116.327301
  },
  "address": "北京市海淀区魏公村街8号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "69fcd6dfb1750c36ca291504",
  "telephone": "(010)88571810",
  "detail": 1,
  "uid": "69fcd6dfb1750c36ca291504"
}, {
  "name": "海春宾馆(北京大钟寺地铁站店)",
  "location": {
    "lat": 39.972572,
    "lng": 116.354359
  },
  "address": "明光路明光北里1号南侧",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "61f634f60c99f8066a49f3b6",
  "telephone": "(010)62226896",
  "detail": 1,
  "uid": "61f634f60c99f8066a49f3b6"
}, {
  "name": "翔凤宾馆(海淀路北京大学南门店)",
  "location": {
    "lat": 39.991932,
    "lng": 116.318212
  },
  "address": "海淀路社区2号院9号楼对面",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "1bc83fa39affe91dc61e51c9",
  "telephone": "(010)82613640",
  "detail": 1,
  "uid": "1bc83fa39affe91dc61e51c9"
}, {
  "name": "怡城林快捷酒店(北京农大南路地铁站中国农业大学店)",
  "location": {
    "lat": 40.030487,
    "lng": 116.285708
  },
  "address": "圆明园西路9-5号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "",
  "detail": 1,
  "uid": "ceac099f45b378e9095cb30b"
}, {
  "name": "北京隆满源宾馆(上地清河高铁站店)",
  "location": {
    "lat": 40.043675,
    "lng": 116.338766
  },
  "address": "清河三街72号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "db2a147c8d5e6f78c51b7560",
  "telephone": "(010)62956984",
  "detail": 1,
  "uid": "db2a147c8d5e6f78c51b7560"
}, {
  "name": "西翠宾馆(北京五棵松店)",
  "location": {
    "lat": 39.923444,
    "lng": 116.290493
  },
  "address": "万寿路2号（位于西翠路）",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "108b1cea94100bb53586f403",
  "telephone": "(010)51828247",
  "detail": 1,
  "uid": "108b1cea94100bb53586f403"
}, {
  "name": "北京新路向宾馆",
  "location": {
    "lat": 39.910249,
    "lng": 116.26985
  },
  "address": "五棵松永定路西里小曲4号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "341c35de0c1772bee70738a6",
  "telephone": "(010)68225712,18911402776",
  "detail": 1,
  "uid": "341c35de0c1772bee70738a6"
}, {
  "name": "北京好家宾馆(清河永泰庄地铁站店)",
  "location": {
    "lat": 40.036984,
    "lng": 116.368101
  },
  "address": "清河龙岗路27号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "15e1e85ebfe08dbb58109331",
  "telephone": "(010)62996815",
  "detail": 1,
  "uid": "15e1e85ebfe08dbb58109331"
}, {
  "name": "北京泓赞宾馆",
  "location": {
    "lat": 40.117016,
    "lng": 116.152823
  },
  "address": "前沙涧7号院旁",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "10cae247443f87ab82288a8c",
  "telephone": "(010)62422056,13161854293",
  "detail": 1,
  "uid": "10cae247443f87ab82288a8c"
}, {
  "name": "北京圆梦家庭宾馆(北医三院店)",
  "location": {
    "lat": 39.984466,
    "lng": 116.367747
  },
  "address": "花园北路47号院塔院小区消夏园3号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "7dd286ef41d30dedc17da2e4",
  "telephone": "13520588772",
  "detail": 1,
  "uid": "7dd286ef41d30dedc17da2e4"
}, {
  "name": "香山颐和宾馆",
  "location": {
    "lat": 40.012723,
    "lng": 116.271772
  },
  "address": "北京市海淀区香山路1号东区",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "",
  "telephone": "(010)62886666",
  "detail": 1,
  "uid": "492d92816dc9a3a6c26c14e0"
}, {
  "name": "北京万年青宾馆",
  "location": {
    "lat": 39.955307,
    "lng": 116.314931
  },
  "address": "西三环北路25号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "d1469ee7ddbabc7b8433043a",
  "telephone": "(010)68421144,(010)68425154",
  "detail": 1,
  "uid": "d1469ee7ddbabc7b8433043a"
}, {
  "name": "北京金利宾馆",
  "location": {
    "lat": 39.984527,
    "lng": 116.254885
  },
  "address": "四季青镇茶棚路北坞嘉园南里西门",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "b86e4a298b5bbc13c0364494",
  "telephone": "(010)62592888",
  "detail": 1,
  "uid": "b86e4a298b5bbc13c0364494"
}, {
  "name": "北京千足港优选旅馆",
  "location": {
    "lat": 39.90347,
    "lng": 116.329782
  },
  "address": "莲花池东路31号中裕世纪大酒店四楼",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "",
  "telephone": "(010)63990036",
  "detail": 1,
  "uid": "4fe56eb5e35a888e441a323f"
}, {
  "name": "红苹果快捷酒店",
  "location": {
    "lat": 39.966507,
    "lng": 116.351881
  },
  "address": "北京市海淀区四道口路2号京果商厦a座3层",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "b9046b0de591bb76100daaf6",
  "telephone": "(010)59446202",
  "detail": 1,
  "uid": "b9046b0de591bb76100daaf6"
}, {
  "name": "丽枫酒店(光耀东方广场店)",
  "location": {
    "lat": 39.905563,
    "lng": 116.32829
  },
  "address": "北京市海淀区羊坊店路18号光耀东方广场F1",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "d6e03dc72aeb8099a3acc4f3",
  "detail": 1,
  "uid": "d6e03dc72aeb8099a3acc4f3"
}, {
  "name": "北京毕天成宾馆",
  "location": {
    "lat": 39.982749,
    "lng": 116.353896
  },
  "address": "知春路17号院知春嘉园院内2号楼3A层",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "",
  "telephone": "(010)82311522",
  "detail": 1,
  "uid": "0d46f29e1e7b1ebca20464f3"
}, {
  "name": "和清圆宾馆(五道口店)",
  "location": {
    "lat": 40.002644,
    "lng": 116.341831
  },
  "address": "北京市海淀区西王庄5号楼3层",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "e2f2991c540dfa741f389439",
  "telephone": "(010)62772286,(010)62795206",
  "detail": 1,
  "uid": "e2f2991c540dfa741f389439"
}, {
  "name": "7天酒店(北京中关村魏公村地铁站店)",
  "location": {
    "lat": 39.964672,
    "lng": 116.341336
  },
  "address": "北京市海淀区北蜂窝105号甲8号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "ccffc84fac81bffa774ff1a7",
  "telephone": "(010)62169891",
  "detail": 1,
  "uid": "ccffc84fac81bffa774ff1a7"
}, {
  "name": "北京吉林雪松宾馆",
  "location": {
    "lat": 39.976769,
    "lng": 116.382712
  },
  "address": "马甸南路2号院",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "",
  "telephone": "(010)62019638,(010)82000066",
  "detail": 1,
  "uid": "3a0fbba85f4fec589ee32131"
}, {
  "name": "赣人之家",
  "location": {
    "lat": 39.976416,
    "lng": 116.382575
  },
  "address": "花园路街道马甸桥南路2号七省大院江西驻京办内(马甸桥西北角)",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "28e700f1ef93c101095cb379",
  "telephone": "(010)82003999",
  "detail": 1,
  "uid": "28e700f1ef93c101095cb379"
}, {
  "name": "上地缘宾馆(北京体育大学店)",
  "location": {
    "lat": 40.026094,
    "lng": 116.321366
  },
  "address": "体院西路甲2号民营科技园西门",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "9876050e0eff680dd4851fb2",
  "telephone": "(010)62980358,13520783039",
  "detail": 1,
  "uid": "9876050e0eff680dd4851fb2"
}, {
  "name": "北京沙迪克快捷宾馆",
  "location": {
    "lat": 39.969721,
    "lng": 116.347031
  },
  "address": "皂君庙乙2号1号平房",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "60554620369ed17ec42ba1db",
  "telephone": "(010)62122758",
  "detail": 1,
  "uid": "60554620369ed17ec42ba1db"
}, {
  "name": "常安福宾馆(北京知春里地铁站店)",
  "location": {
    "lat": 39.981121,
    "lng": 116.331993
  },
  "address": "知春东里15号楼二层",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "3810c87916552c8b9c09f74c",
  "telephone": "(010)82118288",
  "detail": 1,
  "uid": "3810c87916552c8b9c09f74c"
}, {
  "name": "长荣酒店(北京田村店)",
  "location": {
    "lat": 39.935691,
    "lng": 116.272735
  },
  "address": "田村路23号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "7fd72311176441865cbe8641",
  "telephone": "(010)52985758",
  "detail": 1,
  "uid": "7fd72311176441865cbe8641"
}, {
  "name": "北京谊腾宾馆",
  "location": {
    "lat": 40.005928,
    "lng": 116.3522
  },
  "address": "清华东路东王庄小区10号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "3b2c5ff55f9cc60c95ca07bb",
  "telephone": "(010)62328078",
  "detail": 1,
  "uid": "3b2c5ff55f9cc60c95ca07bb"
}, {
  "name": "北京山东宾馆",
  "location": {
    "lat": 39.976792,
    "lng": 116.382671
  },
  "address": "马甸南路2号院1号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "",
  "telephone": "(010)82002288",
  "detail": 1,
  "uid": "08f1f1f53074cfd388db730a"
}, {
  "name": "常安福宾馆(北京大学南门店)",
  "location": {
    "lat": 39.992248,
    "lng": 116.319461
  },
  "address": "海淀路25-2号（北大南门斜对面）",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "c879fa010263a44ac909f04c",
  "telephone": "(010)62638898",
  "detail": 1,
  "uid": "c879fa010263a44ac909f04c"
}, {
  "name": "北京煌溪宾馆(北京苏州桥外国语学院店)",
  "location": {
    "lat": 39.964555,
    "lng": 116.313182
  },
  "address": "西三环北路3号北京电视台西门附近",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "4cf8d24e4c5433fd9cf77939",
  "telephone": "(010)68718668",
  "detail": 1,
  "uid": "4cf8d24e4c5433fd9cf77939"
}, {
  "name": "北京园北快捷酒店(中关村北医三院店)",
  "location": {
    "lat": 39.982727,
    "lng": 116.367852
  },
  "address": "北土城西路179号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "db1f39d496365d76f5c59c04",
  "telephone": "(010)62376060",
  "detail": 1,
  "uid": "db1f39d496365d76f5c59c04"
}, {
  "name": "优伦斯精品酒店(北京中关村东升科技园永泰庄地铁站店)",
  "location": {
    "lat": 40.040592,
    "lng": 116.356623
  },
  "address": "永泰园甲13号1-4层",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "2fd2beab8040e54b7adbd204",
  "telephone": "(010)56352666,(010)82753885",
  "detail": 1,
  "uid": "2fd2beab8040e54b7adbd204"
}, {
  "name": "北京思诺宾馆",
  "location": {
    "lat": 39.942275,
    "lng": 116.326773
  },
  "address": "紫竹院南路20号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "d0679e738433f173ab175a8e",
  "telephone": "(010)68463840",
  "detail": 1,
  "uid": "d0679e738433f173ab175a8e"
}, {
  "name": "北京锦绣年华宾馆",
  "location": {
    "lat": 39.942503,
    "lng": 116.312116
  },
  "address": "北洼路26号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "d6ee8724b968c5e3a8f0cde0",
  "telephone": "(010)88516620,15718893189",
  "detail": 1,
  "uid": "d6ee8724b968c5e3a8f0cde0"
}, {
  "name": "北京英杰城宾馆(中国农业大学农大南路地铁站店)",
  "location": {
    "lat": 40.030122,
    "lng": 116.285986
  },
  "address": "北京市海淀区圆明园西路3号院1栋2层(农业大学对面)",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "3dc9befd7f2b800fbea24002",
  "telephone": "(010)62817046",
  "detail": 1,
  "uid": "3dc9befd7f2b800fbea24002"
}, {
  "name": "海淀阳光酒店(北京中关村人民大学店)",
  "location": {
    "lat": 39.971458,
    "lng": 116.312099
  },
  "address": "万泉河路小南庄49号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "a3e8341c818b7a954afd3f4f",
  "telephone": "(010)62529711",
  "detail": 1,
  "uid": "a3e8341c818b7a954afd3f4f"
}, {
  "name": "瑞康酒店",
  "location": {
    "lat": 40.045335,
    "lng": 116.340213
  },
  "address": "北京市海淀区安宁庄东路72号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "29692f6d4daaac9e2dfaa751",
  "telephone": "(010)62917409",
  "detail": 1,
  "uid": "29692f6d4daaac9e2dfaa751"
}, {
  "name": "嘉年华宾馆(北京清河小营桥地铁站万象汇店)",
  "location": {
    "lat": 40.037121,
    "lng": 116.345847
  },
  "address": "清河中路69号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "9ee7cc7878cc356917c905e5",
  "telephone": "(010)62913009",
  "detail": 1,
  "uid": "9ee7cc7878cc356917c905e5"
}, {
  "name": "北方朗悦酒店(北京甘家口店)",
  "location": {
    "lat": 39.932176,
    "lng": 116.339414
  },
  "address": "三里河路37号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "0a15c7ec27ea98e5ed74f83b",
  "telephone": "(010)68355550",
  "detail": 1,
  "uid": "0a15c7ec27ea98e5ed74f83b"
}, {
  "name": "北京福德源宾馆",
  "location": {
    "lat": 39.983535,
    "lng": 116.386586
  },
  "address": "北土城西路103号院3号平房",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "4ea3f2f10293ddaaaecb6678",
  "telephone": "(010)82073519",
  "detail": 1,
  "uid": "4ea3f2f10293ddaaaecb6678"
}, {
  "name": "资源宾馆",
  "location": {
    "lat": 39.992815,
    "lng": 116.312392
  },
  "address": "北京市海淀区颐和园路1号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "c09a9258780cc5f2f7b916ff",
  "detail": 1,
  "uid": "c09a9258780cc5f2f7b916ff"
}, {
  "name": "北京鸿福宾馆",
  "location": {
    "lat": 39.964156,
    "lng": 116.342094
  },
  "address": "皂君庙东里73号1号楼2层",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "0b21409011b0a9557bf79645",
  "telephone": "(010)62155519,13693300706",
  "detail": 1,
  "uid": "0b21409011b0a9557bf79645"
}, {
  "name": "北京翠湖花园酒店(翠湖别墅路店)",
  "location": {
    "lat": 40.116811,
    "lng": 116.209606
  },
  "address": "北京市海淀区上庄(地区)镇翠湖路8号-d28-b",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "telephone": "01062473887,01082479200",
  "detail": 1,
  "uid": "fead24aff8b2dd4228201a5d"
}, {
  "name": "北京昆棚宾馆",
  "location": {
    "lat": 39.913014,
    "lng": 116.270616
  },
  "address": "复兴路甲36号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "272f5e0b0b32d9aa734b870f",
  "telephone": "(010)65000999",
  "detail": 1,
  "uid": "272f5e0b0b32d9aa734b870f"
}, {
  "name": "北京天盈宾馆",
  "location": {
    "lat": 39.958171,
    "lng": 116.376817
  },
  "address": "文慧园路新街口外大街小西天牌楼内50米路南",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "691305232cf0bd11725e800b",
  "telephone": "(010)62244809",
  "detail": 1,
  "uid": "691305232cf0bd11725e800b"
}, {
  "name": "北京大苑快捷酒店",
  "location": {
    "lat": 39.935151,
    "lng": 116.252445
  },
  "address": "田村中街畅茜园雪芳里4号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "403bcfc5a6b3ba3b246e98aa",
  "telephone": "(010)56175399",
  "detail": 1,
  "uid": "403bcfc5a6b3ba3b246e98aa"
}, {
  "name": "福华瑞源宾馆(西直门店)",
  "location": {
    "lat": 39.953192,
    "lng": 116.36696
  },
  "address": "德西大街15号远洋风景小区1号楼底商",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "219f9803bb62d5fe7f29bd92",
  "telephone": "(010)82291367",
  "detail": 1,
  "uid": "219f9803bb62d5fe7f29bd92"
}, {
  "name": "北京金石酒店",
  "location": {
    "lat": 39.925121,
    "lng": 116.270632
  },
  "address": "永定路25号院",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "6611787b384876208605bffd",
  "telephone": "15901112356",
  "detail": 1,
  "uid": "6611787b384876208605bffd"
}, {
  "name": "北京天香居宾馆",
  "location": {
    "lat": 39.973704,
    "lng": 116.254175
  },
  "address": "闵庄南路与玉虹北街交叉口",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "cd52390c93273ff59968b462",
  "telephone": "(010)51613130",
  "detail": 1,
  "uid": "cd52390c93273ff59968b462"
}, {
  "name": "蜀阳酒店(绵阳驻京办)",
  "location": {
    "lat": 39.969355,
    "lng": 116.345859
  },
  "address": "北京市海淀区皂君庙乙4号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "e546466ec9a9b16a83a00c4e",
  "telephone": "(010)82138550",
  "detail": 1,
  "uid": "e546466ec9a9b16a83a00c4e"
}, {
  "name": "北京鑫园之家宾馆(人民大学苏州街地铁站店)",
  "location": {
    "lat": 39.973722,
    "lng": 116.315861
  },
  "address": "北京市海淀区苏州街52号院9幢东平房、1号楼二层三层",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "",
  "telephone": "010-88858788,15110276202",
  "detail": 1,
  "uid": "3a26a3ae402ae9e7ed74f843"
}, {
  "name": "如家酒店·NEO(北京清河永泰庄路店)",
  "location": {
    "lat": 40.038827,
    "lng": 116.358052
  },
  "address": "北京市海淀区永泰庄路甲6号院",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "detail": 1,
  "uid": "11954e122104b8a741d63e28"
}, {
  "name": "银海洋宾馆(北京清河高铁站店)",
  "location": {
    "lat": 40.046753,
    "lng": 116.339182
  },
  "address": "安宁庄东路海洋出版社院内1单元1号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "14395c97b17372c27369d327",
  "telephone": "(010)62929980",
  "detail": 1,
  "uid": "14395c97b17372c27369d327"
}, {
  "name": "物科宾馆",
  "location": {
    "lat": 39.988947,
    "lng": 116.337075
  },
  "address": "北京市海淀区中关村南三街8号h楼d门2层",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "",
  "telephone": "(010)82649140",
  "detail": 1,
  "uid": "4ce10ce66797f1b8441a3202"
}, {
  "name": "安德宾馆(北京苏州桥店)",
  "location": {
    "lat": 39.964494,
    "lng": 116.312652
  },
  "address": "厂洼3号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "2b1eb382c713821f2fb96d05",
  "telephone": "(010)88512032",
  "detail": 1,
  "uid": "2b1eb382c713821f2fb96d05"
}, {
  "name": "北京兴怡园宾馆(北医三院店)",
  "location": {
    "lat": 39.985583,
    "lng": 116.36469
  },
  "address": "花园北路48号院（邮科社区内）",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "15a93810b7c2c9a414c8f63d",
  "telephone": "(010)62304561",
  "detail": 1,
  "uid": "15a93810b7c2c9a414c8f63d"
}, {
  "name": "北京曲园宾馆",
  "location": {
    "lat": 39.997506,
    "lng": 116.376053
  },
  "address": "志新东路8号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "691305232f9cbc11725e80df",
  "telephone": "(010)62329232,(010)62329233",
  "detail": 1,
  "uid": "691305232f9cbc11725e80df"
}, {
  "name": "糊涂宾馆",
  "location": {
    "lat": 39.988153,
    "lng": 116.38531
  },
  "address": "北京市海淀区龙翔路4号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "2a7a25ec4b44e57a6c3e1b00",
  "telephone": "(010)62018908",
  "detail": 1,
  "uid": "2a7a25ec4b44e57a6c3e1b00"
}, {
  "name": "金源快捷酒店(清上园(清清雅阁)店)",
  "location": {
    "lat": 40.044179,
    "lng": 116.338379
  },
  "address": "北京市海淀区清上园东路清上园甲3号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "fa7da3e8816cf06242d63e70",
  "telephone": "(010)82729749",
  "detail": 1,
  "uid": "fa7da3e8816cf06242d63e70"
}, {
  "name": "北京林下宾馆(北医三院店)",
  "location": {
    "lat": 39.985363,
    "lng": 116.367452
  },
  "address": "塔院朗秋园乙7号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "",
  "telephone": "15910981178",
  "detail": 1,
  "uid": "2638383d0a19a4a08505bffe"
}, {
  "name": "北京古庙旅馆",
  "location": {
    "lat": 39.907224,
    "lng": 116.302625
  },
  "address": "万寿路南口",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "d24e48eb7166a4b4aeee7aa6",
  "telephone": "(010)68217310",
  "detail": 1,
  "uid": "d24e48eb7166a4b4aeee7aa6"
}, {
  "name": "海友酒店(北京中关村环保园稻香湖地铁站店)",
  "location": {
    "lat": 40.076908,
    "lng": 116.198899
  },
  "address": "北京市海淀区林风二路",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "telephone": "(010)62461227",
  "detail": 1,
  "uid": "a2720419d0537dab4afc8de0"
}, {
  "name": "花筑·北京迈克之家酒店(北师大积水潭店)",
  "location": {
    "lat": 39.959632,
    "lng": 116.37451
  },
  "address": "北京市海淀区志强北1号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "cd9d05dd6ae209af85420e3f",
  "telephone": "13321158051",
  "detail": 1,
  "uid": "cd9d05dd6ae209af85420e3f"
}, {
  "name": "北京鲁家宾馆",
  "location": {
    "lat": 39.979978,
    "lng": 116.341993
  },
  "address": "中关村东路白塔庵路金谷园小区56号西24号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "517a907050238f8aeaf85362",
  "telephone": "(010)82119306",
  "detail": 1,
  "uid": "517a907050238f8aeaf85362"
}, {
  "name": "北京兴国栋宾馆(北京邮电大学南门北京师范大学南门店)",
  "location": {
    "lat": 39.963998,
    "lng": 116.365569
  },
  "address": "学院南路北京邮电大学南门东行50米",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "e96b44200b293b4082288a49",
  "telephone": "(010)62259335",
  "detail": 1,
  "uid": "e96b44200b293b4082288a49"
}, {
  "name": "北京逸旅阳光快捷酒店",
  "location": {
    "lat": 39.95603,
    "lng": 116.370031
  },
  "address": "文慧园南路16号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "5501cc6d84aa2b579c09f76c",
  "telephone": "(010)62236966",
  "detail": 1,
  "uid": "5501cc6d84aa2b579c09f76c"
}, {
  "name": "北京福华鸿源酒店(西直门北京北站店)",
  "location": {
    "lat": 39.953107,
    "lng": 116.366753
  },
  "address": "德西大街15号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "3f8546679a8027663517dcb6",
  "telephone": "(010)82292269",
  "detail": 1,
  "uid": "3f8546679a8027663517dcb6"
}, {
  "name": "北京舒梦缘宾馆",
  "location": {
    "lat": 39.987582,
    "lng": 116.334264
  },
  "address": "中关村保福寺79号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "fc8afddea789492413293516",
  "telephone": "(010)62631988",
  "detail": 1,
  "uid": "fc8afddea789492413293516"
}, {
  "name": "北京中油宾馆(海淀分部)",
  "location": {
    "lat": 39.999492,
    "lng": 116.36032
  },
  "address": "北京市海淀区学院路20号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "c7eca12b2e87232ee115f931",
  "telephone": "(010)62395522,(010)83599015",
  "detail": 1,
  "uid": "c7eca12b2e87232ee115f931"
}, {
  "name": "靖轩招待所(北京北医三院店)",
  "location": {
    "lat": 39.98555,
    "lng": 116.365316
  },
  "address": "学院路40号二区19号平房",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "",
  "detail": 1,
  "uid": "a1418eb404197c66ebe58200"
}, {
  "name": "99优选酒店(蓟门桥店)",
  "location": {
    "lat": 39.976167,
    "lng": 116.357787
  },
  "address": "北京市海淀区蓟门桥99号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "cf766276e3001f60dbd8916f",
  "telephone": "18514702580",
  "detail": 1,
  "uid": "cf766276e3001f60dbd8916f"
}, {
  "name": "北京聚鑫园宾馆",
  "location": {
    "lat": 39.916711,
    "lng": 116.31895
  },
  "address": "复兴路17号中央电视台西门10分走到",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "9ee7cc789f154a6916c9052d",
  "telephone": "(010)68588272",
  "detail": 1,
  "uid": "9ee7cc789f154a6916c9052d"
}, {
  "name": "如家酒店上海新国际博览中心张江高科地铁站店",
  "location": {
    "lat": 39.994251,
    "lng": 116.346856
  },
  "address": "北京市海淀区展春园西路蓟鑫大厦",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "detail": 1,
  "uid": "9f80c261b6ec89669b68b4e8"
}, {
  "name": "格林豪泰酒店(蓟鑫大厦店)",
  "location": {
    "lat": 39.993676,
    "lng": 116.347115
  },
  "address": "北京市海淀区学院路街道北四环中路蓟鑫大厦",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "detail": 1,
  "uid": "91effe8a3a33594114948e88"
}, {
  "name": "旅仁家快捷酒店",
  "location": {
    "lat": 39.987801,
    "lng": 116.362486
  },
  "address": "北京市海淀区学院路38号(北医三院附近)",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "7aea43b7203194e17c29bd00",
  "telephone": "(010)82968188,(010)82968189",
  "detail": 1,
  "uid": "7aea43b7203194e17c29bd00"
}, {
  "name": "叙缘快捷酒店(北京雅园情店)",
  "location": {
    "lat": 39.921812,
    "lng": 116.280002
  },
  "address": "西四环中路33号915楼1层",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "cf470ef3bd4e50798bb988ea",
  "telephone": "(010)68160015",
  "detail": 1,
  "uid": "cf470ef3bd4e50798bb988ea"
}, {
  "name": "学府园宾馆",
  "location": {
    "lat": 40.000277,
    "lng": 116.342018
  },
  "address": "北京市海淀区成府路45号的B、C座写字楼",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "",
  "detail": 1,
  "uid": "40a03117887ef0ab08f5eb3e"
}, {
  "name": "格林豪泰商务酒店(北京海淀区清河桥店)",
  "location": {
    "lat": 40.037995,
    "lng": 116.350947
  },
  "address": "北京市海淀区清河三街95号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "street_id": "2e00c5ddeab77a05d7851f39",
  "telephone": "(010)62933366",
  "detail": 1,
  "uid": "2e00c5ddeab77a05d7851f39"
}, {
  "name": "海友酒店(北京西三旗中关村东升科技园店)",
  "location": {
    "lat": 40.044448,
    "lng": 116.377608
  },
  "address": "北京市海淀区黑泉路宝盛里观林园西南侧",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "detail": 1,
  "uid": "89accf6a56b8a1d3e5e965d0"
}, {
  "name": "布丁酒店(北京中关村苏州街店)",
  "location": {
    "lat": 39.984131,
    "lng": 116.308151
  },
  "address": "北京市万泉河路58号",
  "province": "北京市",
  "city": "北京市",
  "area": "海淀区",
  "telephone": "(010)62612991-0",
  "detail": 1,
  "uid": "6b0d2e61c5c8ebe6eb1e97fb"
}, {
  "name": "如家酒店(北京西单大悦城店)",
  "location": {
    "lat": 39.917974,
    "lng": 116.378218
  },
  "address": "大木仓胡同33号3幢",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "49d95938ef42345ac61e5102",
  "telephone": "(010)66022882",
  "detail": 1,
  "uid": "49d95938ef42345ac61e5102"
}, {
  "name": "如家酒店(北京前门大街店)",
  "location": {
    "lat": 39.899567,
    "lng": 116.403962
  },
  "address": "北京市西城区粮食店街61号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "49a02a7a065a5a592b201a06",
  "telephone": "13683535835",
  "detail": 1,
  "uid": "49a02a7a065a5a592b201a06"
}, {
  "name": "北京天健宾馆",
  "location": {
    "lat": 39.926171,
    "lng": 116.381073
  },
  "address": "西四南大街62号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "",
  "telephone": "(010)58926999-8008",
  "detail": 1,
  "uid": "2989e62348972fe80d3ddae7"
}, {
  "name": "北京中油宾馆",
  "location": {
    "lat": 39.961176,
    "lng": 116.392345
  },
  "address": "北京市西城区六铺炕二巷1号院(德胜门外大街与六铺炕街交汇处西侧)",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "",
  "detail": 1,
  "uid": "f696f3c25690c5f21b11d50c"
}, {
  "name": "如家酒店(北京新街口地铁站店)",
  "location": {
    "lat": 39.947863,
    "lng": 116.370237
  },
  "address": "西直门内大街北草厂胡同玉桃园3区11号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "2d60a30478e392ba2b3a9fe1",
  "telephone": "(010)82221666",
  "detail": 1,
  "uid": "2d60a30478e392ba2b3a9fe1"
}, {
  "name": "北京府右街宾馆(西单店)",
  "location": {
    "lat": 39.918567,
    "lng": 116.386665
  },
  "address": "北京市西城区太仆寺街21号(近西单商场后面)",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "3a0fbba85f3bec589ee32105",
  "telephone": "(010)66052277",
  "detail": 1,
  "uid": "3a0fbba85f3bec589ee32105"
}, {
  "name": "汉庭酒店(北京水立方店)",
  "location": {
    "lat": 39.979356,
    "lng": 116.396903
  },
  "address": "裕民路3号1号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "012edaa3881d8576ede4a5fa",
  "telephone": "(010)53326366",
  "detail": 1,
  "uid": "012edaa3881d8576ede4a5fa"
}, {
  "name": "北京盛聚隆宾馆",
  "location": {
    "lat": 39.93553,
    "lng": 116.379827
  },
  "address": "西四北大街82号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "3a0a78bd4444e2e363180905",
  "telephone": "(010)66121975",
  "detail": 1,
  "uid": "3a0a78bd4444e2e363180905"
}, {
  "name": "如家酒店(北京长椿街地铁站店)",
  "location": {
    "lat": 39.9021,
    "lng": 116.370482
  },
  "address": "长椿街10号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "681b0b7afe0898676f3e1bf9",
  "telephone": "(010)63013466",
  "detail": 1,
  "uid": "681b0b7afe0898676f3e1bf9"
}, {
  "name": "北京东方饭店",
  "location": {
    "lat": 39.894455,
    "lng": 116.395942
  },
  "address": "北京市西城区万明路11号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "881a28e7bb4af45ef942b23d",
  "detail": 1,
  "uid": "881a28e7bb4af45ef942b23d"
}, {
  "name": "北京天马宾馆",
  "location": {
    "lat": 39.902249,
    "lng": 116.403335
  },
  "address": "大栅栏街10号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "2e00c5ddeabe7a05d7851f06",
  "telephone": "(010)63083990",
  "detail": 1,
  "uid": "2e00c5ddeabe7a05d7851f06"
}, {
  "name": "丽枫酒店(北京天安门广场前门大街店)",
  "location": {
    "lat": 39.903046,
    "lng": 116.400768
  },
  "address": "北京西城煤市街15号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "detail": 1,
  "uid": "c17fa100fddb81adef74f869"
}, {
  "name": "北方朗悦酒店(北京金融街店)",
  "location": {
    "lat": 39.919895,
    "lng": 116.35751
  },
  "address": "北京市西城区月坛南街9号2号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "d219bb1dc656b392f50e7705",
  "telephone": "(010)68017788",
  "detail": 1,
  "uid": "d219bb1dc656b392f50e7705"
}, {
  "name": "和家连锁宾馆(白云天店)",
  "location": {
    "lat": 39.904517,
    "lng": 116.351442
  },
  "address": "北京市西城区白云观街8号院6号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "2a50fb63e2ce3f69a7c7569c",
  "telephone": "(010)63426326",
  "detail": 1,
  "uid": "2a50fb63e2ce3f69a7c7569c"
}, {
  "name": "北京天宝珠宾馆",
  "location": {
    "lat": 39.903117,
    "lng": 116.403953
  },
  "address": "大栅栏珠宝市街35号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "9f50ea32935f550b57bfff23",
  "telephone": "(010)83151971",
  "detail": 1,
  "uid": "9f50ea32935f550b57bfff23"
}, {
  "name": "人民大会堂宾馆",
  "location": {
    "lat": 39.908543,
    "lng": 116.400165
  },
  "address": "北京市西城区西长安街街道西交民巷甲19号(人民大会堂南门对面)",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "be1ea5efffcc84a614948e35",
  "detail": 1,
  "uid": "be1ea5efffcc84a614948e35"
}, {
  "name": "汉庭酒店(北京长椿街店)",
  "location": {
    "lat": 39.899731,
    "lng": 116.370673
  },
  "address": "长椿街甲18号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "96c64b0563fd13631df74dc9",
  "telephone": "(010)83120665",
  "detail": 1,
  "uid": "96c64b0563fd13631df74dc9"
}, {
  "name": "希岸酒店(北京前门天桥地铁站店)",
  "location": {
    "lat": 39.889492,
    "lng": 116.400162
  },
  "address": "东经路42号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "3151795518b689481fe9990b",
  "telephone": "13521330205",
  "detail": 1,
  "uid": "3151795518b689481fe9990b"
}, {
  "name": "汉庭酒店(北京牛街店)",
  "location": {
    "lat": 39.892592,
    "lng": 116.370448
  },
  "address": "牛街16号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "18165334722aa11dfb2d6132",
  "telephone": "(010)63586111",
  "detail": 1,
  "uid": "18165334722aa11dfb2d6132"
}, {
  "name": "汉庭酒店(北京白纸坊桥店)",
  "location": {
    "lat": 39.884067,
    "lng": 116.365399
  },
  "address": "白纸坊西街甲3号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "8ab0dfc4ee07410fd8eced0b",
  "telephone": "(010)83518883",
  "detail": 1,
  "uid": "8ab0dfc4ee07410fd8eced0b"
}, {
  "name": "北京云田宾馆(宣武医院店)",
  "location": {
    "lat": 39.900034,
    "lng": 116.36857
  },
  "address": "长椿里街11号（长椿里小区）",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "e322bc80a99c6c57f82d6104",
  "telephone": "(010)83126502",
  "detail": 1,
  "uid": "e322bc80a99c6c57f82d6104"
}, {
  "name": "桔子酒店(北京西站南广场店)",
  "location": {
    "lat": 39.896734,
    "lng": 116.334181
  },
  "address": "莲花河胡同1号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "f45786cc089512a431f71dab",
  "telephone": "(010)58739888",
  "detail": 1,
  "uid": "f45786cc089512a431f71dab"
}, {
  "name": "北京陶然花园酒店",
  "location": {
    "lat": 39.879053,
    "lng": 116.392428
  },
  "address": "北京市西城区太平街19号陶然亭公园",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "",
  "telephone": "(010)83910886",
  "detail": 1,
  "uid": "6fddd7fd436d1f663517dc3e"
}, {
  "name": "和家宾馆(北京后海店)",
  "location": {
    "lat": 39.952172,
    "lng": 116.393525
  },
  "address": "鼓楼西大街小八道湾胡同6号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "db1f39d496335d76f5c59c0b",
  "telephone": "(010)64012685,(010)64039931",
  "detail": 1,
  "uid": "db1f39d496335d76f5c59c0b"
}, {
  "name": "北京国谊宾馆",
  "location": {
    "lat": 39.940607,
    "lng": 116.345162
  },
  "address": "北京市西城区文兴东街一号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "",
  "telephone": "(010)88393017",
  "detail": 1,
  "uid": "181653347251a11dfb2d6105"
}, {
  "name": "北京竹园宾馆",
  "location": {
    "lat": 39.952191,
    "lng": 116.397547
  },
  "address": "旧鼓楼大街小石桥24号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "",
  "telephone": "(010)58520096",
  "detail": 1,
  "uid": "72e57fd7b3a25ab6f8dc8505"
}, {
  "name": "华利佳合商务酒店(北京玉渊潭店)",
  "location": {
    "lat": 39.920329,
    "lng": 116.348579
  },
  "address": "三里河一区乙68号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "4ea3f2f1b0492bb3aecb6605",
  "telephone": "(010)68516303,(010)68536118",
  "detail": 1,
  "uid": "4ea3f2f1b0492bb3aecb6605"
}, {
  "name": "北京赛家宾馆",
  "location": {
    "lat": 39.890651,
    "lng": 116.35319
  },
  "address": "广外南街甲47号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "9f97b1c5bbd8ab78b74f54ae",
  "telephone": "15718835568",
  "detail": 1,
  "uid": "9f97b1c5bbd8ab78b74f54ae"
}, {
  "name": "北京国宏宾馆",
  "location": {
    "lat": 39.911343,
    "lng": 116.342783
  },
  "address": "北京市西城区木樨地北里甲11号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "09185c56d3657f44f1193705",
  "telephone": "(010)63908866",
  "detail": 1,
  "uid": "09185c56d3657f44f1193705"
}, {
  "name": "北京顺天祥旅馆",
  "location": {
    "lat": 39.948377,
    "lng": 116.382568
  },
  "address": "新街口罗儿胡同4号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "72aa25134ce04346067ce8bb",
  "telephone": "(010)83229798",
  "detail": 1,
  "uid": "72aa25134ce04346067ce8bb"
}, {
  "name": "都庄宾馆(北京儿童医院店)",
  "location": {
    "lat": 39.925657,
    "lng": 116.36213
  },
  "address": "阜成门南大街万明园2号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "ef773a0f2705b73422022037",
  "detail": 1,
  "uid": "ef773a0f2705b73422022037"
}, {
  "name": "北京山水宾馆",
  "location": {
    "lat": 39.916675,
    "lng": 116.37813
  },
  "address": "西单北大街皮库胡同45号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "6113ef7714bc880d8e772705",
  "detail": 1,
  "uid": "6113ef7714bc880d8e772705"
}, {
  "name": "北京展览馆宾馆",
  "location": {
    "lat": 39.94729,
    "lng": 116.352167
  },
  "address": "西直门外大街135号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "e93761f64f45b915223bf205",
  "detail": 1,
  "uid": "e93761f64f45b915223bf205"
}, {
  "name": "西翠之旅宾馆(北京西站店)",
  "location": {
    "lat": 39.892551,
    "lng": 116.351731
  },
  "address": "广安门外车站东街9号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "b3aa435db058701215764305",
  "telephone": "(010)51923988,13811300045,51923966",
  "detail": 1,
  "uid": "b3aa435db058701215764305"
}, {
  "name": "北京金色佳园宾馆",
  "location": {
    "lat": 39.894085,
    "lng": 116.352801
  },
  "address": "广安门外白菜湾6号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "9c11b15c5281e0345d17c3fa",
  "telephone": "(010)63285144",
  "detail": 1,
  "uid": "9c11b15c5281e0345d17c3fa"
}, {
  "name": "北京护国寺宾馆",
  "location": {
    "lat": 39.941215,
    "lng": 116.38023
  },
  "address": "护国寺街125号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "db1f39d496455d76f5c59c31",
  "telephone": "(010)59331588",
  "detail": 1,
  "uid": "db1f39d496455d76f5c59c31"
}, {
  "name": "速8酒店(北京天坛西门店)",
  "location": {
    "lat": 39.88852,
    "lng": 116.39851
  },
  "address": "禄长街头条2号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "0c424d94a5329be4a1d23070",
  "detail": 1,
  "uid": "0c424d94a5329be4a1d23070"
}, {
  "name": "前门宾馆(北京前门大栅栏店)",
  "location": {
    "lat": 39.90238,
    "lng": 116.400887
  },
  "address": "前门煤市街杨梅竹斜街9号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "07c0966efab697574d55471e",
  "telephone": "(010)63036543",
  "detail": 1,
  "uid": "07c0966efab697574d55471e"
}, {
  "name": "京文宾馆(北京前门店)",
  "location": {
    "lat": 39.903217,
    "lng": 116.4004
  },
  "address": "前门大栅栏北火扇胡同2号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "0a46dc0f116ad04730621206",
  "telephone": "(010)63031857",
  "detail": 1,
  "uid": "0a46dc0f116ad04730621206"
}, {
  "name": "北京蝴蝶泉宾馆",
  "location": {
    "lat": 39.922222,
    "lng": 116.377666
  },
  "address": "西单北大街西斜街55号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "",
  "telephone": "(010)66156584,(010)66157755",
  "detail": 1,
  "uid": "1eeed5464a47e1ebb5147f39"
}, {
  "name": "格林豪泰酒店(北京前门大栅栏店)",
  "location": {
    "lat": 39.901157,
    "lng": 116.399055
  },
  "address": "北京市西城区大栅栏西街56号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "3616d5505280a1ccd618b774",
  "telephone": "(010)63156115",
  "detail": 1,
  "uid": "3616d5505280a1ccd618b774"
}, {
  "name": "如家酒店(北京平安里地铁站店)",
  "location": {
    "lat": 39.939879,
    "lng": 116.377511
  },
  "address": "育德胡同7号院",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "2848ffd66b60091648cc4a54",
  "telephone": "(010)52607888",
  "detail": 1,
  "uid": "2848ffd66b60091648cc4a54"
}, {
  "name": "鸿林宾馆(北京阜外医院店)",
  "location": {
    "lat": 39.928813,
    "lng": 116.357989
  },
  "address": "北京市西城区阜成门外大街甲6号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "f23e2c47c817bf728d55ec0a",
  "telephone": "(010)68019288",
  "detail": 1,
  "uid": "f23e2c47c817bf728d55ec0a"
}, {
  "name": "客来宾馆(北京前门大栅栏店)",
  "location": {
    "lat": 39.89761,
    "lng": 116.396892
  },
  "address": "前门大栅栏西街石头胡同85号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "32f7ebc9348d32f97ec87639",
  "telephone": "(010)63011053",
  "detail": 1,
  "uid": "32f7ebc9348d32f97ec87639"
}, {
  "name": "速8酒店(北京西单佟麟阁路店)",
  "location": {
    "lat": 39.908321,
    "lng": 116.373645
  },
  "address": "佟麟阁路永宁胡同10号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "acd066efa599fbd842d63e1c",
  "telephone": "(010)66087278",
  "detail": 1,
  "uid": "acd066efa599fbd842d63e1c"
}, {
  "name": "北京天泰宾馆",
  "location": {
    "lat": 39.915498,
    "lng": 116.357746
  },
  "address": "北京市南礼士路头条1号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "da71d894026217e696ca071f",
  "detail": 1,
  "uid": "da71d894026217e696ca071f"
}, {
  "name": "和家宾馆连锁(北京阜外医院店)",
  "location": {
    "lat": 39.934019,
    "lng": 116.352277
  },
  "address": "北京市西城区百万庄大街23号（外交学院北门）",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "9b7d56c110e36bc7223bf253",
  "telephone": "(010)68331987",
  "detail": 1,
  "uid": "9b7d56c110e36bc7223bf253"
}, {
  "name": "如家酒店(北京广安门内地铁站店)",
  "location": {
    "lat": 39.898969,
    "lng": 116.363548
  },
  "address": "广义街4号5幢",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "b7caa2920d9a570e4351c05c",
  "telephone": "(010)63178688",
  "detail": 1,
  "uid": "b7caa2920d9a570e4351c05c"
}, {
  "name": "如家酒店(北京首都博物馆木樨地地铁站店)",
  "location": {
    "lat": 39.911245,
    "lng": 116.347959
  },
  "address": "白云路西里甲2号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "5211d21944dd0b417dc8763b",
  "telephone": "(010)63371166-9",
  "detail": 1,
  "uid": "5211d21944dd0b417dc8763b"
}, {
  "name": "北京古园宾馆(南锣鼓巷积水潭医院店)",
  "location": {
    "lat": 39.946401,
    "lng": 116.382225
  },
  "address": "苇坑胡同71号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "d6df91c120560473f7b91637",
  "telephone": "(010)66117768",
  "detail": 1,
  "uid": "d6df91c120560473f7b91637"
}, {
  "name": "速8酒店(北京积水潭德胜门公交站店)",
  "location": {
    "lat": 39.958291,
    "lng": 116.39292
  },
  "address": "德外大街安德路67号院煤炭社区南门",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "572479f4d4f22616364aae6c",
  "telephone": "(010)57115111",
  "detail": 1,
  "uid": "572479f4d4f22616364aae6c"
}, {
  "name": "7天优品酒店(北京西单灵境胡同地铁站店)",
  "location": {
    "lat": 39.92243,
    "lng": 116.381835
  },
  "address": "西单东斜街53号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "c6ffb18dc7704eb8441a32d0",
  "telephone": "(010)66088802",
  "detail": 1,
  "uid": "c6ffb18dc7704eb8441a32d0"
}, {
  "name": "北京国二招宾馆(东楼)",
  "location": {
    "lat": 39.944243,
    "lng": 116.363825
  },
  "address": "北京市西城区西直门南大街6号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "",
  "telephone": "(010)66186688",
  "detail": 1,
  "uid": "74c933fb89426f479e82ea3b"
}, {
  "name": "汉庭酒店(北京德胜门店)",
  "location": {
    "lat": 39.960054,
    "lng": 116.39303
  },
  "address": "北京西城区六铺炕三区9号楼院3、5、6、9号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "161a0ed28da6f4495cd4fe05",
  "telephone": "(010)82329889",
  "detail": 1,
  "uid": "161a0ed28da6f4495cd4fe05"
}, {
  "name": "如家酒店(北京宣武门店)",
  "location": {
    "lat": 39.904768,
    "lng": 116.382033
  },
  "address": "东河沿胡同71号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "7c5e480b176166adadb22a0b",
  "telephone": "(010)86229108",
  "detail": 1,
  "uid": "7c5e480b176166adadb22a0b"
}, {
  "name": "北京连升商务酒店",
  "location": {
    "lat": 39.901495,
    "lng": 116.40003
  },
  "address": "北京市西城区大栅栏西街32号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "db1f39d496395d76f5c59c3d",
  "telephone": "(010)63036074",
  "detail": 1,
  "uid": "db1f39d496395d76f5c59c3d"
}, {
  "name": "和家宾馆(北京白云路复兴医院店)",
  "location": {
    "lat": 39.909167,
    "lng": 116.349946
  },
  "address": "真武庙三里8号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "f9fd60627b427d060f0e6b38",
  "telephone": "(010)68046846,(010)68046848",
  "detail": 1,
  "uid": "f9fd60627b427d060f0e6b38"
}, {
  "name": "北京西直门宾馆",
  "location": {
    "lat": 39.94573,
    "lng": 116.367811
  },
  "address": "北京市西城区西直门内大街新街172号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "",
  "telephone": "(010)66307799",
  "detail": 1,
  "uid": "96b672aa53a0476cce04ef05"
}, {
  "name": "观旗宾馆(北京天安门广场店)",
  "location": {
    "lat": 39.905902,
    "lng": 116.401508
  },
  "address": "北京市西城区前门西大街1号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "2b47374a48a203732b201aa8",
  "telephone": "(010)63037763",
  "detail": 1,
  "uid": "2b47374a48a203732b201aa8"
}, {
  "name": "如家商旅酒店(北京德胜门外大街店)",
  "location": {
    "lat": 39.96693,
    "lng": 116.388312
  },
  "address": "德外大街乙12号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "",
  "telephone": "(010)82083155",
  "detail": 1,
  "uid": "6835e3a7f7aa9057e3110303"
}, {
  "name": "北京新宇桥宾馆",
  "location": {
    "lat": 39.961325,
    "lng": 116.386409
  },
  "address": "教场口街9号院6号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "231169138b9092e4734b8705",
  "telephone": "(010)82067276",
  "detail": 1,
  "uid": "231169138b9092e4734b8705"
}, {
  "name": "北京黑龙江宾馆",
  "location": {
    "lat": 39.919118,
    "lng": 116.362759
  },
  "address": "复兴门外北大街5号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "1bf85b25b5f53abda1a93405",
  "telephone": "(010)68025511",
  "detail": 1,
  "uid": "1bf85b25b5f53abda1a93405"
}, {
  "name": "西直门大桥宾馆(北京北站店)",
  "location": {
    "lat": 39.950667,
    "lng": 116.36181
  },
  "address": "北滨河路1号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "9062bf2c6d3323a572455b3a",
  "telephone": "(010)62250360",
  "detail": 1,
  "uid": "9062bf2c6d3323a572455b3a"
}, {
  "name": "华驿酒店(北京天安门广场店)",
  "location": {
    "lat": 39.901741,
    "lng": 116.399788
  },
  "address": "北京市西城区大栅栏西街23号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "d2e970276f5d17f175e5b67d",
  "telephone": "(010)63021808",
  "detail": 1,
  "uid": "d2e970276f5d17f175e5b67d"
}, {
  "name": "朵哈快捷酒店",
  "location": {
    "lat": 39.904545,
    "lng": 116.348292
  },
  "address": "北京市西城区白云路7号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "e4beda0b9e9f0f860b1cc720",
  "telephone": "(010)63480890",
  "detail": 1,
  "uid": "e4beda0b9e9f0f860b1cc720"
}, {
  "name": "皓阳宾馆(北京前门天安门广场店)",
  "location": {
    "lat": 39.906005,
    "lng": 116.399001
  },
  "address": "北京市西城区前门西大街正阳市场4号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "",
  "telephone": "(010)63157090",
  "detail": 1,
  "uid": "0a15c7ec249999e5ed74f80a"
}, {
  "name": "北京国信宾馆",
  "location": {
    "lat": 39.881091,
    "lng": 116.396777
  },
  "address": "太平街甲8号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "9fbfeef2cbd4f445ede4a5e5",
  "telephone": "(010)63031079,(010)83102211",
  "detail": 1,
  "uid": "9fbfeef2cbd4f445ede4a5e5"
}, {
  "name": "北京前门国帅宾馆",
  "location": {
    "lat": 39.905991,
    "lng": 116.400587
  },
  "address": "前门西大街正阳市场2号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "15ed53cee8490d4d9322e0e3",
  "telephone": "(010)63132588",
  "detail": 1,
  "uid": "15ed53cee8490d4d9322e0e3"
}, {
  "name": "北京聚圆宾馆",
  "location": {
    "lat": 39.928681,
    "lng": 116.37981
  },
  "address": "西四南大街31号二楼",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "d3e135215667de1f16a19004",
  "telephone": "(010)66166168",
  "detail": 1,
  "uid": "d3e135215667de1f16a19004"
}, {
  "name": "北京六铺炕宾馆",
  "location": {
    "lat": 39.959107,
    "lng": 116.399736
  },
  "address": "六铺炕南小街甲1号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "8eb48fa1c57025bff32d8305",
  "telephone": "(010)86411258",
  "detail": 1,
  "uid": "8eb48fa1c57025bff32d8305"
}, {
  "name": "北京乐瑞祥宾馆",
  "location": {
    "lat": 39.942431,
    "lng": 116.36441
  },
  "address": "西直门南小街晓安南巷甲1号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "acaf8ef69f28599bd8eced7d",
  "telephone": "(010)66174010",
  "detail": 1,
  "uid": "acaf8ef69f28599bd8eced7d"
}, {
  "name": "北京玉阁宾馆(西单天安门店)",
  "location": {
    "lat": 39.91144,
    "lng": 116.387674
  },
  "address": "大六部口21号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "",
  "telephone": "(010)66036196",
  "detail": 1,
  "uid": "49d959388c42575ac61e5102"
}, {
  "name": "北京宝瑞酒店",
  "location": {
    "lat": 39.917548,
    "lng": 116.344274
  },
  "address": "三里河南横街7号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "803708f10dd5f8600089729b",
  "telephone": "(010)68525588",
  "detail": 1,
  "uid": "803708f10dd5f8600089729b"
}, {
  "name": "瑞祥宾馆(北京阜外医院店)",
  "location": {
    "lat": 39.928528,
    "lng": 116.35566
  },
  "address": "阜外大街3号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "affc8fcb1a8f1c9524d2bbb9",
  "telephone": "(010)68019178",
  "detail": 1,
  "uid": "affc8fcb1a8f1c9524d2bbb9"
}, {
  "name": "北京月坛宾馆",
  "location": {
    "lat": 39.927031,
    "lng": 116.353243
  },
  "address": "北京市西城区月坛北小街4号(近阜外医院、阜成门地铁站)",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "c7eca12b2ef1232ee115f90b",
  "telephone": "(010)68032633,(010)68033377",
  "detail": 1,
  "uid": "c7eca12b2ef1232ee115f90b"
}, {
  "name": "汉庭酒店(北京广安门外大街店)",
  "location": {
    "lat": 39.890181,
    "lng": 116.348817
  },
  "address": "北京市西城区手帕口南街71号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "detail": 1,
  "uid": "d810e08a5146593a07fef5e5"
}, {
  "name": "华利佳合酒店(北京北站新街口地铁站店)",
  "location": {
    "lat": 39.946265,
    "lng": 116.370251
  },
  "address": "西直门内大街168号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "",
  "telephone": "(010)66180227",
  "detail": 1,
  "uid": "d1469ee7ddbebc7b84330436"
}, {
  "name": "北京珠穆朗玛宾馆",
  "location": {
    "lat": 39.951752,
    "lng": 116.392588
  },
  "address": "鼓楼西大街149号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "31f9101b6baae0a026e0a00b",
  "detail": 1,
  "uid": "31f9101b6baae0a026e0a00b"
}, {
  "name": "北京福州宾馆",
  "location": {
    "lat": 39.94408,
    "lng": 116.368909
  },
  "address": "北京市西城区前半壁街30号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "",
  "detail": 1,
  "uid": "72aa251302e0015e067ce893"
}, {
  "name": "怡莱酒店(北京前门大街店)",
  "location": {
    "lat": 39.900899,
    "lng": 116.403048
  },
  "address": "大栅栏蔡家胡同9号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "0b8afe5a5c1ae32143ab9abf",
  "telephone": "(010)63035997",
  "detail": 1,
  "uid": "0b8afe5a5c1ae32143ab9abf"
}, {
  "name": "怡莱酒店(北京前门大街店)",
  "location": {
    "lat": 39.900899,
    "lng": 116.403048
  },
  "address": "大栅栏蔡家胡同9号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "0b8afe5a5c1ae32143ab9abf",
  "telephone": "(010)63035997",
  "detail": 1,
  "uid": "0b8afe5a5c1ae32143ab9abf"
}, {
  "name": "和家宾馆(北京广安门中医院店)",
  "location": {
    "lat": 39.885669,
    "lng": 116.356998
  },
  "address": "广安门南街30号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "d146b3880d4253c774026938",
  "telephone": "(010)83536123",
  "detail": 1,
  "uid": "d146b3880d4253c774026938"
}, {
  "name": "途179连锁酒店(北京天安门店)",
  "location": {
    "lat": 39.91261,
    "lng": 116.387857
  },
  "address": "大六部口街9号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "34e485088920dbfbd8d8913b",
  "telephone": "(010)66072066",
  "detail": 1,
  "uid": "34e485088920dbfbd8d8913b"
}, {
  "name": "北京万萃苑快捷商务酒店",
  "location": {
    "lat": 39.963318,
    "lng": 116.388459
  },
  "address": "人定湖西里13号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "9dea78f318f003c8ee74f8de",
  "telephone": "(010)62046180,(010)62047909",
  "detail": 1,
  "uid": "9dea78f318f003c8ee74f8de"
}, {
  "name": "北京气象宾馆",
  "location": {
    "lat": 39.890699,
    "lng": 116.330532
  },
  "address": "马连道南街12号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "e889a744462697ac8605bfc8",
  "telephone": "(010)63266688,(010)68406699",
  "detail": 1,
  "uid": "e889a744462697ac8605bfc8"
}, {
  "name": "华琦乐宾馆(北京新街口地铁站店)",
  "location": {
    "lat": 39.944475,
    "lng": 116.373936
  },
  "address": "西直门内大街冠英园西区20号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "e56bf5e38ebdf35d0682c2e5",
  "telephone": "(010)66156796",
  "detail": 1,
  "uid": "e56bf5e38ebdf35d0682c2e5"
}, {
  "name": "汪氏皮影文化主题酒店(福禄四合院宾馆店)",
  "location": {
    "lat": 39.944889,
    "lng": 116.38897
  },
  "address": "松树街24号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "3810c87998a5a6929c09f714",
  "telephone": "(010)83287846,(010)83287847,010-83220266",
  "detail": 1,
  "uid": "3810c87998a5a6929c09f714"
}, {
  "name": "北京中邮苑宾馆",
  "location": {
    "lat": 39.886507,
    "lng": 116.369939
  },
  "address": "右安门内大街17号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "925c550f80420fab5a3ac83d",
  "telephone": "(010)63522211",
  "detail": 1,
  "uid": "925c550f80420fab5a3ac83d"
}, {
  "name": "均禾酒店(北京后海德胜门桥店)",
  "location": {
    "lat": 39.954128,
    "lng": 116.387149
  },
  "address": "北京市西城区鼓楼西大街212号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "377e55ecb4b45e081b11d5a2",
  "telephone": "(010)64065052",
  "detail": 1,
  "uid": "377e55ecb4b45e081b11d5a2"
}, {
  "name": "雅悦精致酒店(北京官园桥金融街店)",
  "location": {
    "lat": 39.937224,
    "lng": 116.371459
  },
  "address": "育幼胡同甲22号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "9829a04217ee335b2cb17e89",
  "telephone": "16601037771",
  "detail": 1,
  "uid": "9829a04217ee335b2cb17e89"
}, {
  "name": "北京玉华宫宾馆",
  "location": {
    "lat": 39.877433,
    "lng": 116.372952
  },
  "address": "右安门内大街万博苑4号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "7388dffd48bb73f2d3ff2311",
  "detail": 1,
  "uid": "7388dffd48bb73f2d3ff2311"
}, {
  "name": "北京豫翔宾馆(北京西四店)",
  "location": {
    "lat": 39.930137,
    "lng": 116.379406
  },
  "address": "阜城门内大街1号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "04fb288573c0a3aeecdfcabf",
  "telephone": "(010)66183066",
  "detail": 1,
  "uid": "04fb288573c0a3aeecdfcabf"
}, {
  "name": "红达悦宾馆(北京前门大栅栏店)",
  "location": {
    "lat": 39.899627,
    "lng": 116.404073
  },
  "address": "粮食店街59号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "6a50d46d2e1c1f0be6073862",
  "telephone": "(010)63012691,(010)63031818",
  "detail": 1,
  "uid": "6a50d46d2e1c1f0be6073862"
}, {
  "name": "北京紫禁家和酒店(平安里地铁站店)",
  "location": {
    "lat": 39.941415,
    "lng": 116.375065
  },
  "address": "赵登禹路甲60号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "",
  "telephone": "18888872325",
  "detail": 1,
  "uid": "850815e173e5168243e1923d"
}, {
  "name": "国二招宾馆-东楼",
  "location": {
    "lat": 39.944257,
    "lng": 116.364132
  },
  "address": "北京市西城区西直门南大街6号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "",
  "telephone": "(010)66186688",
  "detail": 1,
  "uid": "75cb5777c03fab0629fc48b0"
}, {
  "name": "速8优选酒店(北京阜外医院店)",
  "location": {
    "lat": 39.927363,
    "lng": 116.342487
  },
  "address": "北京市西城区月坛北街25号院93号平房",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "",
  "detail": 1,
  "uid": "c191090690b3faaeabf7297c"
}, {
  "name": "北京京徐宾馆",
  "location": {
    "lat": 39.891852,
    "lng": 116.359786
  },
  "address": "南线阁街35号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "5320452552089c60b11e36e5",
  "detail": 1,
  "uid": "5320452552089c60b11e36e5"
}, {
  "name": "北京前门青云阁酒店(前门大栅栏店)",
  "location": {
    "lat": 39.901608,
    "lng": 116.399634
  },
  "address": "北京市西城区前门大栅栏西街33号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "a87796e3ff919aa49222e08b",
  "telephone": "18054303621",
  "detail": 1,
  "uid": "a87796e3ff919aa49222e08b"
}, {
  "name": "北京礼如士家宾馆",
  "location": {
    "lat": 39.907069,
    "lng": 116.36218
  },
  "address": "西便门东街甲2号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "6d48cd47c2cb5265d518b78c",
  "telephone": "(010)86096276",
  "detail": 1,
  "uid": "6d48cd47c2cb5265d518b78c"
}, {
  "name": "北京舒雅酒店",
  "location": {
    "lat": 39.962995,
    "lng": 116.381551
  },
  "address": "新德街35-1",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "",
  "telephone": "(010)62026391,(010)62057656",
  "detail": 1,
  "uid": "0523a1410207bc04b23c8105"
}, {
  "name": "寓华宾馆(北京后海新街口地铁站店)",
  "location": {
    "lat": 39.947494,
    "lng": 116.379935
  },
  "address": "新街口东街66号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "65ed32809453806fd42ce21a",
  "telephone": "(010)83221616",
  "detail": 1,
  "uid": "65ed32809453806fd42ce21a"
}, {
  "name": "华利佳合快捷酒店(北京护国寺店)",
  "location": {
    "lat": 39.941896,
    "lng": 116.379531
  },
  "address": "新街口南大街148号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "367dad00da2bbe055d17c3c5",
  "detail": 1,
  "uid": "367dad00da2bbe055d17c3c5"
}, {
  "name": "申辰缘宾馆(北京西四地铁站店)",
  "location": {
    "lat": 39.928854,
    "lng": 116.373821
  },
  "address": "西四羊肉胡同甲75号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "7a9845d7e114168300ec0194",
  "telephone": "(010)66168506",
  "detail": 1,
  "uid": "7a9845d7e114168300ec0194"
}, {
  "name": "北京益民快捷酒店(宣武医院店)",
  "location": {
    "lat": 39.888672,
    "lng": 116.372369
  },
  "address": "益民巷96号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "",
  "telephone": "18515898643",
  "detail": 1,
  "uid": "ecdff1ae6cb3dda011882435"
}, {
  "name": "锦绣庄四合院(北京天安门广场前门店)",
  "location": {
    "lat": 39.900342,
    "lng": 116.403353
  },
  "address": "前门大街施家胡同4号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "",
  "telephone": "(010)63180028",
  "detail": 1,
  "uid": "6c8b5157a706dd8e210262d2"
}, {
  "name": "北京三晋宾馆",
  "location": {
    "lat": 39.902476,
    "lng": 116.372795
  },
  "address": "下斜街一号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "b1c556e86c067815b426553f",
  "telephone": "(010)63013377",
  "detail": 1,
  "uid": "b1c556e86c067815b426553f"
}, {
  "name": "来得福轻雅酒店(北京天安门广场珠市口地铁站店)",
  "location": {
    "lat": 39.900869,
    "lng": 116.404333
  },
  "address": "北京市西城区粮食店街32号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "3f9337d617f0efaaf7231006",
  "telephone": "(010)63035899",
  "detail": 1,
  "uid": "3f9337d617f0efaaf7231006"
}, {
  "name": "邯郸市政府驻京联络处京邯宾馆(北京月坛三里河店)",
  "location": {
    "lat": 39.920362,
    "lng": 116.34725
  },
  "address": "三里河东巷1号1号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "801c4948df5983b26040a94d",
  "telephone": "(010)68588977",
  "detail": 1,
  "uid": "801c4948df5983b26040a94d"
}, {
  "name": "飘home连锁酒店(北京前门地铁站店)",
  "location": {
    "lat": 39.900275,
    "lng": 116.397096
  },
  "address": "铁树斜街16号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "6e56ab9f13807e578936ee77",
  "telephone": "(010)63083387",
  "detail": 1,
  "uid": "6e56ab9f13807e578936ee77"
}, {
  "name": "蒙元宾馆",
  "location": {
    "lat": 39.918699,
    "lng": 116.352634
  },
  "address": "北京市西城区月坛南街二七剧场路甲1号近长安街",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "c21db9e5f0b2d99a01ff2df2",
  "telephone": "(010)68046699",
  "detail": 1,
  "uid": "c21db9e5f0b2d99a01ff2df2"
}, {
  "name": "北京乐酷假日快捷酒店(鑫海宾馆店)",
  "location": {
    "lat": 39.887146,
    "lng": 116.344173
  },
  "address": "北京市西城区小红庙11号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "fa835ce2bc8933b6e812e4ec",
  "telephone": "(010)63465911",
  "detail": 1,
  "uid": "fa835ce2bc8933b6e812e4ec"
}, {
  "name": "北京莲湖招待所",
  "location": {
    "lat": 39.894779,
    "lng": 116.400992
  },
  "address": "珠市口大街留学路65号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "afbd7f25c380ac651ce999f2",
  "detail": 1,
  "uid": "afbd7f25c380ac651ce999f2"
}, {
  "name": "新忠宾馆(北京宣武医院店)",
  "location": {
    "lat": 39.88584,
    "lng": 116.368913
  },
  "address": "樱桃园三条白纸坊新安北里1号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "",
  "telephone": "(010)63522202",
  "detail": 1,
  "uid": "2c05618f6027c19f047ce8c3"
}, {
  "name": "广运饭店",
  "location": {
    "lat": 39.893975,
    "lng": 116.350698
  },
  "address": "广安门外大街甲122号广运饭店内",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "251374c95370bd26a11de96d",
  "detail": 1,
  "uid": "251374c95370bd26a11de96d"
}, {
  "name": "冷联宾馆(北京护国寺平安里地铁站店)",
  "location": {
    "lat": 39.944088,
    "lng": 116.377568
  },
  "address": "新街口南大街前公用胡同34号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "101bc61b7fbde8bac42ba100",
  "telephone": "(010)66518120",
  "detail": 1,
  "uid": "101bc61b7fbde8bac42ba100"
}, {
  "name": "汇通九方宾馆(北京西便门店)",
  "location": {
    "lat": 39.904852,
    "lng": 116.359788
  },
  "address": "西便门东里12号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "b703e96b3e613be38e1a89bb",
  "telephone": "(010)83111968",
  "detail": 1,
  "uid": "b703e96b3e613be38e1a89bb"
}, {
  "name": "北京今日佳宴宾馆(北师大店)",
  "location": {
    "lat": 39.963126,
    "lng": 116.382551
  },
  "address": "德胜门外德胜里一区五号楼西侧",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "fe07019ed46741a731f71d9a",
  "detail": 1,
  "uid": "fe07019ed46741a731f71d9a"
}, {
  "name": "银龙苑宾馆(北京展览馆阜外医院店)",
  "location": {
    "lat": 39.934994,
    "lng": 116.349566
  },
  "address": "展览馆路甲5号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "c879fa0194865253c909f00b",
  "telephone": "(010)68351166",
  "detail": 1,
  "uid": "c879fa0194865253c909f00b"
}, {
  "name": "国侨宾馆",
  "location": {
    "lat": 39.929123,
    "lng": 116.345881
  },
  "address": "北京市西城区阜外大街37号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "480b24d0f4a594f19cec2b37",
  "telephone": "(010)88387333",
  "detail": 1,
  "uid": "480b24d0f4a594f19cec2b37"
}, {
  "name": "青年酒店(北京天坛西门店)",
  "location": {
    "lat": 39.886929,
    "lng": 116.39315
  },
  "address": "太平街九号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "b0cb9f9bb935f0b8b75f1e8c",
  "telephone": "(010)63561721",
  "detail": 1,
  "uid": "b0cb9f9bb935f0b8b75f1e8c"
}, {
  "name": "北京鑫源华宾馆",
  "location": {
    "lat": 39.899668,
    "lng": 116.401174
  },
  "address": "煤市街140号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "1c1e4d80ea82ced72eb96d4c",
  "telephone": "(010)83197833",
  "detail": 1,
  "uid": "1c1e4d80ea82ced72eb96d4c"
}, {
  "name": "北京雷龙宾馆(西直门积水潭地铁站店)",
  "location": {
    "lat": 39.953535,
    "lng": 116.376925
  },
  "address": "后坑胡同43号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "4b735c7ef37a7fe8b35c6af3",
  "telephone": "(010)68050845",
  "detail": 1,
  "uid": "4b735c7ef37a7fe8b35c6af3"
}, {
  "name": "北京天纬佳星宾馆",
  "location": {
    "lat": 39.887295,
    "lng": 116.399445
  },
  "address": "南纬路31号（东经路与南纬路交叉口）",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "dc3ab8ff77f0665bd4851f0c",
  "telephone": "(010)63189929",
  "detail": 1,
  "uid": "dc3ab8ff77f0665bd4851f0c"
}, {
  "name": "北京京一食四合院客栈",
  "location": {
    "lat": 39.900226,
    "lng": 116.396584
  },
  "address": "北京市西城区铁树斜街27号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "5211d21944a30b417dc87639",
  "telephone": "(010)63040749",
  "detail": 1,
  "uid": "5211d21944a30b417dc87639"
}, {
  "name": "皓阳文化酒店(北京前门大栅栏西街店)",
  "location": {
    "lat": 39.901303,
    "lng": 116.39892
  },
  "address": "大栅栏西街53号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "9ad894059ca93bc0220262ab",
  "telephone": "(010)83197867",
  "detail": 1,
  "uid": "9ad894059ca93bc0220262ab"
}, {
  "name": "秋果酒店(北京南站广安门大观园店)",
  "location": {
    "lat": 39.885907,
    "lng": 116.357039
  },
  "address": "广安门南街30号3号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "2f27390b6f2a05a23717dc16",
  "telephone": "(010)63527310",
  "detail": 1,
  "uid": "2f27390b6f2a05a23717dc16"
}, {
  "name": "顺时宾馆(北京西四地铁站店)",
  "location": {
    "lat": 39.929149,
    "lng": 116.380125
  },
  "address": "北京市西城区西四南大街14号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "telephone": "(010)56216388",
  "detail": 1,
  "uid": "fa4de9dbfbe8a415f8dc85e8"
}, {
  "name": "华利佳合快捷酒店(北京新南积水潭医院店)",
  "location": {
    "lat": 39.944347,
    "lng": 116.378524
  },
  "address": "前公用胡同18号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "",
  "telephone": "(010)66510658,(010)66512610",
  "detail": 1,
  "uid": "6f1feea69b1117ac3010af95"
}, {
  "name": "北京成贵发宾馆(宣武门地铁站店)",
  "location": {
    "lat": 39.905106,
    "lng": 116.382416
  },
  "address": "宣武门东大街24号楼东侧",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "e30828482b13e7a6b34c4936",
  "telephone": "(010)63131869",
  "detail": 1,
  "uid": "e30828482b13e7a6b34c4936"
}, {
  "name": "嘉惠浩苑宾馆(北京牛街地铁站宣武医院店)",
  "location": {
    "lat": 39.893382,
    "lng": 116.369855
  },
  "address": "牛街商业5号楼二段6层",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "e85e2527c0d0eb4a95f08c2e",
  "detail": 1,
  "uid": "e85e2527c0d0eb4a95f08c2e"
}, {
  "name": "云彩宾馆(北京北礼士路店)",
  "location": {
    "lat": 39.944769,
    "lng": 116.3593
  },
  "address": "北礼士路甲8号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "2a7a25ecf85112636c3e1b37",
  "telephone": "(010)68318146,(010)88377362",
  "detail": 1,
  "uid": "2a7a25ecf85112636c3e1b37"
}, {
  "name": "西翠之旅连锁宾馆(北京白纸坊店)",
  "location": {
    "lat": 39.886152,
    "lng": 116.353192
  },
  "address": "北京市广外南街63号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "telephone": "13810331214",
  "detail": 1,
  "uid": "5df7cbe904b4bfdbb04c4980"
}, {
  "name": "北京美吉丽宾馆",
  "location": {
    "lat": 39.888647,
    "lng": 116.33549
  },
  "address": "马连道茶马北街1号院A座世纪茶贸中心11层",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "bcaebff8b3cc904dc9e33c0b",
  "telephone": "(010)88871543,(010)88876639",
  "detail": 1,
  "uid": "bcaebff8b3cc904dc9e33c0b"
}, {
  "name": "常安福宾馆(北京马甸桥)",
  "location": {
    "lat": 39.972984,
    "lng": 116.391746
  },
  "address": "黄寺大街23-19",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "750ec16567b35b2b4c3a592e",
  "telephone": "(010)82237077",
  "detail": 1,
  "uid": "750ec16567b35b2b4c3a592e"
}, {
  "name": "北京宁波宾馆",
  "location": {
    "lat": 39.907899,
    "lng": 116.386763
  },
  "address": "北京市西城区新壁街8号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "f696f3c27eabbdf21b11d561",
  "telephone": "(010)66080608",
  "detail": 1,
  "uid": "f696f3c27eabbdf21b11d561"
}, {
  "name": "北京鑫珠佳宾馆",
  "location": {
    "lat": 39.900388,
    "lng": 116.398763
  },
  "address": "前门大栅栏朱家胡同15号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "",
  "telephone": "13699189010",
  "detail": 1,
  "uid": "742eb4f928d92f0b4d776e46"
}, {
  "name": "北京红居宾馆",
  "location": {
    "lat": 39.891385,
    "lng": 116.346235
  },
  "address": "北京市西城区红居街4-3号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "7e73f5556bb2390bf02d8363",
  "telephone": "(010)63386608",
  "detail": 1,
  "uid": "7e73f5556bb2390bf02d8363"
}, {
  "name": "由缘酒店(北京南站牛街店)",
  "location": {
    "lat": 39.889113,
    "lng": 116.377918
  },
  "address": "北京市西城区南横西街北区1号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "",
  "detail": 1,
  "uid": "8cba4bb0976b6a9dad045705"
}, {
  "name": "顺安康宾馆(北京友谊医院前门店)",
  "location": {
    "lat": 39.891588,
    "lng": 116.395068
  },
  "address": "北纬路寿长街1号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "4642844a21f204d9c9fa5fe4",
  "telephone": "(010)83167162",
  "detail": 1,
  "uid": "4642844a21f204d9c9fa5fe4"
}, {
  "name": "怡莱酒店(大栅栏西街店)",
  "location": {
    "lat": 39.900163,
    "lng": 116.399101
  },
  "address": "北京市大栅栏西街朱家胡同6号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "detail": 1,
  "uid": "85537abd043f88131df74d18"
}, {
  "name": "北京金顺精品酒店",
  "location": {
    "lat": 39.90028,
    "lng": 116.401407
  },
  "address": "煤市街施家胡同32号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "b3aa435db1b4711215764359",
  "telephone": "(010)63015589",
  "detail": 1,
  "uid": "b3aa435db1b4711215764359"
}, {
  "name": "7天优品酒店(德源胡同店)",
  "location": {
    "lat": 39.894304,
    "lng": 116.363231
  },
  "address": "北京市西城区德源胡同京粮古船大厦东南侧约30米",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "detail": 1,
  "uid": "bafea6df657800b221026275"
}, {
  "name": "海友酒店(北京西单商场店)",
  "location": {
    "lat": 39.922825,
    "lng": 116.380391
  },
  "address": "北京市西城区西长安街街道西单北大街20号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "detail": 1,
  "uid": "30631f30c5feb9f593114cdd"
}, {
  "name": "北京锦居快捷酒店",
  "location": {
    "lat": 39.890431,
    "lng": 116.335463
  },
  "address": "北京市西城区马连道南街1号院3号楼C座2楼",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "44a6001327abb8b717b54b43",
  "detail": 1,
  "uid": "44a6001327abb8b717b54b43"
}, {
  "name": "晋南酒店(北京右安门南站店)",
  "location": {
    "lat": 39.876298,
    "lng": 116.368831
  },
  "address": "北京市京市西城区右安门西街3号西区",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "27ceb5caaf54f1cf4107c1d3",
  "telephone": "(010)56187099",
  "detail": 1,
  "uid": "27ceb5caaf54f1cf4107c1d3"
}, {
  "name": "京伦饭店北京展览馆宾馆北侧-地上停车场",
  "location": {
    "lat": 39.947802,
    "lng": 116.352489
  },
  "address": "北京市西城区西直门北展北街皇帝船码头东南",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "",
  "detail": 1,
  "uid": "beabdbf4d867f8e47069d314"
}, {
  "name": "北京时光机快捷酒店",
  "location": {
    "lat": 39.910893,
    "lng": 116.429344
  },
  "address": "北京市东城区建国门街道治国胡同43号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "309a797695d244efeddfca5f",
  "telephone": "(010)65275335",
  "detail": 1,
  "uid": "309a797695d244efeddfca5f"
}, {
  "name": "汉庭酒店(北京天安门店)",
  "location": {
    "lat": 39.917944,
    "lng": 116.409706
  },
  "address": "北京市东城区南池子大街102号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "14c29dfa2b61be2959bbbc7b",
  "detail": 1,
  "uid": "14c29dfa2b61be2959bbbc7b"
}, {
  "name": "如家酒店(北京王府井协和医院店)",
  "location": {
    "lat": 39.927121,
    "lng": 116.429858
  },
  "address": "北京市东城区东四南大街演乐胡同50号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "(010)65287576",
  "detail": 1,
  "uid": "6587491e0494eb60ab175afa"
}, {
  "name": "北京首都宾馆",
  "location": {
    "lat": 39.908091,
    "lng": 116.415653
  },
  "address": "北京市东城区前门东大街3号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "detail": 1,
  "uid": "bd5046e80460e458d72ce23f"
}, {
  "name": "春豪宾馆(北京王府井协和医院店)",
  "location": {
    "lat": 39.926881,
    "lng": 116.418548
  },
  "address": "王府井大街大鹁鸽胡同17号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "(010)65259950",
  "detail": 1,
  "uid": "be54cde97d70074178f79601"
}, {
  "name": "布丁酒店(锣鼓巷后海鼓楼店)",
  "location": {
    "lat": 39.951442,
    "lng": 116.406503
  },
  "address": "北京市东城区宝钞胡同北京锣鼓巷38号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "(010)84042268",
  "detail": 1,
  "uid": "24d05508485e2db6138824e5"
}, {
  "name": "海坛宾馆(北京东单协和医院店)",
  "location": {
    "lat": 39.917811,
    "lng": 116.424753
  },
  "address": "东单北大街甲88号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "637df60a7a5f606b40afe60a",
  "telephone": "(010)51016188",
  "detail": 1,
  "uid": "637df60a7a5f606b40afe60a"
}, {
  "name": "华驿酒店(北京伯鑫宾馆有限公司西花市店)",
  "location": {
    "lat": 39.903534,
    "lng": 116.430404
  },
  "address": "北京市东城区西花市街43号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "8fa14fc39fd33d77f7eafc33",
  "telephone": "(010)67115328",
  "detail": 1,
  "uid": "8fa14fc39fd33d77f7eafc33"
}, {
  "name": "北京瑞安宾馆",
  "location": {
    "lat": 39.910566,
    "lng": 116.412914
  },
  "address": "北京市东城区正义路7号（公安部东南门）",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "(010)58187788,(010)66263701",
  "detail": 1,
  "uid": "9fa1e022903f0e484251c076"
}, {
  "name": "如家酒店·neo(北京什刹海鼓楼交道口店)",
  "location": {
    "lat": 39.947968,
    "lng": 116.416348
  },
  "address": "交道口东大街113号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "c73e1b069df40258a2d23050",
  "telephone": "(010)84050909",
  "detail": 1,
  "uid": "c73e1b069df40258a2d23050"
}, {
  "name": "布丁酒店(北京灯市口地铁站店)",
  "location": {
    "lat": 39.927612,
    "lng": 116.424349
  },
  "address": "东四南大街80号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "7c5489ac90e719fe5ebe864f",
  "telephone": "(010)59477988",
  "detail": 1,
  "uid": "7c5489ac90e719fe5ebe864f"
}, {
  "name": "汉庭酒店(北京王府井店)",
  "location": {
    "lat": 39.923318,
    "lng": 116.422608
  },
  "address": "北京市东城区甘雨胡同31号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "3a7cc9a64de836bfdeee8bef",
  "telephone": "(010)52828008",
  "detail": 1,
  "uid": "3a7cc9a64de836bfdeee8bef"
}, {
  "name": "北京华育宾馆",
  "location": {
    "lat": 39.931815,
    "lng": 116.408094
  },
  "address": "沙滩后街55号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "b7021bf81990c7e3f4e73b07",
  "detail": 1,
  "uid": "b7021bf81990c7e3f4e73b07"
}, {
  "name": "全季酒店(北京站店)",
  "location": {
    "lat": 39.911836,
    "lng": 116.432799
  },
  "address": "北京市东城区站前街1号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "telephone": "(010)56676982",
  "detail": 1,
  "uid": "dbb2cc7bc307be83b5f42f6e"
}, {
  "name": "北京诺富特和平宾馆",
  "location": {
    "lat": 39.922151,
    "lng": 116.422056
  },
  "address": "北京市东城区金鱼胡同3号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "beabdbf48c5cb4817069d30a",
  "telephone": "(010)65128833",
  "detail": 1,
  "uid": "beabdbf48c5cb4817069d30a"
}, {
  "name": "7天酒店(南锣鼓巷店)",
  "location": {
    "lat": 39.936591,
    "lng": 116.428658
  },
  "address": "北京市东城区东四六条45号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "detail": 1,
  "uid": "8fa14fc39faf3d77f7eafc07"
}, {
  "name": "7天连锁酒店(北京南站永定门外地铁站店)",
  "location": {
    "lat": 39.869848,
    "lng": 116.400314
  },
  "address": "永定门外大街管村32号8号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "3e0c973d14eb20869a0050af",
  "telephone": "(010)53671000,18511103660",
  "detail": 1,
  "uid": "3e0c973d14eb20869a0050af"
}, {
  "name": "贯通现代酒店(北京前门店)",
  "location": {
    "lat": 39.897022,
    "lng": 116.405443
  },
  "address": "珠市口西半璧街1号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "dc0f0adc64e60b21f922139c",
  "telephone": "(010)67072299",
  "detail": 1,
  "uid": "dc0f0adc64e60b21f922139c"
}, {
  "name": "北京东单宾馆(王府井协和医院店)",
  "location": {
    "lat": 39.916207,
    "lng": 116.424687
  },
  "address": "东单北大街120号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "detail": 1,
  "uid": "5ce2637da9595148af31e5a5"
}, {
  "name": "北京大华路宾馆",
  "location": {
    "lat": 39.909615,
    "lng": 116.42313
  },
  "address": "大华路4号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "c5ddcc0840f265dfd91318aa",
  "telephone": "(010)65264853,(010)65268753",
  "detail": 1,
  "uid": "c5ddcc0840f265dfd91318aa"
}, {
  "name": "汉庭酒店(北京天坛店)",
  "location": {
    "lat": 39.879645,
    "lng": 116.425271
  },
  "address": "永定门东街2号南楼",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "654b7445154b238602897269",
  "telephone": "(010)67016677",
  "detail": 1,
  "uid": "654b7445154b238602897269"
}, {
  "name": "前门观旗宾馆(北京前门地铁站店)",
  "location": {
    "lat": 39.906454,
    "lng": 116.408539
  },
  "address": "北京市东城区前门东大街18号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "d991e1161feffe4c1f38943d",
  "telephone": "(010)67058230",
  "detail": 1,
  "uid": "d991e1161feffe4c1f38943d"
}, {
  "name": "北京中矿宾馆(雍和宫地铁站地坛店)",
  "location": {
    "lat": 39.962196,
    "lng": 116.415548
  },
  "address": "安定门外大街168号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "(010)64279933",
  "detail": 1,
  "uid": "d83cda8fc770237e11882442"
}, {
  "name": "如家酒店(北京雍和宫和平里东街林业局店)",
  "location": {
    "lat": 39.963785,
    "lng": 116.433912
  },
  "address": "和平里东街交林夹道5号C座",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "a26ae03c0395d68da6da398a",
  "telephone": "(010)52820101",
  "detail": 1,
  "uid": "a26ae03c0395d68da6da398a"
}, {
  "name": "北京创世商务酒店",
  "location": {
    "lat": 39.920845,
    "lng": 116.424016
  },
  "address": "东单北大街3号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "e116be5449e0ad62c81b95f3",
  "telephone": "(010)65287679,(010)65287782",
  "detail": 1,
  "uid": "e116be5449e0ad62c81b95f3"
}, {
  "name": "禧龙宾馆(北京夕照寺店)",
  "location": {
    "lat": 39.894571,
    "lng": 116.44695
  },
  "address": "夕照寺街14号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "61f634f6eeda96616b49f352",
  "telephone": "(010)67189199",
  "detail": 1,
  "uid": "61f634f6eeda96616b49f352"
}, {
  "name": "北京升旗宾馆",
  "location": {
    "lat": 39.905806,
    "lng": 116.406517
  },
  "address": "前门大街甲2号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "1eeed5464b0ce0ebb5147fc4",
  "telephone": "(010)51015188-0",
  "detail": 1,
  "uid": "1eeed5464b0ce0ebb5147fc4"
}, {
  "name": "北京家畅宾馆",
  "location": {
    "lat": 39.903275,
    "lng": 116.436348
  },
  "address": "崇文门东花市大街枣苑小区甲3号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "72c7b814d91f87c059bbbcd7",
  "telephone": "(010)52470569",
  "detail": 1,
  "uid": "72c7b814d91f87c059bbbcd7"
}, {
  "name": "北京内蒙古宾馆",
  "location": {
    "lat": 39.934586,
    "lng": 116.415149
  },
  "address": "北京市东城区后街71号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "2cc3c8e8908153cf4d2fdf0a",
  "telephone": "(010)64000826",
  "detail": 1,
  "uid": "2cc3c8e8908153cf4d2fdf0a"
}, {
  "name": "北京东华门宾馆",
  "location": {
    "lat": 39.925803,
    "lng": 116.412521
  },
  "address": "王府井北河沿大街141号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "(010)65234977",
  "detail": 1,
  "uid": "28e700f152d45c02085cb3b3"
}, {
  "name": "北京海云宾馆",
  "location": {
    "lat": 39.95152,
    "lng": 116.432391
  },
  "address": "东直门内北小街16号院",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "(010)84060281",
  "detail": 1,
  "uid": "38e48037f446c250373a7100"
}, {
  "name": "北京天赐庭院精品酒店",
  "location": {
    "lat": 39.911159,
    "lng": 116.430446
  },
  "address": "中鲜鱼巷10号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "e3e2840ac93e9f1639221ceb",
  "telephone": "(010)65263688",
  "detail": 1,
  "uid": "e3e2840ac93e9f1639221ceb"
}, {
  "name": "国汉主题酒店(北京东直门店)",
  "location": {
    "lat": 39.950551,
    "lng": 116.451673
  },
  "address": "北京市东城区东直门外小街10号胡家园小区东区21号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "(010)84059336",
  "detail": 1,
  "uid": "9b02ab7fca34eb8215c90578"
}, {
  "name": "速8酒店(北京前门天坛公园东门店)",
  "location": {
    "lat": 39.894253,
    "lng": 116.429764
  },
  "address": "葱店西街111号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "fd1a07d6d1ac1ca6e6e9654a",
  "telephone": "(010)67181502",
  "detail": 1,
  "uid": "fd1a07d6d1ac1ca6e6e9654a"
}, {
  "name": "北京华风宾馆",
  "location": {
    "lat": 39.907856,
    "lng": 116.41379
  },
  "address": "北京市东城区东大街5号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "fd007c5e7cb01775a8f7293d",
  "telephone": "(010)65247311",
  "detail": 1,
  "uid": "fd007c5e7cb01775a8f7293d"
}, {
  "name": "北京和平里宾馆",
  "location": {
    "lat": 39.966667,
    "lng": 116.421334
  },
  "address": "兴化路化工大院4号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "e85e252727ac964a95f08c0a",
  "telephone": "(010)64286868",
  "detail": 1,
  "uid": "e85e252727ac964a95f08c0a"
}, {
  "name": "北京天地海快捷宾馆",
  "location": {
    "lat": 39.919229,
    "lng": 116.433011
  },
  "address": "北京市东城区朝阳门南小街387号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "f9fd60627b347d060f0e6b32",
  "detail": 1,
  "uid": "f9fd60627b347d060f0e6b32"
}, {
  "name": "北京军展宾馆(鼓楼大街安德里北街地铁站)",
  "location": {
    "lat": 39.96328,
    "lng": 116.400167
  },
  "address": "安德里北街六铺炕15号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "a5ef680f21bbdaceb9df8f00",
  "telephone": "(010)62360115",
  "detail": 1,
  "uid": "a5ef680f21bbdaceb9df8f00"
}, {
  "name": "婧园雅筑宾馆",
  "location": {
    "lat": 39.922647,
    "lng": 116.418797
  },
  "address": "北京市东城区王府井西堂子胡同35号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "(010)65259259",
  "detail": 1,
  "uid": "1eeed546be7f95ebb5147f70"
}, {
  "name": "北京靓美快捷酒店(东直门医院东四十条地铁站店)",
  "location": {
    "lat": 39.942993,
    "lng": 116.443802
  },
  "address": "东中街铜厂子46号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "05dd7d5f2cce4b18ad080f34",
  "telephone": "(010)64166488",
  "detail": 1,
  "uid": "05dd7d5f2cce4b18ad080f34"
}, {
  "name": "北京金龙建国温泉酒店",
  "location": {
    "lat": 39.911595,
    "lng": 116.4416
  },
  "address": "建国门南大街5号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "1256ced6c96cdef628d7abc7",
  "telephone": "(010)65286688",
  "detail": 1,
  "uid": "1256ced6c96cdef628d7abc7"
}, {
  "name": "北京舜和嘉和旅馆",
  "location": {
    "lat": 39.901971,
    "lng": 116.421619
  },
  "address": "崇文门外大街都市馨园8号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "(010)67012245",
  "detail": 1,
  "uid": "15ed53ceea870f4d9222e021"
}, {
  "name": "速8酒店(北京王府井步行街灯市口店)",
  "location": {
    "lat": 39.925087,
    "lng": 116.419172
  },
  "address": "灯市口大街57号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "8466087ba6f97e0822f01750",
  "telephone": "(010)65280608",
  "detail": 1,
  "uid": "8466087ba6f97e0822f01750"
}, {
  "name": "北京友方宾馆",
  "location": {
    "lat": 39.920623,
    "lng": 116.412915
  },
  "address": "南河沿大街5号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "(010)65250068",
  "detail": 1,
  "uid": "c7824bda4590672dede4a5af"
}, {
  "name": "北京唐钢宾馆",
  "location": {
    "lat": 39.941295,
    "lng": 116.43811
  },
  "address": "北京市东城区海运仓胡同仓夹道7号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "dffd631c6bdc1ca538221c6d",
  "telephone": "(010)84073490",
  "detail": 1,
  "uid": "dffd631c6bdc1ca538221c6d"
}, {
  "name": "金驰宾馆(北京安定门地铁站店)",
  "location": {
    "lat": 39.959915,
    "lng": 116.412927
  },
  "address": "安外大街上龙西里36号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "95b131b8f3686fc188b98803",
  "telephone": "(010)84129117",
  "detail": 1,
  "uid": "95b131b8f3686fc188b98803"
}, {
  "name": "北京阅微庄四合院特色酒店",
  "location": {
    "lat": 39.933708,
    "lng": 116.428486
  },
  "address": "东四四条37号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "(010)64007762",
  "detail": 1,
  "uid": "2e00c5dd108d3461d7851f1a"
}, {
  "name": "任你行酒店(北京南站永定门外地铁站店)",
  "location": {
    "lat": 39.872261,
    "lng": 116.410561
  },
  "address": "琉璃井路38号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "telephone": "(010)80932796",
  "detail": 1,
  "uid": "66c8ff4b9bb61eab3a13fd22"
}, {
  "name": "北京云腾宾馆",
  "location": {
    "lat": 39.905728,
    "lng": 116.442275
  },
  "address": "东花市北里东区东楼、西楼",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "(010)67136432",
  "detail": 1,
  "uid": "268596969029877b5d0d027c"
}, {
  "name": "北京京安宾馆",
  "location": {
    "lat": 39.906546,
    "lng": 116.409946
  },
  "address": "前门东大街14号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "0adce3e2d42b367880a00c06",
  "telephone": "(010)67012668,(010)67012698",
  "detail": 1,
  "uid": "0adce3e2d42b367880a00c06"
}, {
  "name": "天路苑",
  "location": {
    "lat": 39.947618,
    "lng": 116.40733
  },
  "address": "北京市东城区鼓楼东大街181号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "5b1b6bca5632e89b00ff2d38",
  "telephone": "(010)52179999",
  "detail": 1,
  "uid": "5b1b6bca5632e89b00ff2d38"
}, {
  "name": "前门佳合宾馆(北京天安门广场店)",
  "location": {
    "lat": 39.906442,
    "lng": 116.409453
  },
  "address": "前门东大街16号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "cd9d05dd6ae909af85420e06",
  "telephone": "(010)67011926",
  "detail": 1,
  "uid": "cd9d05dd6ae909af85420e06"
}, {
  "name": "楚舜酒店(北京广渠门外地铁站店)",
  "location": {
    "lat": 39.898153,
    "lng": 116.45541
  },
  "address": "广渠门外大街广渠家园11号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "c334f4ae311055f19503198f",
  "telephone": "(010)87512296",
  "detail": 1,
  "uid": "c334f4ae311055f19503198f"
}, {
  "name": "中煤宾馆",
  "location": {
    "lat": 39.948343,
    "lng": 116.446127
  },
  "address": "北京市东城区东直门外斜街察慈小区",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "detail": 1,
  "uid": "2328bc7345e4f90fc356ac3b"
}, {
  "name": "乐语宾馆(王府井大街店)",
  "location": {
    "lat": 39.916995,
    "lng": 116.416442
  },
  "address": "北京市东城区王府井大街277号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "89d505b6c843657315c90500",
  "detail": 1,
  "uid": "89d505b6c843657315c90500"
}, {
  "name": "如家精选酒店(北京广渠门内地铁站鸿润店)",
  "location": {
    "lat": 39.900622,
    "lng": 116.446399
  },
  "address": "广渠门内白桥大街28号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "b813f5ccbe6c49c3c9e33c73",
  "telephone": "(010)67196888-9",
  "detail": 1,
  "uid": "b813f5ccbe6c49c3c9e33c73"
}, {
  "name": "北京伯瑞宾馆",
  "location": {
    "lat": 39.93282,
    "lng": 116.423329
  },
  "address": "轿子胡同48号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "(010)64003328",
  "detail": 1,
  "uid": "5ef87090bdfd70dde50738bb"
}, {
  "name": "北京翠明庄宾馆",
  "location": {
    "lat": 39.921374,
    "lng": 116.412527
  },
  "address": "南河沿大街1号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "2fd2beab8046e54b7adbd20a",
  "telephone": "(010)58580909",
  "detail": 1,
  "uid": "2fd2beab8046e54b7adbd20a"
}, {
  "name": "宽街宾馆(北京中医院店)",
  "location": {
    "lat": 39.938473,
    "lng": 116.417276
  },
  "address": "老山胡同九号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "aa40108b9e59260cc5effb05",
  "telephone": "(010)84039456,13683161789",
  "detail": 1,
  "uid": "aa40108b9e59260cc5effb05"
}, {
  "name": "永逸轩酒店(北京南站永定门外地铁站店)",
  "location": {
    "lat": 39.876693,
    "lng": 116.406755
  },
  "address": "永定门外大街38号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "fb482f115c2843bbd7851f0c",
  "telephone": "(010)51333580",
  "detail": 1,
  "uid": "fb482f115c2843bbd7851f0c"
}, {
  "name": "丁香客舍快捷酒店(北京站店)",
  "location": {
    "lat": 39.909447,
    "lng": 116.430486
  },
  "address": "东镇江胡同13号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "b262e8a6a0e46be379f796f2",
  "telephone": "(010)65285513",
  "detail": 1,
  "uid": "b262e8a6a0e46be379f796f2"
}, {
  "name": "北京东四饭店",
  "location": {
    "lat": 39.928924,
    "lng": 116.421729
  },
  "address": "东四西大街大豆腐巷18号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "(010)65256031",
  "detail": 1,
  "uid": "669775d035ad1b42fd0eb001"
}, {
  "name": "北京时尚港湾快捷酒店",
  "location": {
    "lat": 39.932284,
    "lng": 116.424094
  },
  "address": "东四北大街486号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "52cf440aaa547422c909f0a4",
  "telephone": "(010)84039789",
  "detail": 1,
  "uid": "52cf440aaa547422c909f0a4"
}, {
  "name": "喜马拉雅宾馆(北京国展雍和宫店)",
  "location": {
    "lat": 39.964925,
    "lng": 116.424412
  },
  "address": "地坛北里1号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "(010)64219922",
  "detail": 1,
  "uid": "c8e8f63305df8375ab0dd807"
}, {
  "name": "鸿福宾馆(南锣鼓巷店)",
  "location": {
    "lat": 39.950946,
    "lng": 116.40613
  },
  "address": "鼓楼东大街宝钞胡同44号琉璃寺口",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "b08697f4a74bd92f0bf5ebac",
  "detail": 1,
  "uid": "b08697f4a74bd92f0bf5ebac"
}, {
  "name": "北京来德宾馆",
  "location": {
    "lat": 39.918094,
    "lng": 116.428778
  },
  "address": "西总布胡同58号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "3f826ed3af82665fd1f49e00",
  "telephone": "(010)65592848",
  "detail": 1,
  "uid": "3f826ed3af82665fd1f49e00"
}, {
  "name": "鑫龙宾馆(北京前门天安门广场店)",
  "location": {
    "lat": 39.905986,
    "lng": 116.40651
  },
  "address": "北京市东城区前门大街甲2号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "43c535dbcc25e17285420e0f",
  "detail": 1,
  "uid": "43c535dbcc25e17285420e0f"
}, {
  "name": "北京中安宾馆(建国门北京站店)",
  "location": {
    "lat": 39.909063,
    "lng": 116.438696
  },
  "address": "北京站东街大羊毛胡同盔甲厂6号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "telephone": "(010)65221122",
  "detail": 1,
  "uid": "4e2de10b7d2f92ba09b93ad8"
}, {
  "name": "小巷儿国际青年旅社(东四地铁站店)",
  "location": {
    "lat": 39.933597,
    "lng": 116.423127
  },
  "address": "北京市东城区轿子胡同18号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "15910760201",
  "detail": 1,
  "uid": "086be3c620d85cd6a5da39f0"
}, {
  "name": "北京兴林宾馆",
  "location": {
    "lat": 39.937071,
    "lng": 116.408111
  },
  "address": "地安门内大街东板桥街32号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "a3e8341c736b8c8c4afd3f07",
  "telephone": "(010)64045868",
  "detail": 1,
  "uid": "a3e8341c736b8c8c4afd3f07"
}, {
  "name": "建晋东方宾馆(北京协和医院店)",
  "location": {
    "lat": 39.917586,
    "lng": 116.427953
  },
  "address": "北京市东城区新开路胡同78号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "637df60a7a2e606b40afe635",
  "telephone": "(010)65255810",
  "detail": 1,
  "uid": "637df60a7a2e606b40afe635"
}, {
  "name": "北京蜀都宾馆(故宫店)",
  "location": {
    "lat": 39.931532,
    "lng": 116.407004
  },
  "address": "沙滩后街30号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "09185c56d3637f44f1193707",
  "telephone": "(010)64031743",
  "detail": 1,
  "uid": "09185c56d3637f44f1193707"
}, {
  "name": "开滦宾馆",
  "location": {
    "lat": 39.877031,
    "lng": 116.398996
  },
  "address": "北京市东城区青年路h栋",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "(010)67210077",
  "detail": 1,
  "uid": "d24e48eb03e552adafee7a3f"
}, {
  "name": "草园宾馆",
  "location": {
    "lat": 39.94883,
    "lng": 116.429602
  },
  "address": "北京市东城区草园胡同29号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "6fddd7fd43661f663517dc07",
  "telephone": "(010)64017771,(010)64043670",
  "detail": 1,
  "uid": "6fddd7fd43661f663517dc07"
}, {
  "name": "北京站前宾馆",
  "location": {
    "lat": 39.911329,
    "lng": 116.430762
  },
  "address": "公平巷18号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "264a71d7a6fe56d3fd0eb0a1",
  "telephone": "(010)65598820",
  "detail": 1,
  "uid": "264a71d7a6fe56d3fd0eb0a1"
}, {
  "name": "北京天赐顺兴宾馆",
  "location": {
    "lat": 39.909315,
    "lng": 116.42838
  },
  "address": "北京站西街船板胡同23号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "d8fd8c30d653c0c98a36eece",
  "telephone": "(010)65187677",
  "detail": 1,
  "uid": "d8fd8c30d653c0c98a36eece"
}, {
  "name": "如家驿禾酒店(北京同仁医院店)",
  "location": {
    "lat": 39.903636,
    "lng": 116.429522
  },
  "address": "北京市东城区西花市大街国瑞城小区",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "detail": 1,
  "uid": "e1fe66909a29605bae31e5be"
}, {
  "name": "北京德全酒店(天坛东门地铁站店)",
  "location": {
    "lat": 39.888877,
    "lng": 116.44146
  },
  "address": "左安门内大街4号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "telephone": "(010)67111811,(010)67112711",
  "detail": 1,
  "uid": "b218848926b74b4f2bfc484c"
}, {
  "name": "北京东方之道养生主题酒店(北京天坛东门地铁站店)",
  "location": {
    "lat": 39.886333,
    "lng": 116.42653
  },
  "address": "北京市天坛东路13号(近地铁5号线天坛东门站C口,天坛体育中心内)",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "telephone": "(010)67058788",
  "detail": 1,
  "uid": "52059d146542e27fb9df8f01"
}, {
  "name": "北京银达宾馆",
  "location": {
    "lat": 39.917098,
    "lng": 116.426275
  },
  "address": "北极阁三条35号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "2dfbe2832b154d4e1fe99967",
  "telephone": "(010)65240568",
  "detail": 1,
  "uid": "2dfbe2832b154d4e1fe99967"
}, {
  "name": "北方朗悦酒店(北京青年湖店)",
  "location": {
    "lat": 39.960477,
    "lng": 116.405752
  },
  "address": "青年湖南街19号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "0ce65c2df8a08a402d47333f",
  "telephone": "(010)84124060",
  "detail": 1,
  "uid": "0ce65c2df8a08a402d47333f"
}, {
  "name": "华雅酒店(天安门王府井步行街店)",
  "location": {
    "lat": 39.921847,
    "lng": 116.415009
  },
  "address": "东安门大街43号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "(010)65126383",
  "detail": 1,
  "uid": "6eb3899309ff41ca2fb90858"
}, {
  "name": "北京君安宾馆",
  "location": {
    "lat": 39.893127,
    "lng": 116.428629
  },
  "address": "法华寺街134号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "50f7d1468c51ffdd72210b06",
  "telephone": "(010)67115544,(010)67139018",
  "detail": 1,
  "uid": "50f7d1468c51ffdd72210b06"
}, {
  "name": "北京华信宾馆",
  "location": {
    "lat": 39.929284,
    "lng": 116.4312
  },
  "address": "朝阳门内南小街51号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "4a4157946b005676b9df8f36",
  "telephone": "(010)65274369",
  "detail": 1,
  "uid": "4a4157946b005676b9df8f36"
}, {
  "name": "北京塔河宾馆(环球贸易中心和平西桥地铁站店)",
  "location": {
    "lat": 39.969815,
    "lng": 116.420301
  },
  "address": "北京市兴化路六号院1号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "958b8ceccca2f8222bb97c14",
  "telephone": "(010)84278888",
  "detail": 1,
  "uid": "958b8ceccca2f8222bb97c14"
}, {
  "name": "天成酒店(北京南站店)",
  "location": {
    "lat": 39.871611,
    "lng": 116.395471
  },
  "address": "东城区北京东城西革新里112号院4号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "c8742881149a8f339a0050d5",
  "telephone": "(010)51333333,13683334666",
  "detail": 1,
  "uid": "c8742881149a8f339a0050d5"
}, {
  "name": "北京庆兴宾馆",
  "location": {
    "lat": 39.910987,
    "lng": 116.429089
  },
  "address": "三源胡同4号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "a42ebbf8c1a89f29a11de930",
  "telephone": "(010)65275335",
  "detail": 1,
  "uid": "a42ebbf8c1a89f29a11de930"
}, {
  "name": "梦圆宾馆(北京簋街店)",
  "location": {
    "lat": 39.946689,
    "lng": 116.43709
  },
  "address": "北京市东城区东直门内大街54号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "251ef2782013eaeb3310af90",
  "detail": 1,
  "uid": "251ef2782013eaeb3310af90"
}, {
  "name": "北京京鲁缘宾馆(北京站朝阳门南小街店)",
  "location": {
    "lat": 39.918287,
    "lng": 116.433861
  },
  "address": "朝阳门南小街5区22号楼地下一层1号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "2938bddee92bfa1828201ab4",
  "telephone": "(010)65125088",
  "detail": 1,
  "uid": "2938bddee92bfa1828201ab4"
}, {
  "name": "北京烽联宾馆",
  "location": {
    "lat": 39.908196,
    "lng": 116.421867
  },
  "address": "东交民巷8号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "fa01e93704767e53774ff178",
  "detail": 1,
  "uid": "fa01e93704767e53774ff178"
}, {
  "name": "北京蓉驿致家酒店",
  "location": {
    "lat": 39.963548,
    "lng": 116.398973
  },
  "address": "安德里北街甲21号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "0eef2aa98ad4fa5c02ec013c",
  "telephone": "(010)62386688-6186",
  "detail": 1,
  "uid": "0eef2aa98ad4fa5c02ec013c"
}, {
  "name": "和旭盛世宾馆(北京同仁医院北京站店)",
  "location": {
    "lat": 39.903841,
    "lng": 116.431251
  },
  "address": "崇文门国瑞东路39号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "6904b6626c87ce93725e801b",
  "telephone": "(010)67162585",
  "detail": 1,
  "uid": "6904b6626c87ce93725e801b"
}, {
  "name": "平安府宾馆",
  "location": {
    "lat": 39.939662,
    "lng": 116.425685
  },
  "address": "北京市东城区平安大街东四十条100号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "083a55fa89bee560246e9807",
  "detail": 1,
  "uid": "083a55fa89bee560246e9807"
}, {
  "name": "北方朗悦酒店(北京鼓楼店)",
  "location": {
    "lat": 39.95815,
    "lng": 116.403493
  },
  "address": "安德路甲61号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "0c0b8d40b48d071d9d9d686c",
  "telephone": "(010)84133358",
  "detail": 1,
  "uid": "0c0b8d40b48d071d9d9d686c"
}, {
  "name": "北京诺家宾馆",
  "location": {
    "lat": 39.903586,
    "lng": 116.43055
  },
  "address": "北京市东城区国瑞北路国瑞城中区14号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "15117937536,18010190193",
  "detail": 1,
  "uid": "81334e515a0ef3abc6effb69"
}, {
  "name": "北京碧水兰轩宾馆(协和医院店)",
  "location": {
    "lat": 39.919424,
    "lng": 116.43304
  },
  "address": "朝阳门内南小街385号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "e26dea96968b7a569cec2b11",
  "telephone": "18611540523",
  "detail": 1,
  "uid": "e26dea96968b7a569cec2b11"
}, {
  "name": "嘉园之星(北京站店)",
  "location": {
    "lat": 39.895153,
    "lng": 116.436874
  },
  "address": "北京市东城区幸福大街甲39号5幢",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "17710177588",
  "detail": 1,
  "uid": "4b739d14e57d94bad42ce255"
}, {
  "name": "北京康泰福宾馆",
  "location": {
    "lat": 39.880386,
    "lng": 116.407584
  },
  "address": "北京市东城区永定门内大街140号天坛南里西区19号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "fa835ce23920bcafe812e45f",
  "telephone": "(010)67050108",
  "detail": 1,
  "uid": "fa835ce23920bcafe812e45f"
}, {
  "name": "博昊宾馆",
  "location": {
    "lat": 39.902826,
    "lng": 116.421138
  },
  "address": "北京市东兴隆街都市馨园solo2号楼(距同仁医院500米、新世界150米)",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "telephone": "18518275161",
  "detail": 1,
  "uid": "0a04131e55248ab3364aae19"
}, {
  "name": "宏昌盛达酒店(北京南站永定门外地铁站店)",
  "location": {
    "lat": 39.871676,
    "lng": 116.396943
  },
  "address": "革新南路西革新里110号院5号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "(010)67237939",
  "detail": 1,
  "uid": "e116be54e4214806c91b95d4"
}, {
  "name": "博昊宾馆",
  "location": {
    "lat": 39.902826,
    "lng": 116.421138
  },
  "address": "北京市东兴隆街都市馨园solo2号楼(距同仁医院500米、新世界150米)",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "telephone": "18518275161",
  "detail": 1,
  "uid": "0a04131e55248ab3364aae19"
}, {
  "name": "宏昌盛达酒店(北京南站永定门外地铁站店)",
  "location": {
    "lat": 39.871676,
    "lng": 116.396943
  },
  "address": "革新南路西革新里110号院5号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "(010)67237939",
  "detail": 1,
  "uid": "e116be54e4214806c91b95d4"
}, {
  "name": "学者公寓",
  "location": {
    "lat": 39.928933,
    "lng": 116.416655
  },
  "address": "北京市东城区王府井大街27号(首都剧院斜对面)",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "6fddd7fd43681f663517dc3d",
  "telephone": "(010)65591155",
  "detail": 1,
  "uid": "6fddd7fd43681f663517dc3d"
}, {
  "name": "兴化路宾馆(北京国展和平里北街地铁站店)",
  "location": {
    "lat": 39.967718,
    "lng": 116.420828
  },
  "address": "和平里兴化东里8号楼化工大院西门",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "0d754865c9dc3e8082a12e8f",
  "telephone": "(010)84250900",
  "detail": 1,
  "uid": "0d754865c9dc3e8082a12e8f"
}, {
  "name": "北京德奇宾馆",
  "location": {
    "lat": 39.871999,
    "lng": 116.396935
  },
  "address": "北京市东城区西革新里110号院",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "detail": 1,
  "uid": "69fcd6dfb10b0c36ca291532"
}, {
  "name": "北京市永乐旅馆",
  "location": {
    "lat": 39.909825,
    "lng": 116.426748
  },
  "address": "东城区船板胡同59号（近南八宝胡同）",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "81dde827a79d5baed4851f26",
  "detail": 1,
  "uid": "81dde827a79d5baed4851f26"
}, {
  "name": "沙滩宾馆",
  "location": {
    "lat": 39.931642,
    "lng": 116.40762
  },
  "address": "北京市东城区沙滩后街28号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "1bf85b25b5f33abda1a93407",
  "telephone": "(010)84026688",
  "detail": 1,
  "uid": "1bf85b25b5f33abda1a93407"
}, {
  "name": "东都宾馆(东交民巷)",
  "location": {
    "lat": 39.908807,
    "lng": 116.416505
  },
  "address": "北京市东城区东交民巷20号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "50f7d1468c58ffdd72210b39",
  "detail": 1,
  "uid": "50f7d1468c58ffdd72210b39"
}, {
  "name": "中国红十字会宾馆",
  "location": {
    "lat": 39.923702,
    "lng": 116.427798
  },
  "address": "北京市东城区东单北大街干面胡同53号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "593850fbbf3f0844df1e523b",
  "telephone": "(010)65120011",
  "detail": 1,
  "uid": "593850fbbf3f0844df1e523b"
}, {
  "name": "速8酒店(干面胡同店)",
  "location": {
    "lat": 39.924404,
    "lng": 116.428186
  },
  "address": "北京市东城区史家胡同精诚实验幼儿园东侧约30米",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "5b19f00d962b8c83f4b916fc",
  "detail": 1,
  "uid": "5b19f00d962b8c83f4b916fc"
}, {
  "name": "北京凯乐酒店",
  "location": {
    "lat": 39.911776,
    "lng": 116.434496
  },
  "address": "北京市东城区站街22号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "2737357999cfa13303ec0156",
  "detail": 1,
  "uid": "2737357999cfa13303ec0156"
}, {
  "name": "中航快捷酒店(北京东四店)",
  "location": {
    "lat": 39.935459,
    "lng": 116.425847
  },
  "address": "北京市东城区月牙胡同25号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "d219bb1dc658b392f50e773f",
  "detail": 1,
  "uid": "d219bb1dc658b392f50e773f"
}, {
  "name": "北京绿藤美居酒店(安定门地铁店)",
  "location": {
    "lat": 39.959562,
    "lng": 116.412535
  },
  "address": "北京市东城区安外大街上龙西里36号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "telephone": "(010)84120128",
  "detail": 1,
  "uid": "a5f08b8c109307ba2cb908ef"
}, {
  "name": "99优选酒店(北京站朝阳门南小街店)",
  "location": {
    "lat": 39.918306,
    "lng": 116.433731
  },
  "address": "北京市东城区朝阳门南小街22号楼地下一层1号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "telephone": "(010)65125088",
  "detail": 1,
  "uid": "19397fedafd901d6eddfcaab"
}, {
  "name": "北京河北迎宾馆",
  "location": {
    "lat": 39.937496,
    "lng": 116.406302
  },
  "address": "北京市东城区黄化门街锥把胡同1号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "(010)64006668",
  "detail": 1,
  "uid": "18a7fb25e9a90f297069d36f"
}, {
  "name": "北京海纳宾馆(雍和宫店)",
  "location": {
    "lat": 39.950946,
    "lng": 116.424627
  },
  "address": "雍和宫大街北新胡同31号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "detail": 1,
  "uid": "ceb70b6cc3b6c03022f01710"
}, {
  "name": "如家快捷酒店(天元和平商业大厦店)",
  "location": {
    "lat": 39.963738,
    "lng": 116.426885
  },
  "address": "北京市东城区和平里街道和平里中街17号天元和平里商业大厦",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "detail": 1,
  "uid": "ae1e62fd1e429f6c2102625e"
}, {
  "name": "侣松园宾馆",
  "location": {
    "lat": 39.941233,
    "lng": 116.412774
  },
  "address": "板厂胡同22号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "9fbfeef26592025cede4a502",
  "detail": 1,
  "uid": "9fbfeef26592025cede4a502"
}, {
  "name": "北京毛家湾快捷宾馆",
  "location": {
    "lat": 39.909871,
    "lng": 116.435869
  },
  "address": "北京市东城区毛家湾胡同8号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "7a9673e96206da3920022075",
  "telephone": "(010)65222993",
  "detail": 1,
  "uid": "7a9673e96206da3920022075"
}, {
  "name": "未名酒店(北京王府井店)",
  "location": {
    "lat": 39.921545,
    "lng": 116.41693
  },
  "address": "北京市东城区东安门大街16号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "e56bf5e3f71c8c5d0782c20a",
  "detail": 1,
  "uid": "e56bf5e3f71c8c5d0782c20a"
}, {
  "name": "北京航招宾馆(原中航第一招待所)",
  "location": {
    "lat": 39.938421,
    "lng": 116.4223
  },
  "address": "北京市东城区东四北大街汪芝麻胡同16号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "detail": 1,
  "uid": "d463300bd8307d6e6849f3e0"
}, {
  "name": "北京王府井西华智德饭店",
  "location": {
    "lat": 39.924912,
    "lng": 116.411052
  },
  "address": "北京市东城区北河沿大街智德北巷5号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "detail": 1,
  "uid": "64ff3be1f87226a290114c64"
}, {
  "name": "北京成信宾馆(天坛店)",
  "location": {
    "lat": 39.88039,
    "lng": 116.426976
  },
  "address": "北京市东城区市东城区天坛东路77号天坛东里",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "832489f9240f80c0a4c756b4",
  "detail": 1,
  "uid": "832489f9240f80c0a4c756b4"
}, {
  "name": "百时快捷酒店(北京天坛店)",
  "location": {
    "lat": 39.89339,
    "lng": 116.43329
  },
  "address": "北京市东城区法华寺街10号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "251374c9474cc926a11de901",
  "detail": 1,
  "uid": "251374c9474cc926a11de901"
}, {
  "name": "北京花园宜成宾馆",
  "location": {
    "lat": 39.951802,
    "lng": 116.410459
  },
  "address": "北京市东城区车辇店胡同甲33号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "c79a073ec09ab6ee72210ba7",
  "detail": 1,
  "uid": "c79a073ec09ab6ee72210ba7"
}, {
  "name": "北京宝鼎中心酒店式公寓",
  "location": {
    "lat": 39.906218,
    "lng": 116.420544
  },
  "address": "北京市东城区东打磨厂街7号a座",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "e80284283dd5ddb48e77273a",
  "telephone": "18601157111",
  "detail": 1,
  "uid": "e80284283dd5ddb48e77273a"
}, {
  "name": "首都宾馆-停车场",
  "location": {
    "lat": 39.907647,
    "lng": 116.415582
  },
  "address": "北京市东城区前门东大街3号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "detail": 1,
  "uid": "5ffb1816fb28e65e6e476087"
}, {
  "name": "北京诺富特和平宾馆-停车场",
  "location": {
    "lat": 39.92204,
    "lng": 116.421612
  },
  "address": "北京市东城区金鱼胡同3号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "detail": 1,
  "uid": "cc8aa959befbfa53a8175a13"
}, {
  "name": "北京金龙建国温泉酒店-停车场",
  "location": {
    "lat": 39.911798,
    "lng": 116.441581
  },
  "address": "北京市东城区建国门南大街5号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "20b686cc6f5b7db30bccdd02",
  "detail": 1,
  "uid": "20b686cc6f5b7db30bccdd02"
}, {
  "name": "如家酒店(朝阳门地铁站店)-停车场",
  "location": {
    "lat": 39.933462,
    "lng": 116.435772
  },
  "address": "北京市东城区朝阳门内仓南胡同14号院1号楼(朝内大街北侧苍南胡同内)",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "detail": 1,
  "uid": "c8c6ce3b8c82ffcd7c29bd10"
}, {
  "name": "北京宁夏宾馆-地下停车场",
  "location": {
    "lat": 39.950877,
    "lng": 116.413054
  },
  "address": "北京市东城区分司厅胡同13号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "detail": 1,
  "uid": "f720f6c92b44d12c2bd7abe2"
}, {
  "name": "北京鸿缘家庭快捷公寓",
  "location": {
    "lat": 39.979751,
    "lng": 116.407881
  },
  "address": "安贞路安贞西里一区16号楼1-4",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "telephone": "18511820955",
  "detail": 1,
  "uid": "75388e20b9f7438901294f92"
}, {
  "name": "瑞兆酒店(北京国贸店)",
  "location": {
    "lat": 39.906534,
    "lng": 116.470146
  },
  "address": "百子湾路37号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "0a46dc0f116dd0473062120b",
  "telephone": "(010)87776666",
  "detail": 1,
  "uid": "0a46dc0f116dd0473062120b"
}, {
  "name": "和家宾馆(北京安贞医院店)",
  "location": {
    "lat": 39.970023,
    "lng": 116.411986
  },
  "address": "北京市朝阳区外馆斜街安定门外外馆斜街1号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "0f25f17910345a664207c1af",
  "telephone": "(010)68335555",
  "detail": 1,
  "uid": "0f25f17910345a664207c1af"
}, {
  "name": "格林豪泰酒店(北京天坛光明桥肿瘤医院店)",
  "location": {
    "lat": 39.884586,
    "lng": 116.453357
  },
  "address": "北京市朝阳区光明桥劲松七区725号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "cc0849a00ec5164994031939",
  "telephone": "13716381393",
  "detail": 1,
  "uid": "cc0849a00ec5164994031939"
}, {
  "name": "如家酒店(北京燕莎新源里店)",
  "location": {
    "lat": 39.953871,
    "lng": 116.455687
  },
  "address": "新源西里中街12号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "",
  "telephone": "(010)64666680",
  "detail": 1,
  "uid": "8317983de3abcff132870a24"
}, {
  "name": "北京昆仑饭店",
  "location": {
    "lat": 39.954122,
    "lng": 116.466039
  },
  "address": "北京市朝阳区新源南路2号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "669775d035aa1b42fd0eb008",
  "detail": 1,
  "uid": "669775d035aa1b42fd0eb008"
}, {
  "name": "北京丹阳宾馆",
  "location": {
    "lat": 40.055451,
    "lng": 116.41638
  },
  "address": "立清路6号院2号楼2层",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "",
  "telephone": "(010)84671047",
  "detail": 1,
  "uid": "764672e504be6ab494ec8453"
}, {
  "name": "汉庭酒店(北京国贸双井地铁站店)",
  "location": {
    "lat": 39.895853,
    "lng": 116.468577
  },
  "address": "北京市朝阳区东三环南路48号双井桥南",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "23b6405854bc9f8b03ff2d7f",
  "telephone": "(010)67766600",
  "detail": 1,
  "uid": "23b6405854bc9f8b03ff2d7f"
}, {
  "name": "汉庭酒店(北京国贸四惠店)",
  "location": {
    "lat": 39.908869,
    "lng": 116.498061
  },
  "address": "深沟村1号院",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "2c6ca346a26a12ec31870ae6",
  "telephone": "(010)87797099",
  "detail": 1,
  "uid": "2c6ca346a26a12ec31870ae6"
}, {
  "name": "汉庭酒店(北京站店)",
  "location": {
    "lat": 39.894248,
    "lng": 116.451938
  },
  "address": "劲松九区907号楼东二环辅路路东",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "29fda296a1ce26275cbe86ce",
  "telephone": "(010)67765566",
  "detail": 1,
  "uid": "29fda296a1ce26275cbe86ce"
}, {
  "name": "北京日坛宾馆",
  "location": {
    "lat": 39.923209,
    "lng": 116.446907
  },
  "address": "北京市朝阳区日坛路1号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "173dd6007966fb1cd82f280f",
  "detail": 1,
  "uid": "173dd6007966fb1cd82f280f"
}, {
  "name": "北京奥慧宾馆",
  "location": {
    "lat": 40.007182,
    "lng": 116.419417
  },
  "address": "安慧北里逸园20号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "7fd72311e6a336865cbe8608",
  "telephone": "(010)64920443",
  "detail": 1,
  "uid": "7fd72311e6a336865cbe8608"
}, {
  "name": "汉庭酒店(北京燕莎霄云桥店)",
  "location": {
    "lat": 39.976618,
    "lng": 116.489517
  },
  "address": "芳园南街1号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "d4034eb36485d9efc0364401",
  "detail": 1,
  "uid": "d4034eb36485d9efc0364401"
}, {
  "name": "如家酒店(北京水立方体育馆店)",
  "location": {
    "lat": 40.002869,
    "lng": 116.385214
  },
  "address": "南沙滩8号院",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "",
  "telephone": "(010)64865818",
  "detail": 1,
  "uid": "a17bd49324ab5a6779b55cdc"
}, {
  "name": "全季酒店(三里屯工体南门店)",
  "location": {
    "lat": 39.932402,
    "lng": 116.462885
  },
  "address": "北京市朝阳区白家庄路甲6号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "telephone": "(010)65007718,13001138779",
  "detail": 1,
  "uid": "0ae2cd98ce9b6a774251c0e5"
}, {
  "name": "汉庭酒店(北京三里屯SOHO太古里店)",
  "location": {
    "lat": 39.935738,
    "lng": 116.460382
  },
  "address": "中纺里20号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "34f68ab0bedddd138e55ece3",
  "telephone": "(010)65005959",
  "detail": 1,
  "uid": "34f68ab0bedddd138e55ece3"
}, {
  "name": "速8酒店(北京双桥地铁站店)",
  "location": {
    "lat": 39.920903,
    "lng": 116.581552
  },
  "address": "三间房乡东街甲2号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "13e9dd462b7dd8e6601c6749",
  "telephone": "(010)56212255",
  "detail": 1,
  "uid": "13e9dd462b7dd8e6601c6749"
}, {
  "name": "如家酒店(北京潘家园店)",
  "location": {
    "lat": 39.87678,
    "lng": 116.458661
  },
  "address": "弘善家园304号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "ed1cb3b373722c4b15c905a6",
  "telephone": "(010)67049122",
  "detail": 1,
  "uid": "ed1cb3b373722c4b15c905a6"
}, {
  "name": "北京京天宾馆",
  "location": {
    "lat": 39.984912,
    "lng": 116.478053
  },
  "address": "阜通东大街花家地南里9号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "5e53af1a5f20335f4151c055",
  "telephone": "(010)64745817",
  "detail": 1,
  "uid": "5e53af1a5f20335f4151c055"
}, {
  "name": "全季酒店(北京劲松中街店)",
  "location": {
    "lat": 39.891041,
    "lng": 116.457589
  },
  "address": "北京市朝阳区劲松路1号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "detail": 1,
  "uid": "0a3f5a8b56eb5b75f03cba34"
}, {
  "name": "如家酒店(北京国贸双井地铁站店)",
  "location": {
    "lat": 39.895934,
    "lng": 116.468565
  },
  "address": "东三环南路48号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "e2c734e418be264415a19006",
  "telephone": "(010)67786633",
  "detail": 1,
  "uid": "e2c734e418be264415a19006"
}, {
  "name": "如家派柏·云酒店(北京朝阳大悦城朝阳高铁站店)",
  "location": {
    "lat": 39.942173,
    "lng": 116.523916
  },
  "address": "青年路甲10号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "e116be546d5ed162c91b9501",
  "telephone": "(010)85576230",
  "detail": 1,
  "uid": "e116be546d5ed162c91b9501"
}, {
  "name": "如家酒店(北京国贸劲松店)",
  "location": {
    "lat": 39.888376,
    "lng": 116.45728
  },
  "address": "劲松八区805号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "593850fbbf4f0844df1e520b",
  "telephone": "(010)87776766-9",
  "detail": 1,
  "uid": "593850fbbf4f0844df1e520b"
}, {
  "name": "如家酒店(北京四惠百子湾地铁站店)",
  "location": {
    "lat": 39.904266,
    "lng": 116.505764
  },
  "address": "北京市朝阳区石门村路2号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "d5464cf8d7f97b4efda77801",
  "telephone": "(010)67712211",
  "detail": 1,
  "uid": "d5464cf8d7f97b4efda77801"
}, {
  "name": "北京北辰亚运村宾馆",
  "location": {
    "lat": 40.000354,
    "lng": 116.412928
  },
  "address": "北辰东路8号东侧",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "be54cde97d77074178f79608",
  "telephone": "(010)64991199,(010)64993088",
  "detail": 1,
  "uid": "be54cde97d77074178f79608"
}, {
  "name": "北京海德温泉酒店",
  "location": {
    "lat": 39.941605,
    "lng": 116.522835
  },
  "address": "北京市朝阳区青年路西里甲1号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "57991a0d98f64c5f2b06ce0e",
  "telephone": "(010)58395511",
  "detail": 1,
  "uid": "57991a0d98f64c5f2b06ce0e"
}, {
  "name": "北京东直门亚朵S酒店",
  "location": {
    "lat": 39.957109,
    "lng": 116.450317
  },
  "address": "北京市朝阳区左家庄街道香河园路15号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "e006c13f2587dc7375e5b6d6",
  "telephone": "(010)64681133",
  "detail": 1,
  "uid": "e006c13f2587dc7375e5b6d6"
}, {
  "name": "如家精选酒店(北京国展三元桥店)",
  "location": {
    "lat": 39.9719,
    "lng": 116.456831
  },
  "address": "西坝河东里36号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "7fd72311e6a536865cbe8606",
  "telephone": "(010)64669991",
  "detail": 1,
  "uid": "7fd72311e6a536865cbe8606"
}, {
  "name": "如家酒店(北京国展燕莎三元东桥店)",
  "location": {
    "lat": 39.958282,
    "lng": 116.462877
  },
  "address": "三源里街16号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "f76314b7288ca1aafb2d6126",
  "telephone": "(010)64648806,4008203333",
  "detail": 1,
  "uid": "f76314b7288ca1aafb2d6126"
}, {
  "name": "北京凯优优选酒店(北京国家会议中心店)",
  "location": {
    "lat": 40.0034,
    "lng": 116.424823
  },
  "address": "北苑路凯旋城170号D座二层207",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "17bdd513fe42321526d2bbf7",
  "telephone": "010-58235890",
  "detail": 1,
  "uid": "17bdd513fe42321526d2bbf7"
}, {
  "name": "尚客优连锁酒店(北京金盏嘉园店)",
  "location": {
    "lat": 40.016265,
    "lng": 116.562055
  },
  "address": "金盏嘉园c区1号楼底商",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "684835bdb38ef96ff942b29d",
  "telephone": "(010)62199979",
  "detail": 1,
  "uid": "684835bdb38ef96ff942b29d"
}, {
  "name": "如家酒店·neo(北京朝阳公园朝阳火车站店)",
  "location": {
    "lat": 39.941431,
    "lng": 116.509375
  },
  "address": "石佛营东里小区105号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "3be122e1a74b35511ef74d51",
  "telephone": "(010)85833388-9",
  "detail": 1,
  "uid": "3be122e1a74b35511ef74d51"
}, {
  "name": "汉庭酒店(北京朝阳公园店)",
  "location": {
    "lat": 39.951199,
    "lng": 116.527114
  },
  "address": "姚家园北路产业园C座",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "",
  "telephone": "(010)85828188",
  "detail": 1,
  "uid": "615085791eaa777a4d2fdf93"
}, {
  "name": "格林豪泰智选酒店(北京十里河地铁站店)",
  "location": {
    "lat": 39.867243,
    "lng": 116.466198
  },
  "address": "十里河家俱大道8号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "58b2a4e4b87a06953904b13c",
  "telephone": "(010)87152488",
  "detail": 1,
  "uid": "58b2a4e4b87a06953904b13c"
}, {
  "name": "北京华创东润快捷酒店",
  "location": {
    "lat": 40.016015,
    "lng": 116.379017
  },
  "address": "林萃西里16号华创生活广场4层",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "",
  "telephone": "13671021912",
  "detail": 1,
  "uid": "3a1b409199614401ca1b957f"
}, {
  "name": "全季酒店(北京奥体公园店)",
  "location": {
    "lat": 40.003319,
    "lng": 116.38498
  },
  "address": "南沙滩8号院",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "5729fe1ef64ca126bca24073",
  "telephone": "(010)84097867",
  "detail": 1,
  "uid": "5729fe1ef64ca126bca24073"
}, {
  "name": "北京新都宾馆(北苑路北地铁站航空总医院店)",
  "location": {
    "lat": 40.040272,
    "lng": 116.425105
  },
  "address": "北京市朝阳区北苑路42号K酷时尚广场F1",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "",
  "telephone": "(010)84450898",
  "detail": 1,
  "uid": "8e33ee518a57121188f15da2"
}, {
  "name": "大东方花园酒店",
  "location": {
    "lat": 39.870244,
    "lng": 116.496913
  },
  "address": "南磨房乡南大山子8号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "",
  "telephone": "(010)87355555",
  "detail": 1,
  "uid": "67d9504ba0766d6a40ab9a99"
}, {
  "name": "格林豪泰(北京朝阳北苑北京会议中心店)",
  "location": {
    "lat": 40.03201,
    "lng": 116.445489
  },
  "address": "北苑中街8号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "33db5b0457062aa41ef74d36",
  "telephone": "(010)84997024",
  "detail": 1,
  "uid": "33db5b0457062aa41ef74d36"
}, {
  "name": "北京北土城快捷酒店",
  "location": {
    "lat": 39.982885,
    "lng": 116.392532
  },
  "address": "北土城西路16号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "7f28b8d7dc61af14bca822d8",
  "telephone": "(010)62380774",
  "detail": 1,
  "uid": "7f28b8d7dc61af14bca822d8"
}, {
  "name": "格林豪泰(北京朝阳区马泉营地铁站店)",
  "location": {
    "lat": 40.04318,
    "lng": 116.51316
  },
  "address": "马泉营西路旧货市场西门东行270米",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "b9503dbd998bd32ba90dd879",
  "telephone": "18519392757",
  "detail": 1,
  "uid": "b9503dbd998bd32ba90dd879"
}, {
  "name": "北京盛旺东润快捷酒店",
  "location": {
    "lat": 39.99752,
    "lng": 116.419341
  },
  "address": "亚运村安慧里四区5号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "836b013aaf036ab7c27da272",
  "telephone": "(010)64890632",
  "detail": 1,
  "uid": "836b013aaf036ab7c27da272"
}, {
  "name": "北京可丽亚宾馆(燕莎亮马桥店)",
  "location": {
    "lat": 39.952313,
    "lng": 116.477318
  },
  "address": "北京市朝阳区麦子店街19号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "cac5fc768d92f8ea2cb96d01",
  "telephone": "010-65911486",
  "detail": 1,
  "uid": "cac5fc768d92f8ea2cb96d01"
}, {
  "name": "全季北京会议中心店",
  "location": {
    "lat": 40.027331,
    "lng": 116.459504
  },
  "address": "来广营西路8号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "b5d1cca156fe51ea9e9d6849",
  "telephone": "(010)64985088",
  "detail": 1,
  "uid": "b5d1cca156fe51ea9e9d6849"
}, {
  "name": "北京盛达宾馆",
  "location": {
    "lat": 39.922676,
    "lng": 116.516516
  },
  "address": "朝阳路甘露园西里8号院",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "4eb3b53358106c6c4302455d",
  "telephone": "(010)85752605",
  "detail": 1,
  "uid": "4eb3b53358106c6c4302455d"
}, {
  "name": "布丁酒店(北京国展柳芳地铁站店)",
  "location": {
    "lat": 39.963839,
    "lng": 116.438421
  },
  "address": "和平里东土城路甲3号院2号楼首层",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "cd7e2cfdbf9b2f47c26c1402",
  "telephone": "(010)64201446",
  "detail": 1,
  "uid": "cd7e2cfdbf9b2f47c26c1402"
}, {
  "name": "北京长沙宾馆(亚运村店)",
  "location": {
    "lat": 40.012374,
    "lng": 116.412386
  },
  "address": "慧忠北里112号楼一层",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "50f7d1468c50ffdd72210b01",
  "telephone": "(010)64800088-800",
  "detail": 1,
  "uid": "50f7d1468c50ffdd72210b01"
}, {
  "name": "99优选酒店(北京方庄地铁站店)",
  "location": {
    "lat": 39.873333,
    "lng": 116.45014
  },
  "address": "方庄东路新坐标小区南门斜对面",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "2a7a25ec4b42e57a6c3e1b3e",
  "telephone": "(010)87623818",
  "detail": 1,
  "uid": "2a7a25ec4b42e57a6c3e1b3e"
}, {
  "name": "北京华彩宾馆",
  "location": {
    "lat": 39.906748,
    "lng": 116.49189
  },
  "address": "百子湾路18号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "108b1cea1f6f92d13586f4da",
  "telephone": "(010)67733599",
  "detail": 1,
  "uid": "108b1cea1f6f92d13586f4da"
}, {
  "name": "瑞尔利宾馆(北京中日友好医院店)",
  "location": {
    "lat": 39.988191,
    "lng": 116.428073
  },
  "address": "对外经贸大学西门惠新里一区",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "34f68ab0398f500a8f55ec55",
  "telephone": "(010)64954780",
  "detail": 1,
  "uid": "34f68ab0398f500a8f55ec55"
}, {
  "name": "全季酒店(北京会议中心北苑东路店)",
  "location": {
    "lat": 40.031947,
    "lng": 116.444936
  },
  "address": "北京市北苑小街8号2号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "telephone": "(010)63290666-0",
  "detail": 1,
  "uid": "783cb668899f1fddbd484236"
}, {
  "name": "速8精选酒店(北京国贸西大望路店)",
  "location": {
    "lat": 39.909169,
    "lng": 116.485641
  },
  "address": "西大望路6号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "bc49a3790b380d762efaa72f",
  "telephone": "(010)87761877",
  "detail": 1,
  "uid": "bc49a3790b380d762efaa72f"
}, {
  "name": "北京华致宾馆",
  "location": {
    "lat": 39.975548,
    "lng": 116.405711
  },
  "address": "安贞西里四区23号楼深房大厦2层",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "69fcd6dfb1760c36ca291501",
  "telephone": "(010)52660684,18911710196",
  "detail": 1,
  "uid": "69fcd6dfb1760c36ca291501"
}, {
  "name": "朝阳宾馆",
  "location": {
    "lat": 39.923229,
    "lng": 116.477011
  },
  "address": "金台西路8号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "69fcd6dfb17f0c36ca29153e",
  "telephone": "(010)86602688",
  "detail": 1,
  "uid": "69fcd6dfb17f0c36ca29153e"
}, {
  "name": "速8优选酒店(北京工业大学地铁站店)",
  "location": {
    "lat": 39.880531,
    "lng": 116.477644
  },
  "address": "北京市朝阳区松榆里社区6号楼内",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "e186ec6277da5adc3517dc7e",
  "telephone": "01067322077",
  "detail": 1,
  "uid": "e186ec6277da5adc3517dc7e"
}, {
  "name": "如家派柏·云酒店(北京国贸四惠东地铁站店)",
  "location": {
    "lat": 39.916731,
    "lng": 116.522602
  },
  "address": "高碑店镇康家沟168号A座一层",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "405ef6dd5a0fb83b593ac85c",
  "telephone": "(010)65447255,(010)65447299",
  "detail": 1,
  "uid": "405ef6dd5a0fb83b593ac85c"
}, {
  "name": "同福宾馆(北京国展中心店)",
  "location": {
    "lat": 39.97129,
    "lng": 116.444153
  },
  "address": "西坝河西里10号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "4b87b727db2945f38e77273a",
  "detail": 1,
  "uid": "4b87b727db2945f38e77273a"
}, {
  "name": "北京发时达宾馆(三里屯太古里店)",
  "location": {
    "lat": 39.941959,
    "lng": 116.465232
  },
  "address": "三里屯东区中19号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "43b7e88960f4b27358f6be08",
  "telephone": "(010)64178260",
  "detail": 1,
  "uid": "43b7e88960f4b27358f6be08"
}, {
  "name": "安馨居宾馆(北京国展三元桥店)",
  "location": {
    "lat": 39.965045,
    "lng": 116.454421
  },
  "address": "静安里34号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "e56f816a5000cd8985154157",
  "telephone": "(010)84483795",
  "detail": 1,
  "uid": "e56f816a5000cd8985154157"
}, {
  "name": "呼家楼宾馆(北京国贸呼家楼地铁站店)",
  "location": {
    "lat": 39.927737,
    "lng": 116.466512
  },
  "address": "东三环内向军南里二巷5号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "",
  "telephone": "(010)65918164",
  "detail": 1,
  "uid": "4eb3b53358236c6c43024552"
}, {
  "name": "德全酒店(朝阳高铁站朝阳公园店)",
  "location": {
    "lat": 39.940423,
    "lng": 116.503562
  },
  "address": "石佛营西里49号楼（泛海国际南侧）",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "fd680eec9c1986031e58008c",
  "telephone": "(010)85836788",
  "detail": 1,
  "uid": "fd680eec9c1986031e58008c"
}, {
  "name": "北京京客园宾馆",
  "location": {
    "lat": 39.873839,
    "lng": 116.519317
  },
  "address": "垡头北里9号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "083eb7d466d982269122e01b",
  "telephone": "(010)67201686",
  "detail": 1,
  "uid": "083eb7d466d982269122e01b"
}, {
  "name": "汉庭优佳酒店(北京国贸店)",
  "location": {
    "lat": 39.90545,
    "lng": 116.484538
  },
  "address": "西大望路甲16号院5号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "b1c556e86c7e7815b4265537",
  "telephone": "(010)61654658,(010)61654658-0",
  "detail": 1,
  "uid": "b1c556e86c7e7815b4265537"
}, {
  "name": "99优选酒店(北京成寿寺地铁站店)",
  "location": {
    "lat": 39.847176,
    "lng": 116.452782
  },
  "address": "成寿寺路137号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "8c6fa1b9e671875f46572679",
  "telephone": "(010)87637655",
  "detail": 1,
  "uid": "8c6fa1b9e671875f46572679"
}, {
  "name": "如家酒店(北京国展柳芳地铁站店)",
  "location": {
    "lat": 39.95982,
    "lng": 116.43934
  },
  "address": "东土城路12号怡和阳光大厦A座",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "53b17b158b191f7da7c7560a",
  "telephone": "(010)64218686",
  "detail": 1,
  "uid": "53b17b158b191f7da7c7560a"
}, {
  "name": "格林豪泰(北京传媒大学南门店)",
  "location": {
    "lat": 39.904064,
    "lng": 116.566369
  },
  "address": "高碑店乡北花园村FC03A楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "5001ef1020bffe82220262dc",
  "telephone": "19910530256",
  "detail": 1,
  "uid": "5001ef1020bffe82220262dc"
}, {
  "name": "汉庭酒店(北京东直门亮马河店)",
  "location": {
    "lat": 39.952775,
    "lng": 116.452098
  },
  "address": "北京市朝阳区新源西里中街23号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "telephone": "13146265656",
  "detail": 1,
  "uid": "f1f7854709a7a53c3617dc05"
}, {
  "name": "德全奢品酒店(华贸金台路地铁站店)",
  "location": {
    "lat": 39.927906,
    "lng": 116.484279
  },
  "address": "金台北街甲2-1号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "telephone": "(010)85583636,(010)85583939",
  "detail": 1,
  "uid": "8793d275fdce45693310af7a"
}, {
  "name": "汇鑫龙都宾馆(中日友好医院化工大学店)",
  "location": {
    "lat": 39.980072,
    "lng": 116.428236
  },
  "address": "樱花园小区16号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "4ce10ce66795f1b8441a3200",
  "telephone": "(010)64413592",
  "detail": 1,
  "uid": "4ce10ce66795f1b8441a3200"
}, {
  "name": "北京世纪春天宾馆(北京传媒大学地铁站店)",
  "location": {
    "lat": 39.915656,
    "lng": 116.557797
  },
  "address": "定福庄西街与建国路交叉口，近八通线传媒大学站A口",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "504d6113c0ce09aa46572603",
  "telephone": "15810659439",
  "detail": 1,
  "uid": "504d6113c0ce09aa46572603"
}, {
  "name": "富邦四季酒店(北京十里堡青年路地铁站店)",
  "location": {
    "lat": 39.927915,
    "lng": 116.512743
  },
  "address": "十里堡北里18号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "700d2035f20846fe94f08cd0",
  "telephone": "(010)85904388",
  "detail": 1,
  "uid": "700d2035f20846fe94f08cd0"
}, {
  "name": "嘉利华连锁酒店(北京传媒大学北门店)",
  "location": {
    "lat": 39.929428,
    "lng": 116.562164
  },
  "address": "朝阳北路52号院3号楼2楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "c7eca12b2ef8232ee115f900",
  "telephone": "(010)65462421",
  "detail": 1,
  "uid": "c7eca12b2ef8232ee115f900"
}, {
  "name": "翔云楼宾馆",
  "location": {
    "lat": 40.000745,
    "lng": 116.387799
  },
  "address": "北京市朝阳区安翔北路10号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "eb3675036482d00200ec0101",
  "detail": 1,
  "uid": "eb3675036482d00200ec0101"
}, {
  "name": "北京蓝凯宾馆",
  "location": {
    "lat": 39.974627,
    "lng": 116.423467
  },
  "address": "和平里西街1号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "fa01e9371d440753774ff10a",
  "telephone": "(010)84286638",
  "detail": 1,
  "uid": "fa01e9371d440753774ff10a"
}, {
  "name": "格林豪泰快捷酒店(北京国展三元西桥店)",
  "location": {
    "lat": 39.963403,
    "lng": 116.450241
  },
  "address": "北京市朝阳区左家庄北里41号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "4fc3161a866239b03a13fd08",
  "telephone": "(010)64666777",
  "detail": 1,
  "uid": "4fc3161a866239b03a13fd08"
}, {
  "name": "海友酒店(北京管庄传媒大学店)",
  "location": {
    "lat": 39.918752,
    "lng": 116.595148
  },
  "address": "管庄西里65号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "26d3f4af43bfaed254bfff55",
  "telephone": "(010)65459589",
  "detail": 1,
  "uid": "26d3f4af43bfaed254bfff55"
}, {
  "name": "东瑞酒店(北京朝阳高铁站)",
  "location": {
    "lat": 39.964294,
    "lng": 116.514069
  },
  "address": "驼房营南路甲8号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "ed865553ed1610de21026243",
  "telephone": "(010)84305088,(010)84305188",
  "detail": 1,
  "uid": "ed865553ed1610de21026243"
}, {
  "name": "北京北大荒宾馆(鸟巢店)",
  "location": {
    "lat": 39.998243,
    "lng": 116.427474
  },
  "address": "安慧东里21号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "f446091863ebde73b11e363f",
  "telephone": "(010)64910143,(010)64912580",
  "detail": 1,
  "uid": "f446091863ebde73b11e363f"
}, {
  "name": "楚天宾馆(北京十八里店南桥店)",
  "location": {
    "lat": 39.84971,
    "lng": 116.470313
  },
  "address": "十八里店吕家营",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "f60a15ed88eb7becba17e7bf",
  "telephone": "(010)87693826",
  "detail": 1,
  "uid": "f60a15ed88eb7becba17e7bf"
}, {
  "name": "北京奥森宾馆(惠新西街北口地铁站店)",
  "location": {
    "lat": 39.996501,
    "lng": 116.420586
  },
  "address": "安慧里四区1号楼22号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "e6ee2fd2e26de8512b11d136",
  "detail": 1,
  "uid": "e6ee2fd2e26de8512b11d136"
}, {
  "name": "北京燕莎中舍宾馆",
  "location": {
    "lat": 39.956193,
    "lng": 116.456406
  },
  "address": "新源里9号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "cb6188bbb792e446750269b3",
  "telephone": "(010)64641500",
  "detail": 1,
  "uid": "cb6188bbb792e446750269b3"
}, {
  "name": "乐酷假日快捷酒店(北京王四营店)",
  "location": {
    "lat": 39.8927,
    "lng": 116.53305
  },
  "address": "王四营观音景园104号商务楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "273f4af05ddd7b1f5bf6be38",
  "telephone": "(010)67785366",
  "detail": 1,
  "uid": "273f4af05ddd7b1f5bf6be38"
}, {
  "name": "乐游饭店(北京劲松潘家园地铁站店)",
  "location": {
    "lat": 39.885757,
    "lng": 116.467039
  },
  "address": "东三环南路13号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "3c74e0c525e11a000b1cc724",
  "telephone": "(010)67712266",
  "detail": 1,
  "uid": "3c74e0c525e11a000b1cc724"
}, {
  "name": "汉庭北京望京798草场地艺术区酒店",
  "location": {
    "lat": 40.004595,
    "lng": 116.511833
  },
  "address": "北京市朝阳区崔各庄乡草场地368号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "telephone": "(010)87186689",
  "detail": 1,
  "uid": "b0f73124050e6769a0a93496"
}, {
  "name": "万朋宾馆(北京传媒大学朝阳路店)",
  "location": {
    "lat": 39.922144,
    "lng": 116.555732
  },
  "address": "定福庄西里3号院",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "d7b28d1598bbefbdc61b755f",
  "telephone": "(010)65753651",
  "detail": 1,
  "uid": "d7b28d1598bbefbdc61b755f"
}, {
  "name": "北京绍芸旅馆",
  "location": {
    "lat": 39.881259,
    "lng": 116.458394
  },
  "address": "华威西里42号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "cac5fc7612cb0ff22cb96df0",
  "telephone": "(010)67770408",
  "detail": 1,
  "uid": "cac5fc7612cb0ff22cb96df0"
}, {
  "name": "惠强宾馆(北京T1航站楼店)",
  "location": {
    "lat": 40.085329,
    "lng": 116.591566
  },
  "address": "首都机场T1航站楼西侧300米",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "e116be546d51d162c91b9500",
  "telephone": "(010)64561511,17701159398",
  "detail": 1,
  "uid": "e116be546d51d162c91b9500"
}, {
  "name": "兰溪宾馆",
  "location": {
    "lat": 39.99327,
    "lng": 116.436239
  },
  "address": "北京市朝阳区育慧南路1号(环境保护中心院内)",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "7bfa08fc51653e6625d2bb02",
  "detail": 1,
  "uid": "7bfa08fc51653e6625d2bb02"
}, {
  "name": "如家派柏·云酒店(北京国展左家庄店)",
  "location": {
    "lat": 39.959294,
    "lng": 116.450802
  },
  "address": "左家庄前街1号4号楼1至4层",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "cdef4edf2d76dd5728d7ab33",
  "telephone": "(010)64689699",
  "detail": 1,
  "uid": "cdef4edf2d76dd5728d7ab33"
}, {
  "name": "北京望和宾馆(对外经贸大学店)",
  "location": {
    "lat": 39.994142,
    "lng": 116.443633
  },
  "address": "芍药居北里201号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "",
  "telephone": "(010)84612130",
  "detail": 1,
  "uid": "680fb703eb27829c8bb98855"
}, {
  "name": "艺选酒店(北京欢乐谷周家庄地铁站店)",
  "location": {
    "lat": 39.854285,
    "lng": 116.49306
  },
  "address": "十八里店30号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "f1ebd750dac10801bca82228",
  "telephone": "(010)67475658",
  "detail": 1,
  "uid": "f1ebd750dac10801bca82228"
}, {
  "name": "桃丝主题酒店(北京亚运村店)",
  "location": {
    "lat": 39.991605,
    "lng": 116.414424
  },
  "address": "安苑北里14号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "",
  "telephone": "(010)64946883",
  "detail": 1,
  "uid": "2b06b3494b17cebef33cba52"
}, {
  "name": "振东138快捷酒店(北京东旭花园店)",
  "location": {
    "lat": 39.883218,
    "lng": 116.627502
  },
  "address": "双桥东路18号院4174",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "",
  "telephone": "(010)56192288",
  "detail": 1,
  "uid": "dbf19a694abfa023a104644b"
}, {
  "name": "石佛营宾馆(北京朝阳高铁站店)",
  "location": {
    "lat": 39.941141,
    "lng": 116.509278
  },
  "address": "姚家园路石佛营东里105号A座",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "7b7e97fb7f1ddbc6bb17e7a9",
  "telephone": "(010)85826685",
  "detail": 1,
  "uid": "7b7e97fb7f1ddbc6bb17e7a9"
}, {
  "name": "陈家宾馆",
  "location": {
    "lat": 39.977551,
    "lng": 116.409334
  },
  "address": "北京市朝阳区安贞路安贞医院-家属小区",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "telephone": "15010108381,15811070964",
  "detail": 1,
  "uid": "b9d72b013d96aaafd4851f3e"
}, {
  "name": "格林豪泰(北京西直河商业中心店)",
  "location": {
    "lat": 39.849987,
    "lng": 116.533502
  },
  "address": "西直河商业中心南侧（王村路商业大厦）",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "4f801e96093a2cd800ec0186",
  "telephone": "4006998998",
  "detail": 1,
  "uid": "4f801e96093a2cd800ec0186"
}, {
  "name": "北京来吧居快捷酒店",
  "location": {
    "lat": 40.060877,
    "lng": 116.418548
  },
  "address": "立汤路201号院奥北南区六号楼二层",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "416a609e7b9b274b02294f29",
  "telephone": "(010)84958177",
  "detail": 1,
  "uid": "416a609e7b9b274b02294f29"
}, {
  "name": "飞月楼宾馆",
  "location": {
    "lat": 39.9563,
    "lng": 116.448046
  },
  "address": "北京市朝阳区香河园路11号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "f633606ad46665570b69d906",
  "telephone": "(010)66358688",
  "detail": 1,
  "uid": "f633606ad46665570b69d906"
}, {
  "name": "双路旅馆(北京双井地铁站店)",
  "location": {
    "lat": 39.897172,
    "lng": 116.46634
  },
  "address": "垂杨柳北区3号楼旁",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "",
  "telephone": "13901110648",
  "detail": 1,
  "uid": "eef2d5289e3023be3be4a633"
}, {
  "name": "欧亚商务宾馆(北京十里河地铁站肿瘤医院店)",
  "location": {
    "lat": 39.873216,
    "lng": 116.460591
  },
  "address": "弘善家园212号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "2571564b1c80686f4e2fdf53",
  "detail": 1,
  "uid": "2571564b1c80686f4e2fdf53"
}, {
  "name": "九龙苑酒店(北京国贸双井地铁站店)",
  "location": {
    "lat": 39.899937,
    "lng": 116.475826
  },
  "address": "东三环广渠路九龙花园小区内",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "d219bb1dd01dc992f50e77c2",
  "telephone": "(010)87738188,(010)87778388",
  "detail": 1,
  "uid": "d219bb1dd01dc992f50e77c2"
}, {
  "name": "北京星月亮马酒店",
  "location": {
    "lat": 39.966346,
    "lng": 116.497776
  },
  "address": "酒仙桥南路9号楼4号院",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "49a02a7aeb26e13c2b201ad6",
  "detail": 1,
  "uid": "49a02a7aeb26e13c2b201ad6"
}, {
  "name": "捷驿佳宾馆(北京褡裢坡地铁站店)",
  "location": {
    "lat": 39.925113,
    "lng": 116.570887
  },
  "address": "定福庄三间房南街3号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "8fc44ca16b96a4734107c1a6",
  "telephone": "(010)65763636",
  "detail": 1,
  "uid": "8fc44ca16b96a4734107c1a6"
}, {
  "name": "北京奥莱快捷酒店",
  "location": {
    "lat": 40.047876,
    "lng": 116.502199
  },
  "address": "崔各庄乡何各庄74号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "8b0f42a56d580549ad31e5e1",
  "telephone": "(010)84569678",
  "detail": 1,
  "uid": "8b0f42a56d580549ad31e5e1"
}, {
  "name": "北京杉木宾馆",
  "location": {
    "lat": 39.926802,
    "lng": 116.534794
  },
  "address": "黄衫木店路188号院阿曼寓所商街3号楼一层",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "0a91602c95754fea9fec2be6",
  "telephone": "(010)58636619",
  "detail": 1,
  "uid": "0a91602c95754fea9fec2be6"
}, {
  "name": "银鹰温泉宾馆",
  "location": {
    "lat": 39.882466,
    "lng": 116.459402
  },
  "address": "北京市朝阳区潘家园路7号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "",
  "detail": 1,
  "uid": "4eb3b5333afa0e6c4302450b"
}, {
  "name": "北京双井宾馆",
  "location": {
    "lat": 39.896538,
    "lng": 116.468674
  },
  "address": "东三环南路甲46号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "",
  "telephone": "(010)67738917",
  "detail": 1,
  "uid": "d6df91c137587d73f7b9162d"
}, {
  "name": "北京京吉宾馆",
  "location": {
    "lat": 39.990391,
    "lng": 116.494495
  },
  "address": "大山子北里8号楼西侧1幢等7幢6幢2-2003",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "1f090c344200b30cf50e7707",
  "telephone": "(010)64335150",
  "detail": 1,
  "uid": "1f090c344200b30cf50e7707"
}, {
  "name": "速8酒店(北京成寿寺路店)",
  "location": {
    "lat": 39.846836,
    "lng": 116.453179
  },
  "address": "北京市朝阳区成寿寺路137号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "e3a7fd13aa342d4b28b97c36",
  "telephone": "(010)67663760",
  "detail": 1,
  "uid": "e3a7fd13aa342d4b28b97c36"
}, {
  "name": "海月宾馆(北京传媒大学地铁站店)",
  "location": {
    "lat": 39.915789,
    "lng": 116.556176
  },
  "address": "建国路花园闸北里18号楼底商",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "45efdf989698474d90114c13",
  "telephone": "(010)65799508",
  "detail": 1,
  "uid": "45efdf989698474d90114c13"
}, {
  "name": "望花宾馆(北京望京花家地店)",
  "location": {
    "lat": 39.985424,
    "lng": 116.477627
  },
  "address": "花家地南里9号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "764672e5ff4167b494ec8466",
  "telephone": "(010)84772186",
  "detail": 1,
  "uid": "764672e5ff4167b494ec8466"
}, {
  "name": "沐阳时尚连锁宾馆(北京民航店)",
  "location": {
    "lat": 39.925488,
    "lng": 116.53474
  },
  "address": "黄杉木店路阿曼商街8-18",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "",
  "telephone": "(010)58636822",
  "detail": 1,
  "uid": "053229441d45a9a63904b167"
}, {
  "name": "北京雅玉商务宾馆",
  "location": {
    "lat": 40.010162,
    "lng": 116.473628
  },
  "address": "望京南湖东园一区101-11号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "",
  "telephone": "(010)64736606,18601966858",
  "detail": 1,
  "uid": "a95e9bb724f57b4c3586f4b6"
}, {
  "name": "北京安贞汇洋宾馆",
  "location": {
    "lat": 39.977435,
    "lng": 116.412409
  },
  "address": "安贞里二区11号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "bf92f53c1880bec917948ee5",
  "telephone": "(010)64447299,15011000663",
  "detail": 1,
  "uid": "bf92f53c1880bec917948ee5"
}, {
  "name": "北京钰盛天天宾馆",
  "location": {
    "lat": 39.875165,
    "lng": 116.458994
  },
  "address": "十里河华威南路弘善家园309号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "b9844d1fcf1d8d2981a12e09",
  "detail": 1,
  "uid": "b9844d1fcf1d8d2981a12e09"
}, {
  "name": "福运星月宾馆(中国国际展览中心店)",
  "location": {
    "lat": 39.969961,
    "lng": 116.448448
  },
  "address": "西坝河中里9号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "",
  "telephone": "13811812889",
  "detail": 1,
  "uid": "fa7da3e81a0f797b43d63ee5"
}, {
  "name": "北京顺林春宾馆",
  "location": {
    "lat": 39.955549,
    "lng": 116.463417
  },
  "address": "顺源里7号楼一层",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "a1418eb49b0ee502ebe5822d",
  "telephone": "15010712063",
  "detail": 1,
  "uid": "a1418eb49b0ee502ebe5822d"
}, {
  "name": "贵宾宾馆(北京潘家园地铁站店)",
  "location": {
    "lat": 39.883496,
    "lng": 116.465042
  },
  "address": "华威北里甲44号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "df900d92b4db15bdf7b9160b",
  "telephone": "(010)67766900",
  "detail": 1,
  "uid": "df900d92b4db15bdf7b9160b"
}, {
  "name": "北京锦绣祥和宾馆",
  "location": {
    "lat": 40.052382,
    "lng": 116.422743
  },
  "address": "锦芳路1号院9号楼1层33,35室",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "860e3a04f212276f2806ce36",
  "telephone": "(010)64187266,15611754590",
  "detail": 1,
  "uid": "860e3a04f212276f2806ce36"
}, {
  "name": "北京银兴九盛宾馆",
  "location": {
    "lat": 40.000559,
    "lng": 116.43051
  },
  "address": "亚运村小营路9号银座九号大厦三层",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "44207646e0274c72deee8b3a",
  "telephone": "13691451800",
  "detail": 1,
  "uid": "44207646e0274c72deee8b3a"
}, {
  "name": "北京常州宾馆",
  "location": {
    "lat": 39.931766,
    "lng": 116.444455
  },
  "address": "朝外大街吉祥里113号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "cdef4edf2d0add5728d7ab07",
  "detail": 1,
  "uid": "cdef4edf2d0add5728d7ab07"
}, {
  "name": "汇善缘宾馆(北京关庄地铁站店)",
  "location": {
    "lat": 40.008067,
    "lng": 116.433941
  },
  "address": "北京市朝阳区北苑路86号嘉铭桐城d区209楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "0ce65c2df8a58a402d473300",
  "telephone": "(010)60588808,(010)64968687",
  "detail": 1,
  "uid": "0ce65c2df8a58a402d473300"
}, {
  "name": "北京心家宾馆",
  "location": {
    "lat": 40.001417,
    "lng": 116.478914
  },
  "address": "阜通西大街望京新城四区416楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "b533ea4a865bf9584f6d4665",
  "telephone": "(010)84720858",
  "detail": 1,
  "uid": "b533ea4a865bf9584f6d4665"
}, {
  "name": "北京鑫悦凯乐旅馆",
  "location": {
    "lat": 39.977337,
    "lng": 116.410735
  },
  "address": "安贞里三区十二号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "",
  "telephone": "(010)64441675",
  "detail": 1,
  "uid": "24d0550861fa52b612882401"
}, {
  "name": "海友酒店(欢乐谷周家庄地铁站酒店)",
  "location": {
    "lat": 39.85426,
    "lng": 116.492982
  },
  "address": "北京市朝阳区十八里店30号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "telephone": "010-67481782",
  "detail": 1,
  "uid": "44c7d8b4fa0c5f53210262dd"
}, {
  "name": "如家酒店(北京欢乐谷西直河康化桥店)",
  "location": {
    "lat": 39.843192,
    "lng": 116.526357
  },
  "address": "十八里店乡老君堂518号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "91b769e094acb5b417b54bb1",
  "telephone": "(010)67490122-9",
  "detail": 1,
  "uid": "91b769e094acb5b417b54bb1"
}, {
  "name": "北京升港国际酒店",
  "location": {
    "lat": 40.049695,
    "lng": 116.598867
  },
  "address": "北京首都机场生活区西平街12号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "61085211d2a288b8c51b753d",
  "telephone": "(010)64584721,(010)64588080",
  "detail": 1,
  "uid": "61085211d2a288b8c51b753d"
}, {
  "name": "北京莲都宾馆",
  "location": {
    "lat": 39.847426,
    "lng": 116.513849
  },
  "address": "十八里店乡老君堂武基路综合楼东段",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "1a69acd7234285dbbda24051",
  "telephone": "(010)87306003",
  "detail": 1,
  "uid": "1a69acd7234285dbbda24051"
}, {
  "name": "北京颐和宾馆",
  "location": {
    "lat": 39.923773,
    "lng": 116.48834
  },
  "address": "朝阳路红庙北里90号楼2层",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "77e42b96ed04df420d3ddac2",
  "telephone": "(010)65932998",
  "detail": 1,
  "uid": "77e42b96ed04df420d3ddac2"
}, {
  "name": "交通宾馆(外馆斜街店)",
  "location": {
    "lat": 39.971595,
    "lng": 116.40531
  },
  "address": "北京市朝阳区外馆斜街3号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "5c56edd671563f43a1d23001",
  "telephone": "(010)64259118,(010)85285566",
  "detail": 1,
  "uid": "5c56edd671563f43a1d23001"
}, {
  "name": "如家旗下华驿精选酒店(北京双井地铁站店)",
  "location": {
    "lat": 39.897035,
    "lng": 116.470628
  },
  "address": "北京市广渠路66号院百环家园西区4号楼1楼(朝阳区图书馆对面)",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "telephone": "(010)56883619,19910172702",
  "detail": 1,
  "uid": "eb09c5ac197a2efb9222e0d8"
}, {
  "name": "易佰连锁旅店(北京十八里店老君堂店)",
  "location": {
    "lat": 39.849244,
    "lng": 116.516149
  },
  "address": "十八里店乡老君堂中路甲一号公交北站对面",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "a0d3c67fff47c740d618b785",
  "detail": 1,
  "uid": "a0d3c67fff47c740d618b785"
}, {
  "name": "北京九龙发宾馆",
  "location": {
    "lat": 40.004821,
    "lng": 116.508698
  },
  "address": "草场地村172号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "",
  "detail": 1,
  "uid": "ab7e14ac57caca9a95f08ca8"
}, {
  "name": "北京京城宾馆",
  "location": {
    "lat": 39.967467,
    "lng": 116.445118
  },
  "address": "西坝河南里3号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "aa40108b9e5a260cc5effb08",
  "telephone": "(010)64608688,(010)64633435",
  "detail": 1,
  "uid": "aa40108b9e5a260cc5effb08"
}, {
  "name": "海友酒店(北京潘家园地铁站店)",
  "location": {
    "lat": 39.884772,
    "lng": 116.463043
  },
  "address": "北京市朝阳区华威北里20号楼1楼底商",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "telephone": "010-67722530",
  "detail": 1,
  "uid": "63f5f789a47977c92dfaa7de"
}, {
  "name": "福家宾馆(北京国展中心店)",
  "location": {
    "lat": 39.971907,
    "lng": 116.445336
  },
  "address": "西坝河西里社区平房甲6号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "",
  "detail": 1,
  "uid": "923ffd0049957baed92f282d"
}, {
  "name": "雅静宾馆(北京潘家园地铁站肿瘤医院店)",
  "location": {
    "lat": 39.881394,
    "lng": 116.468473
  },
  "address": "潘家园桥松榆北路2号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "25ec69fcd1c8dc64c36c14e1",
  "telephone": "(010)67317766",
  "detail": 1,
  "uid": "25ec69fcd1c8dc64c36c14e1"
}, {
  "name": "丹枫快捷酒店(北京朝阳高铁站大悦城店)",
  "location": {
    "lat": 39.939636,
    "lng": 116.520243
  },
  "address": "青年路西里3号院6号楼3层F3-06",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "03377566b9945812f82213a4",
  "telephone": "15011327168",
  "detail": 1,
  "uid": "03377566b9945812f82213a4"
}, {
  "name": "北京通盛宾馆",
  "location": {
    "lat": 39.889887,
    "lng": 116.553095
  },
  "address": "王四营北路南花园168号通盛园区",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "4ea3f2f182425db3aecb6602",
  "detail": 1,
  "uid": "4ea3f2f182425db3aecb6602"
}, {
  "name": "北京聚源汇丰宾馆",
  "location": {
    "lat": 40.000638,
    "lng": 116.471057
  },
  "address": "望京南湖南路8号院3号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "df208753710a42b243afe647",
  "telephone": "(010)64728166",
  "detail": 1,
  "uid": "df208753710a42b243afe647"
}, {
  "name": "松花湖宾馆(北京安贞医院店)",
  "location": {
    "lat": 39.971363,
    "lng": 116.412478
  },
  "address": "安华里四区1楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "34059f9761a4134d71455b5a",
  "telephone": "(010)64227910",
  "detail": 1,
  "uid": "34059f9761a4134d71455b5a"
}, {
  "name": "鑫福海宾馆(北京劲松地铁站店)",
  "location": {
    "lat": 39.88884,
    "lng": 116.465964
  },
  "address": "劲松中街劲松三区308号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "",
  "telephone": "(010)67755626",
  "detail": 1,
  "uid": "b7021bf81993c7e3f4e73b06"
}, {
  "name": "北京丽泰商务宾馆",
  "location": {
    "lat": 39.958434,
    "lng": 116.451246
  },
  "address": "北京朝阳区左家庄南斜街三区7号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "22adf52a04751bfab9df8f2d",
  "telephone": "15710094668",
  "detail": 1,
  "uid": "22adf52a04751bfab9df8f2d"
}, {
  "name": "尚宜阁宾馆",
  "location": {
    "lat": 39.970124,
    "lng": 116.409094
  },
  "address": "北京市朝阳区安华路安华里五区3层",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "d9bee7cadb2d2840631c676c",
  "detail": 1,
  "uid": "d9bee7cadb2d2840631c676c"
}, {
  "name": "北京瑞祥宾馆",
  "location": {
    "lat": 39.92194,
    "lng": 116.596112
  },
  "address": "管庄西里八十中学对面",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "fa2364d57ddd798382a12ec7",
  "telephone": "(010)65760917",
  "detail": 1,
  "uid": "fa2364d57ddd798382a12ec7"
}, {
  "name": "北京顺康宾馆",
  "location": {
    "lat": 39.981126,
    "lng": 116.410715
  },
  "address": "安贞里一区20号楼(安贞医院北门)",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "",
  "telephone": "(010)64433201",
  "detail": 1,
  "uid": "6113ef7700299c6a8f7727b5"
}, {
  "name": "天天如家公寓健翔桥店(小关西后街分店)",
  "location": {
    "lat": 39.986453,
    "lng": 116.387833
  },
  "address": "北京市朝阳区祁家豁子街8号健翔国际公寓",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "f1f5cac51bad308136b06cdc",
  "detail": 1,
  "uid": "f1f5cac51bad308136b06cdc"
}, {
  "name": "北京兰际酒店",
  "location": {
    "lat": 40.054608,
    "lng": 116.413838
  },
  "address": "立清路5号院7号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "82fd410ad85d9f8e901fc9d8",
  "detail": 1,
  "uid": "82fd410ad85d9f8e901fc9d8"
}, {
  "name": "如家酒店(北京西客站北广场店)",
  "location": {
    "lat": 39.902447,
    "lng": 116.324002
  },
  "address": "北京市丰台区莲花池东路120-2号北恒大厦6层",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "5c2dc21da7209e1d6fc02c37",
  "telephone": "4008203333",
  "detail": 1,
  "uid": "5c2dc21da7209e1d6fc02c37"
}, {
  "name": "正阳林园宾馆(北京丰台火车站店)",
  "location": {
    "lat": 39.855239,
    "lng": 116.292614
  },
  "address": "正阳大街文体路南永善里小区2号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "e6ee2fd2e216e8512b11d13f",
  "telephone": "17057087555",
  "detail": 1,
  "uid": "e6ee2fd2e216e8512b11d13f"
}, {
  "name": "如家酒店(北京天坛医院店)",
  "location": {
    "lat": 39.843044,
    "lng": 116.312715
  },
  "address": "鸿业兴园3号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "64016ceb6c6914f235b06c44",
  "telephone": "(010)63786568",
  "detail": 1,
  "uid": "64016ceb6c6914f235b06c44"
}, {
  "name": "北京圣德春宾馆",
  "location": {
    "lat": 39.848848,
    "lng": 116.415829
  },
  "address": "南顶路西口281号城市时尚家园",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "00c6c2d1951ee9f19f09f73e",
  "telephone": "(010)67260071",
  "detail": 1,
  "uid": "00c6c2d1951ee9f19f09f73e"
}, {
  "name": "福到家宾馆(北京玉泉营桥店)",
  "location": {
    "lat": 39.858853,
    "lng": 116.347524
  },
  "address": "南三环西路69号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "70c3d8866128d2c507026f31",
  "telephone": "(010)63300353",
  "detail": 1,
  "uid": "70c3d8866128d2c507026f31"
}, {
  "name": "布丁酒店(北京南站北进口店)",
  "location": {
    "lat": 39.871943,
    "lng": 116.384128
  },
  "address": "北京市丰台区巴荘子124号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "fd5874ec38983b349b68b410",
  "detail": 1,
  "uid": "fd5874ec38983b349b68b410"
}, {
  "name": "速8酒店(北京西站太平桥店)",
  "location": {
    "lat": 39.882983,
    "lng": 116.322046
  },
  "address": "北京市丰台区西三环南路15号华源二里7号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "7fe5c378468699a16fc02cf7",
  "telephone": "(010)63425022",
  "detail": 1,
  "uid": "7fe5c378468699a16fc02cf7"
}, {
  "name": "如家酒店(北京首都经贸大学天坛医院店)",
  "location": {
    "lat": 39.854246,
    "lng": 116.326291
  },
  "address": "丰台东路育芳园小区19号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "75fb71bf376c7565f82d61bb",
  "telephone": "(010)53032333",
  "detail": 1,
  "uid": "75fb71bf376c7565f82d61bb"
}, {
  "name": "速8酒店(北京刘家窑地铁站店)",
  "location": {
    "lat": 39.863155,
    "lng": 116.431533
  },
  "address": "南三环东路刘家窑横桥东横六条甲一号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "87248d96944bd1ce2906ce85",
  "telephone": "(010)67623522",
  "detail": 1,
  "uid": "87248d96944bd1ce2906ce85"
}, {
  "name": "北京君意缘宾馆",
  "location": {
    "lat": 39.868196,
    "lng": 116.387486
  },
  "address": "洋桥北里19号楼东侧1-2幢一层",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "6e8477de4ea542a7a3acc4f0",
  "telephone": "(010)87289165",
  "detail": 1,
  "uid": "6e8477de4ea542a7a3acc4f0"
}, {
  "name": "如家酒店·neo(北京蒲黄榆地铁站店)",
  "location": {
    "lat": 39.866481,
    "lng": 116.422644
  },
  "address": "定安路定安东里18号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "a7c56ee0419935aaa3acc403",
  "telephone": "(010)67639191",
  "detail": 1,
  "uid": "a7c56ee0419935aaa3acc403"
}, {
  "name": "汉庭酒店(北京南站店)",
  "location": {
    "lat": 39.872589,
    "lng": 116.375393
  },
  "address": "右安门外开阳里二街西巷4号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "9fbfeef24c317b5cece4a5e3",
  "telephone": "(010)83557788",
  "detail": 1,
  "uid": "9fbfeef24c317b5cece4a5e3"
}, {
  "name": "速8酒店(北京角门东地铁站店)",
  "location": {
    "lat": 39.847372,
    "lng": 116.392638
  },
  "address": "西马场路6号院14号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "7f7f4483a599db59fb221352",
  "telephone": "(010)87591136,18500598177",
  "detail": 1,
  "uid": "7f7f4483a599db59fb221352"
}, {
  "name": "速8酒店(北京南苑和义地铁站店)",
  "location": {
    "lat": 39.821204,
    "lng": 116.409021
  },
  "address": "和义东里五区9号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "a510bb37f2183d036949f345",
  "telephone": "(010)67973228",
  "detail": 1,
  "uid": "a510bb37f2183d036949f345"
}, {
  "name": "全季酒店(北京总部基地郭公庄地铁站店)",
  "location": {
    "lat": 39.820195,
    "lng": 116.311191
  },
  "address": "北京市丰台区郭公庄中街18号院2号楼1-102号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "telephone": "(010)83050583-0",
  "detail": 1,
  "uid": "1cc161f4c165d6bf9e9d682c"
}, {
  "name": "如家酒店(北京西客站丽泽桥店)",
  "location": {
    "lat": 39.875573,
    "lng": 116.320045
  },
  "address": "西三环南路44号-218",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "79453e94fa5163623913fd52",
  "telephone": "(010)63300899",
  "detail": 1,
  "uid": "79453e94fa5163623913fd52"
}, {
  "name": "长征宾馆(南大红门路店)",
  "location": {
    "lat": 39.806953,
    "lng": 116.424177
  },
  "address": "北京市丰台区南大红门路1号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "a1418eb404667c66ebe58231",
  "telephone": "(010)68380138",
  "detail": 1,
  "uid": "a1418eb404667c66ebe58231"
}, {
  "name": "京铁大酒店(北京西站南广场店)",
  "location": {
    "lat": 39.899466,
    "lng": 116.32865
  },
  "address": "广莲路13号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "ebeeca4692a3faa0eb12e4c7",
  "telephone": "(010)63955511-6101",
  "detail": 1,
  "uid": "ebeeca4692a3faa0eb12e4c7"
}, {
  "name": "桔子酒店(北京总部基地天坛医院店)",
  "location": {
    "lat": 39.841874,
    "lng": 116.317363
  },
  "address": "北京市康辛路6号院7号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "telephone": "(010)83816368",
  "detail": 1,
  "uid": "1674e951f7070fae43024583"
}, {
  "name": "桔子酒店(北京总部基地科技园店)",
  "location": {
    "lat": 39.828809,
    "lng": 116.285257
  },
  "address": "北京市丰台区外环西路26号院59号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "telephone": "(010)63710088",
  "detail": 1,
  "uid": "8fd12e8aacfe5a89a9059db3"
}, {
  "name": "如家精选酒店(北京宋家庄地铁站店)",
  "location": {
    "lat": 39.852209,
    "lng": 116.437884
  },
  "address": "宋家庄苇子坑149号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "e27e797500955731b45f1e7c",
  "telephone": "(010)52216999",
  "detail": 1,
  "uid": "e27e797500955731b45f1e7c"
}, {
  "name": "如家酒店(北京丰台火车站泥洼地铁站店)",
  "location": {
    "lat": 39.863697,
    "lng": 116.319802
  },
  "address": "丰管路22号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "e6515242c6335598f5c59cbc",
  "telephone": "(010)53029518",
  "detail": 1,
  "uid": "e6515242c6335598f5c59cbc"
}, {
  "name": "如家酒店·neo(北京丰台体育中心岳各庄桥店)",
  "location": {
    "lat": 39.876845,
    "lng": 116.286342
  },
  "address": "西四环南路31号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "1eeed546bc0e9bebb5147fc1",
  "telephone": "(010)63812666",
  "detail": 1,
  "uid": "1eeed546bc0e9bebb5147fc1"
}, {
  "name": "北京恒旗宾馆",
  "location": {
    "lat": 39.896305,
    "lng": 116.267238
  },
  "address": "西四环大成路青塔芳园4号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "2afecc47a46039edaf31e59c",
  "telephone": "17801521682",
  "detail": 1,
  "uid": "2afecc47a46039edaf31e59c"
}, {
  "name": "如家酒店·neo(北京南站草桥地铁站店)",
  "location": {
    "lat": 39.851919,
    "lng": 116.360697
  },
  "address": "镇国寺北街恋日生活广场6号楼底商",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "fa96becbdc76253a9222e027",
  "telephone": "(010)56533335",
  "detail": 1,
  "uid": "fa96becbdc76253a9222e027"
}, {
  "name": "和逸酒店(北京南苑和义地铁站店)",
  "location": {
    "lat": 39.823809,
    "lng": 116.402237
  },
  "address": "和义西里北街8号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "c46fa4b65db3d9f0223bf243",
  "telephone": "(010)67969098",
  "detail": 1,
  "uid": "c46fa4b65db3d9f0223bf243"
}, {
  "name": "尚客优精选酒店(北京南站草桥地铁站店)",
  "location": {
    "lat": 39.855755,
    "lng": 116.366562
  },
  "address": "草桥东路8号院1号楼4层",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "8d051c16cd84f6a6eee4a5f7",
  "telephone": "(010)67579016",
  "detail": 1,
  "uid": "8d051c16cd84f6a6eee4a5f7"
}, {
  "name": "北京辰茂南粤苑酒店",
  "location": {
    "lat": 39.854049,
    "lng": 116.34532
  },
  "address": "北京市丰台区南三环西路86号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "7bfa08fc516b3e6625d2bb04",
  "telephone": "(010)58053333",
  "detail": 1,
  "uid": "7bfa08fc516b3e6625d2bb04"
}, {
  "name": "北京国汉鸿伟宾馆",
  "location": {
    "lat": 39.800992,
    "lng": 116.375174
  },
  "address": "槐房西路南口1号一、二层",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "89fd4ea321f90f5ee4e965f3",
  "telephone": "(010)67957288",
  "detail": 1,
  "uid": "89fd4ea321f90f5ee4e965f3"
}, {
  "name": "长征宾馆(南大红门路店)",
  "location": {
    "lat": 39.806953,
    "lng": 116.424177
  },
  "address": "北京市丰台区南大红门路1号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "a1418eb404667c66ebe58231",
  "telephone": "(010)68380138",
  "detail": 1,
  "uid": "a1418eb404667c66ebe58231"
}, {
  "name": "如家酒店(北京丰台火车站丰台南路地铁站店)",
  "location": {
    "lat": 39.848274,
    "lng": 116.303636
  },
  "address": "北京市丰台区丰台南路11号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "b9e5d0b8743379c180a12e93",
  "telephone": "(010)63719488",
  "detail": 1,
  "uid": "b9e5d0b8743379c180a12e93"
}, {
  "name": "速8酒店(北京南站赵公口店)",
  "location": {
    "lat": 39.860998,
    "lng": 116.420389
  },
  "address": "光彩路西赵公口15号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "8af6e5617066dd7fcc06a4ae",
  "telephone": "(010)87256419",
  "detail": 1,
  "uid": "8af6e5617066dd7fcc06a4ae"
}, {
  "name": "北京百兴盛宾馆",
  "location": {
    "lat": 39.846692,
    "lng": 116.289629
  },
  "address": "看丹路29号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "",
  "telephone": "(010)63735980",
  "detail": 1,
  "uid": "75d0881a025bc54d3a04b125"
}, {
  "name": "蔻龄酒店(北京东高地火箭万源五福堂地铁站店)",
  "location": {
    "lat": 39.794392,
    "lng": 116.426701
  },
  "address": "北京市丰台区警备东路6号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "0a15c7ecd0b2ede5ed74f863",
  "telephone": "(010)67941899",
  "detail": 1,
  "uid": "0a15c7ecd0b2ede5ed74f863"
}, {
  "name": "四川龙爪树宾馆",
  "location": {
    "lat": 39.855731,
    "lng": 116.461637
  },
  "address": "北京市朝阳区小红门路312号",
  "province": "北京市",
  "city": "北京市",
  "area": "朝阳区",
  "street_id": "",
  "telephone": "(010)87699988",
  "detail": 1,
  "uid": "7bfa08fc3dd84a6624d2bbf1"
}, {
  "name": "速8酒店(北京方庄桥店)",
  "location": {
    "lat": 39.857447,
    "lng": 116.443213
  },
  "address": "成寿寺于家坟89号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "",
  "telephone": "(010)87671958",
  "detail": 1,
  "uid": "abfe0e994ea9a345cae33c6e"
}, {
  "name": "北京玉林快捷酒店",
  "location": {
    "lat": 39.871524,
    "lng": 116.366674
  },
  "address": "玉林东里二区十五号楼南侧",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "0d554046d54fedffc42ba188",
  "telephone": "(010)63272626",
  "detail": 1,
  "uid": "0d554046d54fedffc42ba188"
}, {
  "name": "如家精选酒店(北京南站南广场店)",
  "location": {
    "lat": 39.863841,
    "lng": 116.385187
  },
  "address": "南三环西路甲1号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "dc1af6b73d306a86430245a5",
  "telephone": "(010)67225530",
  "detail": 1,
  "uid": "dc1af6b73d306a86430245a5"
}, {
  "name": "安好宾馆(北京新天坛医院首经贸地铁站店)",
  "location": {
    "lat": 39.844222,
    "lng": 116.327187
  },
  "address": "芳菲路九十号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "f6d8b90a50c12a1a0f0e6bd9",
  "telephone": "(010)83626002,18515366981",
  "detail": 1,
  "uid": "f6d8b90a50c12a1a0f0e6bd9"
}, {
  "name": "汉庭酒店(北京六里桥店)",
  "location": {
    "lat": 39.886361,
    "lng": 116.323661
  },
  "address": "太平桥路华源一里甲9号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "edd64ce12d1a12883fe231fc",
  "telephone": "(010)63289119",
  "detail": 1,
  "uid": "edd64ce12d1a12883fe231fc"
}, {
  "name": "如家商旅酒店(北京西站万丰路店)",
  "location": {
    "lat": 39.893256,
    "lng": 116.296015
  },
  "address": "靛厂路内101号(水衙沟路上)",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "3f9337d60dae95aaf72310d0",
  "telephone": "(010)88249797",
  "detail": 1,
  "uid": "3f9337d60dae95aaf72310d0"
}, {
  "name": "如家酒店neo(北京南站角门东地铁站店)",
  "location": {
    "lat": 39.851989,
    "lng": 116.398955
  },
  "address": "临泓路鑫福里15号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "1e2716077211d00dc8c3db1e",
  "telephone": "(010)87250101",
  "detail": 1,
  "uid": "1e2716077211d00dc8c3db1e"
}, {
  "name": "园博苑宾馆(丰台卢沟桥晓月苑店)",
  "location": {
    "lat": 39.850618,
    "lng": 116.244703
  },
  "address": "晓月中路晓月苑一里甲1号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "d46024d94749aed41ef74d1e",
  "telephone": "(010)63709100",
  "detail": 1,
  "uid": "d46024d94749aed41ef74d1e"
}, {
  "name": "速8酒店(北京右安门外大街店)",
  "location": {
    "lat": 39.87172,
    "lng": 116.371688
  },
  "address": "右安门外大街10号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "59de03cca374960d704b870f",
  "telephone": "(010)63588299,(010)63588799",
  "detail": 1,
  "uid": "59de03cca374960d704b870f"
}, {
  "name": "桔子酒店(北京天坛店)",
  "location": {
    "lat": 39.873166,
    "lng": 116.428589
  },
  "address": "北京市丰台区蒲芳路9号院1号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "cd41e39f503a610be215f901",
  "telephone": "(010)58071799",
  "detail": 1,
  "uid": "cd41e39f503a610be215f901"
}, {
  "name": "北京88快捷宾馆",
  "location": {
    "lat": 39.848834,
    "lng": 116.416631
  },
  "address": "北京市丰台区南顶路281号（康泽园北门对面）",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "330e6c6a63e25321c356ac2f",
  "telephone": "(010)87297197",
  "detail": 1,
  "uid": "330e6c6a63e25321c356ac2f"
}, {
  "name": "格林豪泰快捷酒店(北京南站天坛蒲黄榆店)",
  "location": {
    "lat": 39.866618,
    "lng": 116.421956
  },
  "address": "北京市丰台区塔园12号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "6113ef7714b0880d8e772739",
  "telephone": "(010)51334998",
  "detail": 1,
  "uid": "6113ef7714b0880d8e772739"
}, {
  "name": "维也纳3好酒店(北京南站洋桥店)",
  "location": {
    "lat": 39.858721,
    "lng": 116.392923
  },
  "address": "洋桥社区马家堡东路71号2号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "81ba72bb8b0d28add1f49e72",
  "telephone": "(010)67539501,(010)67586489",
  "detail": 1,
  "uid": "81ba72bb8b0d28add1f49e72"
}, {
  "name": "北京华夏明珠宾馆",
  "location": {
    "lat": 39.901716,
    "lng": 116.325372
  },
  "address": "北京市丰台区莲花池东路120-1号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "c7dab4b61ffba018cac3dbca",
  "telephone": "(010)63955588",
  "detail": 1,
  "uid": "c7dab4b61ffba018cac3dbca"
}, {
  "name": "迎宾快捷宾馆(首经贸地铁站店)",
  "location": {
    "lat": 39.855157,
    "lng": 116.323192
  },
  "address": "北京市丰台区万芳路69号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "e303a9519d5a8f5eed74f83e",
  "telephone": "15001104085",
  "detail": 1,
  "uid": "e303a9519d5a8f5eed74f83e"
}, {
  "name": "汉庭酒店(北京丰益桥西国贸店)",
  "location": {
    "lat": 39.863247,
    "lng": 116.321714
  },
  "address": "丰管路甲28号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "f75d85c8ffff2c318f55ecbb",
  "telephone": "(010)63838858",
  "detail": 1,
  "uid": "f75d85c8ffff2c318f55ecbb"
}, {
  "name": "北京顺心民宿",
  "location": {
    "lat": 39.889463,
    "lng": 116.284698
  },
  "address": "岳各庄第七街阅园一区2号楼668室",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "telephone": "18911222391",
  "detail": 1,
  "uid": "cf17b635d0bd9d774f3a595e"
}, {
  "name": "北京月桂树酒店",
  "location": {
    "lat": 39.848801,
    "lng": 116.393597
  },
  "address": "马家堡东路106号院1号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "d8a1e02349bec04132870acd",
  "telephone": "(010)87286699",
  "detail": 1,
  "uid": "d8a1e02349bec04132870acd"
}, {
  "name": "便宜居连锁酒店(北京大成路欢乐水魔方店)",
  "location": {
    "lat": 39.894482,
    "lng": 116.252805
  },
  "address": "吴家村路甲8号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "923ffd003d736fc9d82f28b2",
  "telephone": "(010)53320919",
  "detail": 1,
  "uid": "923ffd003d736fc9d82f28b2"
}, {
  "name": "格林豪泰(北京杜家坎园博园店)",
  "location": {
    "lat": 39.841948,
    "lng": 116.198138
  },
  "address": "长辛店长兴路12号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "c960d0449e560d6f8bb9881e",
  "telephone": "(010)83869776",
  "detail": 1,
  "uid": "c960d0449e560d6f8bb9881e"
}, {
  "name": "北京凯嘉宾馆",
  "location": {
    "lat": 39.861417,
    "lng": 116.43898
  },
  "address": "东铁营顺三条2号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "7c5e480b176266adadb22a0a",
  "telephone": "(010)67656193",
  "detail": 1,
  "uid": "7c5e480b176266adadb22a0a"
}, {
  "name": "乐酷假日mini酒店(北京木樨园店)",
  "location": {
    "lat": 39.861809,
    "lng": 116.410838
  },
  "address": "南木樨园5号楼西侧",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "",
  "telephone": "(010)67220065,(010)87241837",
  "detail": 1,
  "uid": "333ee963bdbf95ef260bd0f5"
}, {
  "name": "北京福宾来宾馆",
  "location": {
    "lat": 39.809476,
    "lng": 116.42381
  },
  "address": "南大红门路12号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "52c276add41b78f29e9d6841",
  "telephone": "(010)67955997",
  "detail": 1,
  "uid": "52c276add41b78f29e9d6841"
}, {
  "name": "北京星河苑宾馆",
  "location": {
    "lat": 39.843969,
    "lng": 116.374894
  },
  "address": "马家堡西路星河苑15号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "a7c4beaae18a94cc8505bf01",
  "telephone": "(010)67521984",
  "detail": 1,
  "uid": "a7c4beaae18a94cc8505bf01"
}, {
  "name": "丰体宾馆(北京大井地铁站店)",
  "location": {
    "lat": 39.872962,
    "lng": 116.283829
  },
  "address": "西四环南路55号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "e3a7fd13d46ddb5228b97c01",
  "telephone": "(010)63853338",
  "detail": 1,
  "uid": "e3a7fd13d46ddb5228b97c01"
}, {
  "name": "北京京城豪廷宾馆",
  "location": {
    "lat": 39.894356,
    "lng": 116.238422
  },
  "address": "三倾地甲2号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "b66cebc049d3ef0a2202629c",
  "telephone": "18310360087",
  "detail": 1,
  "uid": "b66cebc049d3ef0a2202629c"
}, {
  "name": "格林豪泰酒店(北京南站石榴庄地铁站店)",
  "location": {
    "lat": 39.858748,
    "lng": 116.421158
  },
  "address": "光彩路贾家花园3号院6号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "a3d6b0b0eddcb54e17c8f649",
  "telephone": "18911667476",
  "detail": 1,
  "uid": "a3d6b0b0eddcb54e17c8f649"
}, {
  "name": "格林豪泰酒店(北京丰台火车站东大街店)",
  "location": {
    "lat": 39.862009,
    "lng": 116.300522
  },
  "address": "东大街36号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "69aa01c45a07d65043ab9a22",
  "telephone": "(010)63867798",
  "detail": 1,
  "uid": "69aa01c45a07d65043ab9a22"
}, {
  "name": "北京日升昌酒店",
  "location": {
    "lat": 39.872326,
    "lng": 116.371501
  },
  "address": "右安门外大街8号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "2c1b89e1a46cb840210220b5",
  "telephone": "(010)63553999",
  "detail": 1,
  "uid": "2c1b89e1a46cb840210220b5"
}, {
  "name": "北京汇商阁商务酒店",
  "location": {
    "lat": 39.843668,
    "lng": 116.407829
  },
  "address": "南苑路大红门西里19号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "",
  "telephone": "15210906657",
  "detail": 1,
  "uid": "373cf757a1fe65774254d7e8"
}, {
  "name": "北京福雅居宾馆",
  "location": {
    "lat": 39.880499,
    "lng": 116.288787
  },
  "address": "丰台路口38号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "",
  "telephone": "(010)63821856",
  "detail": 1,
  "uid": "22e11407ba59d0add5b74e00"
}, {
  "name": "海康宾馆(北京西站首经贸大学店)",
  "location": {
    "lat": 39.854991,
    "lng": 116.32941
  },
  "address": "育芳园东里3号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "550fd5f9feb26279931fc924",
  "telephone": "(010)63735008,(010)63737558",
  "detail": 1,
  "uid": "550fd5f9feb26279931fc924"
}, {
  "name": "同都宾馆(北京岳各庄桥七里庄地铁站店)",
  "location": {
    "lat": 39.878184,
    "lng": 116.292402
  },
  "address": "岳各庄望园路中段",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "",
  "detail": 1,
  "uid": "f53b11460a9f8f1d2bb97c0e"
}, {
  "name": "北京鲁弘宾馆",
  "location": {
    "lat": 39.876692,
    "lng": 116.435771
  },
  "address": "方庄芳古园二区16号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "d0b8923fcbc54ffbb5f42f37",
  "detail": 1,
  "uid": "d0b8923fcbc54ffbb5f42f37"
}, {
  "name": "北京98快捷宾馆",
  "location": {
    "lat": 39.849047,
    "lng": 116.41558
  },
  "address": "南顶路281号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "8e11742a425680b7be484230",
  "telephone": "(010)87877783",
  "detail": 1,
  "uid": "8e11742a425680b7be484230"
}, {
  "name": "山水时尚酒店(北京南站天坛南门店)",
  "location": {
    "lat": 39.876786,
    "lng": 116.42452
  },
  "address": "蒲黄榆二里11号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "b9feabff0fd036973110afa4",
  "telephone": "(010)87688797",
  "detail": 1,
  "uid": "b9feabff0fd036973110afa4"
}, {
  "name": "成刚快捷酒店(北京博爱医院店)",
  "location": {
    "lat": 39.856501,
    "lng": 116.381394
  },
  "address": "角门北路16-20号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "39d911a06fd924bb4251c00d",
  "telephone": "(010)67529658",
  "detail": 1,
  "uid": "39d911a06fd924bb4251c00d"
}, {
  "name": "乐家酒店(北京七里庄地铁站店)",
  "location": {
    "lat": 39.876971,
    "lng": 116.300425
  },
  "address": "万丰路302号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "dcc35bfb5d3c95b231870a07",
  "telephone": "(010)65699997",
  "detail": 1,
  "uid": "dcc35bfb5d3c95b231870a07"
}, {
  "name": "望华世纪酒店 (北京纪家庙地铁站丰台站店)",
  "location": {
    "lat": 39.855492,
    "lng": 116.340655
  },
  "address": "万柳园小区34号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "telephone": "(010)63300388",
  "detail": 1,
  "uid": "90587b7d5f1bc4ad343a7117"
}, {
  "name": "鑫馨宾馆(北京丰台火车站地铁站店)",
  "location": {
    "lat": 39.856633,
    "lng": 116.315701
  },
  "address": "三环新城六号院三号楼底商",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "46e1288effb817946e20b934",
  "telephone": "(010)63716900",
  "detail": 1,
  "uid": "46e1288effb817946e20b934"
}, {
  "name": "派酒店(北京角门西地铁站店)",
  "location": {
    "lat": 39.85105,
    "lng": 116.371909
  },
  "address": "嘉园三里三号楼117号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "802b1be72c2ed43f04026f84",
  "telephone": "(010)67579119",
  "detail": 1,
  "uid": "802b1be72c2ed43f04026f84"
}, {
  "name": "如家联盟华驿酒店(东大街店)",
  "location": {
    "lat": 39.864128,
    "lng": 116.300775
  },
  "address": "北京市丰台区东大街20号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "61a0f922750fc58b45572641",
  "telephone": "(010)57374345",
  "detail": 1,
  "uid": "61a0f922750fc58b45572641"
}, {
  "name": "齐源酒店(北京南站北广场店)",
  "location": {
    "lat": 39.871937,
    "lng": 116.383952
  },
  "address": "下沉广场西侧",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "",
  "telephone": "(010)63566199",
  "detail": 1,
  "uid": "1231fa102bc81435b020a889"
}, {
  "name": "火龙果快捷宾馆(北京丰台火车站地铁站店)",
  "location": {
    "lat": 39.854993,
    "lng": 116.315791
  },
  "address": "三环新城育芳园北路休闲街8号院13号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "4795dcd69e293e7085420e58",
  "telephone": "(010)61896188",
  "detail": 1,
  "uid": "4795dcd69e293e7085420e58"
}, {
  "name": "北京裕丰宾馆",
  "location": {
    "lat": 39.868709,
    "lng": 116.389498
  },
  "address": "马家堡路洋桥北里24号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "6ee0102056c66df652e5c533",
  "telephone": "(010)87288186",
  "detail": 1,
  "uid": "6ee0102056c66df652e5c533"
}, {
  "name": "北京东方园宾馆",
  "location": {
    "lat": 39.870016,
    "lng": 116.435639
  },
  "address": "方庄芳群园二区9号楼二层",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "f8ac1400a3d81f8bb817e7d8",
  "telephone": "13031191281",
  "detail": 1,
  "uid": "f8ac1400a3d81f8bb817e7d8"
}, {
  "name": "七巧屋酒店(北京新发地地铁站店)",
  "location": {
    "lat": 39.824206,
    "lng": 116.349327
  },
  "address": "北京市丰台区新发地农产品批发市场海南区",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "",
  "telephone": "(010)63945616,(010)83711799",
  "detail": 1,
  "uid": "f505dbc84a2cfddb78f796c0"
}, {
  "name": "学峰商务酒店(北京新发地地铁站店)",
  "location": {
    "lat": 39.829542,
    "lng": 116.349401
  },
  "address": "新发地桥西50米路北，猪肉大厅斜对面",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "1ab41ae40540bbd94354d7ab",
  "telephone": "(010)83730177",
  "detail": 1,
  "uid": "1ab41ae40540bbd94354d7ab"
}, {
  "name": "北京宝墅园宾馆",
  "location": {
    "lat": 39.852693,
    "lng": 116.344869
  },
  "address": "郑王坟东里外甲1号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "d82d6697596c4da6d518b725",
  "telephone": "(010)83685885",
  "detail": 1,
  "uid": "d82d6697596c4da6d518b725"
}, {
  "name": "如家酒店(北京总部基地世界公园郭公庄地铁站店)",
  "location": {
    "lat": 39.819843,
    "lng": 116.296103
  },
  "address": "丰葆路158号国际街内",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "cf994bdcd46821b71d580073",
  "telephone": "(010)83680606",
  "detail": 1,
  "uid": "cf994bdcd46821b71d580073"
}, {
  "name": "凯豪精选酒店(北京纪家庙丰台火车站店)",
  "location": {
    "lat": 39.852068,
    "lng": 116.344547
  },
  "address": "南三环西路88号玉泉营桥西",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "d7fd2ad34406fb4d0bccdd37",
  "detail": 1,
  "uid": "d7fd2ad34406fb4d0bccdd37"
}, {
  "name": "布丁酒店(北京南站6号到达口店)",
  "location": {
    "lat": 39.871858,
    "lng": 116.384015
  },
  "address": "北京市丰台区幸福路北京南站地下1层(近北京南站地铁站C出口)",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "a3b3bc5bdc125df896ec843e",
  "detail": 1,
  "uid": "a3b3bc5bdc125df896ec843e"
}, {
  "name": "雅格酒店(北京西站纪家庙地铁站店)",
  "location": {
    "lat": 39.853686,
    "lng": 116.339449
  },
  "address": "郑王坟8号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "f0bab4d2cccf6bd23586f4ce",
  "telephone": "(010)83687609",
  "detail": 1,
  "uid": "f0bab4d2cccf6bd23586f4ce"
}, {
  "name": "福星宾馆(北京智慧广场店)",
  "location": {
    "lat": 39.82252,
    "lng": 116.296061
  },
  "address": "丰葆路23号智慧广场北面一层",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "65f98074b92611855d0d0209",
  "telephone": "(010)83629399",
  "detail": 1,
  "uid": "65f98074b92611855d0d0209"
}, {
  "name": "北京爱乐园宾馆(北京刘家窑地铁站店)",
  "location": {
    "lat": 39.860094,
    "lng": 116.4313
  },
  "address": "南三环刘家窑横六条26号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "",
  "telephone": "(010)67687814",
  "detail": 1,
  "uid": "606289fdbf17c154a2046407"
}, {
  "name": "易佰连锁宾馆(北京肿瘤医院方庄地铁站店)",
  "location": {
    "lat": 39.875555,
    "lng": 116.445179
  },
  "address": "芳城园一区2号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "b067964b7f5be6f901294f51",
  "telephone": "(010)67644548",
  "detail": 1,
  "uid": "b067964b7f5be6f901294f51"
}, {
  "name": "燕岭宾馆",
  "location": {
    "lat": 39.865757,
    "lng": 116.178851
  },
  "address": "北京市丰台区槐树岭4号院",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "",
  "telephone": "(010)83803355,(010)83809100",
  "detail": 1,
  "uid": "631c415706caf67831f71d32"
}, {
  "name": "北京庆鸿缘宾馆",
  "location": {
    "lat": 39.893019,
    "lng": 116.327278
  },
  "address": "太平桥小区14号楼2层5-1",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "d6824fbeef8c22e5ddee8b6b",
  "telephone": "13905435687,17754349822",
  "detail": 1,
  "uid": "d6824fbeef8c22e5ddee8b6b"
}, {
  "name": "黄亭子宾馆",
  "location": {
    "lat": 39.831791,
    "lng": 116.401407
  },
  "address": "北京市丰台区大红门南路久敬庄60号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "50f7d1468c20ffdd72210b31",
  "telephone": "(010)67983366",
  "detail": 1,
  "uid": "50f7d1468c20ffdd72210b31"
}, {
  "name": "美林宾馆(东大街地铁站店)",
  "location": {
    "lat": 39.861729,
    "lng": 116.296284
  },
  "address": "北京市丰台区游泳场北路15号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "a7c56ee02a724caaa2acc4aa",
  "telephone": "(010)83637588",
  "detail": 1,
  "uid": "a7c56ee02a724caaa2acc4aa"
}, {
  "name": "金三环宾馆(北京南站木樨园地铁站店)",
  "location": {
    "lat": 39.862989,
    "lng": 116.413346
  },
  "address": "南木樨园18号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "",
  "telephone": "(010)69003111,(010)69003777",
  "detail": 1,
  "uid": "bf29b702583a688009b93a3a"
}, {
  "name": "星光宾馆(北京第五医学中心店)",
  "location": {
    "lat": 39.868365,
    "lng": 116.296912
  },
  "address": "东大街西里9号楼丰华苑东街",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "0ce65c2df8d58a402d473330",
  "telephone": "(010)63826922",
  "detail": 1,
  "uid": "0ce65c2df8d58a402d473330"
}, {
  "name": "北京心住福宾馆",
  "location": {
    "lat": 39.815241,
    "lng": 116.173755
  },
  "address": "北京市丰台区云岗路5号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "",
  "telephone": "(010)83318470",
  "detail": 1,
  "uid": "e2c734e4faf1444415a190c3"
}, {
  "name": "北京时光电竞酒店(晓月四里店)",
  "location": {
    "lat": 39.840977,
    "lng": 116.247345
  },
  "address": "北京市丰台区晓月中路晓月苑四里2号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "8f956eeeb48298cffd0eb05c",
  "telephone": "(010)63779152",
  "detail": 1,
  "uid": "8f956eeeb48298cffd0eb05c"
}, {
  "name": "和家宾馆(北京南站洋桥店)",
  "location": {
    "lat": 39.861713,
    "lng": 116.388296
  },
  "address": "马家堡路甲116号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "9f2f189cbac42a63b72655ed",
  "telephone": "(010)87887010,(010)87888151",
  "detail": 1,
  "uid": "9f2f189cbac42a63b72655ed"
}, {
  "name": "北京百兴盛源宾馆",
  "location": {
    "lat": 39.802585,
    "lng": 116.199634
  },
  "address": "周口店路赵辛店北岗洼59号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "58405c26329c0a9ad5b74e95",
  "telephone": "(010)83846876",
  "detail": 1,
  "uid": "58405c26329c0a9ad5b74e95"
}, {
  "name": "海浪宾馆(北京西站南广场店)",
  "location": {
    "lat": 39.893248,
    "lng": 116.327278
  },
  "address": "西客站南广场南路3号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "89fd4ea3ac4d9a47e5e96524",
  "telephone": "(010)63267006,18610036726",
  "detail": 1,
  "uid": "89fd4ea3ac4d9a47e5e96524"
}, {
  "name": "新发地宾馆",
  "location": {
    "lat": 39.82937,
    "lng": 116.347586
  },
  "address": "新发地桥西路北100米",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "c66da62650f8bcc7631809c9",
  "telephone": "(010)83721555",
  "detail": 1,
  "uid": "c66da62650f8bcc7631809c9"
}, {
  "name": "北京亿通宾馆",
  "location": {
    "lat": 39.861726,
    "lng": 116.26536
  },
  "address": "五里店南里8号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "270ec731b3ea19bedf1e522b",
  "detail": 1,
  "uid": "270ec731b3ea19bedf1e522b"
}, {
  "name": "万丰宾馆(北京302医院店)",
  "location": {
    "lat": 39.893322,
    "lng": 116.287604
  },
  "address": "水衙沟路靛厂锦园小区南门",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "33a17ddea6b7e8cbdb131840",
  "telephone": "(010)88281700,(010)88285700",
  "detail": 1,
  "uid": "33a17ddea6b7e8cbdb131840"
}, {
  "name": "北京豫东宾馆",
  "location": {
    "lat": 39.88033,
    "lng": 116.326611
  },
  "address": "太平桥东局甲8号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "",
  "telephone": "(010)63401199,(010)63402713",
  "detail": 1,
  "uid": "d6c5d99143d18df130169b31"
}, {
  "name": "北京优洁商务宾馆(北京南站店)",
  "location": {
    "lat": 39.865292,
    "lng": 116.398414
  },
  "address": "西罗园二区20号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "7ae8e90ea9c46e452d4733f1",
  "telephone": "(010)87107566",
  "detail": 1,
  "uid": "7ae8e90ea9c46e452d4733f1"
}, {
  "name": "家安民宿(北京千禧购物中心店)",
  "location": {
    "lat": 39.889632,
    "lng": 116.284118
  },
  "address": "阅园一区2号楼329室",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "detail": 1,
  "uid": "227e74227ad447eb2b201adb"
}, {
  "name": "京成快捷酒店(马家堡店)",
  "location": {
    "lat": 39.859347,
    "lng": 116.377156
  },
  "address": "北京市丰台区马家堡西路(地铁四号线马家堡站A口)",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "61394e7affd7a51588fc0678",
  "telephone": "(010)67523257",
  "detail": 1,
  "uid": "61394e7affd7a51588fc0678"
}, {
  "name": "北京顺和宾馆",
  "location": {
    "lat": 39.860057,
    "lng": 116.434216
  },
  "address": "刘家窑宋庄路顺四条11号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "9ee392b8ec66ec58bbbd6307",
  "telephone": "(010)67659332",
  "detail": 1,
  "uid": "9ee392b8ec66ec58bbbd6307"
}, {
  "name": "胜嘉福宾馆(北京世界公园店)",
  "location": {
    "lat": 39.819952,
    "lng": 116.297585
  },
  "address": "丰葆路168号(北京国际花园198-1号)",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "",
  "telephone": "(010)83612372",
  "detail": 1,
  "uid": "fda68cbe36a4db44901fc941"
}, {
  "name": "北京东亚泰快捷酒店",
  "location": {
    "lat": 39.856125,
    "lng": 116.388839
  },
  "address": "角门北路8号院1号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "",
  "telephone": "(010)67525516",
  "detail": 1,
  "uid": "f5d733b1e998e8f7aecb66a6"
}, {
  "name": "北京九九宾馆佑安医院店",
  "location": {
    "lat": 39.871152,
    "lng": 116.361517
  },
  "address": "北京市丰台区玉林西路玉林里21号(首都医科大学东面)",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "b2df9f09b83ee1a2f8dc85a7",
  "telephone": "(010)63057180",
  "detail": 1,
  "uid": "b2df9f09b83ee1a2f8dc85a7"
}, {
  "name": "京丰宾馆",
  "location": {
    "lat": 39.870316,
    "lng": 116.288358
  },
  "address": "北京市丰台区丰台北路71号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "",
  "detail": 1,
  "uid": "dffd631c68e21da538221c07"
}, {
  "name": "北京千里之家宾馆",
  "location": {
    "lat": 39.878975,
    "lng": 116.351653
  },
  "address": "菜户营西路甲1号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "33fbfa832e5350d80bf5eb0b",
  "telephone": "(010)51760627",
  "detail": 1,
  "uid": "33fbfa832e5350d80bf5eb0b"
}, {
  "name": "北京七彩宾馆",
  "location": {
    "lat": 39.844521,
    "lng": 116.420219
  },
  "address": "光彩路67号院1号楼1层13号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "2da01cf66f2d1758d12dd603",
  "telephone": "13161162926",
  "detail": 1,
  "uid": "2da01cf66f2d1758d12dd603"
}, {
  "name": "北京金润捷宾馆",
  "location": {
    "lat": 39.844878,
    "lng": 116.392841
  },
  "address": "马家堡东路西马场南里一区甲1号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "26cd7a72bb82f1cadeee8bfb",
  "telephone": "(010)87506697",
  "detail": 1,
  "uid": "26cd7a72bb82f1cadeee8bfb"
}, {
  "name": "北京春成宾馆",
  "location": {
    "lat": 39.895368,
    "lng": 116.262914
  },
  "address": "大成路甲10号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "",
  "detail": 1,
  "uid": "2dc20c08fdd5b7617ec8766e"
}, {
  "name": "看丹红宾馆",
  "location": {
    "lat": 39.849881,
    "lng": 116.306738
  },
  "address": "北京市丰台区丰台东路113号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "",
  "telephone": "13261548765",
  "detail": 1,
  "uid": "07f3c8b5792d7d7a6240a93a"
}, {
  "name": "北京碧海洗浴宾馆(北京西站南路店)",
  "location": {
    "lat": 39.893374,
    "lng": 116.327884
  },
  "address": "西客站南路六号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "890508276f69c7f743024573",
  "detail": 1,
  "uid": "890508276f69c7f743024573"
}, {
  "name": "北京龙源宾馆",
  "location": {
    "lat": 39.878018,
    "lng": 116.35486
  },
  "address": "菜户营东街甲34号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "e3e2cd9d1d684efac7f50d07",
  "telephone": "(010)63468291",
  "detail": 1,
  "uid": "e3e2cd9d1d684efac7f50d07"
}, {
  "name": "北京老池民宿",
  "location": {
    "lat": 39.88949,
    "lng": 116.284659
  },
  "address": "阅园一区二号楼红庭323房间",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "",
  "telephone": "15321245101",
  "detail": 1,
  "uid": "630b2d63918e80acd72ce2d1"
}, {
  "name": "福友居宾馆(北京新发地批发市场店)",
  "location": {
    "lat": 39.829204,
    "lng": 116.345411
  },
  "address": "丰台南路甲1号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "6fddd7fdfd7be97f3517dc38",
  "telephone": "(010)83722578,18611943656",
  "detail": 1,
  "uid": "6fddd7fdfd7be97f3517dc38"
}, {
  "name": "乐酷电竞主题酒店(北京南站店)",
  "location": {
    "lat": 39.857087,
    "lng": 116.394082
  },
  "address": "马家堡东路86-1号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "4b2dd3acf797c9ad8505bf2f",
  "telephone": "(010)87817871",
  "detail": 1,
  "uid": "4b2dd3acf797c9ad8505bf2f"
}, {
  "name": "北京业田宾馆",
  "location": {
    "lat": 39.848217,
    "lng": 116.391456
  },
  "address": "马家堡东路西马场6号院一号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "17d81f2651919f76b13c8102",
  "telephone": "(010)51223953",
  "detail": 1,
  "uid": "17d81f2651919f76b13c8102"
}, {
  "name": "北京赤峰宾馆",
  "location": {
    "lat": 39.870828,
    "lng": 116.442296
  },
  "address": "方庄芳星园二区5号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "61085211d2ac88b8c51b7507",
  "telephone": "(010)67661177",
  "detail": 1,
  "uid": "61085211d2ac88b8c51b7507"
}, {
  "name": "北京红墙宾馆",
  "location": {
    "lat": 39.832909,
    "lng": 116.334411
  },
  "address": "丰台南路35号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "14a9a4b8dc94caee2a02e1a2",
  "telephone": "13261215988",
  "detail": 1,
  "uid": "14a9a4b8dc94caee2a02e1a2"
}, {
  "name": "易安宾馆",
  "location": {
    "lat": 39.848075,
    "lng": 116.414549
  },
  "address": "北京市丰台区大红门路72号康泽园小区西门14栋",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "568de37e8caa3a2a2b11d1ad",
  "telephone": "16600056277",
  "detail": 1,
  "uid": "568de37e8caa3a2a2b11d1ad"
}, {
  "name": "北京豪怡宾馆",
  "location": {
    "lat": 39.866092,
    "lng": 116.442639
  },
  "address": "方庄芳星园三区三区13号楼4号平台3幢",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "22a22efc66083e70c1f1cf3b",
  "detail": 1,
  "uid": "22a22efc66083e70c1f1cf3b"
}, {
  "name": "北京华云鑫电竞主题酒店",
  "location": {
    "lat": 39.868342,
    "lng": 116.398803
  },
  "address": "北京市丰台区马家堡东路7号西罗园一区13号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "277dcb63dcf0f386ae080f4e",
  "telephone": "(010)61912298-68949287",
  "detail": 1,
  "uid": "277dcb63dcf0f386ae080f4e"
}, {
  "name": "北京静冉宾馆",
  "location": {
    "lat": 39.840852,
    "lng": 116.408154
  },
  "address": "南苑路大红门南里17号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "3dc9befd1b22e415bea2402d",
  "telephone": "(010)67239969",
  "detail": 1,
  "uid": "3dc9befd1b22e415bea2402d"
}, {
  "name": "邦泰宾馆",
  "location": {
    "lat": 39.875369,
    "lng": 116.300054
  },
  "address": "北京市晋中市丰台区西局西街300号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "38e48037f445c250373a7107",
  "detail": 1,
  "uid": "38e48037f445c250373a7107"
}, {
  "name": "北京永鑫宾馆",
  "location": {
    "lat": 39.875247,
    "lng": 116.385194
  },
  "address": "南站北广场幸福三巷东庄小区20号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "23193e46f516211f8d55ec3c",
  "telephone": "(010)83108748",
  "detail": 1,
  "uid": "23193e46f516211f8d55ec3c"
}, {
  "name": "盒子空间酒店(北京南站赵公口店)",
  "location": {
    "lat": 39.861688,
    "lng": 116.420355
  },
  "address": "北京市丰台区光彩路7号赵公口10号楼底商",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "fd0f59578fd92c46715e8046",
  "telephone": "(010)56259868",
  "detail": 1,
  "uid": "fd0f59578fd92c46715e8046"
}, {
  "name": "中条山宾馆",
  "location": {
    "lat": 39.88084,
    "lng": 116.326557
  },
  "address": "北京市丰台区东局甲8号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "09185c56d3647f44f119370a",
  "telephone": "(010)63408791",
  "detail": 1,
  "uid": "09185c56d3647f44f119370a"
}, {
  "name": "时尚快捷酒店(北京世界公园大葆台地铁站店)",
  "location": {
    "lat": 39.818388,
    "lng": 116.298157
  },
  "address": "丰葆路168号北京国际花园197号1-2层197-1号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "913121744787b3a0d8eced33",
  "telephone": "(010)83689883",
  "detail": 1,
  "uid": "913121744787b3a0d8eced33"
}, {
  "name": "北京亿萌宾馆",
  "location": {
    "lat": 39.850126,
    "lng": 116.369051
  },
  "address": "镇国寺北街甲4号院6号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "",
  "telephone": "(010)87889660",
  "detail": 1,
  "uid": "7eaca687899942c301294f6f"
}, {
  "name": "彩虹宾馆(北京南站店)",
  "location": {
    "lat": 39.848331,
    "lng": 116.420201
  },
  "address": "南顶路4号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "75036835e812ceb65e0d0207",
  "telephone": "(010)87818790",
  "detail": 1,
  "uid": "75036835e812ceb65e0d0207"
}, {
  "name": "阳光之轩酒店(北京南站永定门外地铁站店)",
  "location": {
    "lat": 39.867555,
    "lng": 116.398865
  },
  "address": "西罗园一区15号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "e67ac8d1fa49a3f040afe69b",
  "detail": 1,
  "uid": "e67ac8d1fa49a3f040afe69b"
}, {
  "name": "北京阅园家庭宾馆",
  "location": {
    "lat": 39.889542,
    "lng": 116.284827
  },
  "address": "阅园一区2号楼302医院门诊对面",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "",
  "telephone": "15711069110",
  "detail": 1,
  "uid": "a357a6917941f5c8725e8029"
}, {
  "name": "北方宾馆(朱家坟店)",
  "location": {
    "lat": 39.815359,
    "lng": 116.192725
  },
  "address": "北京市丰台区朱家坟五里5号(近云岗路)",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "108b1cea94150bb53586f43c",
  "telephone": "(010)83807174",
  "detail": 1,
  "uid": "108b1cea94150bb53586f43c"
}, {
  "name": "极速电竞酒店(丰台站店)",
  "location": {
    "lat": 39.853521,
    "lng": 116.329564
  },
  "address": "北京市丰台区丰台东路育菲园东里3号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "c55d285d52236e9c9d82ea04",
  "telephone": "13269595308",
  "detail": 1,
  "uid": "c55d285d52236e9c9d82ea04"
}, {
  "name": "木的地精品酒店(北京西站店)",
  "location": {
    "lat": 39.889567,
    "lng": 116.320682
  },
  "address": "北京市丰台区六里桥34号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "",
  "detail": 1,
  "uid": "e116be546d21d162c91b9530"
}, {
  "name": "如家联盟(新发地店)",
  "location": {
    "lat": 39.828269,
    "lng": 116.34592
  },
  "address": "北京市丰台区丰台南路8号院6号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "1506178b00dcba2df4eafce8",
  "telephone": "(010)83722688",
  "detail": 1,
  "uid": "1506178b00dcba2df4eafce8"
}, {
  "name": "速8酒店(北京南站洋桥店)",
  "location": {
    "lat": 39.85821,
    "lng": 116.392732
  },
  "address": "北京市丰台区马家堡东路71号立业大厦3楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "7239fbb8ae7755edde1e5287",
  "detail": 1,
  "uid": "7239fbb8ae7755edde1e5287"
}, {
  "name": "布丁酒店(北京天坛南门店)",
  "location": {
    "lat": 39.876853,
    "lng": 116.423886
  },
  "address": "南二环蒲黄榆二里小区12号楼(近地铁5号线蒲黄榆站A口、中国医学科学院肿瘤医院)",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "detail": 1,
  "uid": "403e87bcf51e30d307fef5fe"
}, {
  "name": "北京一起一起青年旅舍",
  "location": {
    "lat": 39.872045,
    "lng": 116.371436
  },
  "address": "北京市丰台区右安门外大街8号2层",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "d41a207682141d7a2afc4820",
  "telephone": "15652518549",
  "detail": 1,
  "uid": "d41a207682141d7a2afc4820"
}, {
  "name": "7天酒店(北京岳各庄桥店)",
  "location": {
    "lat": 39.884647,
    "lng": 116.26973
  },
  "address": "北京市丰台区青塔西路综合批发市场-青塔西路甲1号",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "46e86fddbd361976d13ce32d",
  "detail": 1,
  "uid": "46e86fddbd361976d13ce32d"
}, {
  "name": "北京华夏明珠宾馆-内部专用地上停车场",
  "location": {
    "lat": 39.901944,
    "lng": 116.324888
  },
  "address": "北京市丰台区莲花池东路120-1号华夏明珠宾馆写字楼",
  "province": "北京市",
  "city": "北京市",
  "area": "丰台区",
  "street_id": "2f1fbe26342eb5bc4f6d469c",
  "detail": 1,
  "uid": "2f1fbe26342eb5bc4f6d469c"
}];
const POIS2 = [{
  "type": "Feature",
  "properties": {
    "region": "D区",
    "type": 1
  },
  "geometry": {
    "coordinates": [116.40117598725185, 39.917496499307106],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "D区",
    "type": 2
  },
  "geometry": {
    "coordinates": [116.40609801022335, 39.91781683086878],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "D区",
    "type": 1
  },
  "geometry": {
    "coordinates": [116.4033665713415, 39.92449656182445],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "D区",
    "type": 3
  },
  "geometry": {
    "coordinates": [116.40790853727025, 39.91147861064821],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "D区",
    "type": 1
  },
  "geometry": {
    "coordinates": [116.41044853871885, 39.91612647923265],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "D区",
    "type": 3
  },
  "geometry": {
    "coordinates": [116.39618975366365, 39.910958630526714],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "D区",
    "type": 2
  },
  "geometry": {
    "coordinates": [116.40026933598598, 39.90835546566821],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "D区",
    "type": 3
  },
  "geometry": {
    "coordinates": [116.40564023406542, 39.90620748623179],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "D区",
    "type": 1
  },
  "geometry": {
    "coordinates": [116.41125037081005, 39.90843843492922],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "D区",
    "type": 2
  },
  "geometry": {
    "coordinates": [116.41082630756705, 39.92688284638931],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "C区",
    "type": 3
  },
  "geometry": {
    "coordinates": [116.38301668817219, 39.90858933995743],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "B区",
    "type": 3
  },
  "geometry": {
    "coordinates": [116.38198411670496, 39.90131297510226],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "B区",
    "type": 1
  },
  "geometry": {
    "coordinates": [116.3892838714981, 39.90018227749477],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "B区",
    "type": 2
  },
  "geometry": {
    "coordinates": [116.39360121462066, 39.89651211104164],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "B区",
    "type": 3
  },
  "geometry": {
    "coordinates": [116.39820809946946, 39.89163819422168],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "B区",
    "type": 1
  },
  "geometry": {
    "coordinates": [116.4001758068418, 39.892338593804745],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "B区",
    "type": 3
  },
  "geometry": {
    "coordinates": [116.38194537734067, 39.88686980582857],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "B区",
    "type": 3
  },
  "geometry": {
    "coordinates": [116.38200770208384, 39.88247083918294],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "A区",
    "type": 3
  },
  "geometry": {
    "coordinates": [116.40640125219007, 39.88955122723463],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "A区",
    "type": 1
  },
  "geometry": {
    "coordinates": [116.40548744206848, 39.88286572025555],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "A区",
    "type": 2
  },
  "geometry": {
    "coordinates": [116.40916404764522, 39.88432891360925],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "A区",
    "type": 3
  },
  "geometry": {
    "coordinates": [116.41070696491894, 39.88510584402358],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "B区",
    "type": 3
  },
  "geometry": {
    "coordinates": [116.40234473483078, 39.88017171403035],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "B区",
    "type": 1
  },
  "geometry": {
    "coordinates": [116.3987213749928, 39.883787242021064],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "A区",
    "type": 1
  },
  "geometry": {
    "coordinates": [116.41434185411153, 39.888814006865424],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "A区",
    "type": 2
  },
  "geometry": {
    "coordinates": [116.41982806435747, 39.88311565864899],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "A区",
    "type": 3
  },
  "geometry": {
    "coordinates": [116.4190210738216, 39.89011608374457],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "A区",
    "type": 3
  },
  "geometry": {
    "coordinates": [116.41300051330123, 39.89694073472795],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "A区",
    "type": 1
  },
  "geometry": {
    "coordinates": [116.4138192887874, 39.89468403535929],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "C区",
    "type": 3
  },
  "geometry": {
    "coordinates": [116.37604796635118, 39.90727878462027],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "C区",
    "type": 2
  },
  "geometry": {
    "coordinates": [116.37383890099464, 39.90825999828604],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "C区",
    "type": 1
  },
  "geometry": {
    "coordinates": [116.37586567530394, 39.91056975145827],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "C区",
    "type": 3
  },
  "geometry": {
    "coordinates": [116.37382829825515, 39.91362965653005],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "C区",
    "type": 3
  },
  "geometry": {
    "coordinates": [116.37760398160935, 39.913881842269426],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "C区",
    "type": 1
  },
  "geometry": {
    "coordinates": [116.37420079620057, 39.918855235149216],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "C区",
    "type": 2
  },
  "geometry": {
    "coordinates": [116.37837899710793, 39.91789403333389],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "C区",
    "type": 2
  },
  "geometry": {
    "coordinates": [116.3814336389292, 39.91736851661584],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "C区",
    "type": 2
  },
  "geometry": {
    "coordinates": [116.40386566807278, 39.91452186113865],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "B区",
    "type": 3
  },
  "geometry": {
    "coordinates": [116.38180254030767, 39.899426890521994],
    "type": "Point"
  }
}, {
  "type": "Feature",
  "properties": {
    "region": "B区",
    "type": 2
  },
  "geometry": {
    "coordinates": [116.38854832965072, 39.88047000472972],
    "type": "Point"
  }
}];
const DISTRICT = {
  '北京': {
    center: [116.41166495284781, 39.91132325515489]
  },
  '亦庄开发区': {
    center: [116.51304200676753, 39.80159986499759]
  },
  '密云区': {
    center: [116.84989592098923, 40.38324333304818]
  },
  '怀柔区': {
    center: [116.64350659050258, 40.330619395409954]
  },
  '门头沟区': {
    center: [116.11197849644687, 39.94284236690663]
  },
  '顺义区': {
    center: [116.65994391271919, 40.13520537588947]
  },
  '朝阳区': {
    center: [116.49291431416613, 39.92741782883638]
  },
  '通州区': {
    center: [116.66503327354069, 39.908681829896985]
  },
  '大兴区': {
    center: [116.344660065905, 39.734563741672254]
  },
  '昌平区': {
    center: [116.24250251375423, 40.22385570403618]
  },
  '西城区': {
    center: [116.37330041522624, 39.921246010697004]
  },
  '东城区': {
    center: [116.42517546956796, 39.923732774405735]
  },
  '房山区': {
    center: [116.14561576009883, 39.74170042926774]
  },
  '石景山区': {
    center: [116.20196558557446, 39.920498461554565]
  },
  '海淀区': {
    center: [116.31681412228001, 39.96206690060246]
  },
  '丰台区': {
    center: [116.29337416063721, 39.869974028133]
  }
};
const REGION = {
  "10001": {
    "name": "聚合区",
    "center": [116.41166495284781, 39.91132325515489],
    "fence": [[116.11188619385985, 39.710649356586536], [116.91174249246005, 39.71107015613781], [116.91174999185115, 41.111072993430874], [116.1118987539914, 41.110652211431045]]
  },
  "11001": {
    "name": "A区",
    "center": [116.41337416257437, 39.86997435878248],
    "fence": [[116.11188619385985, 39.710649356586536], [116.91174249246005, 39.71107015613781], [116.91177386813033, 40.11108097451411], [116.1119189943118, 40.11066024152609]]
  },
  "11002": {
    "name": "B区",
    "center": [116.41230641096863, 40.22442295362075],
    "fence": [[116.1119189943118, 40.11066024152609], [116.91177386813033, 40.11108097451411], [116.9117729302295, 41.311081141509945], [116.11192239853781, 41.31066040929172]]
  }
};
const REGION2 = {
  "A区": [116.4129334479332, 39.89114408478398],
  "B区": [116.39381608532736, 39.88834674887524],
  "C区": [116.37927800871893, 39.91116256112852],
  "D区": [116.40260640778828, 39.916132914732614]
};
const MYPOIS = [{
  "name": "梦圆宾馆(北京簋街店)",
  "location": {
    "lat": 39.946689,
    "lng": 116.43709
  },
  "address": "北京市东城区东直门内大街54号",
  "province": "北京市",
  "city": "北京市",
  "area": "老城区",
  "street_id": "251ef2782013eaeb3310af90",
  "detail": 1,
  "uid": "251ef2782013eaeb3310af90",
  "img": "/marker/bridge.gif"
}, {
  "name": "北京京鲁缘宾馆(北京站朝阳门南小街店)",
  "location": {
    "lat": 39.918287,
    "lng": 116.433861
  },
  "address": "朝阳门南小街5区22号楼地下一层1号",
  "province": "北京市",
  "city": "北京市",
  "area": "老城区",
  "street_id": "2938bddee92bfa1828201ab4",
  "telephone": "(010)65125088",
  "detail": 1,
  "uid": "2938bddee92bfa1828201ab4",
  "img": "/marker/bridge.gif"
}, {
  "name": "北京烽联宾馆",
  "location": {
    "lat": 39.908196,
    "lng": 116.421867
  },
  "address": "东交民巷8号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "fa01e93704767e53774ff178",
  "detail": 1,
  "uid": "fa01e93704767e53774ff178",
  "img": "/marker/event.gif"
}, {
  "name": "北京蓉驿致家酒店",
  "location": {
    "lat": 39.963548,
    "lng": 116.398973
  },
  "address": "安德里北街甲21号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "0eef2aa98ad4fa5c02ec013c",
  "telephone": "(010)62386688-6186",
  "detail": 1,
  "uid": "0eef2aa98ad4fa5c02ec013c",
  "img": "/marker/event.gif"
}, {
  "name": "和旭盛世宾馆(北京同仁医院北京站店)",
  "location": {
    "lat": 39.903841,
    "lng": 116.431251
  },
  "address": "崇文门国瑞东路39号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "6904b6626c87ce93725e801b",
  "telephone": "(010)67162585",
  "detail": 1,
  "uid": "6904b6626c87ce93725e801b",
  "img": "/marker/event.gif"
}, {
  "name": "平安府宾馆",
  "location": {
    "lat": 39.939662,
    "lng": 116.425685
  },
  "address": "北京市东城区平安大街东四十条100号",
  "province": "北京市",
  "city": "北京市",
  "area": "老城区",
  "street_id": "083a55fa89bee560246e9807",
  "detail": 1,
  "uid": "083a55fa89bee560246e9807",
  "img": "/marker/bridge.gif"
}, {
  "name": "北方朗悦酒店(北京鼓楼店)",
  "location": {
    "lat": 39.95815,
    "lng": 116.403493
  },
  "address": "安德路甲61号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "0c0b8d40b48d071d9d9d686c",
  "telephone": "(010)84133358",
  "detail": 1,
  "uid": "0c0b8d40b48d071d9d9d686c",
  "img": "/marker/event.gif"
}, {
  "name": "北京诺家宾馆",
  "location": {
    "lat": 39.903586,
    "lng": 116.43055
  },
  "address": "北京市东城区国瑞北路国瑞城中区14号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "老城区",
  "street_id": "",
  "telephone": "15117937536,18010190193",
  "detail": 1,
  "uid": "81334e515a0ef3abc6effb69",
  "img": "/marker/bridge.gif"
}, {
  "name": "北京碧水兰轩宾馆(协和医院店)",
  "location": {
    "lat": 39.919424,
    "lng": 116.43304
  },
  "address": "朝阳门内南小街385号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "e26dea96968b7a569cec2b11",
  "telephone": "18611540523",
  "detail": 1,
  "uid": "e26dea96968b7a569cec2b11",
  "img": "/marker/event.gif"
}, {
  "name": "嘉园之星(北京站店)",
  "location": {
    "lat": 39.895153,
    "lng": 116.436874
  },
  "address": "北京市东城区幸福大街甲39号5幢",
  "province": "北京市",
  "city": "北京市",
  "area": "老城区",
  "street_id": "",
  "telephone": "17710177588",
  "detail": 1,
  "uid": "4b739d14e57d94bad42ce255",
  "img": "/marker/bridge.gif"
}, {
  "name": "北京康泰福宾馆",
  "location": {
    "lat": 39.880386,
    "lng": 116.407584
  },
  "address": "北京市东城区永定门内大街140号天坛南里西区19号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "fa835ce23920bcafe812e45f",
  "telephone": "(010)67050108",
  "detail": 1,
  "uid": "fa835ce23920bcafe812e45f",
  "img": "/marker/event.gif"
}, {
  "name": "宏昌盛达酒店(北京南站永定门外地铁站店)",
  "location": {
    "lat": 39.871676,
    "lng": 116.396943
  },
  "address": "革新南路西革新里110号院5号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "(010)67237939",
  "detail": 1,
  "uid": "e116be54e4214806c91b95d4",
  "img": "/marker/event.gif"
}, {
  "name": "博昊宾馆",
  "location": {
    "lat": 39.902826,
    "lng": 116.421138
  },
  "address": "北京市东兴隆街都市馨园solo2号楼(距同仁医院500米、新世界150米)",
  "province": "北京市",
  "city": "北京市",
  "area": "老城区",
  "telephone": "18518275161",
  "detail": 1,
  "uid": "0a04131e55248ab3364aae19",
  "img": "/marker/bridge.gif"
}, {
  "name": "博昊宾馆2",
  "location": {
    "lat": 39.902826,
    "lng": 116.421138
  },
  "address": "北京市东兴隆街都市馨园solo2号楼(距同仁医院500米、新世界150米)",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "telephone": "18518275161",
  "detail": 1,
  "uid": "0a04131e55248ab3364aae18",
  "img": "/marker/event.gif"
}, {
  "name": "宏昌盛达酒店(北京南站永定门外地铁站店)1",
  "location": {
    "lat": 39.871676,
    "lng": 116.396943
  },
  "address": "革新南路西革新里110号院5号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "",
  "telephone": "(010)67237939",
  "detail": 1,
  "uid": "e116be54e4214806c91b95d3",
  "img": "/marker/overSpeed.gif"
}, {
  "name": "宏昌盛达酒店(北京南站永定门外地铁站店)2",
  "location": {
    "lat": 39.871676,
    "lng": 116.396943
  },
  "address": "革新南路西革新里110号院5号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "(010)67237939",
  "detail": 1,
  "uid": "e116be54e4214806c91b95d2",
  "img": "/marker/event.gif"
}, {
  "name": "宏昌盛达酒店(北京南站永定门外地铁站店)3",
  "location": {
    "lat": 39.871676,
    "lng": 116.396943
  },
  "address": "革新南路西革新里110号院5号楼",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "telephone": "(010)67237939",
  "detail": 1,
  "uid": "e116be54e4214806c91b95d1",
  "img": "/marker/event.gif"
}, {
  "name": "北京成信宾馆(天坛店)",
  "location": {
    "lat": 39.88039,
    "lng": 116.426976
  },
  "address": "北京市东城区市东城区天坛东路77号天坛东里",
  "province": "北京市",
  "city": "北京市",
  "area": "其他",
  "street_id": "832489f9240f80c0a4c756b4",
  "detail": 1,
  "uid": "832489f9240f80c0a4c756b4",
  "img": "/marker/weather.gif"
}, {
  "name": "百时快捷酒店(北京天坛店)",
  "location": {
    "lat": 39.89339,
    "lng": 116.43329
  },
  "address": "北京市东城区法华寺街10号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "251374c9474cc926a11de901",
  "detail": 1,
  "uid": "251374c9474cc926a11de901",
  "img": "/marker/event.gif"
}, {
  "name": "北京花园宜成宾馆",
  "location": {
    "lat": 39.951802,
    "lng": 116.410459
  },
  "address": "北京市东城区车辇店胡同甲33号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "c79a073ec09ab6ee72210ba7",
  "detail": 1,
  "uid": "c79a073ec09ab6ee72210ba7",
  "img": "/marker/overSpeed.gif"
}, {
  "name": "北京宝鼎中心酒店式公寓",
  "location": {
    "lat": 39.906218,
    "lng": 116.420544
  },
  "address": "北京市东城区东打磨厂街7号a座",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "e80284283dd5ddb48e77273a",
  "telephone": "18601157111",
  "detail": 1,
  "uid": "e80284283dd5ddb48e77273a",
  "img": "/marker/overSpeed.gif"
}, {
  "name": "首都宾馆-停车场",
  "location": {
    "lat": 39.907647,
    "lng": 116.415582
  },
  "address": "北京市东城区前门东大街3号",
  "province": "北京市",
  "city": "北京市",
  "area": "东城区",
  "street_id": "",
  "detail": 1,
  "uid": "5ffb1816fb28e65e6e476087",
  "img": "/marker/event.gif"
}, {
  "name": "北京诺富特和平宾馆-停车场",
  "location": {
    "lat": 39.92204,
    "lng": 116.421612
  },
  "address": "北京市东城区金鱼胡同3号",
  "province": "北京市",
  "city": "北京市",
  "area": "西城区",
  "street_id": "",
  "detail": 1,
  "uid": "cc8aa959befbfa53a8175a13",
  "img": "/marker/overSpeed.gif"
}];


/***/ }),

/***/ 1543:
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABACAYAAAATffeWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUlJREFUeNrslrtKA0EUhr9JttisxkoQRCxkQcGAiEUqESJWXho70TyBjY/hE0hQa28BS4tAwEpQAhZBFEERmxRWiQbMJhlnMipR3ChYKfMXy5nDnu+c5Z9lRkzM5FCS+tHvp3BdiHdBT1zgeeA4UK9DtQrliqTyBDfFPK8SEX4pC7AAC7AAC7CA/wwY9WEtLVqH62d1q4N2dUkwNiI+5J32xfJCpAXp6xVkDuR7PhqF9KzAHwQvBofZkAmCwBQNDcDKvCCimul+iylTrPVck+GfsKm6lh9NnFCTzE0JppNq7GGT03eDrWwHwH0J1reb1AKzTiZgctzEjQZs7ElKD9+4cH0HmX1Js62RDneOJFe38mc2nl9KdlXB2+u5E0nh4msbnTB/z4raDUnMFRwXwveB02mT5E/1JUvan8kCLMACLMAC/hDgRYABANGQUpLcOQrcAAAAAElFTkSuQmCC";

/***/ }),

/***/ 9013:
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAAB7CAAAewgFu0HU+AAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTA0LTA3VDEwOjE2OjQ5KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA0LTA3VDEwOjE2OjQ5KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wNC0wN1QxMDoxNjo0OSswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowYTgzNWM2Yi02MzU3LWU3NDQtYTMyNi00NWNhYjVhMmY2NjQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2NDM0ZjgwYi02ODFlLTE3NGYtYjI3Ni1kMWY2YThiM2NjZmYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowZmY0MDJlMC01ZjYzLTAwNGEtOGJjYS01MDBkYjZlMTA4NTMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowZmY0MDJlMC01ZjYzLTAwNGEtOGJjYS01MDBkYjZlMTA4NTMiIHN0RXZ0OndoZW49IjIwMjMtMDQtMDdUMTA6MTY6NDkrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MGE4MzVjNmItNjM1Ny1lNzQ0LWEzMjYtNDVjYWI1YTJmNjY0IiBzdEV2dDp3aGVuPSIyMDIzLTA0LTA3VDEwOjE2OjQ5KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+P6zd3wAADAJJREFUWIWtmH1sFNe1wH8zs7uMd9f2+mPXxsYQUoONQsIGodop4aMxpglS6qhN04aXhg+HEB4FxQWxAoypMISaynVKEfILT6S8CNLSp1IlqYQsMFRAgJTGlL6oUNNXAsVeL+yu1+v9npnbP3Zt7ICL+16PdLVXmnPP/c05955zZiUhBEPicrkAkCSJgYEB4vE4qqqSl5eH1+tlhO4U4DFFURaVlZU9YbPZCrOzs4sBwuGwNxKJ3L1169YVXddPAP8D3ByyW1xcTDAYHLadk5MzbNfn8w2zmBiHSJI0tHgG8O81NTUvzps3r3ju00/zhNtNQUEBSkZXhyK/38+Vy5drzp0923DmzBnvyZMn/xvYL4T4kyRJ49kShBDDw+l04nQ6cblcqKoKgKqqWK1WFfhRTU2Nr6OjQ+jiAaJp6fEF0YUQHR0doqamxgf8yGq1qiNtu1yu4X1HskgPCyUw1W63/2dra+szK1euxGRKO1m/eZPUlSsk/vAHdJ8P3e/HEALhcKA4nVjcbrJmzcIydSoAmqZx8OBBNmzY0Dk4OPga8Nd/FMqHgT1RUVHx4bvvvjv5qaeeSgN1dxP/9a9JnjqFPjAAZjP6iDfVdB0tlSIVjYLdTvbixThefpmsGTMAOH/+PCtWrLh57dq151VVvTIusOLi4uHw+ny+8srKygunT58uKCoqAiB+5Ajxw4chGEQuKACTCcMwEEKg6zqGYaBpGtrQPJkk4fVCXh6Fr79O0erVAPT19bFw4UL/1atXq10u1/Whc+f1eh8Mlp+fD0A0GrVaLJaTHR0d1dXV1aDrRNraSBw7hikrC8XhgMy6ITBN09ANIw2l62i6jq7rpHSdZCBAKhKh4JVXmNzcjKQoXLhwgcWLF19IJpM1Vqs1ChAIBIZZ5JEXIRgMEgwGSSQSO/bt25eGAiI//jHJY8cw5edjcjhQZBmz2YwiyyiyjCRJyLKMnPkFkDNekAGTw4G5oADfoUPc2LoVgOrqavbt21edSCR2DO07UkZ5LOPSipqamk9PnDhhBYgcPkx0714shYWYVRVFUVAUBVnT0JJJhMWCZhhoqRTa4CCaomDIctqDuj4cWk3T0BIJYn19TPnBDyhZswaARYsWRU+ePDkbuDaSZZTHVFVFkqSGbU1NVgD9xg0ihw4hqSqYzUP0SMkkssuF4nYjKQoYBgDm2bORVBUjGMQIh9MjFhsOu2SxIKkqt/buJdbdDcC2piarJEkNQynkgWCVlZVFVVVVLy6YPx+AwV/+Et3vR8rJgcytQwiMUAhRV4f07W9jaBpGLIY8dSr2LVuwVFejTJmCpbISc3k5JqcznaANA0kIzA4HSZ+P2wcPArBg/nyqqqperKysLBoTrLu7e05tbW0BgO71MtjRgZSXhzCMdI4SAq2/H/3RRxFz5pB6/300nw8jEsHy9a+DqqLOm4dj0yZyVq6kaOdOXJs3I2QZNA0j4zmz00nfsWMkb98GoLa2tqC7u3vOmGCxWOzZRbW16fmlS2j9/QhFSeeooXMUjSLV1WFcu0bqs88wLV+OMn8+E2pqMO7cYeAnPyGwezfB9nZMpaWk/H60QACG7AiBJMvowSD+s2fT56y2llgs9uyYYMXFxdOnV1Skwbq6QJYRhoGeufp6PI5cXY1SUUG4uRl5wQLMS5aQVV9P9MMP0W7cwPT44wx2dmJfvJhUby++1tY0VOa2CiEQgCHL9F+8CMD0igqKi4unj2QZVcTtdruzsKAAAM3nQzcMZF1n6K4YySTWmhqUsjKyVqzAPHcu8ePHkex2+ltbkSZOJH/3btQFC5CLirj95puk7tyB3FyErg8fByMDF+/pAaCwoAC73e4cE8xmsxWZlHSfkPT5MDIZHEACJJOJyAcfkPj4Y3I8HrS//IVQezt6OIyUl4e5pATZZmPCV79KuLOTlN+PsFjQQyGEzZa2N6J8JTIlyKQo2Gy2ojHBNE2LDs0NIe55TJIQuo4syyRPnyarqgrd6+XOpk1o4TA5r7yC7YUXELqO/8ABkrdukb98OV/66CMGzp4l8MEH9J87lw6pYWBkhhhj7/vAwuFw78DgYHmO3Y6cn58GEwKRCaeeSmGaNo28nTtJfPYZclkZud/4BuqCBQx+/DHRc+dI+nwMfvop/Z2d5H7rW+TX1WF1u7l7+jTc6+swDAOzMx29gUiEcDjcOyZYKBTq7enpIWf6dJSiIjRNQ9H1dA6TJEQ8jvrYY5gnTUIPh8l94w0Gf/tb7ixdSrKnh7xVqyjbtYtUby+D58/T97OfcecXv0DKzUXKykJPpYYLvADUiRMB6Ll9m1AoNDZYMBg8d/HChZcqp0/HOmcOd48cQcskRlmSkFSVyCefcP1rXyPl8yErCpLFggHIkybh//nPGTh/nrylS8l99ll0SeLG9u3IqophMt27REKgJZPkz50LwMULFwgGg+fGBANOnT51Six79VUp9ytfQc7LIxWLoVgsCFlGEgIjlUItKSH7mWfIcrsxUinuvvceRevWYfT3Ezxxgtttbfzv1q2Y8vOR8/MRioKRSTmGYaAnEpgLC3EuXAjA6VOnBHBqJMioPCZJ0tXjx49f7PP5UAoKcNTVkfB602+oaaSiURwvvEBpSwvWhQuJ9/YS+M1vSPT0EPjoIzTAtX49M371K2a8/z7Ol19GyskhGYmk86BhoBsGsd5eJn3nO+kKcOcOx48fvyhJ0tVRLCMreklJCb29vUu3NjYe3tncTPLzz7ny/PNo/f1MKCxE6DoTJk5EslhI9fam22lNQ87OJtXfj5yVheJ0Yps9G+c3v4nJ4eDPmzYR/uMfwWbDAGI+H4rDwcIzZ8iaOpXGbdvYtXPnv02cOPFITyav3Qf25JNP0t/fb45EImcv/f73X55cVkbfe+/RvWEDptxcFKsVEol06jCbQZbTI1OkDU3DSCbRUimEpiFUFclsRtc0DF0nFYsRCwR4cv9+Hlm1ipt/+xtzZs/+xGazPe1wOFJdXV0PDqXT6cTtdqcCgcDmFcuXawBF3/0upd/7HnG/n2Q4nD7EFgu6JKFnWupUKpXuvYTAMJshKwtsNgSQSiYxhEhD3b3LtA0beGTVKgBWLFumBQKBzW63O+V0jkr8o8Hi8TixWAxFUTo7Ozsb1q5dC8DUpibKGhpIBINE+/rSjeFQ86dp6f4+c7g1TUPPNIe6EBiGQdTrJe73M83jYeYPfwjA2rVr6ezsbFAUpTMWiw19kQ3LF0sSZrOZGTNmEI1G9+3fv39aaWnp+i1btvClbdtQJ0/mry0tRD7/HIvTiWQyIQGCe8VZ6DpA2pvJJHGvlwllZTze1MQjr70GwFtvvcX+/fv3Tps2bZ/VasVisfDFD+FRYA6HAyEEs2bNwmq1Ul5e3rB161aHpmmvNjU1UbpsGXnz53P70CFuHz1KwudLwxhGOgkbBkKSMAAMA7PLxbQtW3ikvh7bo48CsGPHDrZv3/5fzz33XMOUKVOIRqMkEon7wEYd/pdeeulejGUZXde5fv06ly9f/o9Nmza93tLSci/sPT30/+53BM6dI9bTQ8LrRQAWlwu1pISCuXPJq6oiq6RkeI3H42HPnj3vuN3u1eXl5SiKMtwkABw9evTBHhtFLEnE43EKCwtZsmTJ6ra2NkOW5Td2794NgFpSQnFdHcV1dWOZGCWbN2+mra2tfcmSJWuSySTxeBy73T6mvjzmkwxcJBKhtLSUxsbGNS0tLe+sW7duXCAjZd26dbS0tLzT2Ni4prS0lEgkcl/o/imwIbhQKERubi4ej2d1e3v7T+vr68cNVV9fT3t7+089Hs/q3NxcQqHQQ6HGBQbp8xYKhSgsLKSrq2v9pUuX2hoaGh66rqGhgUuXLrV1dXWtLywsJBQKDX8QP0zG9f8YpD139+5dZs6cyYEDB75fVVUlZWdnv7ljx44H6jc1NfH222+/ffHixe/PnDmTw4cPY7Vax7vd+Dw2rJx521AoBNDQ3Nzc6vF47tPzeDw0Nze3Ag0Z3XF76v8ENiQjUszGPXv27Nq4cePws40bN7Jnz55dwMYv6P5TMu5Q/gNpbG1tlaxW6xaA1tbWt4DG/6/RfwUYwNbm5uYJQ/N/hcG/A6BsSPQLFyX9AAAAAElFTkSuQmCC";

/***/ }),

/***/ 1524:
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAADAAAAAATDPpdAAAAxUlEQVQoFWNggIL///8zAnEqEJ8A4s9QDGKDxBhh6sA0UEASiPcCMS4AkpOEKQaZDFH87vH///Mi//+vBOoHYRAbJAYBIDWMYGcAdc5ieP+EgaFdn4Hh2zsU2xm4hBgYKi8yMAjKgMTTmIBEMljFhjJMxSAJkAEgOQhIBmnQBrNvH4AIYSMRctogDSQBkIarYB2qDrg1IuSugjTMBasM6GIAexBdG8jTIDkImMsACiogJjpYwfqAGoCBTmTEweyC2kQwaQAA3Nnt8mv/CyYAAAAASUVORK5CYII=";

/***/ }),

/***/ 7776:
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAAB7CAAAewgFu0HU+AAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTA0LTA3VDEwOjExOjIzKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA0LTA3VDEwOjExOjIzKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wNC0wN1QxMDoxMToyMyswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMTUwM2MwMC0yZjNiLWM4NDItOWI5My04ZGEwMWUzODg5Y2QiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiOGYwNjljZi1jYjcxLWJkNDEtYTBkOS0wYzA3YmEzZjUwYzUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowZWNjN2Q1NS0wY2E0LWE5NDItYmI1Yy0xODdkYmVjYWVlNmIiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowZWNjN2Q1NS0wY2E0LWE5NDItYmI1Yy0xODdkYmVjYWVlNmIiIHN0RXZ0OndoZW49IjIwMjMtMDQtMDdUMTA6MTE6MjMrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTE1MDNjMDAtMmYzYi1jODQyLTliOTMtOGRhMDFlMzg4OWNkIiBzdEV2dDp3aGVuPSIyMDIzLTA0LTA3VDEwOjExOjIzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m8A2SQAADEdJREFUWIWtmHtwVGWWwH/fvd2dTneHPDrdaQkPlUBA4xAeQniIrCGUUs6OM1LUzM4OLMO4gAyWwQwpHhvWRLQSJxMXmIg6ruPUOD7GLZ3VsagsBGeBMTisUWdUEFReCUkIaTr97nu/++0fnWSIkDGzO6fqVt2q79xzfvec755zviuUUgyK3+8HQAhBf38/iUQCp9NJbm4uXV1dXKE7EbhZ1/Ul48eP/5rb7c7PysoKAITD4a5oNNp77ty5D6WU+4E/AWcH7QYCAYLB4JDtMWPGDNnt6ekZYrExChFCDD48Dbi/vLx8+W233RZYuGAhpdNL8Xq9oA0oWxRcutTH+x+0lx8+crjy0KFDXQcOHHgVaFZKfSKEGI1LUEoNXT6fD5/Ph9/vx+l0AuB0OnG5XE7g8fLy8p6WlhalLHWVmMpQpjKuXlBKtbS0qPLy8h7gcZfL5bzStt/vH/J7JYv4qlQCN3g8np81Njbe8f3vr8Fm0wE4F/uUPwbb+KDv91yMd9Ib70ZKRY7dR35GITPyFzDdO48bsqcAIE3Js//+LA899FBrJBL5AfDFX0rlV4F9rbi4+I3nnntuwrx58wA4Gf6A33Q8ze96Xqc/1YeNDEAgDbCkwpQKaUpiyQRuLZel4+/l21PXcZO3FIB33nmH1atXnz1x4sTXnU7nh6MCCwQCQ+nt6ekpmjp1atvbb7/tLSgoAODFMz/hxXM/Jmh0k+cowKbZsSyFZSmkOQBmKqShsCQkUgZd/b3k2nO5r6Sa9bOqAeju7mbx4sWXjh8/Xub3+08N7ruurq5rg+Xl5QEQi8VcDofjQEtLS1lZWRlSmfzbp5v4z869OO2ZZDvyUEKBUlgKLAnStDANhTQVUirMlEJKMA1FX7SPSNzgezet5ZHFP0XXdNra2li6dGlbKpUqd7lcMYC+vr4hFo0rJBgMEgwGSSaTtXv27CkrKysDoOnjB3nt/JPkOPPJyczD5gCbDWx2ga6DpqXTL4RA0wAEQhMIoRACcjLy8Lpy+PkHT7G1dT0AZWVl7NmzpyyZTNYO+r1ShkVsIKTF5eXl7+3fv98F8MJnP+GnpzbjdflwOhxpGLtA1wWRZATNsoNhwzQtUobENCSGMRCtVDrFSA3TUCRSKbpCIWoX13P/rZsBWLJkSezAgQMzgRNXsgyLmNPpRAhRWfMvNS6A05FP+MVnDTj1TOy6AyFAASiQlmR61u347ROQSBCQtOIkZIKEjJEwYiRlHNMyBl8Yh+4g06bTdOQxTvR+DEBNTY1LCFE5WEIGZViBnTp1aoHT6Vy+6PZFgOLVz5/iUqqbsZ7xWJZCWRrSkgQT3SSkwcM3/obXOpo50tPGWIePDZPr8WUUYkgTHZ3+5GVaTr/G4XMHUNhQSpCTmcO5vks8e2wPDXc2s2jRIubOnbs8kUjsALqvGbGTJ0/Orqio8AJ0Jc7Tcv7X5Nr9WJaFshRJGcej5fDDCbupuqEZr72QJf5/oPamvcwaU84XkeN81v8xZ8LH+UP375maN5N7Jq0iKZNYlhwonuBzZ/HaJy/R0X8WgIqKCu/JkydnjxixeDx+Z0VFBQDHug4RjPfh9XhRSqAsMJFIQ+C1jQcsdGHHLXIpdE7mQ+0oPzvRRCIJyoLTl8Bpc1CSUwYqvQeUAmUpbNjpifbx318c5DvTV1FRUcHOnTvvBH57TbBAIDCleEoxAO0XD6NhQ0oFQgEaunLRGTlHVfvdJKTil/Pa+I8zT/LSmefJtWUy0T0OnDqmYeEwO/FljCUlkygLLMUQnFQKHZ22M4f5zvRVFE8pJhAITBkxYh6Px+f1egHojnZiyXRdEghQFilMSvMXM8lzM0kZp8A5kbn5d5Jl89Id62Siu5g7xn4LKSVxM0qJ91Z++/lLWEqhWQoshbIGIoeiM9QBgNfrxePx+EYEc7vdBfpAL7wY60aaVhpOgKUEJiYB+wSmZc0hZSWIGGFm5i7GTian+BOl3vl0hM/w/Ce7cGqZlOTN5kTvRySNFHbdhbTSQFjpdHdH0pVet+m43e6CEcFM04wN3isJcuBCKJAKTbfz5plfETWi9Ca6ONn/EUVZN7Hm7W8z1umhceHLfHCxjddP7cfngP2fvckt3jkUZU+jo78TZQksCZZKtzEscU3f8KWvMhwOX4j0RwHIyygYaDUK01BYFiRTJsmUwd0TVnJzzhy6IucY757M94pWMt27AGkpdGxkAi4tm76oomrOI9xT9I9EE5GBzZ+2aVngc6d7czQSJRwOXxgRLBQKXei8kM67L3McplTpxmykL8OUOJQboXTO958hlUox1jWBuyd8l+s900DBpOybKMgsIMeRz0x/CTfmTqUjfB7TkOk+aqn0Vy6hcEwhAB0dHYRCoWFgw1IZDAaPtB1tWzGleAq3FizkxY+ewrSle6GyLFJKYrdbjPfcyDduXMn/dB/hcOd/se3wD1ASusMXqJxVy/PL3iRlJsh15nOi9yPeOvk6Gg4sqbDMdApTpmLBDbcD0Ha0jWAweGREMODgwYMH1cqVK8WCiXeQbfORSETIcDgRQpEyDWblzyJqRHBqmay+eRNvnHqRk70xApmCVz9+mUOnD3L9mCIsqYgko3zY+SEagixbLqYpkRISqQTezDz+buqSQacKODgimBDi+L59+45e7LlY5vP7uWfKd9n17o8pzHaAEJgG3Dt5FWf7P2flG/fyy6+/xuIJy3jp7l/RETlH0oxjWCYpI4WGhoaN5dNW8u6Zd2j59C1smgOUovdygh8tWYc/s4CLPRfZt2/fUSHE8RHBAoGAceHChd27du0qq3ukjpWl63npj89zsf8SXnceOg4OndmPqSSRWJR1b61gun8Ot41fwljPBGy6HYGGptJbVxM6Ns3O0S/aME2JzSa4GA4RyM5l/cIfArBr1y66urp2X3fddcawIF05asyYMYPLly/bo9Ho4feOvTdn3IRx/Lz9STbtu5+cTBeZ9kwMK4WmadiEjZRMYVgpLKkAAQgsy0pPtWZ6EjalQlcO7MJBLBUnGEnx5Io9rJu/gfNnzzNz9sx33W73wpycHKO9vX2IZdhX6fP5KC0tNfr6+rasWr3KBPinGevZOGcTl8Ixook4mmXHMgSmoRDShgMXTs1DhnDhIJMM4SJDucnQ3GQINy7djR0HkXiCYCjFj+54kHXzNwCwavUqs6+vb0tpaanh8w0r/MPBEokE8XgcXddbW1tbKzdsSBt4uLyRB8uq6A3H6A71pQe/gRFaGiAHykm65qXrlDStAR1Bd3+IUDjJ5opKGv6+CYANGzbQ2tpaqet6azweHzyRXXuPud1u7HY706ZNIxaL7Wlubp5cWFj4wNatW3m44nGuz53EztZ/5fSlbnweFw7NgaUkMHAgVqCUGDqgpEyDvssJrsstYMe3drB2QXqsfvTRR2lubt41efLkPS6XC4fDwZcPwsPAcnJyUEoxffp0XC4XRUVFldu2bcsxTXNlTU0Nq2ev4/Ybl/DcH57i5fYX6A53IUR6WrDkn6dbBiq83+3nvqUbuG/+WiblTwagtraWHTt2/OKuu+6qnDhxIrFYjGQyeRXYsM2/YsWKP+dY05BScurUKd5///2nNm/e/M/19fVD652h8xw928bhz39HR/95usNdWBICWQHGjilk4aRFlE2cT2HOuKFnqquraWhoeLq0tHRtUVERuq5jWdbQ+iuvvHLtiA0jFoJEIkF+fj7Lli1b29TUZGmatu6xxx4DYGz2OL55y3K+ecvykUwMky1bttDU1LR32bJl61OpFIlEAo/HM6K+NuLKAFw0GqWwsJDt27evr6+vf3rjxo2jArlSNm7cSH19/dPbt29fX1hYSDQavSp1fxXYIFwoFCI7O5vq6uq1e/fu3b1mzZpRQ61Zs4a9e/furq6uXpudnU0oFPpKqFGBQXq/hUIh8vPzaW9vf+DYsWNNlZWVX/lcZWUlx44da2pvb38gPz+fUCiEpo3K5ej+j0E6cr29vZSUlPDMM89smjt3rsjKynqwtrb2mvo1NTU88cQTTxw9enRTSUkJL7zwAi6Xa7TuRhexIeWBtw2FQgCVdXV1jdXV1VfpVVdXU1dX1whUDuiOOlL/J7BBuaLEVDU0NOysqqoaWquqqqKhoWEnUPUl3b9KRp3KvyDbGxsbhcvl2grQ2Nj4KLD9/2v0bwEGsK2uri5j8P5vYfB/AYBIJyMzBmi3AAAAAElFTkSuQmCC";

/***/ }),

/***/ 419:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(6822);
var tryToString = __webpack_require__(7716);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 5852:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isObject = __webpack_require__(3489);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 2672:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIndexedObject = __webpack_require__(7282);
var toAbsoluteIndex = __webpack_require__(3429);
var lengthOfArrayLike = __webpack_require__(2843);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 5950:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(2667);
var isArray = __webpack_require__(7829);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ 3515:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1671);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 6055:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var hasOwn = __webpack_require__(6072);
var ownKeys = __webpack_require__(9814);
var getOwnPropertyDescriptorModule = __webpack_require__(3570);
var definePropertyModule = __webpack_require__(1152);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 2398:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(2667);
var definePropertyModule = __webpack_require__(1152);
var createPropertyDescriptor = __webpack_require__(7477);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 7477:
/***/ (function(module) {


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 579:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(6822);
var definePropertyModule = __webpack_require__(1152);
var makeBuiltIn = __webpack_require__(3660);
var defineGlobalProperty = __webpack_require__(1328);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 1328:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(2750);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 2667:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(560);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ 8956:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(2750);
var isObject = __webpack_require__(3489);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 1756:
/***/ (function(module) {


var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ 7055:
/***/ (function(module) {


module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),

/***/ 4567:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(2750);
var userAgent = __webpack_require__(7055);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 3108:
/***/ (function(module) {


// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 6071:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(2750);
var getOwnPropertyDescriptor = (__webpack_require__(3570).f);
var createNonEnumerableProperty = __webpack_require__(2398);
var defineBuiltIn = __webpack_require__(579);
var defineGlobalProperty = __webpack_require__(1328);
var copyConstructorProperties = __webpack_require__(6055);
var isForced = __webpack_require__(3859);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = global[TARGET] && global[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 560:
/***/ (function(module) {


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 1693:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(560);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 2486:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_BIND = __webpack_require__(1693);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 2565:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(2667);
var hasOwn = __webpack_require__(6072);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 1671:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_BIND = __webpack_require__(1693);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 7522:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(2750);
var isCallable = __webpack_require__(6822);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 7147:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aCallable = __webpack_require__(419);
var isNullOrUndefined = __webpack_require__(636);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 2750:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 6072:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1671);
var toObject = __webpack_require__(310);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 8646:
/***/ (function(module) {


module.exports = {};


/***/ }),

/***/ 4468:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(2667);
var fails = __webpack_require__(560);
var createElement = __webpack_require__(8956);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ 1286:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1671);
var fails = __webpack_require__(560);
var classof = __webpack_require__(3515);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 4459:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1671);
var isCallable = __webpack_require__(6822);
var store = __webpack_require__(5404);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 1528:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_WEAK_MAP = __webpack_require__(2891);
var global = __webpack_require__(2750);
var isObject = __webpack_require__(3489);
var createNonEnumerableProperty = __webpack_require__(2398);
var hasOwn = __webpack_require__(6072);
var shared = __webpack_require__(5404);
var sharedKey = __webpack_require__(8310);
var hiddenKeys = __webpack_require__(8646);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 7829:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var classof = __webpack_require__(3515);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ 6822:
/***/ (function(module) {


// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 3859:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(560);
var isCallable = __webpack_require__(6822);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 636:
/***/ (function(module) {


// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 3489:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(6822);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 252:
/***/ (function(module) {


module.exports = false;


/***/ }),

/***/ 7646:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(7522);
var isCallable = __webpack_require__(6822);
var isPrototypeOf = __webpack_require__(7948);
var USE_SYMBOL_AS_UID = __webpack_require__(6043);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 2843:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toLength = __webpack_require__(7157);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 3660:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1671);
var fails = __webpack_require__(560);
var isCallable = __webpack_require__(6822);
var hasOwn = __webpack_require__(6072);
var DESCRIPTORS = __webpack_require__(2667);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(2565).CONFIGURABLE);
var inspectSource = __webpack_require__(4459);
var InternalStateModule = __webpack_require__(1528);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 868:
/***/ (function(module) {


var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 1152:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(2667);
var IE8_DOM_DEFINE = __webpack_require__(4468);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(3145);
var anObject = __webpack_require__(5852);
var toPropertyKey = __webpack_require__(9242);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 3570:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(2667);
var call = __webpack_require__(2486);
var propertyIsEnumerableModule = __webpack_require__(8658);
var createPropertyDescriptor = __webpack_require__(7477);
var toIndexedObject = __webpack_require__(7282);
var toPropertyKey = __webpack_require__(9242);
var hasOwn = __webpack_require__(6072);
var IE8_DOM_DEFINE = __webpack_require__(4468);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 5719:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var internalObjectKeys = __webpack_require__(7401);
var enumBugKeys = __webpack_require__(3108);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 3694:
/***/ (function(__unused_webpack_module, exports) {


// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 7948:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1671);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 7401:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1671);
var hasOwn = __webpack_require__(6072);
var toIndexedObject = __webpack_require__(7282);
var indexOf = (__webpack_require__(2672).indexOf);
var hiddenKeys = __webpack_require__(8646);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 8658:
/***/ (function(__unused_webpack_module, exports) {


var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 4481:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(2486);
var isCallable = __webpack_require__(6822);
var isObject = __webpack_require__(3489);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 9814:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(7522);
var uncurryThis = __webpack_require__(1671);
var getOwnPropertyNamesModule = __webpack_require__(5719);
var getOwnPropertySymbolsModule = __webpack_require__(3694);
var anObject = __webpack_require__(5852);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 8939:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isNullOrUndefined = __webpack_require__(636);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 8310:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var shared = __webpack_require__(1300);
var uid = __webpack_require__(2599);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 5404:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var IS_PURE = __webpack_require__(252);
var globalThis = __webpack_require__(2750);
var defineGlobalProperty = __webpack_require__(1328);

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.37.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 1300:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var store = __webpack_require__(5404);

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


/***/ }),

/***/ 9474:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(4567);
var fails = __webpack_require__(560);
var global = __webpack_require__(2750);

var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 3429:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(3790);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 7282:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(1286);
var requireObjectCoercible = __webpack_require__(8939);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 3790:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var trunc = __webpack_require__(868);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 7157:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(3790);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 310:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var requireObjectCoercible = __webpack_require__(8939);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 8864:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(2486);
var isObject = __webpack_require__(3489);
var isSymbol = __webpack_require__(7646);
var getMethod = __webpack_require__(7147);
var ordinaryToPrimitive = __webpack_require__(4481);
var wellKnownSymbol = __webpack_require__(6772);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 9242:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toPrimitive = __webpack_require__(8864);
var isSymbol = __webpack_require__(7646);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 7716:
/***/ (function(module) {


var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 2599:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1671);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 6043:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(9474);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 3145:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(2667);
var fails = __webpack_require__(560);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ 2891:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(2750);
var isCallable = __webpack_require__(6822);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 6772:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(2750);
var shared = __webpack_require__(1300);
var hasOwn = __webpack_require__(6072);
var uid = __webpack_require__(2599);
var NATIVE_SYMBOL = __webpack_require__(9474);
var USE_SYMBOL_AS_UID = __webpack_require__(6043);

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 381:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6071);
var toObject = __webpack_require__(310);
var lengthOfArrayLike = __webpack_require__(2843);
var setArrayLength = __webpack_require__(5950);
var doesNotExceedSafeInteger = __webpack_require__(1756);
var fails = __webpack_require__(560);

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "bdgl-map-lib.umd." + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "css/" + chunkId + "." + {"517":"48d08d29","963":"48d08d29"}[chunkId] + ".css";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "bdgl-map-lib:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	!function() {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = function(chunkId, fullhref, oldTag, resolve, reject) {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			if (__webpack_require__.nc) {
/******/ 				linkTag.nonce = __webpack_require__.nc;
/******/ 			}
/******/ 			var onLinkComplete = function(event) {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && event.type;
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + errorType + ": " + realHref + ")");
/******/ 					err.name = "ChunkLoadError";
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = function(href, fullhref) {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = function(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			71: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = function(chunkId, promises) {
/******/ 			var cssChunks = {"517":1,"963":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(function() {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, function(e) {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			71: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = (typeof self !== 'undefined' ? self : this)["webpackChunkbdgl_map_lib"] = (typeof self !== 'undefined' ? self : this)["webpackChunkbdgl_map_lib"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/@vue+cli-service@5.0.8_vgqb3v6m2ynwvuzumqmye2vzna/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.93.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_ce2ekrksu4bikkggd5ymmdtq6i/node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/bdLib/bdLib.vue?vue&type=template&id=ed5aecb4&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.dialogVisible ? _c('el-dialog', {
    attrs: {
      "width": "1300px",
      "append-to-body": "",
      "title": _vm.title,
      "close-on-click-modal": false,
      "visible": _vm.dialogVisible
    },
    on: {
      "update:visible": function ($event) {
        _vm.dialogVisible = $event;
      },
      "close": _vm.hideDialog
    }
  }, [_c('div', {
    staticClass: "dialog-body"
  }, [_c('ul', {
    staticClass: "dialog-body-panel"
  }, _vm._l(_vm.btnList, function (item) {
    return _c('li', {
      key: item,
      class: ['bmap-btn', `bmap-${item}`],
      style: {
        'background-position-y': _vm.activeBtn === item ? '-52px' : '0px'
      },
      on: {
        "click": function ($event) {
          return _vm.handleDraw(item);
        }
      }
    });
  }), 0), _vm.dialogVisible ? _c('div', {
    ref: "map",
    staticClass: "map",
    attrs: {
      "id": "map-container"
    }
  }) : _vm._e()]), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": _vm.hideDialog
    }
  }, [_vm._v("取 消")]), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function ($event) {
        return _vm.handleSubmit();
      }
    }
  }, [_vm._v("保存")])], 1)]) : _vm._e();
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./components/bdLib/bmpgl_lib.js
/**
 * 异步加载百度地图
 * @returns {Promise}
 * @constructor
 */
function loadBaiDuMap(ak) {
  return new Promise(function (resolve, reject) {
    try {
      console.log("BMap is defined:", BMapGL === undefined || BMapGL);
      resolve(BMapGL);
    } catch (err) {
      window.init = function () {
        resolve(BMapGL);
      };
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://api.map.baidu.com/api?v=1.0&type=webgl&ak=${ak}&callback=init`;
      script.onerror = reject;
      document.body.appendChild(script);
    }
  });
}

/**
 * 选择性加载，如果不需要就把下面的这部分删掉
 * 异步加载百度地图,以及绘制工具
 * @returns {Promise}
 * @constructor
 */
function loadBaiDuDrawMap(ak) {
  return loadBaiDuMap(ak).then(BMapGL => {
    let loaded = false;
    try {
      loaded = BMapGLLib && BMapGLLib.DrawingManager;
    } catch (err) {
      loaded = false;
    }
    if (!loaded) {
      console.log("BMapLib.DrawingManager loading!");
      let script = document.createElement("script");
      script.type = "text/javascript";
      // script.src = "http://mapopen.cdn.bcebos.com/github/BMapGLLib/DrawingManager/src/DrawingManager.min.js";
      script.src = __webpack_require__.e(/* import() */ 726).then(__webpack_require__.t.bind(__webpack_require__, 8726, 23));
      document.body.appendChild(script);
      let link = document.createElement("link");
      link.rel = "stylesheet";
      // link.href = "http://mapopen.cdn.bcebos.com/github/BMapGLLib/DrawingManager/src/DrawingManager.min.css";
      link.href = __webpack_require__.e(/* import() */ 963).then(__webpack_require__.bind(__webpack_require__, 3963));
      document.body.appendChild(link);
    } else {
      console.log("BMapLib.DrawingManager is loaded!");
    }
    return BMapGL;
  });
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.93.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_ce2ekrksu4bikkggd5ymmdtq6i/node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/bdLib/bdLib.vue?vue&type=script&lang=js

/* harmony default export */ var bdLibvue_type_script_lang_js = ({
  name: "bdGlDrawAreaDialog",
  components: {},
  props: {
    ak: {
      required: true,
      type: String,
      default: ""
    },
    btnList: {
      type: Array,
      default: () => {
        return ["marker", "polyline", "rectangle", "polygon", "circle"];
      }
    },
    // 按钮列表【marker：点位,polyline：折线,rectangle：矩形,polygon：多边形,circle：圆】
    mapConfig: {
      type: Object,
      default: () => {
        return {
          lng: 113.16,
          // 经度
          lat: 40.9556,
          zoom: 12,
          heading: 10,
          // 地图旋转角度
          tilt: 19,
          // 地图倾斜角度
          styleId: "" // 个性化地图样式 e6360ab59a74ddb51b584fb38d1cc191
          // mapType: BMAP_EARTH_MAP, // 地图类型：BMAP_EARTH_MAP 地图卫星模式，BMAP_NORMAL_MAP 普通模式
        };
      }
    },
    // 地图基础配置信息
    isCustomCenter: {
      type: Boolean,
      default: false
    },
    // 是否需要自定义地图中心点（默认使用用户的位置）
    mapCenter: {
      type: Object,
      default: () => {
        return {
          lng: 113.16,
          // 经度
          lat: 40.9556
        };
      }
    },
    // 地图中心点（仅当isCustomCenter为false时生效）
    styleOptions: {
      type: Object,
      default: () => {
        return {
          strokeColor: "#43a8ff",
          // 边线颜色
          fillColor: "#43a8ff",
          // 填充颜色
          strokeWeight: 3,
          // 边线宽度，以像素为单位
          strokeOpacity: 1,
          // 边线透明度，取值范围0-1
          fillOpacity: 0.2 // 填充透明度，取值范围0-1
        };
      }
    },
    // 自定义图形样式
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
          padding: "5px"
        };
      }
    } // 自定义图形标注样式（提示词）
  },
  dicts: [],
  data() {
    return {
      title: "绘制区域",
      map: null,
      BMapGL: null,
      dialogVisible: false,
      activeBtn: "",
      // 当前激活的按钮
      markerObj: {
        e: undefined,
        point: undefined,
        address: undefined
      },
      // 点位绘制完的数据
      polylineObj: {
        e: undefined,
        pointsArr: undefined
      },
      // 折线绘制完的数据
      rectangleObj: {
        e: undefined,
        pointsArr: undefined
      },
      // 矩形绘制完的数据
      polygonObj: {
        e: undefined,
        pointsArr: undefined
      },
      //  多边形绘制完的数据
      circleObj: {
        e: undefined,
        center: undefined,
        radius: undefined
      } // 圆形绘制完的数据
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
          geolocation.getCurrentPosition(res => {
            if (res && res.point) {
              resolve(res.point);
            } else {
              reject({
                lat: undefined,
                lng: undefined
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
        loadBaiDuDrawMap(this.ak).then(() => {
          this.BMapGL = BMapGL;
          this.map = new this.BMapGL.Map("map-container");
          let latLng = this.getMyPosition();
          this.map.enableScrollWheelZoom();
          this.map.setHeading(this.mapConfig.heading);
          this.map.setTilt(this.mapConfig.tilt);
          this.map.setMapStyleV2({
            styleId: this.mapConfig.styleId
          });

          // this.map.setMapType(this.mapConfig.mapType); // todo 异步后导致地图类型不可用？？？

          function getCoordinates(isCustomCenter, latLng, mapConfig) {
            return {
              lng: isCustomCenter ? mapConfig.lng : latLng.lng,
              lat: isCustomCenter ? mapConfig.lat : latLng.lat
            };
          }

          // 使用提取的函数来获取坐标
          const coordinates = getCoordinates(!this.isCustomCenter, latLng, this.mapConfig);
          // 设置地图中心点和缩放级别
          this.map.centerAndZoom(new this.BMapGL.Point(coordinates.lng, coordinates.lat), this.mapConfig.zoom);
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
        let pointGlArr = pointsArr.map(item => new BMapGL.Point(item.lng, item.lat));
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
        enableCalculate: false,
        // 绘制是否进行测距测面
        enableSorption: true,
        // 是否开启边界吸附功能
        sorptiondistance: 20,
        // 边界吸附距离
        circleOptions: this.styleOptions,
        // 圆的样式
        polylineOptions: this.styleOptions,
        // 线的样式
        polygonOptions: this.styleOptions,
        // 多边形的样式
        rectangleOptions: this.styleOptions,
        // 矩形的样式
        labelOptions: this.labelOptions // label样式
      });
      if (drawingManager._isOpen && drawingManager.getDrawingMode() === this.activeBtn) {
        drawingManager.close();
        this.activeBtn === "";
      } else {
        drawingManager.setDrawingMode(this.activeBtn);
        drawingManager.open();
      }

      /* 点 */
      if (this.activeBtn === "marker") {
        let markerNum = 0;
        this.map.addEventListener("click", e => {
          markerNum++;
          if (markerNum > 1) {
            return;
          }
          drawingManager.close();
          this.activeBtn === "";
        });
        drawingManager.addEventListener("overlaycomplete", e => {
          const marker = e.overlay;
          // 获取标注的经纬度坐标
          let point = marker.getPosition();
          // 创建地理编码服务实例
          const geocoder = new this.BMapGL.Geocoder();
          // 将经纬度坐标解析为地址信息
          geocoder.getLocation(point, result => {
            this.markerObj = {
              e,
              point: point,
              address: result
            };
            console.log(this.markerObj, "点");
          });
        });
      } else if (this.activeBtn === "polyline") {
        /* 折线 */
        drawingManager.addEventListener("overlaycomplete", e => {
          this.polylineObj = {
            e: e,
            pointsArr: e.overlay.points.map(p => p.latLng)
          };
          console.log(this.polylineObj, "折线");
        });
      } else if (this.activeBtn === "rectangle") {
        /* 矩形 */
        // 监听矩形绘制完成事件
        drawingManager.addEventListener("overlaycomplete", e => {
          this.rectangleObj = {
            e,
            pointsArr: e.overlay.getPath()
          };
          console.log(this.rectangleObj, "矩形");
        });
      } else if (this.activeBtn === "polygon") {
        /* 多边形 */
        drawingManager.addEventListener("overlaycomplete", e => {
          this.polygonObj = {
            e,
            pointsArr: e.overlay.getPath()
          };
          console.log(this.polygonObj, "多边形");
        });
      } else if (this.activeBtn === "circle") {
        /* 圆 */
        // 监听圆形绘制完成事件
        drawingManager.addEventListener("overlaycomplete", e => {
          const circle = e.overlay;
          this.circleObj = {
            e,
            center: circle.getCenter(),
            // 圆心
            radius: circle.getRadius() // 半径
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
      overlaysArr.forEach(layer => {
        this.map.removeOverlay(layer);
      });
      this.markerObj = {
        e: undefined,
        point: undefined,
        address: undefined
      }; // 点位
      this.polylineObj = {
        e: undefined,
        pointsArr: undefined
      }; // 折线
      this.rectangleObj = {
        e: undefined,
        pointsArr: undefined
      }; // 矩形
      this.polygonObj = {
        e: undefined,
        pointsArr: undefined
      }; //  多边形
      this.circleObj = {
        e: undefined,
        center: undefined,
        radius: undefined
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
          message: "请先绘制图层再确定!"
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
    echoData(data) {}
  },
  created() {},
  mounted() {}
});
;// CONCATENATED MODULE: ./components/bdLib/bdLib.vue?vue&type=script&lang=js
 /* harmony default export */ var bdLib_bdLibvue_type_script_lang_js = (bdLibvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.93.0/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/.pnpm/css-loader@6.11.0_webpack@5.93.0/node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_zs77g4opexpjlazxpbaplvsl5m/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/.pnpm/sass-loader@8.0.2_i4l4nmociu5xhprmi6hdovwxki/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/bdLib/bdLib.vue?vue&type=style&index=0&id=ed5aecb4&prod&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./components/bdLib/bdLib.vue?vue&type=style&index=0&id=ed5aecb4&prod&lang=scss&scoped=true

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./components/bdLib/bdLib.vue



;


/* normalize component */

var component = normalizeComponent(
  bdLib_bdLibvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "ed5aecb4",
  null
  
)

/* harmony default export */ var bdLib = (component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.93.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_ce2ekrksu4bikkggd5ymmdtq6i/node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/bdMap/bdMap.vue?vue&type=template&id=44bd9502&scoped=true
var bdMapvue_type_template_id_44bd9502_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    style: _vm.mapStyle,
    attrs: {
      "id": "map-container"
    }
  }, [_c('bdMapVGl', {
    ref: "bdMapVGl",
    attrs: {
      "bdMap": _vm.bdMap
    }
  }), _c('bdClusterDetailDialog', {
    ref: "bdClusterDetailDialog"
  })], 1);
};
var bdMapvue_type_template_id_44bd9502_scoped_true_staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(381);
;// CONCATENATED MODULE: ./components/utils/asynchronousLoading.js
/**
 * 异步加载百度地图
 * @returns {Promise}
 * @constructor
 */
function asynchronousLoading_loadBaiDuMap(ak) {
  return new Promise(function (resolve, reject) {
    try {
      console.log("BMap is defined:", BMapGL === undefined || BMapGL);
      resolve(BMapGL);
    } catch (err) {
      window.init = function () {
        resolve(BMapGL);
      };
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://api.map.baidu.com/api?v=1.0&type=webgl&ak=${ak}&callback=init`;
      script.onerror = reject;
      document.body.appendChild(script);
    }
  });
}

/**
 * 异步加载百度地图,以及绘制工具
 * @returns {Promise}
 * @constructor
 */
function asynchronousLoading_loadBaiDuDrawMap(ak) {
  return asynchronousLoading_loadBaiDuMap(ak).then(BMapGL => {
    let loaded = false;
    try {
      loaded = BMapGLLib && BMapGLLib.DrawingManager;
    } catch (err) {
      loaded = false;
    }
    if (!loaded) {
      console.log("BMapLib.DrawingManager loading!");
      let script = document.createElement("script");
      script.type = "text/javascript";
      // script.src = "http://mapopen.cdn.bcebos.com/github/BMapGLLib/DrawingManager/src/DrawingManager.min.js";
      script.src = __webpack_require__.e(/* import() */ 580).then(__webpack_require__.t.bind(__webpack_require__, 580, 23));
      document.body.appendChild(script);
      let link = document.createElement("link");
      link.rel = "stylesheet";
      // link.href = "http://mapopen.cdn.bcebos.com/github/BMapGLLib/DrawingManager/src/DrawingManager.min.css";
      link.href = __webpack_require__.e(/* import() */ 517).then(__webpack_require__.bind(__webpack_require__, 6517));
      document.body.appendChild(link);
    } else {
      console.log("BMapLib.DrawingManager is loaded!");
    }
    return BMapGL;
  });
}

;// CONCATENATED MODULE: ./components/utils/index.js
/**
 * @Event 将指定数组嵌套的数据转成扁平化的点位数据
 * @description:
 * @author: mhf
 * @time: 2024-02-01 13:57:20
 **/
function flattenArr(arr, key) {
  return arr.flatMap(item => item[key]);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.93.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_ce2ekrksu4bikkggd5ymmdtq6i/node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/bdMap/bdMapVGl.vue?vue&type=template&id=32969379
var bdMapVGlvue_type_template_id_32969379_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div");
};
var bdMapVGlvue_type_template_id_32969379_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.93.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_ce2ekrksu4bikkggd5ymmdtq6i/node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/bdMap/bdMapVGl.vue?vue&type=script&lang=js
/* harmony default export */ var bdMapVGlvue_type_script_lang_js = ({
  name: "bdMapVGl",
  components: {},
  mixins: [],
  props: {
    bdMap: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  data() {
    return {};
  },
  methods: {
    /**
     * 初始化用于展示大数据的立体多边形ShapeLayer。
     * 参考文档: [ShapeLayer](https://mapv.baidu.com/gl/docs/ShapeLayer.html)
     *
     * @param {Object} [params={}] - 配置对象，包含ShapeLayer所需参数及事件处理。
     * @property {string} [params.color='rgba(0, 214, 236, 0.8)'] - 立体多边形颜色。
     * @property {boolean} [params.enablePicked=true] - 是否允许拾取交互。
     * @property {number} [params.selectedIndex=-1] - 初始选中项索引。
     * @property {string} [params.selectedColor='#ee1111'] - 选中项颜色。
     * @property {boolean} [params.autoSelect=true] - 是否根据鼠标位置自动选择。
     * @property {Array} [params.data=[]] - 数据源。
     * @property {Function} [params.onclick=() => {}] - 点击事件处理函数。
     *
     * @author: mhf
     * @time: 2024-06-29 14:54:48
     */
    initShapeLayer(params = {}) {
      console.log("initShapeLayer");
      let {
        color = "rgba(0, 214, 236, 0.8)",
        // 柱状图颜色
        enablePicked = true,
        // 是否可以拾取
        selectedIndex = -1,
        // 选中项
        selectedColor = "#ee1111",
        // 选中项颜色
        autoSelect = true,
        // 根据鼠标位置来自动设置选中项
        data = [],
        // 第一种：随参数带入这个数据
        onclick = () => {}
      } = params;
      var view = new mapvgl.View({
        map: this.bdMap
      });
      var shapeLayer = new mapvgl.ShapeLayer(params);
      view.addLayer(shapeLayer);
      // shapeLayer.setData(jsonData); // 第二种设置数据的方式【jsonData是外部传来的json数据】
      this.bdMap.setDefaultCursor("default"); // 设置地图默认光标
    }
  }
});
;// CONCATENATED MODULE: ./components/bdMap/bdMapVGl.vue?vue&type=script&lang=js
 /* harmony default export */ var bdMap_bdMapVGlvue_type_script_lang_js = (bdMapVGlvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./components/bdMap/bdMapVGl.vue





/* normalize component */
;
var bdMapVGl_component = normalizeComponent(
  bdMap_bdMapVGlvue_type_script_lang_js,
  bdMapVGlvue_type_template_id_32969379_render,
  bdMapVGlvue_type_template_id_32969379_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var bdMapVGl = (bdMapVGl_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.93.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_ce2ekrksu4bikkggd5ymmdtq6i/node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/bdMap/bdClusterDetailDialog.vue?vue&type=template&id=0f838060&scoped=true
var bdClusterDetailDialogvue_type_template_id_0f838060_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.dialogVisible ? _c('div', {
    directives: [{
      name: "div-drag",
      rawName: "v-div-drag"
    }, {
      name: "div-esc-close",
      rawName: "v-div-esc-close",
      value: _vm.hideDialog,
      expression: "hideDialog"
    }],
    staticClass: "bd-cluster-detail-dialog"
  }, [_c('div', {
    staticClass: "bd-cluster-detail-dialog-header"
  }, [_c('span', [_vm._v(" 详情 ")]), _c('i', {
    staticClass: "el-icon-close",
    on: {
      "click": _vm.hideDialog
    }
  })]), _vm._l(_vm.pointsArr, function (p, i) {
    return _c('div', {
      key: i,
      staticClass: "bd-cluster-item",
      attrs: {
        "custom-index": i
      },
      on: {
        "click": _vm.eventDelegation
      }
    }, [_c('div', {
      staticClass: "bd-cluster-item-public"
    }, [_c('el-tooltip', {
      attrs: {
        "placement": "left",
        "effect": "light",
        "overflow": "",
        "content": p.properties[_vm.itemKey]
      }
    }, [_c('div', {
      staticClass: "bd-cluster-item-public-title"
    }, [_vm._v(" " + _vm._s(p.properties[_vm.itemKey]) + " ")])]), _c('div', {
      staticClass: "bd-cluster-item-public-type"
    }, [_vm._v(" " + _vm._s(p.properties[_vm.itemType]) + " ")])], 1)]);
  })], 2) : _vm._e();
};
var bdClusterDetailDialogvue_type_template_id_0f838060_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.93.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_ce2ekrksu4bikkggd5ymmdtq6i/node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/bdMap/bdClusterDetailDialog.vue?vue&type=script&lang=js
/* harmony default export */ var bdClusterDetailDialogvue_type_script_lang_js = ({
  name: "bdClusterDetailDialog",
  components: {},
  props: {
    itemKey: {
      type: String,
      default: "name"
    },
    // 每一行展示的内容 key
    itemType: {
      type: String,
      default: "area"
    } // 每一行展示的类型 key
  },
  data() {
    return {
      dialogVisible: false,
      pointsArr: []
    };
  },
  methods: {
    showDialog(data) {
      this.dialogVisible = true;
      document.body.appendChild(this.$el);
      this.pointsArr = data;
      console.log(data);
    },
    hideDialog() {
      this.dialogVisible = false;
    },
    eventDelegation(e) {
      const child = e.target.closest(".bd-cluster-item");
      let index = child.getAttribute("custom-index");
      if (index) {
        console.log(this.pointsArr[index], "点击的那一项");
        this.$message.success(JSON.stringify(this.pointsArr[index]));
        this.$emit("return-check", this.pointsArr[index]);
      }
    }
  },
  created() {},
  mounted() {}
});
;// CONCATENATED MODULE: ./components/bdMap/bdClusterDetailDialog.vue?vue&type=script&lang=js
 /* harmony default export */ var bdMap_bdClusterDetailDialogvue_type_script_lang_js = (bdClusterDetailDialogvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.93.0/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/.pnpm/css-loader@6.11.0_webpack@5.93.0/node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_zs77g4opexpjlazxpbaplvsl5m/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/.pnpm/sass-loader@8.0.2_i4l4nmociu5xhprmi6hdovwxki/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/bdMap/bdClusterDetailDialog.vue?vue&type=style&index=0&id=0f838060&prod&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./components/bdMap/bdClusterDetailDialog.vue?vue&type=style&index=0&id=0f838060&prod&lang=scss&scoped=true

;// CONCATENATED MODULE: ./components/bdMap/bdClusterDetailDialog.vue



;


/* normalize component */

var bdClusterDetailDialog_component = normalizeComponent(
  bdMap_bdClusterDetailDialogvue_type_script_lang_js,
  bdClusterDetailDialogvue_type_template_id_0f838060_scoped_true_render,
  bdClusterDetailDialogvue_type_template_id_0f838060_scoped_true_staticRenderFns,
  false,
  null,
  "0f838060",
  null
  
)

/* harmony default export */ var bdClusterDetailDialog = (bdClusterDetailDialog_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.93.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_ce2ekrksu4bikkggd5ymmdtq6i/node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/bdMap/bdMap.vue?vue&type=script&lang=js





/* harmony default export */ var bdMapvue_type_script_lang_js = ({
  name: "bdMap",
  components: {
    bdMapVGl: bdMapVGl,
    bdClusterDetailDialog: bdClusterDetailDialog
  },
  mixins: [],
  props: {
    ak: {
      required: true,
      type: String,
      default: ""
    },
    listenOnce: {
      type: Boolean,
      default: false
    },
    // 是否只监听一次地图加载完成事件【默认为false】

    mapConfig: {
      type: Object,
      default: () => {
        return {
          center: {
            lng: 116.404,
            lat: 39.915
          },
          zoom: 12,
          style: {
            custom: "",
            // styleId 或 styleJson
            styleId: undefined,
            // 发布的styleID需要与ak为同一个用户
            styleJson: undefined // styleJson与ak无关联
          } // 是否需要自定义地图样式
        };
      }
    },
    infoWindowStyle: {
      type: Object,
      default: () => {
        return {
          "--popBg": "#ffffff",
          // 气泡体的背景色
          "--imgDisplay": "block",
          // 气泡体的图片 (可选值：block、none)
          "--closeBtnColor": "#cccccc",
          // 气泡关闭按钮的颜色
          "--titleHeight": "auto" // 气泡顶部标题高度
        };
      }
    }
  },
  computed: {
    mapStyle() {
      return this.infoWindowStyle;
    }
  },
  watch: {},
  filters: {},
  data() {
    return {
      bdMap: null,
      // 百度地图实例
      BMapGL: null,
      // 百度地图GL
      sectionObj: {
        duration: undefined,
        // 获取路线耗时
        distance: undefined,
        // 路段距离
        pointsArr: [] // 路段上的点位
      },
      // 路段详情
      rightMenu: undefined,
      // 地图右键菜单实例
      viewport: {
        WS: undefined,
        WN: undefined,
        EN: undefined,
        ES: undefined,
        zoom: undefined
      },
      roadCondition: [],
      // 自定义起点和终点绘制的路况信息
      clusterGL: null // 点聚合的实例
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
        asynchronousLoading_loadBaiDuMap(this.ak).then(() => {
          console.log(BMapGL, "this.BMapGL");
          this.BMapGL = BMapGL;
          this.bdMap = new this.BMapGL.Map("map-container", {
            preserveDrawingBuffer: true
          }); // 创建Map实例
          this.bdMap.centerAndZoom(new this.BMapGL.Point(this.mapConfig.center.lng, this.mapConfig.center.lat), this.mapConfig.zoom); // 初始化地图,设置中心点坐标和地图级别
          this.bdMap.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放

          if (this.mapConfig.style?.custom) {
            const {
              custom,
              styleJson,
              styleId
            } = this.mapConfig.style;
            let config;
            if (custom === "styleJson") {
              config = {
                styleJson
              }; // styleJson与ak无关联
            } else if (custom === "styleId") {
              config = {
                styleId
              }; // 发布的styleID需要与ak为同一个用户
            }
            this.$nextTick(() => {
              this.bdMap.setMapStyleV2(config);
            });
          }

          //
          const listen_tilesloaded = () => {
            this.$emit("map-loaded", {
              map: this.bdMap,
              BMapGL: this.BMapGL
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
        isShowRoadCondition = true,
        // 是否显示路况图层
        isShowMyRoad = false,
        // 是否显示系统中配置的路线
        startPoint = {
          lng: undefined,
          // 120.741951
          lat: undefined // 30.742613
        },
        endPoint = {
          lng: undefined,
          lat: undefined
        },
        customObj = {},
        clearRoadSectionType = "",
        traffic_autoViewport = false,
        // 驾车规划完成后是否自动调整地图视野
        traffic_showTraffic = true,
        // 驾车规划的线是否展示路况
        traffic_widthIcon = false,
        // 驾车规划出来的路段是否展示图标(默认false)
        traffic_enableDragging = false // 起点和终点是否支持拖拽(默认false)
      } = params;
      let pointsArr = [];
      let that = this;
      if (isShowRoadCondition) {
        if (isShowMyRoad) {
          // 将起点和终点转换为经纬度点对象
          const startMarker = new this.BMapGL.Point(startPoint.lng, startPoint.lat);
          const endMarker = new this.BMapGL.Point(endPoint.lng, endPoint.lat);
          var searchComplete = results => {
            if (transit.getStatus() == BMAP_STATUS_SUCCESS) {
              var plan = results.getPlan(0);
              pointsArr = flattenArr(plan._lines, "points"); // 路段中所有的点位数组
              this.sectionObj = {
                duration: plan.getDuration(true),
                // 获取路线耗时
                distance: plan.getDistance(true),
                // 路段距离
                pointsArr,
                // 路段上的点位
                params,
                // 路段详情
                plan
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
                  traffic_customType: "traffic_transparent" // 绘制一条透明路段图层，以实现驾车规划线路的点击事件
                },
                stroke: {
                  strokeStyle: "solid",
                  strokeColor: "#fff",
                  strokeWeight: 9,
                  strokeOpacity: 0
                },
                isRightDelete: false,
                isViewport: false
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
                showTraffic: traffic_showTraffic
                // lineLayerColor: {
                //     color: '#ffffff',
                //     opacity: 1,
                // }
              }
            },
            onSearchComplete: searchComplete,
            onPolylinesSet: () => {
              this.$emit("return-section", this.sectionObj); // 将路段信息传递给父组件
            }
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
      const {
        bdMap,
        roadCondition
      } = this;
      function shouldClear(layerType, requestedType) {
        return requestedType === layerType || requestedType === "";
      }
      if (shouldClear("traffic", type)) {
        bdMap.setTrafficOff();
      }
      if (shouldClear("roadCondition", type)) {
        roadCondition.forEach(condition => condition.clearResults());
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
        resetCenter = true,
        // 是否重置地图中心点
        newZoom = false,
        // 如果newZoom为false或0，则不设置地图中心点和缩放级别(resetCenter为true时可用)
        className = undefined
      } = params;
      let point = new this.BMapGL.Point(obj.lng, obj.lat); // 创建点
      let marker = new this.BMapGL.Marker(point, {
        icon: myIcon ? myIcon : null,
        enableDragging: false // 实现可拖拽
      }); // 创建标注
      marker.setZIndex(1); // 设置点位层级
      if (isLabelShow) {
        // 创建文本标注
        let label = new this.BMapGL.Label(labelText, {
          offset: new this.BMapGL.Size(labelsetX, labelsetY) // 设置文本偏移量，使文本显示在标注点的上方
        });
        if (labelStyle) {
          label.setStyle(labelStyle);
        }
        marker.setLabel(label);
      }
      marker.customObj = customObj;
      this.bdMap.addOverlay(marker);
      const markerClick = e => {
        // console.log("点击了标注", e, e.target.customObj);
        if (resetCenter) {
          /* 重置地图中心点和缩放级别 */
          let nowZoom = this.bdMap.getZoom();
          this.setMapCenterAndZoom({
            lng: e.target.customObj.longitude,
            lat: e.target.customObj.latitude,
            zoom: newZoom || nowZoom
          });
        }
        if (isResetMakeIcon) {
          /* 给点击的marker设置选中的图标 */
          let chooseMarker = new this.BMapGL.Marker(point, {
            icon: myChooseIcon ? myChooseIcon : null
          }); // 创建选中的点位的图标
          chooseMarker.customObj = {
            ...customObj,
            isChoose: true // 用于标识该标注是否被选中
          }; // 其实只是需要 customObj 中的某个属性值【key】就是用来判断删除的那个【key】

          // this.bdMap.removeOverlay(marker); // 移除当前点击的marker
          this.removeOverlay({
            callback: e => e.customObj?.isChoose
          }); // 移除上一个选中的marker
          chooseMarker.setZIndex(2); // 设置点位层级
          this.bdMap.addOverlay(chooseMarker);
          chooseMarker.addEventListener("click", e => {
            /* 给选中的marker添加点击事件 */
            this.$emit("return-marker", e.target.customObj); // 将点位详情传给父组件
          });
        }
        this.$emit("return-marker", e.target.customObj); // 将点位详情传给父组件
      };
      marker.addEventListener("click", markerClick);
      if (isShowInfo) {
        marker.addEventListener("mouseover", e => {
          console.log(e, "e");
          this.isOpenInfoWindow({
            flag: true,
            html: html ? html : e.target.customObj[key],
            offsetX: offsetX,
            offsetY: offsetY,
            marker: point,
            isFloatShadow
          });
        });
        marker.addEventListener("mouseout", () => {
          this.isOpenInfoWindow({
            flag: false
          });
        });
        if (className) {
          /* 可以添加多个类名 需用 , 隔开【如：markerClass,bridge】 */
          setTimeout(() => {
            let classArr = className.split(",");
            classArr.forEach(name => marker.domElement.classList.add(name));
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
          zIndex: 3
        },
        myChooseStroke = {
          strokeStyle: "solid",
          strokeColor: "#FFFFFF",
          strokeWeight: 9,
          strokeOpacity: 1,
          zIndex: 4
        },
        isRightDelete = false,
        isViewport = true,
        // 调整地图视野【注意：一次性绘制多条线段时不建议使用】
        resetViewport = false,
        // 是否在点击线段的时候重置地图视野
        isResetPolyline = true // 点击线段后重置线段样式
      } = params;
      let pointsGlArr = pointsArr.map(item => new this.BMapGL.Point(item.lng, item.lat));
      let polyline = new this.BMapGL.Polyline(pointsGlArr, stroke);
      polyline.setZIndex(stroke.zIndex || 3);
      polyline.customObj = customObj; // 添加自定义参数
      this.bdMap.addOverlay(polyline); // 绘制折线
      if (isViewport) {
        this.bdMap.setViewport(pointsArr); // 调整地图视野
      }
      const polylineClick = e => {
        if (resetViewport) {
          /* 重置地图视野 */
          this.setViewport(pointsArr);
        }
        if (isResetPolyline) {
          /* 点击线段后重置线段样式 */
          let myChoosePolyline = new this.BMapGL.Polyline(pointsGlArr, myChooseStroke);
          myChoosePolyline.customObj = {
            ...customObj,
            isChoose: true // 用于标识该标注是否被选中
          };
          this.removeOverlay({
            callback: e => e.customObj?.isChoose
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
        polyline.addEventListener("rightclick", e => {
          let txtMenuItem = [{
            text: "删除",
            callback: () => {
              /* 移除当前线段 */
              this.bdMap.removeOverlay(polyline);
              /* 移除当前显示的右键菜单 */
              this.bdMap.removeContextMenu(this.rightMenu);
              /* 取消线段点击事件监听器，防止再次触发右键菜单 */
              polyline.removeEventListener("rightclick");
            }
          }];
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
          zIndex: 10,
          // 层级
          fillOpacity: 0.5,
          // 面的不透明度
          strokeStyle: "solid",
          // dashed虚线、solid实线、dotted点线
          fillColor: "#5298fe",
          // 边框颜色
          strokeColor: "#5298fe",
          // 边框颜色
          strokeWeight: 6,
          // 边框粗细
          strokeOpacity: 1 // 边框不透明度
        },
        myChooseConfig = {
          zIndex: 11,
          // 层级
          fillOpacity: 0.8,
          // 面的不透明度
          strokeStyle: "solid",
          // dashed虚线、solid实线、dotted点线
          fillColor: "#FF0000",
          // 边框颜色
          strokeColor: "#FF0000",
          // 边框颜色
          strokeWeight: 6,
          // 边框粗细
          strokeOpacity: 1 // 边框不透明度
        },
        customObj,
        isRightDelete = false,
        // 是否右键删除
        isViewport = false,
        // 调整地图视野【注意：一次性绘制多个不规则面时不建议使用】
        resetViewport = true,
        // 是否在点击多边形的时候重置地图视野
        isResetPolygon = true // 点击多边形后重置多边形样式
      } = params;
      let pointGlArr = pointArr.map(item => new this.BMapGL.Point(item.lng, item.lat));
      var polygon = new this.BMapGL.Polygon(pointGlArr, config);
      polygon.customObj = customObj;
      this.bdMap.addOverlay(polygon);
      if (isViewport) {
        this.bdMap.setViewport(pointArr);
      }
      const polygonClick = e => {
        console.error("点击了多边形", e);
        if (resetViewport) {
          /* 重置地图视野 */
          this.setViewport(pointArr);
        }
        if (isResetPolygon) {
          /* 点击多边形后重置多边形样式 */
          let myChoosePolygon = new this.BMapGL.Polygon(pointGlArr, myChooseConfig);
          myChoosePolygon.customObj = {
            ...customObj,
            isChoose: true // 用于标识该标注是否被选中
          };
          console.log(myChoosePolygon, "myChoosePolygon");
          this.removeOverlay({
            callback: e => e.customObj?.isChoose
          });
          myChoosePolygon.setZIndex(myChooseConfig.zIndex || 11);
          this.bdMap.addOverlay(myChoosePolygon);
        }
        this.$emit("return-polygon", e.target.customObj);
      };
      polygon.addEventListener("click", polygonClick);
      if (isRightDelete) {
        polygon.addEventListener("rightclick", e => {
          let txtMenuItem = [{
            text: "删除",
            callback: () => {
              /* 移除当前线段 */
              this.bdMap.removeOverlay(polygon);
              /* 移除当前显示的右键菜单 */
              this.bdMap.removeContextMenu(this.rightMenu);
              /* 取消线段点击事件监听器，防止再次触发右键菜单 */
              polygon.removeEventListener("rightclick");
            }
          }];
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
        point = {
          lng: undefined,
          lat: undefined
        },
        radius,
        config = {
          zIndex: 13,
          // 层级
          fillOpacity: 0.5,
          // 面的不透明度
          strokeStyle: "solid",
          // dashed虚线、solid实线、dotted点线
          fillColor: "#5298fe",
          // 边框颜色
          strokeColor: "#5298fe",
          // 边框颜色
          strokeWeight: 6,
          // 边框粗细
          strokeOpacity: 1,
          // 边框不透明度
          enableEditing: false // 是否开启编辑
        },
        myChooseConfig = {
          zIndex: 14,
          // 层级
          fillOpacity: 0.5,
          // 面的不透明度
          strokeStyle: "solid",
          // dashed虚线、solid实线、dotted点线
          fillColor: "#FF0000",
          // 边框颜色
          strokeColor: "#FF0000",
          // 边框颜色
          strokeWeight: 6,
          // 边框粗细
          strokeOpacity: 1,
          // 边框不透明度
          enableEditing: false // 是否开启编辑
        },
        customObj,
        isRightDelete = false,
        // 是否右键删除
        isViewport = false,
        // 调整地图视野【注意：一次性绘制多个不规则面时不建议使用】
        resetViewport = true,
        // 是否在点击多边形的时候重置地图视野
        isResetCircle = true // 点击多边形后重置多边形样式
      } = params;
      let pointGl = new this.BMapGL.Point(point.lng, point.lat);
      var circleGl = new this.BMapGL.Circle(pointGl, radius, config);
      circleGl.customObj = customObj;
      this.bdMap.addOverlay(circleGl);
      if (isViewport) {
        this.bdMap.setViewport(point);
      }
      const circleGlClick = e => {
        console.error("点击了圆形", e);
        if (resetViewport) {
          /* 重置地图视野 */
          this.setMapCenterAndZoom({
            lng: point.lng,
            lat: point.lat
          });
        }
        if (isResetCircle) {
          /* 点击多边形后重置多边形样式 */
          let myChooseCircle = new this.BMapGL.Circle(pointGl, radius, myChooseConfig);
          myChooseCircle.customObj = {
            ...customObj,
            isChoose: true // 用于标识该标注是否被选中
          };
          console.log(myChooseCircle, "myChooseCircle");
          this.removeOverlay({
            callback: e => e.customObj?.isChoose
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
        circleGl.addEventListener("rightclick", e => {
          let txtMenuItem = [{
            text: "删除",
            callback: () => {
              /* 移除当前线段 */
              this.bdMap.removeOverlay(circleGl);
              /* 移除当前显示的右键菜单 */
              this.bdMap.removeContextMenu(this.rightMenu);
              /* 取消线段点击事件监听器，防止再次触发右键菜单 */
              circleGl.removeEventListener("rightclick");
            }
          }];
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
        },
        // 创建一个文档元素,且必须有返回值【demo看注释】
        point = {
          lng: undefined,
          // 112.18
          lat: undefined // 41.15
        },
        // 点位经纬度
        customObj,
        // 自绑定属性的其他自定义参数（即元素自身的properties参数）
        customOverlayConfig = {
          offsetX: -10,
          // 覆盖物水平偏移量
          offsetY: -10,
          // 覆盖物垂直偏移量
          MinZoom: 4,
          // 最小显示层级
          MaxZoom: 12,
          // 最大显示层级
          enableMassClear: true,
          // 是否能被统一清除掉覆盖物
          enableDraggingMap: true // 是否可以在覆盖物位置拖拽地图
        },
        // CustomOverlay(createDom, options: Object) 构造函数的参数options配置项
        isShowInfo = false,
        // 是否显示信息窗口
        infoWindowConfig = {
          html: "",
          key: "",
          offsetX: 0,
          // 覆盖物水平偏移量
          offsetY: 0,
          isFloatShadow: false
        },
        // 信息窗口配置项(鼠标放在覆盖物上出现的window的配置项)

        isResetCenter = true,
        // 是否重置地图中心点
        isResetZoom = false,
        // 是否重置地图缩放级别
        newZoom = 10 // isResetZoom 为true时，新缩放级别.
      } = params;
      // 创建自定义覆盖物
      const defaultOverlayConfig = {
        offsetX: 0,
        // 覆盖物水平偏移量
        offsetY: 0,
        // 覆盖物垂直偏移量
        // MinZoom: 4, // 最小显示层级
        // MaxZoom: 12, // 最大显示层级
        enableMassClear: true,
        // 是否能被统一清除掉覆盖物
        enableDraggingMap: true // 是否可以在覆盖物位置拖拽地图
      }; // 默认的覆盖物配置
      const overlayConfig = Object.keys(customOverlayConfig).length > 0 ? customOverlayConfig : defaultOverlayConfig;
      const customOverlay = new this.BMapGL.CustomOverlay(createDOM, {
        point: new this.BMapGL.Point(point.lng, point.lat),
        properties: {
          customObj // 其他自定义属性
        },
        // 自绑定属性【这里的属性就是createDom(config)中的参数】
        ...overlayConfig // 自定义覆盖物配置
      });
      this.bdMap.addOverlay(customOverlay);
      this.$emit("return-overlay-instantiated", customOverlay); // 返回自定义覆盖物实例

      const customOverlayClick = e => {
        console.error("点击了自定义覆盖物", e.target.properties);
        if (isResetCenter) {
          /* 重置地图中心点 */
          this.setMapCenter({
            lng: e.target.point.lng,
            lat: e.target.point.lat
          });
        }
        if (isResetZoom) {
          /* 重置地图缩放级别 */
          this.setMapZoom({
            zoom: newZoom
          });
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
        customOverlay.addEventListener("mouseover", e => {
          let marker = new this.BMapGL.Point(point.lng, point.lat); // 创建点
          this.isOpenInfoWindow({
            flag: true,
            html: infoWindowConfig.html ? infoWindowConfig.html : e.target.properties[infoWindowConfig.key],
            offsetX: infoWindowConfig.offsetX,
            offsetY: infoWindowConfig.offsetY,
            marker: marker,
            isFloatShadow: infoWindowConfig.isFloatShadow
          });
        });
        // 鼠标移出事件
        customOverlay.addEventListener("mouseout", () => {
          this.isOpenInfoWindow({
            flag: false
          });
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
        isFloatShadow = true
      } = params;
      if (flag) {
        var infoWindow = new this.BMapGL.InfoWindow(html, {
          offset: new this.BMapGL.Size(offsetX, offsetY) // 偏移量
        });
        if (!isFloatShadow) this.bdMap.getPanes().floatShadow.style.display = "none"; // 移除气泡阴影
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
        offsetH = 0
      } = params;
      return new this.BMapGL.Icon(url, new this.BMapGL.Size(width, height), {
        anchor: new this.BMapGL.Size(width / 2, height + 2),
        // 图标中央下端的尖角位置。（左右、上下）[底部居对齐]
        imageOffset: new this.BMapGL.Size(offsetW, offsetH) // 设置图片偏移
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
      let {
        key,
        value,
        callback = () => false
      } = params;
      let overlaysArr = this.bdMap.getOverlays();
      /* 找到所有需要删除的标记 */
      const overlaysToRemove = overlaysArr.filter(overlay => {
        if (key) {
          return overlay.customObj[key] === value;
        } else {
          return callback(overlay);
        }
      });
      /* 移除符合条件的标记 */
      if (overlaysToRemove.length > 0) {
        overlaysToRemove.forEach(overlay => {
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
      let {
        lat,
        lng,
        zoom = nowZoom
      } = params;
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
      let {
        lat,
        lng
      } = params;
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
      let {
        zoom
      } = params;
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
        this.rightMenu.addItem(new this.BMapGL.MenuItem(txtMenuItem[i].text, txtMenuItem[i].callback, 100));
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
        WS,
        // 获取西南角的经纬度(左下角)
        WN: new this.BMapGL.Point(WS.lng, EN.lat),
        // 获取西北角的经纬度(左上角)
        EN,
        // 获取东北角的经纬度(右上角)
        ES: new this.BMapGL.Point(EN.lng, WS.lat),
        // 获取东南角的经纬度(右下角)
        zoom
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
      this.bdMap.addEventListener("zoomend", e => {
        this.viewport = this.getMapViewport();
        this.$emit("map-change", this.viewport); // 将更新的数据传给父组件
        // console.log(this.viewport, "地图缩放事件");
      });
      this.bdMap.addEventListener("dragend", e => {
        this.viewport = this.getMapViewport();
        this.$emit("map-change", this.viewport); // 将更新的数据传给父组件
        // console.log(this.viewport, "地图拖拽事件");
      });
      this.bdMap.addEventListener("click", e => {
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
        isCustomDialog = false,
        // 是否需要自定义多点列表弹窗【同一个经纬度的聚合点，点击时打开的弹窗】
        titleType = [] // 顶部标题，可选值 ['title', 'tooltip']
      } = params;
      console.log("drawMarkerCluster");
      let bjpoi = __webpack_require__(21);
      console.log(bjpoi, "bjpoi");
      const icons = {
        东城区: "https://mapopen-pub-jsapi.cdn.bcebos.com/static/img/place.png",
        老城区: "https://mapopen-pub-jsapi.cdn.bcebos.com/static/img/food.png",
        西城区: "https://mapopen-pub-jsapi.cdn.bcebos.com/static/img/play.png",
        其他: "https://mapopen-pub-jsapi.cdn.bcebos.com/static/img/other.png"
      };
      var indexs = ["province", "city", "area"];
      const getHTMLDOM = context => {
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
          content += `<span class="cluster-marker-body bg${i}">` + count + "</span>";
        }
        if (context.isCluster && !text) {
          /* 聚合 且 分类名称 不存在 */
          content += `<span class="cluster-marker-body-content">` + count + "</span>";
        }
        if (!context.isCluster) {
          /* 单个点 */
          content += '<span class="cluster-marker-title">' + context.name + "</span>";
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
          content += `<span class="cluster-marker-body bg${i}">` + count + "</span>";
        }
        if (context.isCluster && !text) {
          console.log("aaa");
          content += `<span class="cluster-marker-body-content">` + count + "</span>";
        }
        if (!context.isCluster) {
          // console.log("单个点的")
          content += titleType.includes("title") ? /* 如果 titleType 中 包含title 则 添加顶部标题 */
          `<div class="single-marker-title">${context.name}</div>
                   <img class="single-marker-img" src="${context.img}">
                   ` : `<img class="single-marker-img" src="${context.img}">`;
        }
        div.innerHTML = content;
        return div;
      }

      /* 判断点是否都在同一个经纬度上 */
      const isSameLatLng = (array, key = "latLng") => {
        if (array.length <= 1) return true;
        const baseLatLng = array[0][key];
        return array.every(item => item[key][0] === baseLatLng[0] && item[key][1] === baseLatLng[1]);
      };

      // 添加聚合数据
      if (this.clusterGL) {
        return;
      }
      this.clusterGL = new Cluster.View(this.bdMap, {
        minZoom: 3,
        // 3-23
        maxZoom: 23,
        // 3-23
        clusterRadius: 10,
        // 距离小于该值的点会聚合至一起，默认为60，以像素为单位
        clusterMinPoints: 2,
        // 最小聚合点数
        clusterMaxZoom: 22,
        // 若地图缩放级别大于该值，则不进行聚合，标点将全部被展开
        updateRealTime: false,
        // 是否操作地图过程中实时进行聚合数据更新，还是操作完地图后进行更新
        waitTime: 500,
        // 间隔时间进行渲染数据，防止频繁操作
        fitViewOnClick: true,
        // 点击聚合簇放大展开

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
          inject: getSingleDom
        } // 非聚合点样式个性化设置
      });
      this.clusterGL.on(Cluster.ClusterEvent.CLICK, e => {
        console.log("ClusterEvent.CLICK", e);
        let {
          isCluster
        } = e;
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
      this.clusterGL.on(Cluster.ClusterEvent.MOUSE_OVER, e => {
        // console.log('ClusterEvent.MOUSEOVER', e);
        // todo 鼠标移入添加 new BMapGL.InfoWindow
      });
      this.clusterGL.on(Cluster.ClusterEvent.MOUSE_OUT, e => {
        // console.log('ClusterEvent.MOUSEOUT', e);
        // todo 鼠标移出移出 new BMapGL.InfoWindow
      });
      var points = Cluster.pointTransformer(bjpoi.MYPOIS, data => {
        return {
          point: [data.location.lng, data.location.lat],
          properties: {
            ...data
          } // 类 customObj
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
    }
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
  }
});
;// CONCATENATED MODULE: ./components/bdMap/bdMap.vue?vue&type=script&lang=js
 /* harmony default export */ var bdMap_bdMapvue_type_script_lang_js = (bdMapvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.93.0/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/.pnpm/css-loader@6.11.0_webpack@5.93.0/node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_zs77g4opexpjlazxpbaplvsl5m/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/.pnpm/sass-loader@8.0.2_i4l4nmociu5xhprmi6hdovwxki/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/bdMap/bdMap.vue?vue&type=style&index=0&id=44bd9502&prod&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./components/bdMap/bdMap.vue?vue&type=style&index=0&id=44bd9502&prod&lang=scss&scoped=true

;// CONCATENATED MODULE: ./node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.93.0/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/.pnpm/css-loader@6.11.0_webpack@5.93.0/node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_zs77g4opexpjlazxpbaplvsl5m/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/.pnpm/sass-loader@8.0.2_i4l4nmociu5xhprmi6hdovwxki/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/bdMap/bdMap.vue?vue&type=style&index=1&id=44bd9502&prod&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./components/bdMap/bdMap.vue?vue&type=style&index=1&id=44bd9502&prod&lang=scss

;// CONCATENATED MODULE: ./node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.93.0/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/.pnpm/css-loader@6.11.0_webpack@5.93.0/node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_zs77g4opexpjlazxpbaplvsl5m/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/.pnpm/sass-loader@8.0.2_i4l4nmociu5xhprmi6hdovwxki/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/bdMap/bdMap.vue?vue&type=style&index=2&id=44bd9502&prod&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./components/bdMap/bdMap.vue?vue&type=style&index=2&id=44bd9502&prod&lang=scss

;// CONCATENATED MODULE: ./components/bdMap/bdMap.vue



;




/* normalize component */

var bdMap_component = normalizeComponent(
  bdMap_bdMapvue_type_script_lang_js,
  bdMapvue_type_template_id_44bd9502_scoped_true_render,
  bdMapvue_type_template_id_44bd9502_scoped_true_staticRenderFns,
  false,
  null,
  "44bd9502",
  null
  
)

/* harmony default export */ var bdMap = (bdMap_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.93.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_ce2ekrksu4bikkggd5ymmdtq6i/node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/bdHandleDrawLine/bdHandleDrawLine.vue?vue&type=template&id=17db2174&scoped=true
var bdHandleDrawLinevue_type_template_id_17db2174_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.dialogVisible ? _c('el-dialog', {
    attrs: {
      "width": "1300px",
      "destroy-on-close": "",
      "append-to-body": "",
      "title": _vm.title,
      "visible": _vm.dialogVisible,
      "before-close": _vm.hideDialog,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function ($event) {
        _vm.dialogVisible = $event;
      }
    }
  }, [_c('div', {
    staticClass: "dialog-body"
  }, [_c('div', {
    staticClass: "point-self"
  }, [_c('div', {
    class: _vm.isShowLineTip ? 'point-self-top' : 'point-self-hidden'
  }, [_c('i', {
    class: _vm.isShowLineTip ? ['el-icon-close', 'top-icon'] : 'el-icon-more',
    on: {
      "click": function ($event) {
        _vm.isShowLineTip = !_vm.isShowLineTip;
      }
    }
  }), _vm.isShowLineTip ? _c('div', {
    staticClass: "top-title"
  }, [_vm._v("线路坐标")]) : _vm._e()]), _vm.isShowLineTip ? _c('div', [_vm.isShowLineTip ? _c('el-table', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "data": _vm.positionList,
      "height": "48vh"
    }
  }, [_c('el-table-column', {
    attrs: {
      "label": "#",
      "type": "index"
    }
  }), _c('el-table-column', {
    attrs: {
      "prop": "lng",
      "label": "经度",
      "show-overflow-tooltip": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (scope) {
        return [_vm._v(" " + _vm._s(scope.row.lng.toFixed(6)) + " ")];
      }
    }], null, false, 2459694508)
  }), _c('el-table-column', {
    attrs: {
      "prop": "lat",
      "label": "纬度",
      "show-overflow-tooltip": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (scope) {
        return [_vm._v(" " + _vm._s(scope.row.lat.toFixed(6)) + " ")];
      }
    }], null, false, 1897616208)
  })], 1) : _vm._e()], 1) : _vm._e()]), _c('div', {
    attrs: {
      "id": "map-container"
    }
  }), _vm.canEdit ? _c('div', {
    staticClass: "dialog-body-tip"
  }, [_vm.isShowTip ? _c('div', [_vm._v(" 鼠标点击获取起点和终点，按住左键拖动可更新路线，右击单击点位可删除 ")]) : _vm._e(), _c('i', {
    class: _vm.isShowTip ? 'el-icon-close' : 'el-icon-more',
    on: {
      "click": function ($event) {
        _vm.isShowTip = !_vm.isShowTip;
      }
    }
  })]) : _vm._e(), _c('div', {
    staticClass: "dialog-body-search"
  }, [_c('el-input', {
    attrs: {
      "clearable": "",
      "size": "small",
      "placeholder": "输入关键字查询"
    },
    on: {
      "input": _vm.searchPlace,
      "clear": _vm.searchPlace
    },
    model: {
      value: _vm.searchText,
      callback: function ($$v) {
        _vm.searchText = $$v;
      },
      expression: "searchText"
    }
  })], 1), _c('div', {
    staticClass: "dialog-body-lng"
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入经度查询",
      "size": "small",
      "clearable": ""
    },
    on: {
      "input": _vm.searchCenter
    },
    model: {
      value: _vm.lng,
      callback: function ($$v) {
        _vm.lng = $$v;
      },
      expression: "lng"
    }
  })], 1), _c('div', {
    staticClass: "dialog-body-lat"
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入纬度查询",
      "size": "small",
      "clearable": ""
    },
    on: {
      "input": _vm.searchCenter
    },
    model: {
      value: _vm.lat,
      callback: function ($$v) {
        _vm.lat = $$v;
      },
      expression: "lat"
    }
  })], 1), _c('div', {
    staticClass: "dialog-body-option"
  }, [_c('el-checkbox', {
    on: {
      "change": _vm.handleChange
    },
    model: {
      value: _vm.showRoads,
      callback: function ($$v) {
        _vm.showRoads = $$v;
      },
      expression: "showRoads"
    }
  }, [_vm._v("展示所有路段")])], 1), _c('div', [_vm.searchRes.length > 0 ? _c('div', {
    staticClass: "dialog-body-res"
  }, _vm._l(_vm.searchRes, function (item, index) {
    return _c('div', {
      key: index,
      on: {
        "click": function ($event) {
          return _vm.chooseIt(item);
        }
      }
    }, [_c('el-tooltip', {
      attrs: {
        "effect": "light",
        "content": item.address + item.title,
        "placement": "right-end",
        "overflow": ""
      }
    }, [_c('span', [_vm._v(" " + _vm._s(item.address + item.title) + " ")])])], 1);
  }), 0) : _vm.searchRes.length === 0 && _vm.searchText ? _c('div', {
    staticClass: "dialog-body-none"
  }, [_c('em', [_vm._v(" 没有搜索结果... ")])]) : _vm._e()])]), _vm.canEdit ? _c('div', {
    staticClass: "dialog-footer"
  }, [_c('el-button', {
    on: {
      "click": _vm.hideDialog
    }
  }, [_vm._v("取 消")]), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submitPoints
    }
  }, [_vm._v("确 定")])], 1) : _vm._e()]) : _vm._e();
};
var bdHandleDrawLinevue_type_template_id_17db2174_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.93.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_ce2ekrksu4bikkggd5ymmdtq6i/node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/bdHandleDrawLine/bdHandleDrawLine.vue?vue&type=script&lang=js

// import { deviceAllList } from "@/api/systemSetting/deviceLayout";
// import { roadAllList } from "@/api/systemSetting/roadSectionConfiguration";

let img = {
  startPoint: __webpack_require__(7776),
  handlePoint: __webpack_require__(1524)
};
/* harmony default export */ var bdHandleDrawLinevue_type_script_lang_js = ({
  name: "bdMapDrawLinesDialog",
  components: {},
  props: {
    canEdit: {
      type: Boolean,
      default: true
    },
    isMany: {
      type: Boolean,
      default: false
    } // 是否是绘制多条线段
  },
  dicts: [],
  watch: {
    pointsArr: {
      handler(val) {
        // console.log("测试", val);
        this.positionList = val;
      },
      deep: true
    }
  },
  data() {
    return {
      dialogVisible: false,
      title: "",
      bdMap: null,
      mapCenter: {
        lng: 120.3083403138811,
        lat: 30.27631859319542
      },
      mapZoom: 12,
      startPoint: {
        lng: 112.54965575904082,
        lat: 41.305581349868795
      },
      endPoint: {
        lng: 112.5491902212557,
        lat: 41.3055680080383
      },
      drivingTime: 0,
      // 驾驶时间 分钟
      drivingDistance: 0,
      // 行驶距离 公里
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
      ],
      // 最终保存的点位信息 （路段中的所有点位[包含：起点，终点]）
      mapClickListener: null,
      // 地图点击事件监听器
      drawIndex: 0,
      // 点击的次数
      transit: null,
      // 规划的路径
      searchText: undefined,
      // 查询的关键字
      searchPoint: {},
      // 查找到的点位
      searchRes: [],
      // 查到结果
      polyline: null,
      // 路径线
      node: new BMapGL.Icon(
      // '//mapopen-pub-jsapigl.bj.bcebos.com/demoimg/zhongheyiyuan.png',
      img.handlePoint, new BMapGL.Size(12, 12), {
        offset: new BMapGL.Size(5, 5)
      }),
      // 线段中间的节点图标
      isShowTip: true,
      // 是否打开提示
      isShowLineTip: false,
      //是否查看点位坐标
      positionList: [],
      isInsert: true,
      lng: "",
      lat: "",
      centerTimer: null,
      showRoads: true,
      // 是否展示所有系统中录入的路段
      allRoads: [],
      // 系统中录入的路段列表
      img: {
        startPoint: __webpack_require__(7776),
        endPoint: __webpack_require__(9013),
        handlePoint: __webpack_require__(1524),
        Icon_road_blue_arrow: __webpack_require__(1543)
      }
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
      } else {}
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
        km: this.drivingDistance
      });
      this.hideDialog();
    },
    drawDeviceMarker(points) {
      points.forEach(ele => {
        let point = {
          lng: ele.longitude,
          lat: ele.latitude
        };
        this.makePoint(point, null, {
          name: "deviceName",
          ...ele
        }, false, false, true, null, 4, 0, false);
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
        this.bdMap.centerAndZoom(new BMapGL.Point(this.mapCenter.lng, this.mapCenter.lat), this.mapZoom);
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
    makePoint(obj, myIcon, customObj, isDrag = false, isReturn = false, isShowInfo = false, html = null, offsetX = 0, offsetY = 0, isFloatShadow = true) {
      let point = new BMapGL.Point(obj.lng, obj.lat); // 创建点
      let marker = new BMapGL.Marker(point, {
        icon: myIcon ? myIcon : null,
        enableDragging: isDrag // 实现可拖拽
      }); // 创建标注
      marker.customObj = customObj;
      this.bdMap.addOverlay(marker);

      // 实现点位可以拖拽
      if (isDrag) {
        marker.addEventListener("dragend", e => {
          // const newPosition = e.latLng; // 获取拖拽后的坐标
          console.log("新的位置：", e);
        });
      }

      // marker.addEventListener("click", (e) => {
      //   console.log("点击了标注", e);
      // });
      if (isShowInfo) {
        marker.addEventListener("click", e => {
          console.log(e, "e");
          this.isOpenInfoWindow({
            flag: true,
            html: html ? html : e.target.customObj[e.target.customObj.name],
            offsetX: offsetX,
            offsetY: offsetY,
            marker: point,
            isFloatShadow
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
        isFloatShadow = true
      } = params;
      if (flag) {
        var infoWindow = new BMapGL.InfoWindow(html, {
          offset: new BMapGL.Size(offsetX, offsetY) // 偏移量
        });
        if (!isFloatShadow) this.bdMap.getPanes().floatShadow.style.display = "none"; // 移除气泡阴影
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
          height: 64
        },
        strokeWeight: 10,
        strokeOpacity: 0.8,
        node: this.node,
        zIndex: 100
      };
      if (!this.isMany) {
        let pointsGlArr = []; // new BMapGL.Point
        const getPointGlArr = () => {
          return this.pointsArr.map(item => new BMapGL.Point(item.lng, item.lat));
        };
        pointsGlArr = getPointGlArr();
        this.polyline = new BMapGL.Polyline(pointsGlArr, config);
        this.bdMap.addOverlay(this.polyline); // 绘制折线
        this.polyline.enableEditing(); // 折线可编辑
        // this.polyline.disableEditing(); // 折线不可编辑
        let pointsArr = this.polyline.getPath();
        this.makePoint(pointsArr[0], this.getIcon({
          index: 0,
          length: 0
        }), {
          name: "handlePoint0"
        }, false, false);
        this.makePoint(pointsArr[pointsArr.length - 1], this.getIcon({
          index: 1,
          length: 2
        }), {
          name: "handlePoint1"
        }, false, false);

        /* 线段回显是肯定有起点和终点，因此直接监听线段的拖拽事件即可 */
        this.polyline.addEventListener("editend", e => {
          let pointsArr = this.polyline.getPath();
          // 删除旧的起点终点点位图标，等拖拽结束后重新绘制
          this.removeMarker("handlePoint0");
          this.removeMarker("handlePoint1");
          this.makePoint(pointsArr[0], this.getIcon({
            index: 0,
            length: 0
          }), {
            name: "handlePoint0"
          }, false, false);
          this.makePoint(pointsArr[pointsArr.length - 1], this.getIcon({
            index: 1,
            length: 2
          }), {
            name: "handlePoint1"
          }, false, false);
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
      this.mapClickListener = this.bdMap.addEventListener("click", e => {
        this.pointsArr.push({
          lat: e.latlng.lat,
          lng: e.latlng.lng
        });
        pointsGlArr = this.pointsArr.map(item => new BMapGL.Point(item.lng, item.lat));
        this.makePoint({
          lng: e.latlng.lng,
          lat: e.latlng.lat
        }, this.getIcon({
          index: this.drawIndex,
          length: this.pointsArr.length
        }), {
          name: "handlePoint" + this.drawIndex
        }, false, false);
        // 绘制线段
        this.polyline = new BMapGL.Polyline(pointsGlArr, {
          strokeStyle: "dashed",
          strokeColor: "blue",
          strokeTexture: {
            url: this.img.Icon_road_blue_arrow,
            // url: "https://mapopen-pub-jsapigl.bj.bcebos.com/svgmodel/Icon_road_blue_arrow.png",
            width: 16,
            height: 64
          },
          strokeWeight: 8,
          strokeOpacity: 0.8,
          node: this.node
        });
        this.bdMap.addOverlay(this.polyline); // 绘制折线
        this.drivingDistance = this.convertDistance(this.polyline.getLength() + "米");
        this.polyline.enableEditing(); // 折线可编辑
        this.drawIndex++;
        if (this.drawIndex > 1) {
          this.bdMap.removeEventListener("click", this.mapClickListener);
          this.polyline.addEventListener("editend", e => {
            // this.pointsArr = this.polyline.getPath() // 获取路径上的点位
            let pointsArr = this.polyline.getPath();
            // 删除旧的起点终点点位图标，等拖拽结束后重新绘制
            this.removeMarker("handlePoint0");
            this.removeMarker("handlePoint1");
            this.makePoint(pointsArr[0], this.getIcon({
              index: 0,
              length: 0
            }), {
              name: "handlePoint0"
            }, false, false);
            this.makePoint(pointsArr[pointsArr.length - 1], this.getIcon({
              index: 1,
              length: 2
            }), {
              name: "handlePoint1"
            }, false, false);
          });
          // 监听折线的移动事件
          this.polyline.addEventListener("lineupdate", e => {
            this.pointsArr = [];
            this.pointsArr = JSON.parse(JSON.stringify(this.polyline.getPath()));
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
        offsetH = 0
      } = params;
      // return new BMapGL.Icon(
      //     `../../assets/img/${index === 0 ? "startPoint" : index === length - 1 ? "endPoint" : "handlePoint"}.png`,
      //     new BMapGL.Size(width, height),
      //     {
      //       anchor: new BMapGL.Size(width / 2, height + 2), // 图标中央下端的尖角位置。（左右、上下）[底部居对齐]
      //       imageOffset: new BMapGL.Size(offsetW, offsetH),
      //     }, // 设置图片偏移
      // );
      return new BMapGL.Icon(index === 0 ? this.img.startPoint : index === length - 1 ? this.img.endPoint : this.img.handlePoint, new BMapGL.Size(width, height), {
        anchor: new BMapGL.Size(width / 2, height + 2),
        // 图标中央下端的尖角位置。（左右、上下）[底部居对齐]
        imageOffset: new BMapGL.Size(offsetW, offsetH)
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
          onSearchComplete: myFun
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
          this.bdMap.centerAndZoom(new BMapGL.Point(this.lng, this.lat), this.mapZoom);
        }, 500);
      }
    },
    chooseIt(item) {
      this.searchPoint = item.point;
      if (this.searchPoint) {
        this.removeMarker("searchPoint");
      }
      this.makePoint({
        lng: this.searchPoint.lng,
        lat: this.searchPoint.lat
      }, null, {
        name: "searchPoint"
      }, false);
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
        return pointsArr.map(item => new BMapGL.Point(item.lng, item.lat));
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
        type: "draw-all-roads"
      };
      let config = {
        strokeColor: "#1492ff",
        strokeWeight: 5,
        strokeOpacity: 1,
        strokeStyle: "solid",
        zIndex: 1
      };
      this.allRoads.forEach(item => {
        this.drawPolyLines(JSON.parse(item.roadCoordinate), config, obj);
      });
    },
    removeAllRoads() {
      let overlaysArr = this.bdMap.getOverlays();
      const overlaysToRemove = overlaysArr.filter(overlay => {
        return overlay.customObj?.type === "draw-all-roads";
      });
      /* 移除符合条件的标记 */
      if (overlaysToRemove.length > 0) {
        overlaysToRemove.forEach(overlay => {
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
    }
  },
  created() {},
  mounted() {}
});
;// CONCATENATED MODULE: ./components/bdHandleDrawLine/bdHandleDrawLine.vue?vue&type=script&lang=js
 /* harmony default export */ var bdHandleDrawLine_bdHandleDrawLinevue_type_script_lang_js = (bdHandleDrawLinevue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.93.0/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/.pnpm/css-loader@6.11.0_webpack@5.93.0/node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_zs77g4opexpjlazxpbaplvsl5m/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/.pnpm/sass-loader@8.0.2_i4l4nmociu5xhprmi6hdovwxki/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/bdHandleDrawLine/bdHandleDrawLine.vue?vue&type=style&index=0&id=17db2174&prod&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./components/bdHandleDrawLine/bdHandleDrawLine.vue?vue&type=style&index=0&id=17db2174&prod&lang=scss&scoped=true

;// CONCATENATED MODULE: ./components/bdHandleDrawLine/bdHandleDrawLine.vue



;


/* normalize component */

var bdHandleDrawLine_component = normalizeComponent(
  bdHandleDrawLine_bdHandleDrawLinevue_type_script_lang_js,
  bdHandleDrawLinevue_type_template_id_17db2174_scoped_true_render,
  bdHandleDrawLinevue_type_template_id_17db2174_scoped_true_staticRenderFns,
  false,
  null,
  "17db2174",
  null
  
)

/* harmony default export */ var bdHandleDrawLine = (bdHandleDrawLine_component.exports);
;// CONCATENATED MODULE: ./components/index.js





// import bdDrivingDrawLine from "./bdDrivingDrawLine/bdDrivingDrawLine.vue";
// import directive from "../directive";
// import rewriteElTooltip from "./utils/rewriteElTooltip";
const components = [bdLib, bdMap, bdHandleDrawLine];
const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
/* harmony default export */ var components_0 = ({
  install,
  // directive,
  // rewriteElTooltip,
  ...components
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@vue+cli-service@5.0.8_vgqb3v6m2ynwvuzumqmye2vzna/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (components_0);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bdgl-map-lib.umd.js.map
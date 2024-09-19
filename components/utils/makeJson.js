/**
 * @Event 将GeoJson数据转换为经纬度数组
 * @description:
 * @author: mhf
 * @time: 2024-09-19 11:18:49
 **/
const fs = require("fs");

// 原始数组
const originalArray = [
  [119.996338, 30.181541],
  [119.999002, 30.182304],
]; // GeoJson数据（参考： https://datav.aliyun.com/portal/school/atlas/area_selector#&lat=30.332329214580188&lng=106.72278672066881&zoom=3.5）

// 反转每个子数组
const reversedArray = originalArray.map((subArr) => {
  return {
    lng: subArr[0],
    lat: subArr[1],
  };
});

// 将新数组转换为 JSON 字符串
const jsonString = JSON.stringify(reversedArray, null, 2);

// 写入新文件
const outputFilePath = "reversedArrayNew.json";

fs.writeFile(outputFilePath, jsonString, (err) => {
  if (err) {
    console.error("写入文件时发生错误:", err);
  } else {
    console.log(`新数组已成功保存到 ${outputFilePath}`);
  }
});

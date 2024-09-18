/**
 * @Event 将指定数组嵌套的数据转成扁平化的点位数据
 * @description:
 * @author: mhf
 * @time: 2024-02-01 13:57:20
 **/
export function flattenArr(arr, key) {
  return arr.flatMap((item) => item[key]);
}

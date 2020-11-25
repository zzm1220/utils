/*
 * @Author: zhimin
 * @Date: 2020-11-25 17:40:11
 * @LastEditors: zhimin
 * @LastEditTime: 2020-11-25 17:49:30
 * @FilePath: \utils\src\unique.js
 */
/**
 * 数组去重方法一
 */
function unique(arr) {
    const res = [];
    for (var i = 0, arrLen = arr.length; i < arrLen; i++) {
        for (var j = 0; j < res.length; j++) {
            if (res[j] === arr[i]) {
                break;
            }
        }
        if (j === res.length) {
            res.push(arr[i]);
        }
    }
    return res;
}
/**
 * 数组去重方法二indexOf
 */
function unique2(arr) {
    var res = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        var index = res.indexOf(arr[i]);
        if (index === -1) {
            res.push(arr[i]);
        }
    }
    return res;
}
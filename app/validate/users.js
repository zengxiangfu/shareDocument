const getArrParamsData = require("../utils/getArrParamsData");

/**
 * 插入数据检查
 * @param {*} user 
 */
exports.insert = user => {
    const arr = ['openId','name','age','nickName','password','sex']
    const res = getArrParamsData(arr,user);
    return res;
} 

/**
 * 更新数据
 * @param {*} user 
 */
exports.update = user => {
    const arr = [{name:'id',require:true , type: 'number'},'openId','name','age','nickName','password','sex']
    const res = getArrParamsData(arr,user,false);
    return res;
}


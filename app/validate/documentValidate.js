
const getArrParamsData = require('../utils/getArrParamsData');

/**
 * 查询文档列表
 * @param {*} params 
 */
exports.getList = params => {
    const arr = [
        {name: 'pageNo' , require: true , type: 'number'} ,
        {name: 'pageSize' , require: true , type: 'number'} , 
        'name' , 'category', 'content'];
    return getParamResult(arr , params)
}
/**
 * 获取对data中对应参数的值
 * 
 *  使用方式：(假如输出名称为：fn ， 当前是匿名函数)
 *       data = {
 *          name:'xiaoming',
 *          obj:{
 *              title:'test'
 *          }
 *       }
 *      方式1:   外层： fn('name' , data , 'default')  =>   xiaoming
 *              内层： fn('obj.title' , data , 'default')  =>   test
 *                    fn('obj[title]' , data , 'default')  =>   test
 * 
 * @param {*} param 
 * @param {*} data 
 * @param {*} defaultValue 
 */
module.exports = (param , data = {} , defaultValue = null) => {
    let arr = [];
    const isArray = Array.isArray(param);
    const isString = typeof param === 'string';
    if(isString){
        // string转换成数组
        arr = param.replace(/\[/g , '.').replace(/\]/g , '').split('.');
    } else if(isArray){
        arr = param;
    } else {
        return defaultValue
    }
    // 空数组返回默认，非空返回 具体数据 或者 默认数据
    return  arr.length === 0 ? defaultValue : arr.reduce((t,c) => (t||{})[c] , data) || defaultValue;  
}
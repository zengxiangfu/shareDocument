const getParamResult = require('./getParamResult');
/**
 * 参数验证，并返回对应的数据
 * 使用方式：(假如输出名称为：fn ， 当前是匿名函数)
 *      对象：data: {
 *          name:'testName',
 *          age:18,
 *          sex:1
 *      }
 * 
 *      参数 p1:'name'        p2:['name','age']   p3:[{name:'nickName' , type: 'string' , require:false , default:'xiaoming'}]
 * 
 *      单值：
 *          fn(p1,data) => { result:{ name:'testName'} , err:[]}
 *      数组：
 *          fn(p2 ,data) => { result: { name:'testName' , age:18} , err:[]}
 *          
 *          fn(p2 ,data) => { result: { nickName:'xiaoming'} , err:[]}
 * 
 * @param {*} params 参数
 * @param {*} data 检索对象
 * @param {*} isNull 是否允许为空值
 * @param {*} */ 
module.exports = (params = [] , data = {} , isNull = true, defaultValue = null) => {
    // 返回的整体数据
    const resData = {
        result:null,
        err:[]
    }
    if(!data || typeof data !== 'object'){
        resData.err.push('参数传入有误');
        return;
    }
    if(Array.isArray(params) && typeof data === 'object') {
        if(!params.length) return defaultValue;
        // 处理后的数据
        const result = {};
        resData.result = result;
        for(let key of params){
            switch(typeof key ) {
                case 'string': 
                const sv = getParamResult(key , data);
                    // 是否允许为空
                    isNull ? (result[key] = sv) : (!!sv && (result[key] = sv));
                    break;
                case 'object':
                    let keyName = key.name;
                    if(!keyName){
                        // 缺少参数名称
                        resData.err.push('参数传入有误');
                        return resData;
                    }  else{
                        const value = getParamResult(keyName , data , key.default);
                        if(key.require && !value && (value !== 0)) {
                            // 必填参数
                            resData.err.push(`参数不允许为空`);
                            return resData;
                        }
                        const type = String(key.type).toLowerCase();
                        switch(type) {
                            case 'string':
                                const sv = !!value && String(value) || key.default;
                                // 是否允许为空
                                isNull ? (result[keyName] = sv) : (!!sv && (result[keyName] = sv));
                                break;
                            case 'number':
                                let nv = isNaN(Number(value)) ? key.default  : Number(value);
                                // 是否允许为空
                                isNull ? (result[keyName] = nv) : ((!!nv || nv === 0) && (result[keyName] = nv));
                                break;
                            case 'boolean':
                                result[keyName] = Boolean(value);
                                break;
                            default :
                                result[keyName] = value
                        }
                    }
                    
            }
        }
    } else if(typeof params === 'string') {
        // 单个值兼容
        resData.result.params = data[params] || defaultValue;
    } else {
        resData.err.push('传入数据类型错误！')
    }
    return resData;
}
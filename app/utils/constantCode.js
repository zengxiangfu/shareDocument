/**
 * 数据返回的结构
 * @param {*} code 
 * @param {*} data 
 */
module.exports = (code,data = null , msg = null) =>  {
    const res = {};
    const c  = Number(code);
    res.code = c;
    res.data = data;
    switch(code){
        case 0: 
            res.msg = '操作成功';
            break;
        case 1: 
            res.msg = '操作失败！';
            break;
        case 2: 
            res.msg = '参数错误！';
            break;
        case 3: 
            res.msg = '登陆失败，账号或密码不正确！';
            break;
        case 4: 
            res.msg = 'token失效，请重新登陆';
            break;
        case 5: 
            res.msg = '请登陆后进行操作';
            break;
        default:
            res.msg = '服务端异常！';
    }
    // 允许自定义msg
    if(msg) res.msg = msg;
    return res;
}
const jwt = require('jsonwebtoken')
module.exports = () => {
    return async function decodeToken(ctx , next) {
        const token = ctx.header.token;
        if(token){
            try {     
                // 获取配置的加密密钥
                const secret = ctx.app.config.secret;
                // 解密获取，加密之前的用户信息
                const res = jwt.verify(token , secret);
                // 将用户信息存放在上下文中
                ctx.jwtUserInfo = res.data;
                await next();
            } catch (err) {
                // token失效获取异常
                ctx.body = ctx.repData(4);
            }
        } else {
            // 查看utils下constantCode内部定义的状态信息
            ctx.body = ctx.repData(5)
        }
      }
}

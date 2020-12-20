const jwt = require('jsonwebtoken');

module.exports = {
    /**
     * 生产token
     * @param {*} params 加密信息
     * @param {*} secret 密钥
     * @param {*} time 过期时间
     */
   createToken(params , secret , time){
       return jwt.sign(params , secret , { expiresIn: time})
   }
}
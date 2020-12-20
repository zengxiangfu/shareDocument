'use strict';

const Service = require('egg').Service;
const { insert , update} = require('../validate/users')

class UserService extends Service {
  /**
   * 获取用户
   * @param {*} id 
   */
  async getUser(id) {
    const { app: { mysql } , ctx} = this;
    if(!!Number(id)){
      let res = await mysql.get('users' , {id:id})
      return ctx.repData(0,res)
    } else {
      return ctx.repData(2)
    }
  }

  /**
   * 添加用户
   * @param {*} user 
   */
  async setUser(user){
    const { app: { mysql } , ctx} = this;
    const resUser = insert(user);
    if(resUser.err.length === 0) {
      let res = await mysql.insert('users' , resUser);
      if(res.affectedRows === 1){
        return ctx.repData(0);
      } else {
        return ctx.repData(1);
      }
    } else {
      return ctx.repData(1 , resUser.err[0]);
    }
  }

  /**
   * 更新用户
   * @param {*} user 
   */
  async updateUser(user){
    const { app: { mysql } , ctx} = this;
    const resUser = update(user);
    if(resUser.err.length === 0) {
      let res = await mysql.update('users' , resUser.result);
      if(res.affectedRows === 1){
        return ctx.repData(0);
      } else {
        return ctx.repData(1);
      }
    } else {
      return ctx.repData(1 , resUser.err[0]);
    }
  }

  /**
   * 删除用户
   * @param {*} id 
   */
  async delete(id) {
    const { mysql } = this.app;
    let res = await mysql.delete('users' , {id:id});
    return res;
  }
}

module.exports = UserService;

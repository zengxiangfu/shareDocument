'use strict';

const Service = require('egg').Service;
const { insert , update} = require('../validate/users')

class UserService extends Service {

  constructor(ctx){
    super(ctx);
    this.mysql = this.app.mysql;
  }
  /**
   * 获取用户
   * @param {*} id 
   */
  async getUser(id) {
    if(!!Number(id)){
      let res = await this.mysql.get('users' , {id:id})
      return this.ctx.repData(0,res)
    } else {
      return this.ctx.repData(2)
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
  async deleteUser(id) {
    const { app: { mysql } , ctx} = this;
      try {   
        let res = await this.mysql.delete('users' , {id:id});
        if(res.affectedRows === 1){
          return ctx.repData(0);
        } else {
          return ctx.repData(1);
        }
      } catch (error) {
        return ctx.repData(2, null , error.code);
      }
  }
}

module.exports = UserService;

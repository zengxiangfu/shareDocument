'use strict';

const Controller = require('egg').Controller;

class UsersController extends Controller {

  /**
   * 获取用户信息
   */
  async getUser() {
    const { ctx } = this;
    const { id  } = ctx.query
    const res = await ctx.service.users.getUser(id);
    ctx.body = res;
  }

  /**
   * 添加用户
   */
  async setUser(){ 
    const { ctx } = this;
    const { body } = ctx.request;
    ctx.body = await ctx.service.users.setUser(body);
  }

  /**
   * 更新用户
   */
  async updateUser(){
    const { ctx } = this;
    const { body } = ctx.request;
    ctx.body = await ctx.service.users.updateUser(body);
  }

  /**
   * 删除用户
   */
  async deleteUser(){
    const { ctx } = this;
    const { id  } = ctx.query;
    ctx.body = await ctx.service.users.deleteUser(id);
  }
}

module.exports = UsersController;

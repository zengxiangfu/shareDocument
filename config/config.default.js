/* eslint valid-jsdoc: "off" */

'use strict';

// 开启白名单
const whiteList = ['127.0.0.1']

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'cdb-6sax2pph.gz.tencentcdb.com',
      // 端口号
      port: '10129',
      // 用户名
      user: 'root',
      // 密码
      password: '667609!@#$',
      // 数据库名
      database: 'shareWord',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1607753854563_101';

  // web安全保障
  config.security = {
    domainWhiteList: whiteList,
    csrf: {
      enable: false
    }
  }

  // add your middleware config here
  config.middleware = ['errorHandler'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};

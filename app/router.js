'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // 用户相关
  require('./router/users')(app);

  // 文档分享相关
  require('./router/document')(app);
};

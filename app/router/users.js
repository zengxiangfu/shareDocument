module.exports = app => {
    const { router , controller , middleware } = app;
    // 登陆
    router.post('/login' , controller.users.login);
    // 获取用户信息
    router.get('/user' , controller.users.getUser);
    // 添加用户
    router.post('/user/add' , controller.users.setUser);
    // 更新用户
    router.post('/user/update' , controller.users.updateUser);
    // 删除用户
    router.get('/user/delete' , controller.users.deleteUser);

}
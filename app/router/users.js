module.exports = app => {
    const { router , controller , middleware } = app;

    router.get('/user' , controller.users.getUser);

    router.post('/user/add' , controller.users.setUser);

    router.post('/user/update' , controller.users.updateUser);

    router.get('/user/delete' , controller.users.deleteUser);

}
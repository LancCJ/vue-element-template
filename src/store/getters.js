const getters = {
    permission_routers: state => state.permission.routers,
    addRouters: state => state.permission.addRouters,
    isGenerateRouters: state => state.permission.isGenerate,
    isLogin:state => state.app.isLogin,
};
export default getters

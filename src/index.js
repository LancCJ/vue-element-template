import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router';
import store from './store';
import axios from 'axios';

import NProgress from 'nprogress'; // Progress 进度条

/*
 * 主题样式
 * import 'element-ui/lib/theme-default/index.css';    // 默认主题
 * 可在进行换肤 --> https://elementui.github.io/theme-preview/#/zh-CN
 */
import '../static/css/theme-blue/index.css';
import '../static/css/index.css';       // 全局CSS

Vue.use(ElementUI)

router.beforeEach((to, from, next)=> {
    NProgress.start(); // 开启Progress

    if(store.getters.isLogin){
        if(to.path === '/login'){
            next('/');
        }
        else{
            if (!store.getters.isGenerateRouters) {
                store.dispatch('GetUserInfo').then(res=> {
                    store.dispatch('GenerateRoutes', store.state.app.menu).then(() => { // 生成可访问的路由表
                        router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
                        next(to.path);
                    });
                });
            }
            else {
                next();
            }
        }
    }
    else {
        if(to.path === '/login'){
            next();
        }
        else{
            next('/login');
        }
    }

});
router.afterEach(() => {
    NProgress.done(); // 结束Progress
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

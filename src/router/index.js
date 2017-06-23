import Vue from 'vue';
import Router from 'vue-router';
import home from '../views/common/home.vue';

Vue.use(Router);

export const constantRouterMap = [
    {
        path: '/',
        component: home,
        redirect: '/home/dashboard',
        hidden: true,
    },
    {
        path:'/login',
        hidden: true,
        component:resolve => require(['../views/login/index.vue'], resolve),
    },
    {
        path:'/home',
        component: home,
        noDropdown: true,
        children: [
            {
                path: 'dashboard',
                component: resolve => require(['../views/test/dashboard.vue'], resolve),
                name: '主界面'
            }
        ]
    }
];

export default new Router({
    routes: constantRouterMap
});

//可由服务端返回构建,暂时无用
export const asyncRouterMap = [
    {
        path: '/module1',
        component: home,
        redirect: '/module1/index',
        name: '理赔',
        noDropdown: true,
        children: [
            {
                path: 'index',
                component: resolve => require(['../views/test/page2.vue'], resolve),
                name: '理赔未处理'
            }
        ]
    },
    {
        path: '/module2',
        component: home,
        redirect: '/module2/index',
        name: 'module2',
        noDropdown: true,
        children: [
            {
                path: 'index',
                component: resolve => require(['../views/test/page3.vue'], resolve),
                name: 'module2-index'
            }
        ]
    },
    {
        path: '/module3',
        component: home,
        redirect: '/module3/index',
        name: 'module3',
        children: [
            {
                path: 'index',
                component: resolve => require(['../views/test/page4.vue'], resolve),
                name: 'module3-index'
            },
            {
                path: 'other',
                component: resolve => require(['../views/test/page5.vue'], resolve),
                name: 'module3-other'
            }
        ]
    },
    {
        path: '/module4',
        component: home,
        redirect: '/module4/index',
        name: 'module4',
        children: [
            {
                path: '/index',
                component: resolve => require(['../views/test/page4.vue'], resolve),
                name: 'module4-index',
                children:[
                    {
                        path: 'index-1',
                        component: resolve => require(['../views/test/page4.vue'], resolve),
                        name: 'module3-index-1'
                    },
                    {
                        path: 'index-2',
                        component: resolve => require(['../views/test/page4.vue'], resolve),
                        name: 'module3-index-1'
                    }
                ]
            }
        ]
    }
];
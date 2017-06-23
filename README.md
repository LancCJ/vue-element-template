# vue-element-template
vue基于element-ui的脚手架

### 参考
[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

### 技术结构
* [vue](https://cn.vuejs.org/v2/guide/index.html) javascript框架
* [vue-router](https://router.vuejs.org/zh-cn/) 路由管理
* [vuex](https://vuex.vuejs.org/zh-cn/) 状态管理
* [axios](https://github.com/mzabriskie/axios) 基于Promise的HTTP请求客户端
* webpack 打包工具
* [Elememt-UI](http://element.eleme.io/#/zh-CN/component/installation) vue组建库

### 后台骨架
* 整体布局(顶部、侧栏、主体)
* 菜单、面包屑
* 路由(路由规则、路由导航钩子)
* 状态/缓存 (登陆状态,用户信息/权限信息)
* 接口请求(拦截器,get post请求)
* 组件(表单,列表,分页等)
* 权限(菜单权限、操作权限、视图权限)
* 日志(错误日志、操作日志、前端埋点)
* 公共页(主页、登陆、修改密码、404、401)
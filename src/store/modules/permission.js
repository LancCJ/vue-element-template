import {constantRouterMap} from '../../router';

function hasPermission(roles, route) {
    if (route.meta && route.meta.role) {
        return roles.some(role => route.meta.role.indexOf(role) >= 0)
    } else {
        return true
    }
}

function GenerateComponent(menu) {
    menu.map(item => {
        if (item.componentPath) {
            item.component = resolve => require(['../../views/' + item.componentPath + '.vue'], resolve)
        }
        if (item.children) {
            GenerateComponent(item.children);
        }
        return item
    })
}

const permission = {
    state: {
        isGenerate: false,
        routers: constantRouterMap,
        addRouters: []
    },
    mutations: {
        SET_ROUTERS: (state, routers) => {
            state.isGenerate = true;
            state.addRouters = routers;
            state.routers = constantRouterMap.concat(routers);
        }
    },
    actions: {
        GenerateRoutes({commit, state}, menu) {

            return new Promise(resolve => {
                GenerateComponent(menu);
                const accessedRouters = menu;
                commit('SET_ROUTERS', accessedRouters);
                resolve();
            })
        }
    }
};


export default permission;

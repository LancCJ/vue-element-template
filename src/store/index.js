/*
 * 状态管理器
 */

import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import app from './modules/app';
import permission from './modules/permission';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        app,
        permission
    },
    getters,
    mutations,
    actions
});

export default store

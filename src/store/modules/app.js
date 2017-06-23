import {login, getUserInfo} from '../../api/login'

const app = {
    state: {
        userId: 0,
        avatar: 'http://work.omwteam.com/static/img/img.2aab7b4.jpg',
        nickname: '邱国荣',
        menu: [],
        roles: '',
        isLogin:false
    },
    mutations: {
        SET_USERID: (state, userId)=> {
            state.userId = userId;
        },
        SET_AVATA: (state, avatar) => {
            state.avatar = avatar;
        },
        SET_NICKNAME: (state, nickname)=> {
            state.nickname = nickname;
        },
        SET_MENU: (state, menu)=> {
            state.menu = menu;
        },
        SET_Login:(state,isLogin) =>{
            state.isLogin = isLogin;
        }
    },
    actions: {
        Login: function ({commit}, username, password) {
            return new Promise((resolve, reject)=> {
                login(username, password).then(response => {
                    const data = response.data;
                    if (data.success) {
                        commit('SET_Login',true);
                        commit('SET_USERID',data.data.userId);
                        resolve(data);
                    }
                    else {
                        reject(data.message);
                    }

                }).catch(error => {
                    reject(error);
                });
            });
        },
        LoginOut:function ({commit}) {
            return new Promise((resolve)=> {
                commit('SET_Login',false);
                commit('SET_NICKNAME','');
                commit('SET_AVATA', '');
                commit('SET_MENU', []);
                commit('SET_USERID',0);
                resolve();
            });
        },
        GetUserInfo: function ({commit, state}) {
            return new Promise((resolve, reject)=> {
                getUserInfo(state.userId).then(response=> {
                    const data = response.data;
                    if (data.success) {
                        commit('SET_NICKNAME', data.data.nickname);
                        commit('SET_AVATA', data.data.avatar);
                        commit('SET_MENU', data.data.menu);
                        resolve(data);
                    }
                    else {
                        reject(data.message);
                    }

                }).catch(error=> {
                    reject(error);
                });
            });
        }
    }
}

export default app;
import service from '../utils/service';

export function login(username,passwrod) {
    return service({
        url: 'login.json',
        method: 'get',
        params: {
            username:username,
            passwrod:passwrod
        }
    });
}

export function changePwd(oldPwd,newPwd) {
    return service({
        url: 'login.json',
        method: 'get',
        params: {
            oldPwd:oldPwd,
            newPwd:newPwd
        }
    });
}

export function getUserInfo(userId) {
    return service({
        url: 'userinfo.json',
        method: 'get',
        params: { 
            userId:userId
        }
    });
}
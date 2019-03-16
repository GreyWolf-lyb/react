/*
 * @Author: liuzhongbao 
 * @Date: 2019-03-14 19:38:38 
 * @Last Modified by: liuyabin
 * @Last Modified time: 2019-03-15 18:43:43
 */

import { getLogin, getUser, getViewAutho } from "../service/getuserinfo"

export default {
    namespace: 'exam',
    state: {
        userdata: {},
        viewData: [],
        userName: ""
    },
    reducers: {
        changeState(state, action) {
            return {...state, ...action }
        }
    },
    effects: {
        // 登录
        * getLogin(action, { call, put }) {
            let result = yield call(getLogin, action.body)
            if (result.code === 1) {
                // 存本地
                localStorage.setItem('token', result.token);
                action.push('/index');
            }else{//用户名密码错误
                alert('用户名或密码错误')   
            }
        },
        // 获取用户信息
        * getUserInfo(action, { call, put, select }) {
            let userItem = yield call(getUser);
            if (userItem.code === 1) {
                yield put({ type: 'changeState', userdata: userItem.data, userName: userItem.data.user_name });
                // yield put({ type: 'changeState', userName: userItem.data.user_name });
                let userdata = yield select(store => store.exam.userdata);
                let user_id = userdata.user_id;
                yield put({ type: 'getViewAutho', user_id });
            } else {
                alert(userItem.msg);
            }
        },
        // 获取当前用户的视图信息
        * getViewAutho(action, { call, put }) {
            let result = yield call(getViewAutho, action.user_id);
            console.log(result);
            if (result.code === 1) {
                yield put({ type: 'changeState', viewData: result.data });
            } else {
                alert(result.msg)
            }
        }
    }
}
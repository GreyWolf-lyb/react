/*
 * @Author: liuzhongbao 
 * @Date: 2019-03-14 17:57:28 
 * @Last Modified by: liuzhongbao
 * @Last Modified time: 2019-03-14 19:17:20
 * 接口信息
 */

import request from '../utils/request'

//获取登录信息的接口
export function getLogin(body) {
    return request('/user/login', {
        method: "POST",
        body
    });
}
//获取用户信息的接口
export function getUser() {
    return request('/user/userInfo');
}
// 获取当前用户的视图信息
export function getViewAutho(user_id) {
    return request('/user/new?user_id=' + user_id)
}
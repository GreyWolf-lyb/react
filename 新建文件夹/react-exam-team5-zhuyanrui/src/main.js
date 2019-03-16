/*
 * @Author: liuzhongbao 
 * @Date: 2019-03-14 19:38:10 
 * @Last Modified by:   liuzhongbao 
 * @Last Modified time: 2019-03-14 19:38:10 
 */


import dva from 'dva';
import RootRouter from './router.jsx'
import createHistory from 'history/createBrowserHistory';
import 'antd/dist/antd.css'
import './common/css/index.css'
import userinfo from "./model/userinfo"
const app = dva({
  history: createHistory(),
}); //创建一个应用
app.model(userinfo)
app.router(RootRouter); //挂载路由
app.start("#root") //启动
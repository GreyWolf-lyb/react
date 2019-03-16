/*
 * @Author: liuzhongbao 
 * @Date: 2019-03-14 19:39:54 
 * @Last Modified by:   liuzhongbao 
 * @Last Modified time: 2019-03-14 19:39:54 
 */

import React from 'react'
import {
    Switch,Route
} from 'dva/router'
 /**
  * 
  * @param {Object} props 
  * props - @param {Array} routes
  */
 function renderPath(match,item){
    return match ? match.path+'/'+item.path : item.path;
 }
 function RouterView(props){
     let {
         routes, //路由配置
         match //路由信息
     } = props;
     return <Switch>
         {
             routes && routes.map((item,key) => {
                 return <Route key={key} path={renderPath(match,item)} render={(props) => {
                     let Com = item.component;
                     return <Com {...{...props,...item}} />
                 }} />
             })
         }
     </Switch>
 }
 export default RouterView;
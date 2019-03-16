/*
 * @Author: liuzhongbao 
 * @Date: 2019-03-14 19:37:57 
 * @Last Modified by: liuzhongbao
 * @Last Modified time: 2019-03-14 20:37:51
 */


import React from 'react';
import {
    BrowserRouter,
} from 'dva/router'

import RouterView from './components/router-view'
import routerConfig from './config/router.config'
import ArithMetic from './methods/arithmetic';
let {Update} = ArithMetic;
ArithMetic.Update(routerConfig);
export default function RootRouter() {

    return <BrowserRouter>
        <RouterView routes={routerConfig} />
    </BrowserRouter>

}





/*
 * @Author: liuzhongbao 
 * @Date: 2019-03-14 19:38:54 
 * @Last Modified by: liuyabin
 * @Last Modified time: 2019-03-16 08:36:05
 */

import React , {Component} from 'react'
import {connect} from 'dva'
import {Redirect} from 'dva/router'
function isAutho(view_id,viewData){
    let index = viewData.findIndex(item => item.view_id === view_id);
    console.log(index);
    return index !== -1;
}
let mapState = store => {
    return {...store.exam}
}
function Autho(RouterComp){
    class AuthoHOC extends Component{
        render(){
            let {view_id,viewData} = this.props;
            if(!isAutho(view_id,viewData)){
                return <Redirect to="/login" />
            }
            return <RouterComp {...this.props} />
        }
    }
    AuthoHOC = connect(mapState)(AuthoHOC);
    return AuthoHOC;
}

export default Autho;
/*
 * @Author: liuzhongbao 
 * @Date: 2019-03-14 16:03:51 
 * @Last Modified by: zhuyanrui
 * @Last Modified time: 2019-03-15 10:05:19
 */


import {Redirect} from 'dva/router'
import React, { Component } from 'react';
import RouterView from '../../components/router-view'
import Aside from '../../components/Aside'
import {connect} from 'dva'
import './index.css'
import {
    Layout, Menu
} from 'antd';
const { SubMenu } = Menu;
const { Header} = Layout;
class Index extends Component {
    render() {
    let {userName} = this.props
        return (
            <div className="warp">
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px',background:'#F5F5F5' }}
                    >
                    </Menu>
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
                    <div className="LoginContent">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" className="LoginContentName"/>
                        <div className="Text">{userName}</div>
                    </div>
                </Header>
                <section>
                    <div className='section-wrap'>
                        <Aside {...this.props} />
                        <RouterView {...this.props} />
                    </div>

                </section>
            </Layout>
            </div>
        );
    }
    //防止地址栏直接跳路由必须登录后才能跳
    componentWillMount(){
        console.log(localStorage.getItem('token'));
        if(!localStorage.getItem('token')){
            //请先登录提示！
            alert('请先登录OK？')
            this.props.history.push('/login')
        }
    }
    componentDidMount(){
        console.log(this.props);
        this.props.dispatch({type:'exam/getUserInfo'});
    }
}
let mapState = store => {
    window.store = store;
    return {...store.exam}
}
Index = connect(mapState)(Index);

export default Index;
import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
// import {getMenuData} from '../../config/router.config'
import {Link} from 'dva/router'
import ArithMetic from '../../methods/arithmetic';
const SubMenu = Menu.SubMenu;
let {getMenuData} = ArithMetic;
export default class Aside extends Component {
  state = {
        theme: 'dark',
        current: '1',
  }
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    let {match,viewData} = this.props;
    let count=0;
    return <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
        {
          ArithMetic.getMenuData(viewData).map((item,key) => {
                return <SubMenu key={key} title={<span><Icon type="mail" /><span>{item.groupName}</span></span>}>
                     {
                         item.sides.map((val,index) => {
                             return <Menu.Item key={count++}>
                                 <Link to={`${match.url}/${val.path}`}>{val.title}</Link>
                             </Menu.Item>
                         })
                     }
                </SubMenu>
            })
        }
    </Menu>
  }
}

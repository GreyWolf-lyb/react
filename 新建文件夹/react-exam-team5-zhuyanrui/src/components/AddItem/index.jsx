/*
 * @Author: renyuening 
 * @Date: 2019-03-14 20:04:43 
 * @Last Modified by: zhuyanrui
 * @Last Modified time: 2019-03-14 21:42:33
 */


import React, { Component } from 'react';
import {
  Layout, Menu, Breadcrumb, Icon,Input,Dropdown,message,Button,Select 
} from 'antd';
import Editor from 'for-editor'



const { SubMenu } = Menu;
const {  Content, Sider } = Layout;
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}



class Browsers extends Component {
  constructor() {
		super()
		this.state = {
      value: '',
      values: '',
		}
	  }
	  handleChange(value) {
		this.setState({
      value,
    
		})
    }	
    handleChanges(values) {
      this.setState({
       
        values
      })
      }
    handleSizeChange = (e) => {
      this.setState({ size: e.target.value });
    }
  
  render() {
    const { value,size,values } = this.state
    return (
      <Layout>  
      <Layout>  
        <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item style={{fontSize:'20px'}}>添加试题</Breadcrumb.Item>
          <Content style={{
            background: '#fff', padding: 24, margin: 0, minHeight: 280,
          }}
          >
            <p style={{color:'#000000', fontSize:'18px'}}>题目信息</p>
            <p style={{color:'#000000', fontSize:'14px'}}>题干</p>
            <Input  placeholder='请输入题目标题，不超过20个字' style={{height:'40px',width:'500px'}} />
            <p style={{color:'#000000', fontSize:'14px',marginTop:'30px'}}>题目主题</p>
          	<Editor value={value} onChange={this.handleChange.bind(this)} />
            
            <p style={{marginTop:'20px',color:'#000000', fontSize:'18px'}}>请选择题目类型</p>
            <Select defaultValue="周考一" style={{ width: 200 }} onChange={handleChange}>
            <Option value="周考一">周考一</Option>
            <Option value="周考二">周考二</Option>
            <Option value="周考三">周考三</Option>
            <Option value="月考">月考</Option>
          </Select>
          <p style={{marginTop:'20px',color:'#000000', fontSize:'18px'}}>请选择課程类型</p>
            <Select defaultValue="javascript上" style={{ width: 200 }} onChange={handleChange}>
              <Option value="javascript上">javascript上</Option>
              <Option value="javascript下">javascript下</Option>
              <Option value="模块开发">模块开发</Option>
              <Option value="组件开发">组件开发</Option>
              <Option value="node高级">node高级</Option>
              <Option value="项目实战">项目实战</Option>
            </Select>
          <p style={{marginTop:'20px',color:'#000000', fontSize:'18px'}}>请选择题目类型</p>
            <Select defaultValue="简答题" style={{ width: 200 }} onChange={handleChange}>
            <Option value="简答题">简答题</Option>
            <Option value="修改bug">修改bug</Option>
            <Option value="代码补全">代码补全</Option>
            <Option value="手写代码">手写代码</Option>
          </Select>
          <p style={{marginBottom:'10px'}}></p>
            <Editor values={values} onChange={this.handleChanges.bind(this)} />
            <Button type="primary" style={{width:'100px',marginTop:'20px'}}>提交</Button>
          </Content>
        </Breadcrumb>
        </Layout>
      </Layout>
    </Layout>
    );
  }
}

export default Browsers;
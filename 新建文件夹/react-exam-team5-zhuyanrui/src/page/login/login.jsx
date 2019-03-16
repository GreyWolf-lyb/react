/*
 * @Author: liuzhongbao 
 * @Date: 2019-03-14 19:37:00 
 * @Last Modified by: zhuyanrui
 * @Last Modified time: 2019-03-15 10:14:45
 */

import React, { Component } from 'react';
import {connect} from "dva"
import {
    Form, Icon, Input, Button, Checkbox
} from 'antd';
import './login.css'
class Login extends Component {
    handleSubmit = (e) => {
        let {
            history: {
                push
            }
        } = this.props
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (values.remember) {
                    localStorage.setItem("userName", values.userName)
                    localStorage.setItem("password", values.password)
                }
                this.props.dispatch({type:'exam/getLogin', body: {
                            'user_name': values.userName,
                            'user_pwd': values.password
                        },push})
            }

        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-img">
            <div className="login-box">
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '用户名不能为空' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.3)' }} />} placeholder="请输入用户名" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '密码不能为空' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.3)' }} />} type="password" placeholder="请输入密码" />
                    )}
                </Form.Item>
                <Form.Item>
                    <div className="login-pwd">
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: false,
                        })(
                            <Checkbox>记住密码</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">忘记密码</a>
                    </div>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </Form.Item>
            </Form>
            </div>
            </div>
        );
    }
}

let mapState= store=>{
    return {...store.exam}
}

export default connect(mapState)(Form.create()(Login));
/*
 * @Author: liuzhongbao 
 * @Date: 2019-03-14 19:39:35 
 * @Last Modified by:   liuzhongbao 
 * @Last Modified time: 2019-03-14 19:39:35 
 */

import React, { Component } from 'react';
import { Tag, Button, Select } from 'antd';
import "./index.css"
import Autho from '../../HOCcomponent/Autho'
const Option = Select.Option;
const { CheckableTag } = Tag;

class MyTag extends React.Component {
	state = { checked: true };

	handleChange = (checked) => {
		this.setState({ checked });
	}

	render() {
		return <CheckableTag {...this.props} checked={this.state.checked} onChange={this.handleChange} />;
	}
}

class BrowseExam extends Component {
	render() {
		return (
			<div className="browse-right">
				<div className="browse-right-box">
					<h3>查看试题</h3>
					<div className="search">
						<div className="classType">
							<span>课程类型：</span>
							<div>
								<MyTag>All</MyTag>
							</div>
						</div>
						<div className="otherType">
							<div>
								<span>考试类型：</span>
								<Select style={{ width: 200 }}>
									<Option value="one">周考一</Option>
									<Option value="two">周考二</Option>
									<Option value="three">周考三</Option>
									<Option value="month">月考</Option>
								</Select>
							</div>
							<div>
								<span>题目类型：</span>
								<Select style={{ width: 200 }}></Select>
							</div>
							<Button type="primary" icon="search">查询</Button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
BrowseExam = Autho(BrowseExam);
export default BrowseExam;
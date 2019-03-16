
/*
 * @Author: liuyabin
 * @Date: 2019-03-14 19:17:52 
 * @Last Modified by: liuyabin
 * @Last Modified time: 2019-03-16 08:34:46
 * @func 试题列表
 */
import './index.css';
import React, { Component } from 'react';
import Autho from '../../HOCcomponent/Autho';
import {Select,Button,Table, Radio} from 'antd';
const Option = Select.Option;
function handleChange(value) {
    console.log(`selected ${value}`);
}

const columns = [{
    title: '试卷信息',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: '班级',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '创建人',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '开始时间',
    dataIndex: 'address',
    key: 'state',
  },
  {
    title: '结束时间',
    dataIndex: 'address',
    key: 'end',
  }, {
    title: '操作',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        详情
      </span>
    ),
  }];
  
  const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. ',
    tags: ['nice', 'developer']
  }];



class Examlist extends Component {
    state = { size: 'small' };
    onChange = (e) => {
        this.setState({ size: e.target.value });
    }

    render() {
        const { size } = this.state;
        return (
            <div className="title-list">
                <p>试卷列表</p>
                <div className="exam-select">
                    <div>考试类型:
                        <Select style={{ width: 150 }} onChange={handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled">Disabled</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </div>
                    <div>课程:
                        <Select style={{ width: 150 }} onChange={handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled">Disabled</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>    
                    </div>                    
                    <Button type="primary" icon="search">查询</Button>
                </div>
                <div className="exam-list">
                    <span>试卷列表</span>
                    <Radio.Group value={size} onChange={this.onChange} style={{ marginBottom: 16 }}>
                        <Radio.Button value="small">全部</Radio.Button>
                        <Radio.Button value="default">进行中</Radio.Button>
                        <Radio.Button value="large">已结束</Radio.Button>
                    </Radio.Group>
                </div>
                <div className="table-list">
                    <Table columns={columns} dataSource={data} />
                </div>
            </div>
        );
    }
}
Examlist = Autho(Examlist);

export default Examlist;
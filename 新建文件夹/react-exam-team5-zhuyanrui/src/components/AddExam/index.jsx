/*
 * @Author: liuyabin 
 * @Date: 2019-03-15 19:07:11 
 * @Last Modified by: liuyabin
 * @Last Modified time: 2019-03-16 08:34:07
 * @func 添加试题
 */

import React, { Component } from 'react';
import Autho from '../../HOCcomponent/Autho'
class AddExam extends Component {
    render() {
        return (
            <div>
                添加试题
            </div>
        );
    }
}
AddExam = Autho(AddExam);

export default AddExam;
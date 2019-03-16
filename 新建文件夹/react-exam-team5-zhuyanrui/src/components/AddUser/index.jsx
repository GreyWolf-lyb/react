import React, { Component } from 'react'
import Autho from '../../HOCcomponent/Autho'
class AddUser extends Component {
  render() {
    return (
      <div>
        添加用户
      </div>
    )
  }
}
AddUser = Autho(AddUser);
export default AddUser;
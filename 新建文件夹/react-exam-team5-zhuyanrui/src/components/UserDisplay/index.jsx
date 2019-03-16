import React, { Component } from 'react'
import Autho from '../../HOCcomponent/Autho'
class UserDisplay extends Component {
  render() {
    return (
      <div>
        用户展示
      </div>
    )
  }
}
UserDisplay = Autho(UserDisplay);
export default UserDisplay;
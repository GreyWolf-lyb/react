import React, { Component } from 'react'
import Autho from '../../HOCcomponent/Autho'
class Index extends Component {
  render() {
    return (
      <div>
        编辑试题
      </div>
    )
  }
}
Index = Autho(Index);
export default Index;
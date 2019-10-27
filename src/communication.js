import React, { Component } from 'react'


class App extends Component {
  render() {
    return (
      <div>
        <Clock
          time={12}
          onWakeUp={()=>{
            alert('wake up！')
          }}
          onSleep={()=>{
            alert('sleep！')
          }}
        />
      </div>
    )
  }
}

class Clock extends Component{
  render(){
    let {
      time,
      onWakeUp,
      onSleep
    } = this.props
    time === 9 && onWakeUp();
    time === 21 && onSleep();
    return(
      <div>Clock</div>
    )
  }
}

export default App;

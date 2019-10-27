import React,{Componet} from 'react'
import ReactDOM from 'react-dom'

class HelloWorld extends Componet{
  render() {
    return (
      <div className='App'>
        HelloWorld
      </div> 
    )
  }
}


ReactDOM.render(<HelloWorld/>,document.getElementById('root'))

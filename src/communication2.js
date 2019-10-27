import React, { Component } from 'react'

class Action extends Component{
  constructor(props){
    super(props)
    this.state = {
      value:''
    }
  }
  render(){
    return(
      <div>
        <input value = {this.state.value} onChange={(e)=>this.setState({value:e.target.value})} />
        <button onClick={()=>{
          this.props.onAdd(this.state.value)
          this.setState({value:''})
        }}>提交</button>
      </div>
    )
  }
}

class List extends Component{
  render(){
    return(
      <div>
        {
          this.props.data.map(item=><div key={item.id}>{item.name}</div>)
        }
      </div>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:[
        {
          name:'1',
          id:0
        },
        {
          name:'2',
          id:1
        },
        {
          name:'3',
          id:2
        },
      ]
    }
  }
  // onAdd(name){
  //   let {data} = this.state
  //   data.push({
  //     name,
  //     id:data.length + 1
  //   }) 
  //   this.setState({data})
  // }
    render() {
    return (
      <div>
        {/* <Action onAdd={this.onAdd.bind(this)} />  */}
        <Action onAdd={(name)=>{
            let {data} = this.state
            data.push({
              name,
              id:data.length + 1
            }) 
            this.setState({data})
        }} />
        <List data={this.state.data} />
      </div>
    )
  }
}

export default App;

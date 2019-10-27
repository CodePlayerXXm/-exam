import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app2.js";
import * as serviceWorker from "./serviceWorker";

//条件渲染
// class HelloWorld extends Component{
//   componentWillMount(){
//     console.log(1);
//   }
//   render() {
//     const data = ['a','b','c','d'];
//     const data2 = {a:'1',b:'2'};
//     const show = true
//     return (
//       <div className='App'>
//         {data.map(i=><p key={i}>{i}{data2.a}</p>)}
//         {show && <div>{data2.b}</div>}
//         {show ? <div>{data2.a}</div> : <div>{data2.b}</div>}
//       </div>
//     )
//   }
// }

// class App extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       name:'react'
//     }
//   }
//   render(){
//     console.log('App render');
//     return(
//       <div>
//         {this.state.name}
//         <Son name={this.state.name+'-son'}/>
//       </div>
//     )
//   }
//   componentDidMount(){
//     window.app = this
//     console.log('App Mount');

//   }
//   componentWillUpdate(){
//     console.log('App will upload');

//   }
//   componentDidUpdate(){
//     console.log('App did upload');
//   }
// }

// class Son extends Component{
//   render(){
//     console.log('Son render');
//     return(
//       <div>
//         {this.props.name}
//         <GranderSon name={this.props.name+'-granderson'}/>
//       </div>
//     )
//   }
//   componentDidMount(){
//     console.log('Son Mount');

//   }
//   componentWillUpdate(){
//     console.log('Son will upload');

//   }
//   componentDidUpdate(){
//     console.log('Son did upload');
//   }
// }

// class GranderSon extends Component{
//   render(){
//     console.log('GranderSon render');
//     return(
//       <div>
//         {this.props.name}
//       </div>
//     )
//   }
//   componentDidMount(){
//     console.log('GranderSon Mount');

//   }
//   componentWillUpdate(){
//     console.log('GranderSon will upload');

//   }
//   componentDidUpdate(){
//     console.log('GranderSon did upload');
//   }

// }

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

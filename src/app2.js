// import React, { Component } from "react";
import React, { useState } from "react";
import InputNumber from "./input.js";
// class App extends Component {
//   state = {
//     value: ""
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.state.value}</p>
//         <Input
//           value={this.state.value}
//           onChange={e => {
//             this.setState({
//               value: e.target.value
//             });
//           }}
//         ></Input>
//         <p>{this.state.value}</p>
//         <Input
//           value={this.state.value}
//           onChange={e => {
//             this.setState({
//               value: e.target.value
//             });
//           }}
//         ></Input>
//       </div>
//     );
//   }
// }
function App() {
  const [value, setValue] = useState("aaa");

  return (
    <div>
      {value}
      <InputNumber
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
      />
      <InputNumber
        defaultValue={value}
        onChange={e => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}
export default App;

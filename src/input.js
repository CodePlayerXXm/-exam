import React, { Component } from "react";
import { PropTypes } from "prop-types";

class InputNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      innerValue: ""
    };
  }
  static propTypes = {
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func
  };
  get isControl() {
    return "value" in this.props;
  }
  get value() {
    return this.isControl ? this.props.value : this.innerValue;
  }
  render() {
    return (
      <input
        value={this.value}
        onChange={e => {
          if (!this.isControl) {
            this.setState({
              innerValue: e.target.value
            });
          }
          this.props.onChange(e);
        }}
      />
    );
  }
  componentDidMount() {
    this.setState({
      innerValue: this.props.defaultValue
    });
  }
}
export default InputNumber;

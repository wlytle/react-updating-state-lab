// Code DigitalClicker Component Here
import React, { Component } from "react";

class DigitalClicker extends Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0,
    };
  }

  increaseCounter = () => {
    this.setState({
      ...this.state,
      timesClicked: this.state.timesClicked + 1,
    });
  };

  render() {
    return (
      <button onClick={this.increaseCounter}>{this.state.timesClicked}</button>
    );
  }
}

export default DigitalClicker;

import React, { Component } from "react";

export default class Message extends Component {
  constructor() {
    super()
    this.state = {
        msg: "Welcome mr visitor",
      };
  }

  changeMessage() {
    this.setState({ msg: "thank you for subscribing" });
  }

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }

  
}





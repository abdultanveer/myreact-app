import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount() {
    this.setState(prevState => ({
        count:prevState.count +1
    }))
    // this.setState({
    //     count:this.state.count+1
    // },()=>{ console.log(this.state.count)})
   }

  incrementFive(){
    this.incrementCount()
    this.incrementCount()
    this.incrementCount()
    this.incrementCount()
    this.incrementCount()

  }

  render() {
    return (
      <div>
        <div>Current count is {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>increment</button>
      </div>
    );
  }
}

export default Counter;

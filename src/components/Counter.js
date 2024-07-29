import React, { Component } from 'react'

export class Counter extends Component {
constructor(props) {
  super(props)

  this.state = {
     count: 0
  }
}

    incrementCount(){
        //this.state.count = this.state.count + 1
        this.setState({   //set state updates the state async
            count: this.state.count +1  //2.
        }, ()=>{
            console.log("the state is "+this.state.count)   //sync1.
        } )
       // console.log("the state is "+this.state.count)   //sync1.
    }


  render() {
    return (
      <div>
        <div>Current count is  {this.state.count}</div>
        <button  onClick={() => this.incrementCount()}>increment</button>
      </div>
    )
  }
}

export default Counter
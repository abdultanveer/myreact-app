import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName: ''
      }
    }


  render() {
    return (
        <form>
      <div>
        <label>User name</label>
        <input type='text' value={this.state.userName}/>
      </div>
      </form>
    )
  }
}

export default Form
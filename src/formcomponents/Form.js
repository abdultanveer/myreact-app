import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName: ''
      }

     this.handleUserNameChange = this.handleUserNameChange.bind(this)
    }


    handleUserNameChange = (event) => {
        this.setState = ({
            userName: event.target.value
        })
    }

  render() {
    return (
        <form>
      <div>
        <label>User name</label>
        <input type='text' value={this.state.userName}  onChange={this.handleUserNameChange}/>
      </div>
      </form>
    )
  }
}

export default Form
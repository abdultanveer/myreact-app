import React, { Component } from 'react'

export class UserGreeting  extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }


  render() {
   
        if (this.state.isLoggedIn) {
            return <div>welcome abdul</div>
        }
        else {
            return <div>welcome guest</div>
        }
    
  }
}

export default UserGreeting 
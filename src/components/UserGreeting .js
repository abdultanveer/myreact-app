import React, { Component } from 'react'

export class UserGreeting  extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }


  render() {
   
         (this.state.isLoggedIn)?
          <div>welcome abdul</div>:
           <div>welcome guest</div>
        }
    
  }


export default UserGreeting 
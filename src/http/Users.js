import React, { Component } from 'react'
import axios from 'axios'

//npm install axios


export class Users extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         users: []
      }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( response => {console.log(response.data)})
        .catch(error => {console.log(error)})
    }

  render() {
    return (
      <div>Users</div>
    )
  }
}

export default Users
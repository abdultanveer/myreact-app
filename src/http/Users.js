import React, { Component } from 'react'
import axios from 'axios'

//npm install axios


export class Users extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts: []
      }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( response => {
            this.setState({ posts: response.data})
            console.log(response.data)
        })
        .catch(error => {console.log(error)})
    }

  render() {
    const {posts} = this.state
    return (
      <div>List of posts
      {
        posts.length ?
        posts.map(post => <div key={post.id}> {post.title}</div>): null
      }
      </div>
    )
  }
}

export default Users
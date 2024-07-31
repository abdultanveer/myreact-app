import React, { Component } from "react";
import axios from 'axios'



export class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);

  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('https://jsonplaceholder.typicode.com/posts')
    .then( response => {
        console.log(response.data)
    })
    .catch(error => {
        console.log(error)
    })
  }
  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            {" "}
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.handleChange}
            />
          </div>
          <div>
            {" "}
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            {" "}
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.handleChange}
            />
          </div>
          <div>
            {" "}
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;

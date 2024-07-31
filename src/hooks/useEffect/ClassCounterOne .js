import React, { Component } from 'react'

export class ClassCounterOne  extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
             name: ''
        }
    }

    componentDidMount() {
        document.title = `clicked ${this.state.count} times`
    }

    componentDidUpdate() {
        console.log('updating document title')

        document.title = `clicked ${this.state.count} times`
    }


    render() {
        return (
            <div>
              <input type = "text"
                 value = {this.state.name}
                onChange = {
                    e => { this.setState(
                        {name: e.target.value}
                    )}
                }
                />
                <button onClick=
                    {() => this.setState({ count: this.state.count + 1 })}>
                    clicked {this.state.count} times
                </button>
            </div>
        )
    }
}

export default ClassCounterOne
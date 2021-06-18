import React, { Component } from 'react'
import api from '../services/api'

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        console.log(this.props.formType);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    async handleSubmit() {
        const { username, password } = this.state
        const data = await api.call('post', `${this.props.formType}`, { username, password })
        console.log(data);
    }
    render() {
        return <>
            <input
                type="text"
                placeholder="Enter username"
                value={this.state.username}
                onChange={this.handleChange}
            />
            <br />
            <input
                type="text"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.handleChange}
            />
            <br />
            <button>Submit</button>
        </>
    }
}

export default Auth;
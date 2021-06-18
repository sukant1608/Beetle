import React, { Component } from 'react'

import Auth from './auth'

class BranchLogin extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <center>
            <h1>Branch Login</h1>
            <Auth formType="incharge" />
            <p>Your username and password is branch name</p>
        </center>
    }
}

export default BranchLogin
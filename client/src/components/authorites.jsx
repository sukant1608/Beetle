import React, { Component } from 'react'

import Auth from './auth'

class Authorities extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <center>
            <h1>Authorites</h1>
            <Auth formType="authority" />
            <p>Your username and password is branch master</p>
        </center>
    }
}

export default Authorities
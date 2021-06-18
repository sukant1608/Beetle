import React, { Component } from 'react'
import io from 'socket.io-client'
import api from '../services/api'

const iosock = io.connect('http://localhost:4000')

class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            mobile: "",
            pincode: "",
            show: true,
            result: null
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    async handleSubmit() {
        const { name, mobile, pincode } = this.state
        const data = await api.call("post", "order", { name, mobile, pincode })
        this.setState({ show: false })
    }
    render() {
        const { name, mobile, pincode } = this.state
        return <center>
            <div className="order">
                <h1>Place Order</h1>
                <input name="name" value={name} onChange={this.handleChange} type="text" placeholder="Enter name" /> <br />
                <input name="mobile" value={mobile} onChange={this.handleChange} type="text" placeholder="Enter mobile number" /> <br />
                <input name="pincode" value={pincode} onChange={this.handleChange} type="text" placeholder="Enter pin-code" /><br />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        </center>
    }
}

export default Order
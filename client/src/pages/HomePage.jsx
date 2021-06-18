import React, { Component } from 'react'

import Order from '../components/order'
import Authorities from '../components/authorites'
import BranchLogin from '../components/branchLogin'

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 1
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        this.setState({ selected: e })
    }
    render() {
        const { selected } = this.state
        return <>
            <div className="toggle-box">
                <div onClick={() => this.handleClick(1)} className={`toggle ${selected === 1 ? "selected" : ""}`}>Order</div>
                <div onClick={() => this.handleClick(2)} className={`toggle ${selected === 2 ? "selected" : ""}`}>Incharge manager</div>
                <div onClick={() => this.handleClick(3)} className={`toggle ${selected === 3 ? "selected" : ""}`}>Authorities</div>
            </div>
            {selected === 1 && <Order />}
            {selected === 2 && <BranchLogin />}
            {selected === 3 && <Authorities />}
        </>
    }
}

export default HomePage
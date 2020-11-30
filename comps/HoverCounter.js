import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class HoverCounter extends Component {


    render() {
        const {count , incrementCount } = this.props
        return (
            <div>
                <button onMouseEnter={incrementCount} >entered {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter)

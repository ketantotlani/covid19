import React, { Component } from 'react'
import Main from './Main'
import SideBar from './SideBar'

export default class Home extends Component {
    render() {
        return (
            <div className="row">
            <SideBar/>
            <Main/>
            </div>
        )
    }
}

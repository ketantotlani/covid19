import React, { Component } from 'react'
import {country} from './StateList'

export default class SideBar extends Component {
    render() {
        return (
            // SideBar Using Bootstrap Grid 
            <div  className=" d-flex flex-column text-center col-md-2 bg-light p-5 sidebar" id="sidebar" >
                <h4 className="sidebar-sticky sideclass " >Select States</h4>
                <div className="" >
            {
                country.map(item => (
                    <div className=" nav-item  sideclass " key={item.id} >
                <div class="form-check form-check-inline">
                    <input class="form-check-input" checked={true} type="checkbox" id="inlineCheckbox1" value="option1"/>
                    <label class="form-check-label" for="inlineCheckbox1">{item.label}</label>
                </div>
            </div>
                ))
            }
            </div>
            </div>
            
        )
    }
}

import logo from '../logo.svg';

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class React_logo extends Component{
    render(){
        return(            
                <img src={logo} className="App-logo" alt="logo" />            
        )
    }
}
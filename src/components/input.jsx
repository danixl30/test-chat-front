import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import "../index.css";
import Paragrath from './paragrath';
import Title from './title';

const IntupComponet = (props) => {
    return(
        <input className = "move2 alpha" value = {props.value} type = {props.type} placeholder = {props.placeholder} name = {props.name} onChange= { (e) => props.handleChange(e.target.name, e.target.value)}/>
    )
}

export default IntupComponet;
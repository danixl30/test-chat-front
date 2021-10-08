import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import "../index.css";
import Title from './title';

const Paragrath = (props) => {
    return(
        <p className = "move2 alpha">{props.content}</p>
    )
}

export default Paragrath;
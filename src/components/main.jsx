import React, { Component } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import "../index.css";
import Paragrath from './paragrath';
import React_logo from './React_logo';
import Title from './title';
import express from '../express.png'

const Main = () => {

    const history = useHistory();

    return(
        <div>
            <Title content = "Chat APP"/>
            <Paragrath content = "Made by danixl30"/>
            <React_logo/>
            <img src = {express} width = "400"></img>
            <h1/>
            <button className = "btn-standar" onClick = {(e) => history.push('/signup')}>Signup</button>
            <button className = "btn-standar" onClick = {(e) => history.push('/login')}>Login</button>
        </div>
    )
}

export default Main;
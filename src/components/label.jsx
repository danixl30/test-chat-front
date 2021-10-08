import React, { Component, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

const Label = (props) =>{
    return(
        <div>
            <label>{props.content}</label>
        </div>
    )
}

export default Label
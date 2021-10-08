import React, { Component, useEffect, useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import "../index.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Message = (props) => {
    if(props.username == props.name){
        return(
            <div>                
                <div className = "chat-block">                    
                    <div className = "current-box">
                        <h3>{props.name}</h3>
                        <p>{props.message}</p>
                    </div>     
                    <div className = "profile-current"/>               
                </div> 
            </div>
            
        )
    }else{
        return(
            <div>
                <div className = "chat-block">
                    <div style = {{marginLeft: '15px'}} className = "profile-current"/>
                    <div className = "public-box">
                        <h3>{props.name}</h3>
                        <p>{props.message}</p>
                    </div>
                </div>
                
            </div>
            
        )
    }
}

export default Message;
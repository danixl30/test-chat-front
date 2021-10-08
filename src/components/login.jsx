import React, { Component, useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import "../index.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Cookies from "js-cookie";

import IntupComponet from './input';
import Title from './title';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const onSubmit = async (e) => {
        e.preventDefault();
        if(username.length > 4 && password.length > 4){
            const res = await axios.post('http://localhost:4000/login', {
                username: username, 
                password: password
            });
            if(res.data.userid){
                Cookies.set('userid', res.data.userid);
                history.push('/home');
            }else{
                toast.error(res.data.msg);                
            }
        }else{
            toast.warning('The username and password has to contain at least five characters');
        }
    }

    const handleChange = (name, value) => {
        if(name === 'username'){
            setUsername(value);
            //console.log(username)
        }
        if(name === 'password'){
            setPassword(value);
            //console.log(password);
        }
    }

    return(
        <div>
            <Title content = "Login"/>
            <form onSubmit = {onSubmit}>
                <IntupComponet type = "text" placeholder = "Username" name = "username" handleChange = {handleChange}/>
                <h1/>
                <IntupComponet type = "password" placeholder = "Password" name = "password" handleChange = {handleChange}/>
                <h1/>
                <button className = "btn-standar">Login</button>
            </form>            
        </div>
    )
}

export default Login;
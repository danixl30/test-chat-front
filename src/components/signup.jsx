import React, { Component, useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import "../index.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import IntupComponet from './input';
import Title from './title';

const Signup = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirm] = useState('');

    const history = useHistory();

    const onSubmit = async (e) => {
        e.preventDefault();
        if(username.length > 4 && password.length > 4 && confirmPassword.length > 4){
            if(password === confirmPassword){
                const res = await axios.post('http://localhost:4000/createuser', {
                    username: username, 
                    password: password,
                    confirmPassword: confirmPassword
                });
                if(res.data.msg == 'success'){
                    console.log(res.data.msg);
                    history.push('/login')
                }else{
                    toast.error(res.data.msg);                
                }
            }else{
                toast.warning('The passwords are nor the same');
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
        if(name === 'confirmPassword'){
            setConfirm(value);
        }
    }

    return(
        <div>
            <Title content = "Signup"/>
            <form onSubmit = {onSubmit}>
                <IntupComponet type = "text" placeholder = "Username" name = "username" handleChange = {handleChange}/>
                <h1/>
                <IntupComponet type = "password" placeholder = "Password" name = "password" handleChange = {handleChange}/>
                <h1/>
                <IntupComponet type = "password" placeholder = "Confirm Password" name = "confirmPassword" handleChange = {handleChange}/>
                <h1/>
                <button className = "btn-standar">Signup</button>
            </form>            
        </div>
    )
}

export default Signup;
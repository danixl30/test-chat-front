import React, { Component, useEffect, useState, useRef } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import "../index.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Cookies from "js-cookie";

import IntupComponet from './input';
import Title from './title';
import Paragrath from './paragrath';
import Socket from "./socket";
import Message from './message';

const Home = () => {

    const [username, setUsername] = useState('');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [alert, setAlert] = useState('');
    const [typing, setTyping] = useState('')

    const history = useHistory();

    useEffect(async () => {
        getUsername()
        if(username !== '')Socket.emit('connected', username);        
    }, [username])

    useEffect(() => {
        Socket.on('messages', (message) => {
            setMessages([...messages, message])
            console.log(messages)
        })
        return () => {
            Socket.off();
        };
    }, [messages])

    useEffect(() => {
        Socket.on('alert', content => {
            toast.info(content.msg);
        })
    }, [alert])

    useEffect(() => {
        Socket.on('typing', (content) => {
            setTyping(content.msg);
        })
    })

    const divRef = useRef(null);
    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: "smooth" });
    });

    const getUsername = async () => {
        const user = Cookies.get('userid');
        if(user){
            const res = await axios.get(`http://localhost:4000/user/${user}`);            
            setUsername(res.data.msg)
        }else{
            history.push('/');
        }
    }

    const setLogout = () => {
        Cookies.remove('userid');
        history.push('/');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(message)
        Socket.emit('message', username, message);
        Socket.emit('typing', '');
        setMessage('');
    }

    const deleteUser = async () => {
        const user = Cookies.get('userid');
        const res = await axios.delete(`http://localhost:4000/user/${user}`)
        if(res.data.msg == 'success'){
            setLogout()
        }
    }

    const onChange = (e) => {
        setMessage(e.target.value);
        if(message.length > 0){
            Socket.emit('typing', username);  
        }else{
            Socket.emit('typing', '');  
        }      
    }

    return(
        <div>
            <Title content = "Home"/>
            <Paragrath content = {`Welcome ${username}`}/>
            <button className = "btn-standar" onClick = {setLogout}>Logout</button>
            <button className = "btn-standar" onClick = {deleteUser}>Delete user</button>
            <h1/>
            <div className = "container">
                <Paragrath content = {typing}/>
                <div className = "chat">
                    {messages.map((e) => (
                        <div>
                            <Message username = {username} name = {e.name} message = {e.message}/>
                            <h1/>
                        </div>                        
                    ))}
                    <div ref={divRef}></div>
                </div>
                <h1/>
                <div>
                    <form onSubmit = {onSubmit}>
                        <textarea placeholder = "Message" 
                        onChange = {onChange}
                        value = {message}
                        rows = "4"
                        ></textarea>
                        <h1></h1>
                        <button className = "btn-send">Send</button>
                    </form>                    
                </div>
            </div>
        </div>
    )
}

export default Home;
import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import Main from "./components/main";
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Router>
      <ToastContainer/>
        <Switch>          
          <Route path= "/" exact component = {Main}/>
          <Route path="/login" component = {Login}/>
          <Route path = "/signup" component = {Signup}/>
          <Route path = "/home" component = {Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

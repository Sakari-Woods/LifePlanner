import React, {useState} from 'react';
import '../css/Login.css';
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";

export default function Login(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm(){
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event){
        return email.preventDefault();
    
    }
    return(
      <div className="Login">
      <h2>This is the Login Box</h2>
        </div>
    );
    /*
    return (
      <div className="Login">
          <h2>This is the Login Box</h2>
          <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
        <ControlLabel>Email</ControlLabel>
        <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
        />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
        <ControlLabel>Password</ControlLabel>
        <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
        />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
        Login
        </Button>
        </form>
      </div>
    );
    */
}

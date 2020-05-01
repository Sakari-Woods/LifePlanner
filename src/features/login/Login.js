import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return(
    <div id="LoginBox">
    <form>
        <h1>Hello Test</h1>
        <p>Enter your name:</p>
        <input
          type="text"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

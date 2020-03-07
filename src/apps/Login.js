import React from 'react';
import '../css/Login.css';

class Login extends React.Component {
    constructor(){
        super();
        this.state = {color:"red"};
    }
  render() {
    return (
      <div className="Login">
          <h2>This is the Login Box</h2>
      </div>
    );
  }
}

export default Login;

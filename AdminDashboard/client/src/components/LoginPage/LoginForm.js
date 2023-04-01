import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: -100
};




class LoginForm extends Component {

  handleFormSubmit(e) {
    e.preventDefault();

    console.log("FORM SUBMIT!");

  }

  render() {
    return (
      <div style={divStyle}>
       
        <div className="wrapper1">
        <div className="ellipse2"></div>
        </div>
    <div className="content">
        <img className="man" src="/img/man.png" />
        <div className="text">SIGN IN</div>

          <Form horizontal className="LoginForm" id="loginForm">
          <div className = "fieldmail">
                <label className="email" for="emailname">Email Address</label>
                <input type="email" placeholder="Email Id" required name="emailname"/>
                
            </div>
            <div className = "fieldpass">
                <label className = "passname" for="pass">Password</label>
                <input type="password" placeholder="Password" required name="pass"/>
            </div>
            <div className="forgot-pass"><a href = "#">Forgot Password?</a></div>
            <button>SIGN IN</button>
          
          </Form>
          </div>
          <div className="wrapper">
        <div className="ellipse1"></div>
        </div>
       
      </div>
    )
  }
}

export default LoginForm;

import React, { Component } from "react";
import Register from "../Register";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state={
    username: "",
    password: "",
    isLogged: false
  };
  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const login = await fetch("http://localhost:9000/auth/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const parsedLogin = await login.json();
    if(parsedLogin.status.message === "User Logged In") {
      this.props.login(parsedLogin.status.user)
    }
  };
  render() {
    return(
      <div>
        {
          !this.props.isLogged
          ? <form onSubmit={this.handleSubmit}>
              <label>
                <input type="text" name="username" onChange={this.handleChange}/>
              </label>
              <label>
                <input type="password" name="password" onChange={this.handleChange}/>
              </label>
              <button type="submit">
                Login!
              </button>
            </form>
          : <Redirect to="/employee" />
        }
      </div>
    )
  }
}

export default Login
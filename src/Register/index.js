import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Register extends Component {
  state={
    username: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const register = await fetch("http://localhost:9000/auth/register", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const parsedRegister = await register.json();
      if(parsedRegister.status.message === "User Logged In") {
        this.props.login(parsedRegister.status.user)
      }
    } catch(err) {
      console.log(err)
    }
  };
  render() {
    return(
      <div>
        {
          !this.props.isLogged
              ? <form onSubmit={this.handleSubmit}>
                <label>
                  Username:
                  <input type="text" name="username" onChange={this.handleChange}/>
                </label>
                <label>
                  Password:
                  <input type="password" name="password" onChange={this.handleChange}/>
                </label>
                <button type="submit">
                  Sign Up!
                </button>
              </form>
            : <Redirect to="/employee" />
          }
      </div>
    )
  }
}

export default Register;
import React, { Component } from "react";
import Redirect from "react";

class Register extends Component {
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
      this.setState({
        isLogged: true
      })
    }
  }
  render() {
    return(
      <div>
        {
          !this.state.isLogged
              ? <form>
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
import React, { Component } from 'react';
import './App.css';
import Register from "./Register";
import { Route, Switch } from "react-router-dom";
import EmployeeContainer from './EmployeeContainer';
import Head from "./Header";
import Login from "./Login";

const Error404 = () => {
  return(
    <div>
      <h1>Error 404</h1>
    </div>
  )
}

class App extends Component {
  state={
    user: {},
    isLogged: false
  };
  loginHandler = (u) => {
    this.setState({
      isLogged: true,
      user: u
    })
  };
  logoutHandler = async () => {
    try {
    const logout = await fetch("http://localhost:9000/auth/logout");
      const parsedLogout = await logout.json();
      if(parsedLogout.status.message === "User Logged Out") {
        this.setState({
        isLogged: false,
        user: {}
      });
    }
    } catch(err) {
      console.log(err)
    }
  };
  render() {
    const { isLogged, user } = this.state
    return (
        <main className="App">
          <Head logout={this.logoutHandler} isLogged={isLogged} login={this.loginHandler}/>
          <Switch>
            <Route exact path="/" render={() => <Login login={this.loginHandler} isLogged={isLogged} />}/>
            <Route exact path="/register" render={() => <Register login={this.loginHandler} isLogged={isLogged} /> }/>
            <Route exact path="/employee" render={() => <EmployeeContainer isLogged={isLogged} />}/>
            <Route component={Error404} />
          </Switch>
        </main>
    );
  }
}



export default App;
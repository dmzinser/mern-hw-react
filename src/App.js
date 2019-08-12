import React, { Component } from 'react';
import './App.css';
import Register from "./Register";
import { Route, Switch } from "react-router-dom";
import EmployeeContainer from './EmployeeContainer';
import Header from "./Header";
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
  render() {
    const { isLogged, user } = this.state
    return (
        <main className="App">
          <Header />
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
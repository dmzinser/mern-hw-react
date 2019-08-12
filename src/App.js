import React from 'react';
import './App.css';
import Register from "./Register";
import { Route, Switch } from "react-router-dom";
import EmployeeContainer from './EmployeeContainer';
import Header from "./Header";

const Error404 = () => {
  return(
    <div>
      <h1>Error 404</h1>
    </div>
  )
}

function App() {
  return (
      <main className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Register /> }/>
          <Route exact path="/employee" component={ EmployeeContainer }/>
          <Route component={Error404} />
        </Switch>
      </main>
  );
}

export default App;
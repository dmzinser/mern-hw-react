import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";

class Head extends Component {
  render() {
     return(
      <div>
        {
          this.props.isLogged
          ? <Header >
            <div>
              <Button type="submit" onClick={this.props.logout}>
                Logout
              </Button><br />
            </div>
          </Header>
          :
          <Header >
            <div>
              <Link to="/">Login</Link><br />
              <Link to="/register">Register</Link><br />
            </div>
          </Header>
        }
      </div>
    )
  } 
}

export default Head;
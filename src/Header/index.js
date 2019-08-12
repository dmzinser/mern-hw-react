import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return(
    <header>
      <ul>
        <Link to="/">Login</Link><br />
        <Link to="/register">Register</Link><br />
      </ul>
    </header>
  )
}

export default Header;
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return(
    <header>
      <ul>
        <Link to="/">Register</Link><br />
        <Link to="/employee">Employee</Link>
      </ul>
    </header>
  )
}

export default Header;
import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <Link to="/">
          <img
            className="ghibli-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9sArFqrkCYBoFXydEK8uF9gmFTYKESPihA&usqp=CAU"
            alt="ghibli studio logo"
          />
        </Link>
        <Link to="/movies">Movies</Link>
        <Link to="/people">People</Link>
        <Link to="/locations">Locations</Link>
        <h1>Hello, world!</h1>
      </div>
    );
  }
}
export default Navbar;


//import {Link} from "react-router-dom";

//const Nav = () => {

//return (
  //<nav>
  
  //</nav>
)
}
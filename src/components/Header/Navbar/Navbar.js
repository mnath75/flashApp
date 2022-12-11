import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
    return (
      <div className="nav">
        <Link to="/" className="insidenav">
          Home
        </Link>
        <Link to="/decks" className="insidenav">
          Decks
        </Link>
        <Link to="/today" className="insidenav">
          Today
        </Link>
      </div>
    );


}

export default Navbar;
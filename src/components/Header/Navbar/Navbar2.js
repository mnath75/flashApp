import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar2() {
  return (
    <div className="nav2">
      <Link to="/signin" className="insidenav2">
        Sign In
      </Link>
      <Link to="/login" className="insidenav2">
        Log In
      </Link>
    </div>
  );
}

export default Navbar2;

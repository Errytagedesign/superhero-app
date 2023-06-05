import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/breweriesIndex">Breweries Index</Link>
    </nav>
  );
}

export default Nav;

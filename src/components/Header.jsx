import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="page-reveal reveal-header">
      <nav className="site-navigation" aria-label="Main navigation">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active-nav-link" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active-nav-link" : "nav-link"
          }
        >
          About
        </NavLink>
      </nav>

      <h1>Humanity in Frames</h1>
      <h2>A Place of Daily Inspiration</h2>
      <p>Inspire • Learn • Grow</p>
    </header>
  );
}

export default Header;
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import BloodDrop from "../../assets/Icons/BloodDrop.png";
import "./navbar.css";

const navItems = [
  { name: "Home",      path: "/" },
  { name: "About",     path: "/about" },
  { name: "Contact",   path: "/contact" },
  { name: "Dashboard", path: "/dashboard" },
];

const Navbar = () => {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">

        {/* Logo */}
        <Link to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <img src={BloodDrop} alt="logo" className="navbar__logo-icon" />
          <span>Blood<span className="brand-red">Bank</span></span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className={`navbar__toggle ${open ? "navbar__toggle--open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="navbar__burger"></span>
        </button>

        {/* Nav Links */}
        <nav className={`navbar__nav ${open ? "navbar__nav--open" : ""}`}>
          <ul className="navbar__list">
            {navItems.map((item, i) => (
              <li key={item.name} className="navbar__item" style={{ animationDelay: `${i * 0.08}s` }}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? "navbar__link--active" : ""}`
                  }
                  onClick={() => setOpen(false)}
                >
                  <span className="link-text">{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="navbar__cta" onClick={() => setOpen(false)}>
            🩸 Donate Now
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;

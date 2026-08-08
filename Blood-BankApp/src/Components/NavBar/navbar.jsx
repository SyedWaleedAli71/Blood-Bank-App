
import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import {
  House,
  Info,
  Phone,
  LogIn,
  UserPlus,
  LayoutDashboard,
  LogOut,
  Droplets,
} from "lucide-react";

import BloodDrop from "../../assets/Icons/BloodDrop.png";
import { auth, db } from "../../firebase";

import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Authentication states
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  const navigate = useNavigate();

  // =========================
  // SCROLL EFFECT
  // =========================
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // =========================
  // CHECK LOGGED IN USER
  // =========================
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (currentUser) => {
        setUser(currentUser);

        if (currentUser) {
          try {
            const userDoc = await getDoc(
              doc(db, "users", currentUser.uid)
            );

            if (userDoc.exists()) {
              setRole(userDoc.data().role);
            } else {
              setRole(null);
            }
          } catch (error) {
            console.error(
              "Error getting user role:",
              error
            );

            setRole(null);
          }
        } else {
          setRole(null);
        }
      }
    );

    return () => unsubscribe();
  }, []);

  // =========================
  // LOGOUT
  // =========================
  const handleLogout = async () => {
    try {
      await signOut(auth);

      setOpen(false);
      setRole(null);

      alert("Logged out successfully!");

      navigate("/");
    } catch (error) {
      console.error("Logout Error:", error);

      alert(
        "Something went wrong while logging out."
      );
    }
  };

  // =========================
  // DASHBOARD PATH
  // =========================
  const dashboardPath =
    role === "admin"
      ? "/dashboard"
      : "/user-dashboard";

  // =========================
  // CLOSE MENU
  // =========================
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header
      className={`navbar ${
        scrolled ? "navbar--scrolled" : ""
      }`}
    >
      <div className="navbar__container">

        {/* =========================
            LOGO
        ========================= */}
        <Link
          to="/"
          className="navbar__brand"
          onClick={closeMenu}
        >
          <img
            src={BloodDrop}
            alt="Blood Bank Logo"
            className="navbar__logo-icon"
          />

          <span>
            Blood<span className="brand-red">Bank</span>
          </span>
        </Link>


        {/* =========================
            MOBILE TOGGLE
        ========================= */}
        <button
          type="button"
          className={`navbar__toggle ${
            open
              ? "navbar__toggle--open"
              : ""
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="navbar__burger"></span>
        </button>


        {/* =========================
            NAVIGATION
        ========================= */}
        <nav
          className={`navbar__nav ${
            open
              ? "navbar__nav--open"
              : ""
          }`}
        >
          <ul className="navbar__list">

            {/* =========================
                HOME
            ========================= */}
            <li className="navbar__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `navbar__link ${
                    isActive
                      ? "navbar__link--active"
                      : ""
                  }`
                }
                onClick={closeMenu}
              >
                <House
                  className="navbar__link-icon"
                  size={18}
                  strokeWidth={2}
                />

                <span className="link-text">
                  Home
                </span>
              </NavLink>
            </li>


            {/* =========================
                ABOUT
            ========================= */}
            <li className="navbar__item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `navbar__link ${
                    isActive
                      ? "navbar__link--active"
                      : ""
                  }`
                }
                onClick={closeMenu}
              >
                <Info
                  className="navbar__link-icon"
                  size={18}
                  strokeWidth={2}
                />

                <span className="link-text">
                  About
                </span>
              </NavLink>
            </li>


            {/* =========================
                CONTACT
            ========================= */}
            <li className="navbar__item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `navbar__link ${
                    isActive
                      ? "navbar__link--active"
                      : ""
                  }`
                }
                onClick={closeMenu}
              >
                <Phone
                  className="navbar__link-icon"
                  size={18}
                  strokeWidth={2}
                />

                <span className="link-text">
                  Contact
                </span>
              </NavLink>
            </li>


            {/* =========================
                BEFORE LOGIN
            ========================= */}
            {!user && (
              <>
                {/* LOGIN */}
                <li className="navbar__item">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `navbar__link ${
                        isActive
                          ? "navbar__link--active"
                          : ""
                      }`
                    }
                    onClick={closeMenu}
                  >
                    <LogIn
                      className="navbar__link-icon"
                      size={18}
                      strokeWidth={2}
                    />

                    <span className="link-text">
                      Login
                    </span>
                  </NavLink>
                </li>


                {/* REGISTER */}
                <li className="navbar__item">
                  <NavLink
                    to="/signup"
                    className={({ isActive }) =>
                      `navbar__link ${
                        isActive
                          ? "navbar__link--active"
                          : ""
                      }`
                    }
                    onClick={closeMenu}
                  >
                    <UserPlus
                      className="navbar__link-icon"
                      size={18}
                      strokeWidth={2}
                    />

                    <span className="link-text">
                      Register
                    </span>
                  </NavLink>
                </li>
              </>
            )}


            {/* =========================
                AFTER LOGIN
            ========================= */}
            {user && (
              <>
                {/* DASHBOARD */}
                <li className="navbar__item">
                  <NavLink
                    to={dashboardPath}
                    className={({ isActive }) =>
                      `navbar__link ${
                        isActive
                          ? "navbar__link--active"
                          : ""
                      }`
                    }
                    onClick={closeMenu}
                  >
                    <LayoutDashboard
                      className="navbar__link-icon"
                      size={18}
                      strokeWidth={2}
                    />

                    <span className="link-text">
                      Dashboard
                    </span>
                  </NavLink>
                </li>


                {/* LOGOUT */}
                <li className="navbar__item">
                  <button
                    type="button"
                    className="navbar__link navbar__logout"
                    onClick={handleLogout}
                  >
                    <LogOut
                      className="navbar__link-icon"
                      size={18}
                      strokeWidth={2}
                    />

                    <span className="link-text">
                      Logout
                    </span>
                  </button>
                </li>
              </>
            )}

          </ul>


          {/* =========================
              DONATE BUTTON
          ========================= */}
          <Link
            to="/contact"
            className="navbar__cta"
            onClick={closeMenu}
          >
            <Droplets
              size={18}
              strokeWidth={2.3}
            />

            <span>Donate Now</span>
          </Link>

        </nav>
      </div>
    </header>
  );
};

export default Navbar;

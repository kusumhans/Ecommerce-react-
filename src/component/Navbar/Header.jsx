import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { useCookies } from "react-cookie";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken, removeToken] = useCookies(["jwt-token"]);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <Navbar expand="md" className="navbar custom-navbar">

      {/* Logo */}
      <NavbarBrand tag={Link} to="/" className="logo">
        <i className="ri-shopping-cart-2-fill cart-logo"></i>
        <span>ShopCart</span>
      </NavbarBrand>

      {/* Hamburger */}
      <NavbarToggler
        onClick={toggle}
        className="navbar-toggler-custom ms-auto"
      />

      {/* Menu */}
      <Collapse navbar isOpen={isOpen}>
        <Nav className="ms-auto align-items-md-center" navbar>

          <NavItem>
            <NavLink tag={Link} to="/cart">
              Cart
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to="/settings">
              Settings
            </NavLink>
          </NavItem>

          <NavItem>
            {token["jwt-token"] ? (
              <NavLink
                tag={Link}
                to="/signin"
                onClick={() => removeToken("jwt-token")}
              >
                Logout
              </NavLink>
            ) : (
              <NavLink tag={Link} to="/signin">
                Sign In
              </NavLink>
            )}
          </NavItem>

          <NavbarText className="welcome-text">
            Hi User 👋
          </NavbarText>

        </Nav>
      </Collapse>

    </Navbar>
  );
}

export default Header;
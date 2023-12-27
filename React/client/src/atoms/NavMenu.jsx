import React from "react";
import { Navbar, NavLink, NavItem, Nav, NavbarBrand } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'; // Import your components
import Gallery from './components/Gallery';
import About from './components/About';

function NavMenu() {
  return (
    <>
      <div
        style={{
          display: "block",
          width: 550,
          padding: 30,
        }}
      >
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">The Tear Shed Project</NavbarBrand>

          <Nav className="mr-auto" navbar>
            <NavItem><NavLink href="/">Home </NavLink></NavItem>
            <NavItem><NavLink href="/gallery"> Gallery</NavLink></NavItem>
            <NavItem><NavLink href="/about"> About</NavLink></NavItem>
          </Nav>
        </Navbar>
      </div>
      {/* <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              The Tear Shed Project
            </a>
          </div>
          <div className="nav navbar-nav">
            <a href="/" style={{ padding: "1em" }}>
              Home
            </a>
            <a href="/gallery" style={{ padding: "1em" }}>
              Gallery
            </a>
            <a href="/shop" style={{ padding: "1em" }}>
              Shop
            </a>
          </div>
          <div className="pull-right">
            <div className="login-container">
              <a href="/about" id="about-link" style={{ padding: "1em" }}>
                About
              </a>
              <a href="/contact" id="contact-link" style={{ padding: "1em" }}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav> */}
    </>
  );
}

export default NavMenu;

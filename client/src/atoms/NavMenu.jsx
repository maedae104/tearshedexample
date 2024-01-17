import React from "react";
import { Navbar, Nav, NavbarBrand } from "reactstrap";
import { NavLink } from 'react-router-dom';

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
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/gallery" activeClassName="active">Gallery</NavLink>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </Nav>
        </Navbar>
      </div>
    </>
  );
}

export default NavMenu;

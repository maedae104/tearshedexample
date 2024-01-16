import React from "react";
import { Navbar, Nav, NavbarBrand } from "reactstrap";
import {Link } from 'react-router-dom';


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
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/about">About</Link>
          </Nav>
        </Navbar>
      </div>
    </>
  );
}

export default NavMenu;

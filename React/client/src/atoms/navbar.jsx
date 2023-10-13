import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-inverse">
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
    </nav>
  );
}

export default Navbar;

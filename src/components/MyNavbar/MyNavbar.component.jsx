import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { Outlet } from "react-router-dom";

import "./mynavbar.style.scss";

export default function MyNavbar() {
  // VARIABILI UTILI
  const [isScrolled, setIsScrolled] = useState(false);
  const profilePhoto =
    "https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg";

  // FUNZIONE CHE SI ATTIVA CON SCROLL
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className={isScrolled ? "topbar scrolled" : "topbar"}
      >
        <Container className="mycontainer">
          <Navbar.Brand href="#home" className="left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt="icon"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/series">Series</Nav.Link>
              <Nav.Link href="/movies">Movies</Nav.Link>
              <Nav.Link href="/new_and_popular">New and Popular</Nav.Link>
              <Nav.Link href="/my_list">My List</Nav.Link>
            </Nav>
            <Nav className="right">
              {/* SEARCHBOX */}
              <Nav.Link>
                <Search className="icon" />
              </Nav.Link>

              {/* NOTIFICATIONS */}
              <Nav.Link eventKey={2}>
                <Notifications className="icon" />
              </Nav.Link>

              {/* PROFILE PHOTO */}
              <Nav.Link eventKey={3}>
                <img src={profilePhoto} />
              </Nav.Link>

              <NavDropdown id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

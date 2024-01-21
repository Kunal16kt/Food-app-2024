import React, { useState }from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

import { NavLink } from "react-router-dom";



const CustomNavbar = ({ tabs = [], isLoggedIn, handleLogout }) => {
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab.toLowerCase());
  };
  return (
    <Navbar
      // bg=" body-tertiary"
      expand="lg"
      className="mb-4 bg-dark text-light"
    >
      <Container>
        <Navbar.Toggle aria-controls="navbarTogglerDemo02" />
        <Navbar.Collapse id="navbarTogglerDemo02">
          <Nav className="me-auto mb-2 mb-lg-0 d-flex" variant="underline">
            {tabs.map((tab, index) => (
              <Nav.Link
                key={index}
                href={`/${tab.toLowerCase()}`}
                className={`font-weight-bold text-light ${
                  activeTab === tab.toLowerCase() ? "active-tab" : ""
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </Nav.Link>
            ))}
          </Nav>
          <form className="d-flex" role="search">
            {isLoggedIn && (
              <NavLink to="/Cart">
                {/* <img src={cart} alt="cart" className="px-3" /> */}
                {/* <Button variant="outline-success">Cart</Button> */}
              </NavLink>
            )}
            <NavLink to={"/Login"}>
              <Button onClick={handleLogout} variant="outline-success">
                {isLoggedIn ? "Logout" : "Login/Signup"}
              </Button>
            </NavLink>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

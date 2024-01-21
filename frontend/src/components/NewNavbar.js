import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const NewNavbar = ({ handleTabClick }) => {
  const [activeTab, setActiveTab] = useState("");

  const tabs = ["All", "Foods", "Drinks", "Bestseller"];

  return (
    <Navbar expand="lg" className="mb-4 navbar-light bg-light" style={{ backgroundColor: "#e3f2fd" }}>
      <Container>
        
        <Navbar.Toggle aria-controls="navbarTogglerDemo02" />
        <Navbar.Collapse id="navbarTogglerDemo02">
          <Nav className="me-auto mb-2 mb-lg-0 mx-auto" variant="underline">
            {tabs.map((tab, index) => (
              <Nav.Link
                key={index}
                
                className={`font-weight-bold text-dark ${
                  activeTab === tab.toLowerCase() ? "active-tab" : ""
                }`}
                onClick={() => {
                  setActiveTab(tab.toLowerCase());
                  handleTabClick(tab.toLowerCase());
                }}
              >
                {tab}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NewNavbar;


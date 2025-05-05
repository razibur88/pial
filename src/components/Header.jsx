import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap"
import Logo from "../assets/logo.png"

const Header = () => {
  return (
    <Navbar expand="lg" className="menu_bg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#link">Service</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          <div className="">
            <button>Login</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
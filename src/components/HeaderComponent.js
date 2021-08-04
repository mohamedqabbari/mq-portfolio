import React, { Component, Fragment } from 'react';
import { Navbar, NavbarBrand, Container, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <Navbar color="dark" dark>
          <Container>
            <NavbarBrand href="/">
              <h5 className="fw-bold">Mohammed Qabbari's Portfolio</h5>
            </NavbarBrand>
            <Nav>
              <NavItem>
                <Link to="/" className="nav-link text-white">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/aboutme" className="nav-link text-white">
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contactme" className="nav-link text-white">
                  Contact
                </Link>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

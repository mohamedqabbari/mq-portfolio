import React, { Component, Fragment } from 'react';
import {
  Navbar,
  NavbarBrand,
  Container,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }
  render() {
    return (
      <Fragment>
        <Navbar color="dark" dark expand="md">
          <Container>
            <NavbarBrand href="/">
              <h5 className="fw-bold">Mohammed Qabbari's Portfolio</h5>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
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
            </Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

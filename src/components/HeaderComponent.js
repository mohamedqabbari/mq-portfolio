import React, { Component, Fragment } from 'react';
import { Navbar, NavbarBrand, Container } from 'reactstrap';

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <Navbar color="dark" dark>
          <Container>
            <NavbarBrand>Hello</NavbarBrand>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

import React from 'react';
import {Navbar, Nav ,Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="./home">
         <h2>Gan Store</h2>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Item href="./"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Item>
        </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;
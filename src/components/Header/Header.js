import React from 'react';
import {Navbar, Nav ,Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="./home">Gan Store</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="./"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;
import React  from 'react';
import {Navbar, Nav ,Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';


const Header = ({cart}) => {
    return (
        <Navbar bg="light" fixed="top" className='header'  variant="light">
        <Container>
        <Navbar.Brand href="./home">
         <h2 className='logo'>Gan Store</h2>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Item href="./"> <FontAwesomeIcon className='shop' icon={faShoppingCart} /> </Nav.Item>
          <div className='count-box'>
            <span className='countNumber'>{cart.length}</span>
          </div>
        </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;
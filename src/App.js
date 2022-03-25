import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import AllGans from './components/AllGans/AllGans';
import { Container } from 'react-bootstrap';


function App() {

  const [cart, setCart] = useState([]);
  console.log(cart)

  const handleAddToCart = (gan) => {
    const newCart = [...cart, gan];
    setCart(newCart);
  }

  return (
    <div>
      <Header cart={cart}></Header>
      <Container>
        {/* <div>
          {
            cart.map(item => <h2 key={item.id}>{item.name}</h2> )
          }
        </div> */}
      <AllGans handleAddToCart={handleAddToCart} ></AllGans>
      </Container>
    </div>
  );
}

export default App;

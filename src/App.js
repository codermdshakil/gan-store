import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import AllGans from './components/AllGans/AllGans';
import { Container } from 'react-bootstrap';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const addToCart = () => setCount(count + 1);

  return (
    <div>
      <Header count={count}></Header>
      <Container>
      <AllGans addToCart={addToCart}></AllGans>
      </Container>
    </div>
  );
}

export default App;

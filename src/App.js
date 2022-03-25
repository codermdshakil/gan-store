import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import AllGans from './components/AllGans/AllGans';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div>
      <Header></Header>
      <Container>
      <AllGans></AllGans>
      </Container>
    </div>
  );
}

export default App;

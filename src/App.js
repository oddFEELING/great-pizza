import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import { GlobalStyle } from './GlobalStyles';
import Hero from './Components/Hero';
import Products from './Components/Products';
import { productData } from './Components/Products/data';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favourite" data={productData} />
    </Router>
  );
}

export default App;

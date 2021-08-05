import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import { GlobalStyle } from './GlobalStyles';
import Hero from './Components/Hero';
import Products from './Components/Products';
import { productData, productDataTwo } from './Components/Products/data';
import Feature from './Components/Feature';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favourite" data={productData} />
      <Feature />

      <Products heading="Sweet treats for you" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;

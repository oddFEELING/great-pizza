import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import { GlobalStyle } from './GlobalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
    </Router>
  );
}

export default App;

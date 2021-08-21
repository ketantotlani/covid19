
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Data from './Components/Data';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Home/>
    </BrowserRouter>
  );
}

export default App;

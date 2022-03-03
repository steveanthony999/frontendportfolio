import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/homePage/HomePage';

import NavbarComponent from './components/Navbar/NavbarComponent';
import FooterComponent from './components/Footer/FooterComponent';

import './App.css';

function App() {
  return (
    <div className='App'>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;

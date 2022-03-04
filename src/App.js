import { Routes, Route } from 'react-router-dom';

import { MobileMenuProvider } from './MobileMenuContext';

import HomePage from './pages/homePage/HomePage';

import NavbarComponent from './components/Navbar/NavbarComponent';
import FooterComponent from './components/Footer/FooterComponent';
import MobileMenuComponent from './components/MobileMenu/MobileMenuComponent';

import './App.css';

function App() {
  return (
    <MobileMenuProvider>
      <div className='App'>
        <NavbarComponent />
        <MobileMenuComponent />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
        <FooterComponent />
      </div>
    </MobileMenuProvider>
  );
}

export default App;

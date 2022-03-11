import { Routes, Route } from 'react-router-dom';

import { MobileMenuProvider } from './MobileMenuContext';

import HomePage from './pages/homePage/HomePage';
import ResumePage from './pages/resumePage/ResumePage';

import NavbarComponent from './components/Navbar/NavbarComponent';
import FooterComponent from './components/Footer/FooterComponent';
import MobileMenuComponent from './components/MobileMenu/MobileMenuComponent';

import './App.css';

function App() {
  return (
    <MobileMenuProvider>
      <div className='App'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <HomePage />
                <NavbarComponent />
                <MobileMenuComponent />
                <FooterComponent />
              </>
            }
          />
          <Route path='/resume' element={<ResumePage />} />
        </Routes>
      </div>
    </MobileMenuProvider>
  );
}

export default App;

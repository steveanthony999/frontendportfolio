import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { useMobileMenu, useMobileMenuUpdate } from '../../MobileMenuContext';

import './NavbarComponent.css';

const NavbarComponent = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const menuOpen = useMobileMenu();
  const toggleMenu = useMobileMenuUpdate();

  return (
    <nav className='NavbarComponent'>
      <div className='NavbarComponent-left'>
        <Link
          to='header'
          activeClass='active'
          spy={true}
          smooth='easeInOutQuart'
          //   offset={-70}
          duration={750}
        >
          SW
        </Link>
      </div>
      {isMobile ? (
        <div onClick={toggleMenu}>
          {menuOpen ? (
            <FontAwesomeIcon icon={faTimes} className='Navbar-x' />
          ) : (
            <FontAwesomeIcon icon={faBars} className='Navbar-hamburger' />
          )}
        </div>
      ) : (
        <div className='NavbarComponent-right'>
          <Link
            className='nav-link'
            to='about'
            activeClass='active'
            spy={true}
            smooth='easeInOutQuart'
            //   offset={-70}
            duration={750}
          >
            ABOUT
          </Link>
          <Link
            className='nav-link'
            to='projects'
            activeClass='active'
            spy={true}
            smooth='easeInOutQuart'
            //   offset={-70}
            duration={750}
          >
            PROJECTS
          </Link>
          <Link
            className='nav-link'
            to='contact'
            activeClass='active'
            spy={true}
            smooth='easeInOutQuart'
            //   offset={-70}
            duration={750}
          >
            CONTACT
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;

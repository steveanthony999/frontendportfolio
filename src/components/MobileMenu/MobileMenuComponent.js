import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import {
  faCodepen,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useMobileMenu, useMobileMenuUpdate } from '../../MobileMenuContext';

import './MobileMenuComponent.css';

const MobileMenuComponent = () => {
  const menuOpen = useMobileMenu();
  const toggleMenu = useMobileMenuUpdate();

  return (
    <>
      {menuOpen ? (
        <motion.div
          className='MobileMenuComponent'
          initial={{ x: '-110vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          exit={{
            x: '-110vw',
            transition: { duration: 0.5 },
          }}
        >
          <div className='MobileMenuComponent-container'>
            <Link
              className='nav-link'
              to='about'
              activeClass='active'
              spy={true}
              smooth='easeInOutQuart'
              //   offset={-70}
              duration={750}
              onClick={toggleMenu}
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
              onClick={toggleMenu}
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
              onClick={toggleMenu}
            >
              CONTACT
            </Link>
            <div className='socials'>
              <a
                href='https://twitter.com/putersteve'
                target='_blank'
                rel='noreferrer'
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href='https://www.linkedin.com/in/steven-woodward-7a422713b/'
                target='_blank'
                rel='noreferrer'
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href='https://github.com/steveanthony999'
                target='_blank'
                rel='noreferrer'
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href='https://codepen.io/steveanthony999'
                target='_blank'
                rel='noreferrer'
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faCodepen} />
              </a>
            </div>
          </div>
        </motion.div>
      ) : null}
    </>
  );
};

export default MobileMenuComponent;

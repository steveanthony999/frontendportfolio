import { Link } from 'react-scroll';

import Avatar from '../../../assets/avatar.png';

import './HeaderSection.css';

const HeaderSection = () => {
  return (
    <header className='HeaderSection container' id='header'>
      <div className='HeaderSection-container'>
        <div className='HeaderSection-container-left'>
          <img src={Avatar} alt='steve' />
        </div>
        <div className='HeaderSection-container-right'>
          <p>Hey there, my name's</p>
          <h2>Steve</h2>
          <p>
            I'm a frontend engineer specializing in bringing ambitious designs
            to life with code while focusing on creating a unique user
            experience.
          </p>
          <Link
            to='projects'
            activeClass='active'
            spy={true}
            smooth='easeInOutQuart'
            duration={750}
            className='button'
          >
            See Projects
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;

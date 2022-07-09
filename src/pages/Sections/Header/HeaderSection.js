import { Link } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';

import Avatar from '../../../assets/avatar.png';

import './HeaderSection.css';

const HeaderSection = () => {
  return (
    <header className='HeaderSection container' id='header'>
      <Fade triggerOnce={true}>
        <div className='HeaderSection-container'>
          <div className='HeaderSection-container-left'>
            <img src={Avatar} alt='steve' />
          </div>
          <div className='HeaderSection-container-right'>
            <p>Hey there, my name's</p>
            <h2>Steve</h2>
            <p>
              I'm a full-stack engineer specializing in bringing ambitious designs
              to life with code while focusing on creating a unique user
              experience.
            </p>
            <div className='button-container'>
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
              <a
                href='/Resume_Steven_Woodward_2022.pdf'
                target='_blank'
                className='button-2'
              >
                Resumé
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </header>
  );
};

export default HeaderSection;

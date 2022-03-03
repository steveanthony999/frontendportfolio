import { Link } from 'react-scroll';

import './HeaderSection.css';

const HeaderSection = () => {
  return (
    <header className='HeaderSection container' id='header'>
      <div className='HeaderSection-container'>
        <p>Hey there, I'm</p>
        <h2>Steve</h2>
        <p>
          I'm a frontend engineer specializing in bringing ambitious designs to
          life while focusing on creating a unique user experience.
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
    </header>
  );
};

export default HeaderSection;

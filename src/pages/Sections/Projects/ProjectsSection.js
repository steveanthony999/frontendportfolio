import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

import coderMerchImage from '../../../assets/codermerch.png';
import vlhtImage from '../../../assets/vlht.png';
import feMentorImage from '../../../assets/fe.png';

import './ProjectsSection.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectsSection = () => {
  return (
    <section className='ProjectsSection' id='projects'>
      <div className='ProjectsSection-container'>
        <div className='ProjectsSection-container-top'>
          <h2>
            <div />
            Projects
          </h2>
        </div>
        <div className='ProjectsSection-container-middle'>
          {/* PROJECT 1 */}
          <div className='project-container container'>
            <div className='project-container-main-left'>
              <img src={coderMerchImage} alt='codermerch' />
            </div>
            <div className='project-container-main-right'>
              <div className='project-container-main-right-top'>
                <p className='title'>coderMerch</p>
              </div>
              <div className='project-container-main-right-middle'>
                <p className='description'>
                  coderMerch is a 2000's hacker-themed e-commerce site that
                  features my software-inspired streetwear designs as well as a
                  #techtwitter dev-of-the-month shout-out.
                </p>
              </div>
              <div className='project-container-main-right-bottom'>
                <div className='tech-container'>
                  <ul>
                    <li>React</li>
                    <li>Commerce JS</li>
                    <li>Stripe</li>
                    <li>Material UI</li>
                    <li>Framer Motion</li>
                  </ul>
                </div>
                <div className='view-container'>
                  <a
                    className='button'
                    href='https://github.com/steveanthony999/codermerch'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    <p>Source</p>
                  </a>
                  <a
                    className='button'
                    href='https://codermerch.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FontAwesomeIcon icon={faDesktop} />
                    <p>Live</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* PROJECT 2 */}
          <div className='project-container container'>
            <div className='project-container-secondary-left'>
              <div className='project-container-secondary-left-top'>
                <p className='title'>Vegas Luxury Home Tours</p>
              </div>
              <div className='project-container-secondary-left-middle'>
                <p className='description'>
                  Vegas Luxury Home Tours is a client site that implements a
                  blog and a booking system. The client and I collaborated on
                  the design and functionality and has increased her revenue by
                  paying less in fees to other sites that hosted her services.
                </p>
              </div>
              <div className='project-container-secondary-left-bottom'>
                <div className='tech-container'>
                  <ul>
                    <li>React</li>
                    <li>Sanity</li>
                    <li>Calendly</li>
                    <li>Email JS</li>
                    <li>Framer Motion</li>
                  </ul>
                </div>
                <div className='view-container'>
                  <a
                    className='button'
                    href='https://github.com/steveanthony999/vegasluxuryhometours'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    <p>Source</p>
                  </a>
                  <a
                    className='button'
                    href='https://lasvegasluxuryhometours.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FontAwesomeIcon icon={faDesktop} />
                    <p>Live</p>
                  </a>
                </div>
              </div>
            </div>
            <div className='project-container-secondary-right'>
              <img src={vlhtImage} alt='vlht' />
            </div>
          </div>
          {/* PROJECT 3 */}
          <div className='project-container container'>
            <div className='project-container-main-left'>
              <img src={feMentorImage} alt='frontendmentor' />
            </div>
            <div className='project-container-main-right'>
              <div className='project-container-main-right-top'>
                <p className='title'>Galeria Slideshow</p>
              </div>
              <div className='project-container-main-right-middle'>
                <p className='description'>
                  Galeria Slideshow is a Frontend Mentor Pro challenge that
                  focuses on the masonry layout and slideshow.
                </p>
              </div>
              <div className='project-container-main-right-bottom'>
                <div className='tech-container'>
                  <ul>
                    <li>React</li>
                    <li>Styled Components</li>
                  </ul>
                </div>
                <div className='view-container'>
                  <a
                    className='button'
                    href='https://github.com/steveanthony999/galeria_slideshow'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    <p>Source</p>
                  </a>
                  <a
                    className='button'
                    href='https://friendly-lamarr-116e69.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FontAwesomeIcon icon={faDesktop} />
                    <p>Live</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBootstrap,
  faCss3,
  faFigma,
  faGitAlt,
  faGithub,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faSass,
  faLinux,
} from '@fortawesome/free-brands-svg-icons';
import { Fade } from 'react-awesome-reveal';

import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className='AboutSection' id='about'>
      <div className='AboutSection-container'>
        <div className='AboutSection-container-top'>
          <Fade triggerOnce={true}>
            <h2>
              <div />
              About
            </h2>
          </Fade>
        </div>
        <Fade delay={250} triggerOnce={true}>
          <div className='AboutSection-container-middle'>
            <div className='container'>
              <p>
                I’m Steve, a full-stack engineer living in Las Vegas, and I love
                all things creative. From movies and music, to painting and
                code, I am enamored by the process of putting things together to
                form a finished product. I consider myself a life-long learner
                and look forward to bringing your visions to life!
              </p>
            </div>
            <h3>Tools</h3>
            <div className='AboutSection-tools container'>
              <FontAwesomeIcon icon={faHtml5} size='2x' />
              <FontAwesomeIcon icon={faCss3} size='2x' />
              <FontAwesomeIcon icon={faSass} size='2x' />
              <FontAwesomeIcon icon={faBootstrap} size='2x' />
              <FontAwesomeIcon icon={faJs} size='2x' />
              <FontAwesomeIcon icon={faNodeJs} size='2x' />
              <FontAwesomeIcon icon={faReact} size='2x' />
              <FontAwesomeIcon icon={faGitAlt} size='2x' />
              <FontAwesomeIcon icon={faGithub} size='2x' />
              <FontAwesomeIcon icon={faFigma} size='2x' />
              <FontAwesomeIcon icon={faLinux} size='2x' />
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default AboutSection;

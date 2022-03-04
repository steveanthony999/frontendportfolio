import coderMerchImage from '../../../assets/codermerch.png';
import vlhtImage from '../../../assets/vlht.png';
import feMentorImage from '../../../assets/fe.png';

import './ProjectsSection.css';

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
          <div className='project-container'>
            <div className='project-container-main-left'>
              <img src={coderMerchImage} alt='codermerch' />
            </div>
            <div className='project-container-main-right'>
              <div className='project-container-main-right-top'></div>
              <div className='project-container-main-right-middle'></div>
              <div className='project-container-main-right-bottom'></div>
            </div>
          </div>
          {/* PROJECT 2 */}
          <div className='project-container'>
            <div className='project-container-secondary-left'>
              <div className='project-container-secondary-right-top'></div>
              <div className='project-container-secondary-right-middle'></div>
              <div className='project-container-secondary-right-bottom'></div>
            </div>
            <div className='project-container-secondary-right'>
              <img src={vlhtImage} alt='vlht' />
            </div>
          </div>
          {/* PROJECT 3 */}
          <div className='project-container'>
            <div className='project-container-main-left'>
              <img src={feMentorImage} alt='frontendmentor' />
            </div>
            <div className='project-container-main-right'>
              <div className='project-container-main-right-top'></div>
              <div className='project-container-main-right-middle'></div>
              <div className='project-container-main-right-bottom'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

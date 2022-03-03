import AboutSection from '../Sections/About/AboutSection';
import ContactSection from '../Sections/Contact/ContactSection';
import HeaderSection from '../Sections/Header/HeaderSection';
import ProjectsSection from '../Sections/Projects/ProjectsSection';

import './HomePage.css';

const HomePage = () => {
  return (
    <main className='HomePage'>
      <HeaderSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;

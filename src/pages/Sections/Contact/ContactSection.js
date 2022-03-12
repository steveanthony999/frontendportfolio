import emailjs from '@emailjs/browser';
import {
  faCodepen,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fade } from 'react-awesome-reveal';

import './ContactSection.css';

const ContactSection = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_m8dbnfv',
        'template_7yk492b',
        e.target,
        'KvONQKgaybum42un2'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className='ContactSection' id='contact'>
      <div className='ContactSection-container'>
        <div className='ContactSection-container-top'>
          <Fade triggerOnce={true} delay={250}>
            <h2>
              <div />
              Get in Touch
            </h2>
          </Fade>
        </div>
        <div className='ContactSection-inner-container'>
          <div className='ContactSection-left'>
            <h3>Send me an email</h3>
            <form onSubmit={sendEmail}>
              <input type='text' name='name' required placeholder='Name' />
              <input type='email' name='email' required placeholder='Email' />
              <input type='text' name='subject' placeholder='Subject' />
              <textarea
                name='message'
                required
                placeholder='Message'
              ></textarea>
              <button className='button'>SEND</button>
            </form>
          </div>
          <div className='ContactSection-center'>
            <div />
            <p>or</p>
            <div />
          </div>
          <div className='ContactSection-right'>
            <h3>Follow my socials</h3>
            <div className='ContactSection-right-socials'>
              <a
                href='https://twitter.com/putersteve'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faTwitter} size='2x' />
              </a>
              <a
                href='https://www.linkedin.com/in/steven-woodward-7a422713b/'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faLinkedin} size='2x' />
              </a>
              <a
                href='https://github.com/steveanthony999'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faGithub} size='2x' />
              </a>
              <a
                href='https://codepen.io/steveanthony999'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faCodepen} size='2x' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

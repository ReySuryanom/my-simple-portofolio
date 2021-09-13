import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const title_lists = [
  'about',
  'experience',
  'education',
  'skills',
  'interests',
  'awards',
];

const contacts = [
  {
    icon: <FontAwesomeIcon icon={faEnvelope} size='4x' />,
    href: 'mailto:raihansuryanom@gmail.com',
  },
  {
    icon: <FontAwesomeIcon icon={faPhone} size='3x' />,
    href: 'https://wa.me/6281292740019',
  },
  {
    icon: <FontAwesomeIcon icon={faGithub} size='3x' />,
    href: 'https://github.com/ReySuryanom',
  },
  {
    icon: <FontAwesomeIcon icon={faLinkedin} size='3x' />,
    href: 'https://www.linkedin.com/in/mraihans/',
  },
];

export { title_lists, contacts };

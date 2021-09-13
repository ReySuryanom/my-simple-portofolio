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

const experience_lists = [
  {
    title: 'Frontend Web Developer',
    company: 'Rumah Sakit Gigi dan Mulut YARSI',
    type: 'Internship',
    period: 'Apr 2021 – Jul 2021',
    location: 'Central Jakarta, Jakarta, Indonesia',
  },
  {
    title: 'Office Administrator',
    company: 'PT. Serasi Autoraya',
    type: 'Internship',
    period: 'Nov 2016 – Dec 2016',
    location: 'North Jakarta, Jakarta, Indonesia',
  },
  {
    title: 'Customer Service Administrator',
    company: 'KPP Pratama Jakarta Sunter',
    type: 'Internship',
    period: 'Jun 2016 – Sep 2016',
    location: 'North Jakarta, Jakarta, Indonesia',
  },
];

const education_lists = [
  {
    school: 'Universitas YARSI',
    degree: "Bachelor's degree",
    study: 'Information Technology',
    period: '2018 – 2022',
  },
  {
    school: 'SMK Negeri 36 Jakarta',
    degree: null,
    study: 'Multimedia',
    period: '2015 – 2018',
  },
];

const skill_lists = [
  'React',
  'Java',
  'Python',
  'TypeScript',
  'PHP',
  'JavaScript',
  'CSS3',
  'HTML5',
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

const awards = [
  {
    name: 'Become an Expert Front-End Web Developer',
    organization: 'Dicoding',
  },
  {
    name: 'Won 2nd place in the Web App category about Health',
    organization: 'INVFEST 5.0',
  },
  {
    name: 'Become the main mentor at the TUNTAS event',
    organization: 'YARSI University',
  },
];

export {
  title_lists,
  contacts,
  experience_lists,
  education_lists,
  skill_lists,
  awards,
};

import { contacts } from '../helpers';

function About() {
  return (
    <>
      <h1 className='font-black tracking-wider uppercase text-7xl '>
        M. <span className='text-primary'>Raihan</span> Suryanom
      </h1>
      <h2 className='text-2xl font-medium text-primary'>
        Frontend Web Developer
      </h2>
      <p className='my-10 text-justify'>
        I am an IT student at YARSI University. I am passionate about website
        development and am currently in the project of creating a portfolio with
        a frameworks/libraries from javascript. I want to explore, learn and
        experience more. Learning to the new things in order to expand my
        knowledge and experiences in a productive way is one of my greatest
        goals as a career.
      </p>
      <div className='flex items-center space-x-8'>
        {contacts.map((item, index) => {
          const { icon, href } = item;

          return (
            <a
              key={index}
              href={href}
              target='_blank'
              rel='noreferrer'
              className='hover:text-primary hover:font-bold'
            >
              <span className='mr-2'>{icon}</span>
            </a>
          );
        })}
      </div>
    </>
  );
}

export default About;

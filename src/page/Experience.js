import { experience_lists } from '../helpers';

function Experience() {
  return (
    <>
      <h2 className='header'>Experience</h2>
      {experience_lists.map((list, index) => {
        const { company, location, period, title, type } = list;
        return (
          <article className='my-7' key={index}>
            <h3 className='text-3xl font-semibold text-primary'>{title}</h3>
            <p className='text-lg font-semibold'>{`${company} | ${type}`}</p>
            <small className='block text-base'>{period}</small>
            <small className='block text-base'>{location}</small>
          </article>
        );
      })}
    </>
  );
}

export default Experience;

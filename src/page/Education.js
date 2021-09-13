import { education_lists } from '../helpers';

function Education() {
  return (
    <>
      <h2 className='header'>Education</h2>
      {education_lists.map((list, index) => {
        const { degree, period, school, study } = list;
        const title = degree ? ` | ${degree}` : '';

        return (
          <article className='my-7' key={index}>
            <h3 className='text-3xl font-semibold text-primary'>{school}</h3>
            <p className='text-lg font-semibold'>{`${study} ${title}`}</p>
            <small className='block text-base'>{period}</small>
          </article>
        );
      })}
    </>
  );
}

export default Education;

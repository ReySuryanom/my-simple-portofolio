import { awards } from '../helpers';

function Awards() {
  return (
    <>
      <h2 className='header'>Awards & Certifications</h2>
      {awards.map(({ name, organization }, index) => {
        return (
          <article className='my-7'>
            <h3 className='text-2xl font-medium text-primary' key={index}>
              {name}
            </h3>
            <p className='text-xl'>{organization}</p>
          </article>
        );
      })}
    </>
  );
}

export default Awards;

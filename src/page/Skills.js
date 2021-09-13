import { skill_lists } from '../helpers';

function Skills() {
  return (
    <>
      <h3 className='mb-10 header'>Skills</h3>
      <h4 className='mb-5 text-3xl'>Programming Languages & Tools</h4>
      <ul className='grid grid-cols-2 list-disc list-inside'>
        {skill_lists.map((skill, index) => {
          return (
            <li className='text-2xl' key={index}>
              {skill}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Skills;

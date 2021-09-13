import avatar from '../assets/profile.jpg';
import { title_lists } from '../helpers';

function Sidebar() {
  return (
    <aside className='flex flex-col items-center justify-center w-1/5 h-screen bg-primary'>
      <img
        className='inline-block object-cover object-top w-32 h-32 mb-5 border-solid rounded-full avatar'
        src={avatar}
        alt='My avatar'
      />
      <ul className='space-y-1 text-2xl font-extrabold text-center uppercase'>
        {title_lists.map((title, index) => (
          <li key={index}>
            <a
              className='cursor-pointer text-opacity-70 text-primary-dark hover:text-opacity-100 focus:text-opacity-100'
              href={`#${title}`}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;

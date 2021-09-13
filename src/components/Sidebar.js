import { createRef } from 'react';
import avatar from '../assets/profile.jpg';
import ScrollSpy from 'react-scrollspy-navigation';
import { title_lists } from '../helpers';
import FancyButton from './Button';

function Sidebar() {
  return (
    <aside className='fixed flex flex-col items-center justify-center w-1/5 h-screen bg-primary'>
      <img
        className='inline-block object-cover object-top w-32 h-32 mb-5 border-solid rounded-full avatar'
        src={avatar}
        alt='My avatar'
      />
      <nav className='flex flex-col space-y-1 text-2xl font-extrabold text-center uppercase'>
        <ScrollSpy>
          {title_lists.map((text, index) => (
            <FancyButton
              key={index}
              className='cursor-pointer text-opacity-70 text-primary-dark hover:text-opacity-100 active:text-opacity-100'
              href={`#${text}`}
              role='button'
              ref={createRef()}
              text={text}
            />
          ))}
        </ScrollSpy>
      </nav>
    </aside>
  );
}

export default Sidebar;

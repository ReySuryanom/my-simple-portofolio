import * as Page from '../page';
import Content from './Content';

function Home() {
  return (
    <main className='inline-block w-4/5 ml-auto bg-primary-dark'>
      <Content className='py-48' id='about'>
        <Page.About />
      </Content>
      <Content className='py-32' id='experience'>
        <Page.Experience />
      </Content>
      <Content className='py-48' id='education'>
        <Page.Education />
      </Content>
      <Content className='py-52' id='skills'>
        <Page.Skills />
      </Content>
      <Content className='py-56' id='interests'>
        <Page.Interests />
      </Content>
      <Content className='py-48' id='awards'>
        <Page.Awards />
      </Content>
    </main>
  );
}

export default Home;

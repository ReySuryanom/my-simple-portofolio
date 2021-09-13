import * as Page from './index';

function Home() {
  return (
    <main className='w-4/5 bg-primary-dark'>
      <Page.Content className='mt-44' id='about'>
        <Page.About />
      </Page.Content>
      <Page.Content>
        <Page.Experience />
      </Page.Content>
    </main>
  );
}

export default Home;

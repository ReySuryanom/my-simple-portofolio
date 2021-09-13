import Home from './components/Home';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='flex w-100'>
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;

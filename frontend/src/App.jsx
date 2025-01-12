
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import './index.css';

const App = () => {
  return (
    <div className='bg-gray-100 m-0 p-0 w-full min-h-screen'>
      <div className='m-0 p-0 w-full'>
        <Header />
        <ToastContainer />
        <div className='w-full m-0 p-0'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default App;

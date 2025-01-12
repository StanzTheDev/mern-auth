import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { Menu, X } from 'lucide-react';
import lumin from '../lumin65.png';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className="bg-white">
      <nav className="relative z-10">
        <div className="max-w-7xl mx-auto px-2">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <LinkContainer to="/">
              <img className='w-[130px]' src={lumin} />
                </LinkContainer>
            </div>
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>


            <div className="hidden md:flex md:items-center md:space-x-4">
              {userInfo ? (
                <>
                  <span className="text-gray-700">{userInfo.name}</span>
                  <LinkContainer to="/tasks">
                    <span className="cursor-pointer text-gray-600 hover:text-gray-900">Tasks</span>
                  </LinkContainer>
                  <button
                    onClick={logoutHandler}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <button className="px-4 py-2 text-gray-800 font-medium bg-gradient-to-r from-gray-200 to-gray-300 rounded-full shadow-md hover:shadow-lg hover:from-gray-300 hover:to-gray-400 transition-all duration-300">
                      Sign In
                    </button>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <button className="px-4 py-2 text-white font-medium bg-gradient-to-r from-[#cea0e2] to-[#969ae3] rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                      Sign Up
                    </button>
                  </LinkContainer>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40 md:hidden ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-xl transform transition-transform z-50 md:hidden ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <span className="text-xl font-semibold">Menu</span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="py-4">
          {userInfo ? (
            <div className="space-y-2">
              <div className="px-4 py-2 text-sm text-gray-700">
                Signed in as <span className="font-medium">{userInfo.name}</span>
              </div>
              <LinkContainer to="/tasks">
                <div className="block px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
                  Profile
                </div>
              </LinkContainer>
              <div
                onClick={logoutHandler}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
              >
                Logout
              </div>
            </div>
          ) : (
            <div className="space-y-4 px-4">
              <LinkContainer to="/login">
                <button className="w-full px-4 py-2 text-gray-800 font-medium bg-gradient-to-r from-gray-200 to-gray-300 rounded-full shadow-md hover:shadow-lg hover:from-gray-300 hover:to-gray-400 transition-all duration-300">
                  Sign In
                </button>
              </LinkContainer>
              <LinkContainer to="/register">
                <button className="w-full px-4 py-2 text-white font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
                  Sign Up
                </button>
              </LinkContainer>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
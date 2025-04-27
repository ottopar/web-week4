import {Link, Outlet} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';
import {useEffect} from 'react';

const Layout = () => {
  const {user, handleAutoLogin} = useUserContext();
  useEffect(() => {
    handleAutoLogin();
  }, []);

  return (
    <div>
      <header>
        <nav>
          <ul className="flex justify-end overflow-hidden bg-neutral-800">
            <li>
              <Link
                className="block p-4 text-center text-white hover:bg-neutral-900"
                to="/"
              >
                Home
              </Link>
            </li>

            {user ? (
              <>
                <li>
                  <Link
                    className="block p-4 text-center text-white hover:bg-neutral-900"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="block p-4 text-center text-white hover:bg-neutral-900"
                    to="/upload"
                  >
                    Upload
                  </Link>
                </li>
                <li>
                  <Link
                    className="block p-4 text-center text-white hover:bg-neutral-900"
                    to="/logout"
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link
                  className="block p-4 text-center text-white hover:bg-neutral-900"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

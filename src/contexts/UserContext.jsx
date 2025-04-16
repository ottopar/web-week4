// UserContext.jsx
import {createContext, useState} from 'react';
import {useAuthentication, useUser} from '../hooks/apiHooks';
import {useNavigate, useLocation} from 'react-router';

const UserContext = createContext(null);

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const {postLogin} = useAuthentication();
  const {getUserByToken} = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  // login, logout and autologin functions are here instead of components
  const handleLogin = async (credentials) => {
    try {
      // TODO: post login credentials to API
      const loginResponse = await postLogin(credentials);

      // TODO: set token to local storage
      localStorage.setItem('token', loginResponse.token);
      // TODO: set user to state
      setUser(loginResponse.user);
      // TODO: navigate to home
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleLogout = () => {
    try {
      // TODO: remove token from local storage
      localStorage.removeItem('token');
      // TODO: set user to null
      setUser(null);
      // TODO: navigate to home
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  // handleAutoLogin is used when the app is loaded to check if there is a valid token in local storage
  const handleAutoLogin = async () => {
    try {
      // TODO: get token from local storage
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }
      // TODO: if token exists, get user data from API
      const userResponse = await getUserByToken(token);
      // TODO: set user to state
      setUser(userResponse.user);
      // TODO: navigate to home
      console.log('location', location);
      navigate(location.pathname);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <UserContext.Provider
      value={{user, handleLogin, handleLogout, handleAutoLogin}}
    >
      {children}
    </UserContext.Provider>
  );
};
export {UserProvider, UserContext};

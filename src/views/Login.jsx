// imports
import {useState} from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => {
  // Use conditional rendering to show either LoginForm or RegisterForm in Login.jsx. Add a button to switch between the two forms.

  const [showLogin, setShowLogin] = useState(true);
  const toggleForm = () => {
    setShowLogin(!showLogin);
  };
  return (
    <>
      <h1>{showLogin ? 'Login' : 'Register'}</h1>
      <button onClick={toggleForm}>
        {showLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
      {showLogin ? <LoginForm /> : <RegisterForm />}
    </>
  );
};

export default Login;

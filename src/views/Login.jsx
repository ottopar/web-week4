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
    <div className="flex flex-col items-center justify-center p-6">
      <button
        onClick={toggleForm}
        className="mb-6 rounded bg-stone-700 px-4 py-2 text-white hover:bg-stone-900"
      >
        {showLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
      <div className="w-full max-w-md">
        {showLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};

export default Login;

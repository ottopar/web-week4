import useForm from '../hooks/formHooks';
import {useAuthentication} from '../hooks/apiHooks';
import {useNavigate} from 'react-router';

// LoginForm.jsx
const LoginForm = () => {
  const {postLogin} = useAuthentication();
  const navigate = useNavigate();
  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = async () => {
    console.log(inputs);
    await postLogin(inputs);
    navigate('/');
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doLogin,
    initValues,
  );

  console.log('LoginForm inputs:', inputs);

  return (
    <>
      <h1>Login</h1>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={(event) => {
              handleInputChange(event);
            }}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={(event) => {
              handleInputChange(event);
            }}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;

import useForm from '../hooks/formHooks';
import {useUserContext} from '../hooks/contextHooks';
import TextInput from './ui/TextInput';

// LoginForm.jsx
const LoginForm = () => {
  const {handleLogin} = useUserContext();

  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = async () => {
    try {
      await handleLogin(inputs);
    } catch (e) {
      console.log(e.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doLogin,
    initValues,
  );

  console.log('LoginForm inputs:', inputs);

  return (
    <>
      <h1 className="mb-6 text-center text-3xl font-bold">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center"
      >
        <div className="flex w-4/5 flex-col">
          <TextInput
            label="loginuser"
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div className="mt-4 flex w-4/5 flex-col">
          <TextInput
            label="loginpassword"
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button
          type="submit"
          className="mt-6 rounded bg-neutral-700 px-4 py-2 text-white hover:bg-neutral-900"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;

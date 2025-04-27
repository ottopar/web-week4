import {useUser} from '../hooks/apiHooks';
import useForm from '../hooks/formHooks';
import TextInput from './ui/TextInput';

const RegisterForm = () => {
  const {postUser} = useUser();
  const doRegister = async () => {
    console.log('User registered');
    await postUser(inputs);
  };
  const initValues = {
    username: '',
    password: '',
    email: '',
  };
  const {inputs, handleInputChange, handleSubmit} = useForm(
    doRegister,
    initValues,
  );
  console.log('RegisterForm inputs:', inputs);
  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-4 text-2xl font-bold">Register</h2>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-md flex-col items-center gap-4"
      >
        <TextInput
          label="Username"
          id="registeruser"
          name="username"
          type="text"
          onChange={handleInputChange}
          value={inputs.username}
          autoComplete="username"
        />
        <TextInput
          label="Password"
          id="registerpassword"
          name="password"
          type="password"
          onChange={handleInputChange}
          value={inputs.password}
          autoComplete="current-password"
        />
        <TextInput
          label="Email"
          id="registeremail"
          name="email"
          type="email"
          onChange={handleInputChange}
          value={inputs.email}
          autoComplete="email"
        />
        <button
          type="submit"
          className="mt-4 w-full rounded bg-stone-700 px-4 py-2 font-semibold text-white hover:bg-stone-900"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;

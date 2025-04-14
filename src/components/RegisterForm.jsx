import {useUser} from '../hooks/apiHooks';
import useForm from '../hooks/formHooks';

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
    <div className="register-form">
      <h2>Register</h2>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div>
          <label htmlFor="registeruser">Username</label>
          <input
            name="username"
            type="text"
            id="registeruser"
            onChange={(event) => {
              handleInputChange(event);
            }}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="registerpassword">Password</label>
          <input
            name="password"
            type="password"
            id="registerpassword"
            onChange={(event) => {
              handleInputChange(event);
            }}
            autoComplete="current-password"
          />
        </div>
        <div>
          <label htmlFor="registeremail">Email</label>
          <input
            name="email"
            type="email"
            id="registeremail"
            onChange={(event) => {
              handleInputChange(event);
            }}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;

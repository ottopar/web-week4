import {useUserContext} from '../hooks/contextHooks';

const Logout = () => {
  const {handleLogout} = useUserContext();
  const logout = () => {
    try {
      // Call the handleLogout function from the context to log out the user
      handleLogout();
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;

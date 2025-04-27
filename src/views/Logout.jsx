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
    <div className="flex justify-center">
      <button
        onClick={logout}
        className="rounded-md bg-red-600 px-6 py-2 text-white transition duration-200 hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;

import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useUser} from '../hooks/apiHooks';

const Profile = () => {
  const [user, setUser] = useState(null);

  const {getUserByToken} = useUser();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchUser = async () => {
      const userData = await getUserByToken(token);
      setUser(userData.user);
    };
    fetchUser();
  }, []);

  console.log('User:', user);
  return (
    <>
      {user && (
        <>
          <h2 className="mb-4 text-center text-2xl font-bold text-blue-800">
            Profile
          </h2>
          <p className="text-lg font-semibold text-blue-800">Username:</p>
          <p className="mb-2 text-lg text-white">{user.username}</p>
          <p className="text-lg font-semibold text-blue-800">Email:</p>
          <p className="mb-2 text-lg text-white">{user.email}</p>
          <p className="text-lg font-semibold text-blue-800">Created:</p>
          <p className="text-lg text-white">{user.created_at}</p>
        </>
      )}
    </>
  );
};

Profile.propTypes = {};

export default Profile;

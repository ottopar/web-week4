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
          <h2>Profile</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Created: {user.created_at}</p>
        </>
      )}
    </>
  );
};

Profile.propTypes = {};

export default Profile;

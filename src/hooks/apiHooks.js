// Imports here
import {useEffect, useState} from 'react';
import {fetchData} from '../components/fetchData';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const mediaUrl = import.meta.env.VITE_MEDIA_API + '/media/';
  const authUrl = import.meta.env.VITE_AUTH_API + '/users/';

  const getMedia = async () => {
    try {
      const mediaJson = await fetchData(mediaUrl);

      const mediaWithUsers = await Promise.all(
        mediaJson.map(async (item) => {
          const userData = await fetchData(authUrl + item.user_id);
          return {...item, username: userData.username};
        }),
      );
      setMediaArray(mediaWithUsers);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);

  console.log('Media array:', mediaArray);
  return {mediaArray};
};

export {useMedia};

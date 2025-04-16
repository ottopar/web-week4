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

  const postMedia = async (file, inputs, token) => {
    const data = {
      ...inputs,
      ...file,
    };

    const fetchOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer: ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    return await fetchData(`${mediaUrl}`, fetchOptions);
  };

  return {mediaArray, postMedia};
};

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    const loginResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/auth/login',
      fetchOptions,
    );
    console.log('Login result:', loginResult);
    if (loginResult.token) {
      localStorage.setItem('token', loginResult.token);
    } else {
      console.error('Login failed:', loginResult);
    }

    return loginResult;
  };

  return {postLogin};
};

const useUser = () => {
  const getUserByToken = async () => {
    const token = localStorage.getItem('token');
    const fetchOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer: ${token}`,
      },
    };
    const userData = await fetchData(
      import.meta.env.VITE_AUTH_API + '/users/token',
      fetchOptions,
    );
    return userData;
  };

  const postUser = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    const userResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/users/',
      fetchOptions,
    );
    console.log('User result:', userResult);
    return userResult;
  };
  return {getUserByToken, postUser};
};

const useFile = () => {
  const postFile = async (file, token) => {
    const formData = new FormData();
    formData.append('file', file);

    const fetchOptions = {
      method: 'POST',
      headers: {
        Authorization: 'Bearer: ' + token,
      },
      mode: 'cors',
      body: formData,
    };

    return await fetchData(
      import.meta.env.VITE_UPLOAD_SERVER + '/upload',
      fetchOptions,
    );
  };

  return {postFile};
};

export {useMedia, useAuthentication, useUser, useFile};

import MediaRow from '../components/mediaRow';
import {useEffect, useState} from 'react';
import SingleView from '../components/singleView';
import {fetchData} from '../components/fetchData';

const Home = () => {
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
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <>
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Owner</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow
              key={item.media_id}
              item={item}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
    </>
  );
};

export default Home;

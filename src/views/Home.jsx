import MediaRow from '../components/mediaRow';
import {useEffect, useState} from 'react';
import SingleView from '../components/singleView';
import {fetchData} from '../components/fetchData';

const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const getMedia = async () => {
    try {
      const json = await fetchData('test.json');
      setMediaArray(json);
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

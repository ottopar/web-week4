import MediaRow from '../components/mediaRow';
import SingleView from '../components/singleView';
import {useMemo, useState} from 'react';
import {useNavigate} from 'react-router';
import {useMedia} from '../hooks/apiHooks';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const {mediaArray, modifyMedia, deleteMedia} = useMedia();
  const navigate = useNavigate();

  const memoizedMedia = useMemo(() => mediaArray, [mediaArray]);

  const handleModify = async (mediaId, updatedData) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token available');
      return;
    }

    try {
      const response = await modifyMedia(mediaId, updatedData, token);
      console.log('Modify success:', response);

      // Navigate to the same page to trigger a refresh
      navigate(0);
    } catch (error) {
      console.error('Modify failed:', error);
    }
  };

  const handleDelete = async (mediaId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token available');
      return;
    }

    if (!confirm('Are you sure you want to delete this item?')) {
      return;
    }

    try {
      const response = await deleteMedia(mediaId, token);
      console.log('Delete success:', response);

      navigate(0);
    } catch (error) {
      console.error('Delete failed:', error);
    }
  };

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
          {memoizedMedia.map((item) => (
            <MediaRow
              key={item.media_id}
              item={item}
              setSelectedItem={setSelectedItem}
              onModify={handleModify}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
    </>
  );
};

export default Home;

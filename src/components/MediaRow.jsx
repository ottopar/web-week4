import React from 'react';
import PropTypes from 'prop-types';
import {useUserContext} from '../hooks/contextHooks';
import {Link} from 'react-router';

const MediaRow = ({item, onModify, onDelete}) => {
  const {user} = useUserContext();

  const handleModify = () => {
    const newTitle = prompt('Enter new title:', item.title);
    const newDescription = prompt('Enter new description:', item.description);

    if (!newTitle || !newDescription) {
      console.log('Modify cancelled or invalid input');
      return;
    }

    // Call modifyMedia from parent
    onModify(item.media_id, {
      title: newTitle,
      description: newDescription,
    });
  };

  const handleDelete = () => {
    if (!confirm('Are you sure you want to delete this item?')) {
      return;
    }

    // Call deleteMedia from parent
    onDelete(item.media_id);
  };

  // Check if user is logged in and is the owner of the item
  const isOwner = user && user.username === item.username;

  return (
    <tr key={item.media_id} className="hover:bg-stone-800">
      <td className="border border-white p-4">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="h-32 w-40 rounded object-cover"
        />
      </td>
      <td className="border border-white p-4">{item.title}</td>
      <td className="border border-white p-4">{item.description}</td>
      <td className="border border-white p-4">
        {new Date(item.created_at).toLocaleString('fi-FI')}
      </td>
      <td className="border border-white p-4">{item.filesize}</td>
      <td className="border border-white p-4">{item.media_type}</td>
      <td className="border border-white p-4">{item.username}</td>
      <td className="border border-white p-4">
        <Link
          to="single"
          state={{item}}
          className="inline-block rounded bg-stone-700 px-4 py-2 text-white hover:bg-stone-900"
        >
          View
        </Link>
      </td>

      {isOwner && (
        <>
          <td className="border border-white p-4">
            <button
              onClick={handleModify}
              className="inline-block rounded bg-stone-700 px-4 py-2 text-white hover:bg-stone-900"
            >
              Modify
            </button>
          </td>
          <td className="border border-white p-4">
            <button
              onClick={handleDelete}
              className="inline-block rounded bg-stone-700 px-4 py-2 text-white hover:bg-stone-900"
            >
              Delete
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
  onModify: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MediaRow;

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

const MediaRow = (props) => {
  const {item} = props;
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
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MediaRow;

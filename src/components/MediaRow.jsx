import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

const MediaRow = (props) => {
  const {item} = props;
  return (
    <tr key={item.media_id}>
      <td>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>{item.username}</td>
      <td>
        <Link to="single" state={{item}}>
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

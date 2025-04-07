import React from 'react';

const SingleView = (props) => {
  const {item, setSelectedItem} = props;
  return (
    // TODO: Add JSX for displaying a mediafile here
    // - use e.g. a <dialog> element for creating a modal
    // - use item prop to render the media item details
    // - use img tag for displaying images
    // - use video tag for displaying videos

    <>
      {item && (
        <dialog open>
          {item.media_type === 'video/mp4' ? (
            <video controls>
              <source src={item.filename} type={item.media_type} />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={item.filename} alt={item.title} />
          )}
          <h2>Title: {item.title}</h2>
          <p>Description: {item.description}</p>
          <button onClick={() => setSelectedItem(null)}>Close</button>
        </dialog>
      )}
    </>
  );
};
export default SingleView;

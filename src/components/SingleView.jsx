import React from 'react';

const SingleView = (props) => {
  const {item, setSelectedItem} = props;
  return (
    <>
      {item && (
        <dialog
          open
          className="w-11/12 max-w-3xl rounded-lg bg-stone-900 p-6 text-white shadow-lg"
        >
          {item.media_type === 'video/mp4' ? (
            <video
              controls
              className="h-auto max-h-[60vh] w-full rounded-md object-contain"
            >
              <source src={item.filename} type={item.media_type} />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={item.filename}
              alt={item.title}
              className="h-auto max-h-[60vh] w-full rounded-md object-contain"
            />
          )}
          <h2 className="mt-4 text-2xl font-bold">{item.title}</h2>
          <p className="mt-2 text-stone-300">{item.description}</p>
          <p className="mt-1 text-sm text-stone-400">By: {item.username}</p>
          <button
            onClick={() => setSelectedItem(null)}
            className="mt-6 rounded bg-stone-700 px-6 py-2 text-white transition hover:bg-stone-800"
          >
            Close
          </button>
        </dialog>
      )}
    </>
  );
};

export default SingleView;

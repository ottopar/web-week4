import React from 'react';
import {useLocation} from 'react-router';
import {useNavigate} from 'react-router';

const Single = () => {
  const navigate = useNavigate();
  const {state} = useLocation();
  const {item} = state;
  return (
    <div className="space-y-6 p-4">
      <button
        onClick={() => navigate(-1)}
        className="rounded-md bg-stone-600 px-4 py-2 text-white hover:bg-stone-800"
      >
        Go back
      </button>

      <div className="space-y-4">
        {item.media_type.includes('video') ? (
          <video
            src={item.filename}
            controls
            className="w-full rounded-md shadow-lg"
          />
        ) : (
          <img
            src={item.filename}
            alt={item.title}
            className="h-auto w-full rounded-md shadow-lg"
          />
        )}
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
        <p className="text-white">{item.description}</p>
        <p className="text-white">By: {item.username}</p>
      </div>
    </div>
  );
};

export default Single;

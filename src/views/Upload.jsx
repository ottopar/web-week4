import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router';
import {useFile, useMedia} from '../hooks/apiHooks';
import useForm from '../hooks/formHooks';
import TextInput from '../components/ui/TextInput';

const Upload = () => {
  const [file, setFile] = useState(null);
  const {postFile} = useFile();
  const {postMedia} = useMedia();
  const navigate = useNavigate();

  const doUpload = async () => {
    try {
      const token = window.localStorage.getItem('token');
      const fileResult = await postFile(file, token);
      console.log('fileResult', fileResult);
      const mediaResult = await postMedia(fileResult.data, inputs, token);
      console.log('mediaResult', mediaResult);

      navigate('/');
    } catch (error) {
      console.log('error', error);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(doUpload);

  const handleFileChange = (evt) => {
    if (evt.target.files) {
      console.log(evt.target.files[0]);
      // Todo: set the file to state
      setFile(evt.target.files[0]);
    }
  };

  return (
    <>
      <h1 className="text-center text-3xl font-bold">Upload Media</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <TextInput
          label="Title"
          name="title"
          type="text"
          id="title"
          onChange={handleInputChange}
          className="w-full"
        />
        <div>
          <label
            htmlFor="description"
            className="block text-lg font-medium text-white"
          >
            Description
          </label>
          <textarea
            name="description"
            rows={5}
            id="description"
            onChange={handleInputChange}
            className="mt-2 w-full rounded-md border-2 border-stone-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="file"
            className="block text-lg font-medium text-white"
          >
            File
          </label>
          <input
            name="file"
            type="file"
            id="file"
            accept="image/*, video/*"
            onChange={handleFileChange}
            className="mt-2 w-full rounded-md border-2 border-stone-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="mt-4 flex justify-center">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : 'https://via.placeholder.com/200?text=Choose+image'
            }
            alt="preview"
            className="rounded-md"
            width="200"
          />
        </div>
        <button
          type="submit"
          disabled={file && inputs.title.length > 3 ? false : true}
          className="w-full rounded-md bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700 disabled:bg-stone-400"
        >
          Upload
        </button>
      </form>
    </>
  );
};

Upload.propTypes = {};

export default Upload;

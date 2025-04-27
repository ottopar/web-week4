const TextInput = ({label, id, ...props}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-2 font-medium text-stone-200">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="rounded border-2 border-stone-300 p-2 text-white focus:ring-2 focus:ring-stone-500 focus:outline-none"
      />
    </div>
  );
};

export default TextInput;

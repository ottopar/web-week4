const Logout = () => {
  const handleLogout = () => {
    // Perform logout logic here
    console.log('Logged out');
  };

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;

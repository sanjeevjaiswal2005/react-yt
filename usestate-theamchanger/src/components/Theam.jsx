const Theam = ({ user, children }) => {
  return (
    <div className={`theam ${user}`}>
      <h1>theam is {user}</h1>
      {children}
    </div>
  );
};

export default Theam;

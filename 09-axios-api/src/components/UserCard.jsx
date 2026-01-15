import "./UserCard.css";
const UserCard = ({ user }) => {
  //   console.log(props.data);

  return (
    <div className="card">
      <h2 className="username">@{user.username}</h2>

      <div className="info">
        <p>
          <span>Name:</span> {user.name}
        </p>
        <p>
          <span>Email:</span> {user.email}
        </p>
        <p>
          <span>Phone:</span> {user.phone}
        </p>
        <p>
          <span>Website:</span>
          <a href="https://example.com" target="_blank" rel="noreferrer">
            {user.website}
          </a>
        </p>
      </div>
    </div>
  );
};

export default UserCard;

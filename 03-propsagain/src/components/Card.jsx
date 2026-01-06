const Card = (props) => {
  return (
    <>
      <section className="section">
        <div className="card">
          <div className="bgImg">
            <img src={props.coverImage} alt="" />
          </div>
          <div className="profile">
            <img src={props.profileImage} alt="" />
          </div>
          <div className="content">
            <h2>{props.fullName}</h2>
            <p>{props.description}</p>
          </div>
          <div className="counter">
            <div id="like">
                          <h3>{ props.likeCount}</h3>
              <p>Link</p>
            </div>
            <div id="post">
                          <h3>{ props.postCount}</h3>
              <p>Post</p>
            </div>
            <div id="views">
                          <h3>{ props.viewCount}</h3>
              <p>Views</p>
            </div>
          </div>
          <div className="icons">
            <i class="ri-instagram-line"></i>

            <i class="ri-twitter-x-fill"></i>

            <i class="ri-threads-line"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;

import Card from "./components/Card";
const App = () => {
  const users = [
    {
      fullName: "Spider-Man",
      description: "Friendly neighborhood superhero who protects the city.",
      coverImage:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      profileImage:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
      likeCount: 124500,
      postCount: 210,
      viewCount: 985000,
    },
    {
      fullName: "Iron Man",
      description: "Genius inventor using technology to save the world.",
      coverImage:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      profileImage:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      likeCount: 205000,
      postCount: 340,
      viewCount: 1540000,
    },

    {
      fullName: "Thor",
      description: "God of Thunder with unmatched strength.",
      coverImage:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      likeCount: 194000,
      postCount: 310,
      viewCount: 1280000,
    },
    {
      fullName: "Hulk",
      description: "Powerful hero driven by strength and emotion.",
      coverImage:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7",
      profileImage:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      likeCount: 166000,
      postCount: 245,
      viewCount: 910000,
    },
    {
      fullName: "Black Panther",
      description: "Protector of Wakanda with unmatched agility.",
      coverImage:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      profileImage:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
      likeCount: 178000,
      postCount: 280,
      viewCount: 1090000,
    },

    {
      fullName: "Superman",
      description: "Man of Steel protecting humanity.",
      coverImage:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      profileImage:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      likeCount: 260000,
      postCount: 460,
      viewCount: 1980000,
    },
    {
      fullName: "Wonder Woman",
      description: "Warrior princess with divine strength.",
      coverImage:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      profileImage:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      likeCount: 192000,
      postCount: 330,
      viewCount: 1350000,
    },
    {
      fullName: "Flash",
      description: "Fastest man alive with lightning speed.",
      coverImage:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      profileImage:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      likeCount: 158000,
      postCount: 270,
      viewCount: 890000,
    },
  ];

  return (
    <>
      <div className="section">
        {users.map((elem) => {
          return (
            <Card
              fullName={elem.fullName}
              description={elem.description}
              coverImage={elem.coverImage}
              profileImage={elem.profileImage}
              likeCount={elem.likeCount}
              postCount={elem.postCount}
              viewCount={elem.viewCount}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;

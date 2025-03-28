import Profile from "./Profile";

<ProfilesList />;
function ProfilesList(props) {
  const profiles = [
    { id: 1, name: "Alice", age: 25, bio: "Loves coding and coffee." },
    { id: 2, name: "Bob", age: 28, bio: "Enjoys traveling and photography." },
    {
      id: 3,
      name: "Charlie",
      age: 22,
      bio: "Passionate about gaming and music.",
    },
  ];

  return (
    <div className="cardProfile">
      {profiles.map((profile) => (
        <Profile key={profile.id} {...profile} />
      ))}
    </div>
  );
}

export default ProfilesList;

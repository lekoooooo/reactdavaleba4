import { useState } from "react";

function Profile(props) {
  const [isVisible, setIsVisible] = useState(true);
  const toggleButton = () => {
    setIsVisible((prev) => !prev);
  };
  {
    return (
      <div className="mainContainer">
        <button className="showHideBtn" onClick={toggleButton}>
          {isVisible ? "Hide" : "Show"} Profile
        </button>
        {isVisible && (
          <div className="about">
            <h2 className="firstName">Name : {props.name}</h2>
            <p className="age">Age : {props.age}</p>
            <p className="bio">Bio : {props.bio}</p>
          </div>
        )}
      </div>
    );
  }
}
export default Profile;

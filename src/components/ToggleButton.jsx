import { useState } from "react";
import ProfilesList from "./ProfilesList";

function ToggleButton() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="toggleContainer">
      <button onClick={toggleVisibility} className="toggleBtn">
        {isVisible ? "Visible" : "Hidden"}
      </button>
      {isVisible && <ProfilesList />}
    </div>
  );
}
export default ToggleButton;

import React from "react";

const Header = ({ handleToggleDarkMode }) => {
  const [dark, setDark] = React.useState("Dark Mode");
  return (
    <div className="header">
      <h1 className="title">Notes</h1>
      <button
        className="toggle-btn btn"
        onClick={(e) =>
          handleToggleDarkMode(
            (previousDarkMode) => !previousDarkMode,
            setDark("Light Mode")
          )
        }
      >
        {dark}
      </button>
    </div>
  );
};
export default Header;

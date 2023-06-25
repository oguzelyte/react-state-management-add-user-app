import { useState } from "react";
import PropTypes from "prop-types";

const DisplayUser = ({ user }) => {
  const [showGames, setShowGames] = useState(true);

  const handleGameToggle = (e) => {
    setShowGames(showGames === true ? false : true);
  };

  return (
    <div className="user-block">
      <div className="user-details">
        <div className="first-col">
          <span>
            Name: {user.firstname} {user.lastname}
          </span>
          <span>Username: {user.username}</span>
        </div>
        <div className="second-col">
          <span>Games played:</span>
          <span>{showGames === true ? user.gamesplayed : "*"}</span>
        </div>
        <div className="last-col">
          <button onClick={handleGameToggle}>
            {showGames === true ? "Hide" : "Show"} the number of games played
          </button>
        </div>
      </div>
    </div>
  );
};

DisplayUser.propTypes = {
  user: PropTypes.object.isRequired,
};

export default DisplayUser;

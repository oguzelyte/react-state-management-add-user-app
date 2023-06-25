import { Link } from "react-router-dom";
import DisplayUser from "./DisplayUser";
import PropTypes from "prop-types";

const UserList = ({ users }) => {
  return (
    <>
      <div className="users-list-top">
        <h1>Users List</h1>
        <Link to="/create"> Add User</Link>
      </div>
      <div className="users-container">
        <div className="users-list">
          {users.map((user, index) => (
            <DisplayUser key={index} user={user} />
          ))}
        </div>
      </div>
    </>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};
export default UserList;

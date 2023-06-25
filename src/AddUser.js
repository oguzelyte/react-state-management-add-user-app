import { Link } from "react-router-dom";
import serializeForm from "form-serialize";
import { useState } from "react";
import PropTypes from "prop-types";

const AddUser = ({ onCreateUser }) => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
  });

  const inputIsEmpty = () =>
    (form.firstname && form.lastname && form.username) === "";

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    onCreateUser(values);
  };
  return (
    <div className="add-user">
      <Link className="close-create-contact" to="/">
        Close
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          value={form.firstname}
          type="text"
          name="firstname"
          onChange={(e) => {
            setForm({
              ...form,
              firstname: e.target.value,
            });
          }}
          placeholder="First Name"
        />
        <input
          value={form.lastname}
          type="text"
          name="lastname"
          onChange={(e) => {
            setForm({
              ...form,
              lastname: e.target.value,
            });
          }}
          placeholder="Last Name"
        />
        <input
          value={form.username}
          type="text"
          name="username"
          onChange={(e) => {
            setForm({
              ...form,
              username: e.target.value,
            });
          }}
          placeholder="Username"
        />
        <button disabled={inputIsEmpty()} type="submit">
          Add User
        </button>
      </form>
    </div>
  );
};

AddUser.propTypes = {
  onCreateUser: PropTypes.func.isRequired,
};
export default AddUser;

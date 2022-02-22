import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditUser from "../users/EditUser";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("HALO");
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5004/users/");
    console.log(result);
    setUsers(result.data.reverse());
  };
  //   const UpdateUser = async (_id) => {
  //     // <>
  //     //   <EditUser dataprop={user._id} />
  //     // </>;
  //   };
  const deleteUser = async (_id) => {
    await axios.delete(`http://localhost:5004/users/${_id}`);

    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    className="btn btn-primary mr-2"
                    to={`users/${user._id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-warning mr-2"
                    to={`/users/edit/${user._id}`}
                    // onClick={() => UpdateUser(user_id)}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-outline-danger"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </Link>
                  {/* <EditUser dataprop={user._id} /> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

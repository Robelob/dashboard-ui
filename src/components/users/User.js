import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:5004/users/${id}`);
    console.log(result);
    setUser(result.data);
  };

  return (
    <div className="container py-5">
      <Link className="btn btn-dark" to="/">
        Return to home page
      </Link>
      <h1 className="display-5">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">user name: {user.username}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">phone: {user.phone}</li>
        <li className="list-group-item">password: {user.password}</li>
      </ul>
    </div>
  );
};

export default User;

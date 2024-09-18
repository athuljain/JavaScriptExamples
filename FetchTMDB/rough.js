// UserContext.jsx
import React, { createContext, useState } from "react";
import Datas2 from '../Datas2';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [loginStatus, setLoginStatus] = useState("");

  const addedUser = (userData) => {
    setRegisteredUsers([...registeredUsers, userData]);
  };

  const getUserByEmail = (email) => {
    return registeredUsers.find((user) => user.email === email);
  };

  const value = {
    addedUser,
    getUserByEmail,
    registeredUsers,
    setRegisteredUsers,
    loginStatus,
    setLoginStatus,
    products: Datas2,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};


//App.js

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./UserContext";
import Routes from "./Routes";

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Routes />
      </UserProvider>
    </Router>
  );
};

export default App;

//Userregister.jsx

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function UserRegister() {
  const navigate = useNavigate();
  const { addedUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleButtonClick = () => {
    const userData = { name, phone, email, password };
    addedUser(userData);
    navigate("/login");
  };

  return (
    <div className="register-container">
      <h3 className="register-header">Register</h3>
      <div className="register-body">
        {/* Input fields */}
        <button className="submit-btn" onClick={handleButtonClick} type="button">
          Submit
        </button>
      </div>
    </div>
  );
}


// Login.jsx
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Login() {
  const navigate = useNavigate();
  const { getUserByEmail, setLoginStatus } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleButtonClick = () => {
    const user = getUserByEmail(email);
    if (user && user.password === password) {
      navigate("/");
      setLoginStatus("success");
    } else {
      setLoginStatus("failure");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h3 className="login-header">Login</h3>
        <div>
          <input
            className="login-input"
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button
            className="signin-btn"
            onClick={handleButtonClick}
            type="button"
          >
            Sign In
          </button>
        </div>
      </form>
      <h6>
        Don't have an Account? <Link to="/register">Create</Link>
      </h6>
    </div>
  );
}

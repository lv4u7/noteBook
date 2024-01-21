/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const host = "http://localhost:5000";
  const history = useNavigate();
  //   const host = "http://localhost:5000";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const jsn = await response.json(); // parses JSON response into native JavaScript objects
    if (jsn.success) {
      //save the auth token and redirect
      localStorage.setItem("token", jsn.authToken);
      localStorage.setItem("mail", credentials.email);
      props.showAlert("Logged in successfully", "success");
      history("/");
    } else {
      props.showAlert("Invalid credentials", "danger");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h2 className="my-3">Login to continue</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            value={credentials.email}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter Password"
            name="password"
            autoComplete="new-password"
            value={credentials.password}
            onChange={onChange}
          />
          <button type="submit" className="btn btn-primary my-4">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = (props) => {
  const history = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [passwordMatch, setPasswordMatch] = useState(true); // State for password match status
  const host = "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (credentials.password !== credentials.cpassword) {
      setPasswordMatch(false);
      return;
    }
    const { name, email, password } = credentials;
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const jsn = await response.json();

    if (jsn.success) {
      localStorage.setItem("token", jsn.authToken);
      history("/login");
      props.showAlert("Account created successfully", "success");
    } else {
      props.showAlert("Invalid credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

    // Reset password match status when the user types in the password fields
    if (e.target.name === "password" || e.target.name === "cpassword") {
      setPasswordMatch(true);
    }
  };

  return (
    <div className="container my-2">
      <h2 className="my-3">Sign up to continue</h2>
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
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            name="name"
            value={credentials.name}
            onChange={onChange}
            required
            minLength={3}
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
            required
            minLength={5}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            placeholder="Enter Password Again"
            name="cpassword"
            autoComplete="new-password"
            value={credentials.cpassword}
            onChange={onChange}
            required
            minLength={5}
          />
          {!passwordMatch && (
            <small className="text-danger d-block">
              Passwords do not match.
            </small>
          )}
          <button type="submit" className="btn btn-primary my-4">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;

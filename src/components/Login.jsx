import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const history = useNavigate();
  //   const host = "http://localhost:5000";
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials);
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
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
    console.log(jsn);
    if (jsn.success) {
      //save the auth token and redirect
      localStorage.setItem("token", jsn.authToken);
      history("/");
    } else {
      alert("Invalid credentials");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

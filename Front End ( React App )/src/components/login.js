import React, { useState } from "react";
import "../assets/css/login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  async function OnLogin() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // check if email and password are valid using regex
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (email.length === 0) {
      alert("Email is required");
      return;
    }
    if (password.length === 0) {
      alert("Password is required");
      return;
    }
    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
      );
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/user/login-user", {
        email,
        password,
      });
      console.log("API Response:", response);

      if (response.data.role) {
        // Save email and role in local storage
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userRole", response.data.role);
        props.setuserRole(response.data.role);

        setError(""); // Clearing previous error message
        alert("Login successful!");
        console.log("Navigating to dashboard...");
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
        alert(error.response.data.error || "An error occurred");
      } else {
        console.log(error);
      }
    }
  }

  return (
    <div className="loginPanel">
      <div className="login-container">
        <h2>Welcome Back</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">
              Password{" "}
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            />
          </div>
          {/* Inline error message */}
          {error && (
            <p id="error-message" style={{ color: "red", marginTop: "5px" }}>
              {error}
            </p>
          )}

          <button type="button" className="login-btn" onClick={OnLogin}>
            Login
          </button>
        </form>

        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/register" className="signup-link">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

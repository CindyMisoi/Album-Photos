import React, { useState, useEffect, useContext } from "react";
import apiServer from "../api/apiServer"; // Import your apiServer configuration
import axios from "axios"; // Import axios for making HTTP requests
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";



const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loginIdentifier, setLoginIdentifier] = useState("");
  const [loading, setLoading] = useState(false);
  const [demoLoading, setDemoLoading] = useState(false);
  const { setAuth } = useContext(AuthContext);

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate form data, check if login identifier is not empty
    if (!loginIdentifier.trim()) {
      setErrorMessage("Please enter your email or username");
      return;
    }

    setLoading(true);

    try {
      // Send the login request to the server to validate credentials and generate session token
      const res = await apiServer.post("/login", { loginIdentifier });
      // Handle successful login
    } catch (err) {
      setLoading(false);
      setErrorMessage("The provided credentials were invalid");
    }
  };

  const handleLoginIdentifierChange = (e) => {
    setLoginIdentifier(e.target.value.trim());
    // Clear the error message when the user starts typing
    setErrorMessage("");
  };


  useEffect(() => {
    if (typeof window.google !== "undefined") {
      window.google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: (response) => handleCredentialResponse(response, setAuth),
        cancel_on_tap_outside: false,
      });
      window.google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large" }
      );
    }
  }, []);

  const handleCredentialResponse = async (response, setAuth) => {
    const Jwt_token = response.credential;
    console.log("Encoded JWT ID token: " + Jwt_token);

    // Store token in session storage
    sessionStorage.setItem("Jwt_token", Jwt_token);
    setAuth(Jwt_token); // Update authentication context with the JWT token

    try {
        // Send token to server for validation
        const res = await apiServer.post("/api/users/google", { token: Jwt_token });

        // Store user data in session storage
        sessionStorage.setItem("user", JSON.stringify(res.data));
        sessionStorage.setItem("userId", res.data.user.id);
        sessionStorage.setItem("email", res.data.user.email);
        sessionStorage.setItem("username", res.data.user.username);
        sessionStorage.setItem("name", res.data.user.name);
        console.log("User authenticated successfully:", res.data);

        // Handle successful authentication, e.g., save token, redirect, etc.
    } catch (err) {
        console.error("Authentication error:", err);
        // Handle authentication error
    }
};


  const CLIENT_ID = "1027981653641-s2pt1du3d0osqm0itpbsubd2c67e2qoq.apps.googleusercontent.com";



  return (
    <>
      <form onSubmit={onSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-6">
          <label htmlFor="loginIdentifier" className="block text-gray-700 text-sm font-bold mb-2">Email Address or Username</label>
          <input
            name="loginIdentifier"
            type="text"
            value={loginIdentifier}
            onChange={handleLoginIdentifierChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            placeholder="Enter your email address or username"
          />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            {loading ? "Logging in.." : "Login"}
          </button>
          {errorMessage && <p className="text-red-500 text-xs italic">{errorMessage}</p>}
        </div>
      </form>
      <div id="signInDiv" className="max-w-md mx-auto"></div>
    </>

  );
};

export default LoginForm;

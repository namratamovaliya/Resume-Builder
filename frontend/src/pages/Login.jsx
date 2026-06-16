import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Sending Data:", formData);

    try {

      const response = await API.post(
        "login/",
        formData
      );

      console.log("Full Response:", response);
      console.log("Response Data:", response.data);

      if (response.data.message === "Login Success") {

        alert("Login Successful");

        navigate("/dashboard");

      } else {

        alert(response.data.message);

      }

    } catch (error) {

      console.log("Error:", error);

      if (error.response) {

        console.log("Backend Error:", error.response.data);

        alert(JSON.stringify(error.response.data));

      } else {

        alert("Backend Server Not Running");

      }
    }
  };

  return (
    <div>

      <h1>Login Page</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={formData.username}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;
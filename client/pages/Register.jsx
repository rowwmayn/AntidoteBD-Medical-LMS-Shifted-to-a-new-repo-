// client/src/pages/Register.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    facebookId: "",
    institute: "",
    roll: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Adjust the endpoint URL as needed
      await axios.post("http://localhost:5000/api/users/register", formData);
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error.response.data.message);
      alert("Registration failed: " + error.response.data.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required /><br/>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br/>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br/>
        <input type="text" name="facebookId" placeholder="Facebook Profile URL" onChange={handleChange} required /><br/>
        <input type="text" name="institute" placeholder="Institute Name" onChange={handleChange} required /><br/>
        <input type="text" name="roll" placeholder="Roll Number" onChange={handleChange} required /><br/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

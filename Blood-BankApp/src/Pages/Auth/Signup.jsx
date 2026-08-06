import React, { useState } from "react";
import "./Signup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {

    
const navigate = useNavigate();

const [formData, setFormData] = useState({

    fullName: "",
    email: "",
    phone: "",
    bloodGroup: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    // Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );

    const user = userCredential.user;
const role =
  formData.email.trim().toLowerCase() === "syedwaleed887@gmail.com"
    ? "admin"
    : "user";
    // Firestore Database
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      bloodGroup: formData.bloodGroup,
      role: role,
      createdAt: new Date(),
    });

    alert("Account Created Successfully!");

    navigate("/login");

  } catch (error) {
    alert(error.message);
  }
};

  return (
    <div className="signup-container">
      <div className="signup-card">

        <h1>🩸 Blood Bank</h1>
        <p>Create Your Account</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
          >
            <option value="">Select Blood Group</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button type="submit">
            Create Account
          </button>

        </form>
<p className="login-text">
  Already have an account?{" "}
  <Link to="/login" className="login-link">
    Login
  </Link>
</p>
      </div>
    </div>
  );
};

export default Signup;
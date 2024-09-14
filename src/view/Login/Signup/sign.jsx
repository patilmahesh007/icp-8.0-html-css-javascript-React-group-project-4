import React, { useState } from 'react';
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Footer from "../../../components/footer/footer";
import Navbar from "../../../components/navbar/nav";
import img1 from "../img/bg.svg";
import img2 from "../img/avatar.svg";
import "./sign.css"


const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    localStorage.setItem("username", formData.username);
    localStorage.setItem("password", formData.password);
    localStorage.setItem("email", formData.email);

    toast.success("Account created successfully!");
    setFormData({
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
        <div><Navbar/></div>
        <div className="signup-container">
        <div className="sign-img">
          <img src={img1} alt="Background" />
        </div>
        <div className="signup-content">
          <form onSubmit={handleSubmit}>
            <img src={img2} alt="Avatar" />
            <h3 className="title-2">Create Account</h3>

            <div className="input-div1">
              <div className="sign-icon">
                <i className="fas fa-user"></i>
              </div>
              <div className="signup-input-name">
                <h5>Username</h5>
                <input
                  type="text"
                  className="input-2"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-div1">
              <div className="sign-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="signup-input-name">
                <h5>Email</h5>
                <input
                  type="email"
                  className="input-2"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-div1">
              <div className="sign-icon">
                <i className="fas fa-lock"></i>
              </div>
              <div className="signup-input-name">
                <h5>Password</h5>
                <input
                  type="password"
                  className="input-2"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-div1">
              <div className="sihn-icon">
                <i className="fas fa-lock"></i>
              </div>
              <div className="signup-input-name">
                <h5>Confirm Password</h5>
                <input
                  type="password"
                  className="input-2"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <input type="submit" className="signup-btn" value="Sign Up" />

            <div className="signup-text">
              <span>Already have an account?</span>
              <Link to="/login">Login</Link>
              </div>
          </form>
       </div>
        <Toaster />
        </div>
  
        <div><Footer/></div>
        
    </>
  )
}

export default SignupForm 
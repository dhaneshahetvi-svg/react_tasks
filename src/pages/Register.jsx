import React from "react";
import "./register.css";

const Register = () => {
  return (
    <>
    
      <div className="form-container">
        {/* Page Title */}
        <h1 className="form-title">REGISTER</h1>
        <form>
          {/* Name field*/}
          <div className="form-group">
            <label htmlFor="name">FULL Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
            />
          </div>
          {/* Email field */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          {/* phone Number Field */}
          <div className="form-group">
            <label htmlFor="phone">phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone Number"
            />
          </div>
          {/* Password field */}
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input
              type="Password"
              id="Password"
              name="Password"
              placeholder="Create a password"
            />
          </div>
          {/* Submit Button */}
          <button type="submit" className="btn-primary">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;

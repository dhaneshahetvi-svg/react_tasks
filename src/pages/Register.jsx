import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [errors,setErrors] = useState ({})
  const navigate = useNavigate()

  //logic section

  const validate = () => {
    const newErrors = {}

    if(!formData.name.trim()){
      newErrors.name = "Full name is required."
    }
    else if(formData.name.length <= 3) {
      newErrors.name = "Minmum 3 characters required."
    }

    if(!formData.email.trim()){
      newErrors.email = "Email is required."
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
      newErrors.email = "Invalid Email format."
    }
    if(!formData.phone.trim()){
      newErrors.phone = "phone number is required."
    }else if(!/^[0-9]{10}$/.test(formData.phone)){
      newErrors.phone = "phone must be in 10 digit."
    }
    if(!formData.password.trim()){
      newErrors.password = "password is required."
    }else if(formData.password.length <6){
      newErrors.password = "Minmum 6 character required."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0;
  }

  const handleInputchange = (e) => {
    console.log(e.target.name,e.target.value)
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
     
    });
    setErrors({
      ...errors,
      [e.target.name]: ""
    })
  };
const handleSubmit=(e)=>{
  e.preventDefault();
  if (validate()){
  
}

  //  useEffect(()=>{
  //      console.log(formData)
  //   },[formData])

  //design section
  return (
    <div className="form-container">
      <h1 className="form-title">REGISTER</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Enter your full name"
            onChange={handleInputchange}
          />
          {errors.name && <span className="error-msg">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
             value={formData.email}
            placeholder="Enter your email"
            onChange={handleInputchange}
          />
          
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
             value={formData.phone}
            placeholder="Enter your phone number"
            onChange={handleInputchange}
          />
          
          {errors.phone && <span className="error-msg">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
             value={formData.password}
            placeholder="Create a password"
            onChange={handleInputchange}
          />
          
          {errors.password && <span className="error-msg">{errors.password}</span>}
        </div>

        <button type="submit" className="btn-primary">
          Register
        </button>
      </form>

      {/* Link */}
      <p className="link-text">
        Already have an account?
        <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;

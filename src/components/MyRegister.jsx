import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MyRegister = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    const { username, email, password } = formData;
    const newErrors = {};

    if (!username) {
      newErrors.username = 'Username is required';
    } else if (/^\d+$/.test(username)) {
      newErrors.username = 'Username cannot be only numbers';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    return newErrors;
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    const validateError=validateForm();
    if(Object.keys(validateError).length>0){
      setErrors(validateError)
    }else{
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      existingUsers.push(formData);
      localStorage.setItem('users', JSON.stringify(existingUsers));
      alert('Registration successful!');
      navigate('/'); 
    }
  }
  return <div>
     <div className="register-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={errors.username ? 'input-error' : ''}
          />
          {errors.username && <small className="error-message">{errors.username}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <small className="error-message">{errors.email}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'input-error' : ''}
          />
          {errors.password && <small className="error-message">{errors.password}</small>}
        </div>

        <button type="submit" className="btn btn-primary">Register</button>

        <div className="form-footer">
          <p>Already have an account? <button onClick={() => navigate('/')} className="btn-link">Login here</button></p>
        </div>
      </form>
    </div>
  </div>;
};

export default MyRegister;

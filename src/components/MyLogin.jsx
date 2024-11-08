import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const MyLogin = ({ setCurrentUser }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [userNotFound, setUserNotFound] = useState(false);
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
    setUserNotFound(false);
  };
  const validateForm = () => {
    const { email, password } = formData;
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      const user = existingUsers.find((user) => user.email === formData.email && user.password === formData.password);
      if (user) {
        setCurrentUser(user);
        localStorage.setItem('currentUser', JSON.stringify(user)); 
        navigate('/dashboard'); 
      } else {
        setUserNotFound(true);
      }
    }
  };
  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

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
        <button type="submit" className="btn btn-primary">Login</button>
        {userNotFound && (
          <div className="user-not-found">
            <p>This user doesn’t exist</p>
            <button onClick={() => navigate('/register')} className="btn-link">Create new account</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default MyLogin;

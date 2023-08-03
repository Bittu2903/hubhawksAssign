import React, { useState } from 'react';
import axios from 'axios';

const SigninForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData)
      const response = await axios.post('http://localhost:5000/signin', formData);
      console.log('Signin Successful:', response.data);
      alert("signin successful")
    } catch (error) {
      console.error('Signin Error:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" name="email" onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name="password" onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary">Signin</button>
    </form>
  );
};

export default SigninForm;

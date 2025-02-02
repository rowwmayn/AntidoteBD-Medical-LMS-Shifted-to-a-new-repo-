import React, { useState } from 'react';
import { Button } from '../ui/Button';

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onLogin(formData);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md">{error}</div>
      )}
      
      <div>
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input"
          required
        />
      </div>
      
      <div>
        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="input"
          required
        />
      </div>
      
      <Button type="submit" className="w-full">
        Login
      </Button>
      
      <div className="mt-4">
        <Button 
          variant="secondary" 
          className="w-full"
          onClick={() => window.location.href='/auth/facebook'}
        >
          Login with Facebook
        </Button>
      </div>
    </form>
  );
};
export default LoginForm;
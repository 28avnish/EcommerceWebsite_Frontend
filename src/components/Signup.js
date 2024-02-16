import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Signup() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!firstname || !lastname || !email || !password) {
      setError('All fields are required');
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Validate password length
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    // If all fields pass validation, submit the form
    axios.post('https://ecommerce-backend-cacr.onrender.com/register', { firstname, lastname, email, password })
    .then(result => {
      console.log(result);
      // Check if registration was successful
      if (result.data && result.data._id) {
        // Redirect to login page only if registration was successful
        navigate('/login');
      } else {
        // Display error message if registration failed
        setError('Registration failed. User Already exists');
        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');

      }
    })
    .catch(err => {
      console.error(err);
      // Display error message if registration failed
      setError('Registration failed. Please try again later.');
    });

  };

  return (
    <div className='signup template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
      <div className='40-w p-5 rounded bg-white'>
        <form onSubmit={handleSubmit}>
          <h3 className='text-center'>Sign Up</h3>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className='mb-2'>
            <label htmlFor='firstname'>First Name</label>
            <input type='text' placeholder='Enter FirstName' id='firstname' className='form-control' value={firstname} onChange={(e) => setFirstname(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor='lastname'>Last Name</label>
            <input type='text' placeholder='Enter LastName' id='lastname' className='form-control' value={lastname} onChange={(e) => setLastname(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter Email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor='password'>Password</label>
            <div className="input-group">
              <input type={showPassword ? 'text' : 'password'} placeholder='Enter Password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type="button" className="btn btn-outline-secondary" onClick={() => setShowPassword(!showPassword)}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>
          <div className='mb-2'>
            <input type='checkbox' id='check' />
            <label htmlFor='check' className=' ms-2'> Remember Me</label>
          </div>
          <div className='d-grid mt-2'>
            <button type='submit' className='btn btn-primary'>Sign Up</button>
          </div>
          <p className='text-end mt-2'>Already Registered?<Link to='/login' className='ms-2'>Sign in </Link></p>
        </form>
      </div>
    </div>
  );
}

export default Signup;

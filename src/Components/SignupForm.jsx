import React, { useState } from 'react';
import './SignupForm.css';
import logo from '../Images/logo.svg';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [usernameSuccess, setUsernameSuccess] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);

  const [usernameFailure, setUsernameFailure] = useState(false);
  const [emailFailure, setEmailFailure] = useState(false);
  const [passwordFailure, setPasswordFailure] = useState(false);

  const [usernameBorderColor, setUsernameBorderColor] = useState('');
  const [emailBorderColor, setEmailBorderColor] = useState('');
  const [passwordBorderColor, setPasswordBorderColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    engine(
      username,
      setUsernameError,
      setUsernameSuccess,
      setUsernameFailure,
      'Username cannot be blank',
      setUsernameBorderColor
    );
    engine(
      email,
      setEmailError,
      setEmailSuccess,
      setEmailFailure,
      'Email cannot be blank',
      setEmailBorderColor
    );
    engine(
      password,
      setPasswordError,
      setPasswordSuccess,
      setPasswordFailure,
      'Password cannot be blank',
      setPasswordBorderColor
    );
  };

  const engine = (
    value,
    setError,
    setSuccess,
    setFailure,
    message,
    setInputBorderColor
  ) => {
    if (value.trim() === '') {
      setError(message);
      setSuccess(false);
      setFailure(true);
      setInputBorderColor('2px solid red');
    } else {
      setError('');
      setSuccess(true);
      setFailure(false);
      setInputBorderColor('2px solid green');
    }
  };

  return (
    <div className='container'>
      <div className='content'>
        <div class='logo'>
          <img src={logo} alt='' />
        </div>
        <div class='image'></div>
        <div class='text'>
          Start for free & get <br />
          attractive offers today !
        </div>
      </div>
      <form id='form' onSubmit={handleSubmit}>
        <div class='social'>
          <div class='title'>Get Started</div>
          <div class='question'>
            Already Have an Account? <br />
            <span>Log In</span>
          </div>

          <div class='btn'>
            <div class='btn-1'>
              <img src='https://img.icons8.com/color/30/000000/google-logo.png' />
              sign Up
            </div>
            <div class='btn-2'>
              <img src='https://img.icons8.com/ios-filled/30/ffffff/facebook-new.png' />
              sign Up
            </div>
          </div>

          <div class='or'>Or</div>
        </div>
        <div>
          <label htmlFor='username'>User Name</label>
          <i class='fas fa-user'></i>
          <input
            type='text'
            name='username'
            id='username'
            placeholder='Joy Shaheb'
            style={{ border: usernameBorderColor }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <i
            className={`fas fa-exclamation-circle failure-icon`}
            style={{ display: usernameFailure ? 'inline' : 'none' }}
          ></i>
          <i
            className={`far fa-check-circle success-icon`}
            style={{ display: usernameSuccess ? 'inline' : 'none' }}
          ></i>
          <div className='error'>{usernameError}</div>
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <i className='far fa-envelope'></i>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='abc@gmail.com'
            style={{ border: emailBorderColor }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <i
            className={`fas fa-exclamation-circle failure-icon ${
              emailFailure ? '' : 'hidden'
            }`}
            style={{ display: emailFailure ? 'inline' : 'none' }}
          ></i>
          <i
            className={`far fa-check-circle success-icon ${
              emailSuccess ? '' : 'hidden'
            }`}
            style={{ display: emailSuccess ? 'inline' : 'none' }}
          ></i>
          <div className='error'>{emailError}</div>
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <i className='fas fa-lock'></i>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
            style={{ border: passwordBorderColor }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i
            className={`fas fa-exclamation-circle failure-icon ${
              passwordFailure ? '' : 'hidden'
            }`}
            style={{ display: passwordFailure ? 'inline' : 'none' }}
          ></i>
          <i
            className={`far fa-check-circle success-icon ${
              passwordSuccess ? '' : 'hidden'
            }`}
            style={{ display: passwordSuccess ? 'inline' : 'none' }}
          ></i>
          <div className='error'>{passwordError}</div>
        </div>

        <button type='submit' id='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignupForm;

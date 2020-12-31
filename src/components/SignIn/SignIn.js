import React, { useState } from 'react';

import { CustomButton } from '../CustomButton/CustomButton';
import { FormInput } from '../FormInput/FormInput';

import './SignIn.scss';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail('');
    setPassword('');
  }

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  }

  return (
    <div className='sign-in'>
      <h3>I already have an account</h3>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={onEmailChange}
          label='email'
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={onPasswordChange}
          label='password'
          required
        />
        <CustomButton type="submit">Sign in</CustomButton>
      </form>
    </div>
  )
}
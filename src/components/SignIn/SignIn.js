import React, { useState } from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { CustomButton } from '../CustomButton/CustomButton';
import { FormInput } from '../FormInput/FormInput';

import './SignIn.scss';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password)
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
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
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}
import { useState } from 'react';
import { connect } from 'react-redux';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import { CustomButton } from '../CustomButton/CustomButton';
import { FormInput } from '../FormInput/FormInput';

import {
  ButtonBarContainer,
  SignInContainer,
  SignInTitle
} from './SignIn.styles';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  }

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  }

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
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
        <ButtonBarContainer>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </ButtonBarContainer>
      </form>
    </SignInContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);
import { useState } from 'react';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import { googleSignInStart } from '../../redux/user/user.actions';

import { CustomButton } from '../CustomButton/CustomButton';
import { FormInput } from '../FormInput/FormInput';

import {
  ButtonBarContainer,
  SignInContainer,
  SignInTitle
} from './SignIn.styles';

const SignIn = ({ googleSignInStart }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(googleSignInStart);

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
  googleSignInStart: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps)(SignIn);
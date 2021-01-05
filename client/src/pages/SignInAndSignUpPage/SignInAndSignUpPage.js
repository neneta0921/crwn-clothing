import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp'

import { SignInAndSignUpContainer } from './SignInAndSignUpPageStyles'

export const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
)
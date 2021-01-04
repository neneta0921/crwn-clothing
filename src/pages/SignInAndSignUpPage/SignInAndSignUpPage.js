import SignIn from '../../components/SignIn/SignIn';
import { SignUp } from '../../components/SignUp/SignUp'

import { SignInAndSignUpContainer } from './SignInAndSignUpPage.styles'

export const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
)
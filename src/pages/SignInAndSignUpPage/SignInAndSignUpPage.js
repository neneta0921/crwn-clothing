import { SignIn } from '../../components/SignIn/SignIn';
import { SignUp } from '../../components/SignUp/SignUp'

import './SignInAndSignUpPage.scss';

export const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
)
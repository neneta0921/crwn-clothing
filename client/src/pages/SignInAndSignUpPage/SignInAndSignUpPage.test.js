import { shallow } from 'enzyme';

import SignInAndSignUpPage from './SignInAndSignUpPage';

it('should render SignInAndSignUpPage component', () => {
  expect(shallow(<SignInAndSignUpPage />)).toMatchSnapshot();
});

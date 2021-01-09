import renderer from 'react-test-renderer';

import { CustomButton } from './CustomButton';

it('should render CustomButton component', () => {
  const tree = renderer.create(<CustomButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

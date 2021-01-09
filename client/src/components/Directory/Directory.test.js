import renderer from 'react-test-renderer';

import { Directory } from './Directory';

it('should render Directory component', () => {
  const tree = renderer.create(<Directory sections={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});

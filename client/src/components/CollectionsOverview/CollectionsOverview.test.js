import renderer from 'react-test-renderer';

import { CollectionsOverview } from './CollectionsOverview';

it('should render CollectionsOverview component', () => {
  const tree = renderer.create(<CollectionsOverview collections={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});

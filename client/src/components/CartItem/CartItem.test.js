import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { CartItem } from './CartItem';

it('should render cartItem component', () => {
  const mockItem = {
    imageUrl: 'www.testImage.com',
    price: 10,
    name: 'hats',
    quantity: 3,
  };

  const tree = renderer.create(shallow(<CartItem item={mockItem} />)).toJSON();
  expect(tree).toMatchSnapshot();
});

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { CollectionItem } from './CollectionItem';

describe('CollectionItem component', () => {
  let wrapper;
  let mockAddItem;
  const imageUrl = 'www.testImage.com';
  const mockName = 'black hat';
  const mockPrice = 20;

  beforeEach(() => {
    mockAddItem = jest.fn();
    const mockProps = {
      item: {
        imageUrl: imageUrl,
        price: mockPrice,
        name: mockName,
      },
      addItem: mockAddItem,
    };
    wrapper = shallow(<CollectionItem {...mockProps} />);
  });

  it('should render CollectionItem component', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call addItem when AddButton clicked', () => {
    wrapper.find('AddButton').simulate('click');
    expect(mockAddItem).toHaveBeenCalled();
  });

  it('should render imageUrl as a prop on BackgroundImage', () => {
    expect(wrapper.find('BackgroundImage').prop('imageUrl')).toBe(imageUrl);
  });

  it('should render name prop in NameContainer', () => {
    expect(wrapper.find('NameContainer').text()).toBe(mockName);
  });

  it('should render price prop in PriceContainer', () => {
    const price = parseInt(wrapper.find('PriceContainer').text());
    expect(price).toBe(mockPrice);
  });
});

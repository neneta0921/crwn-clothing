import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { MenuItem } from './MenuItem';

describe('MenuItem component', () => {
  let wrapper;
  let mockMatch;
  let mockHistory;
  const linkUrl = '/hats';
  const size = 'large';
  const imageUrl = 'testimage';

  beforeEach(() => {
    mockMatch = { url: './shop' };
    mockHistory = { push: jest.fn() };
    const mockProps = {
      match: mockMatch,
      history: mockHistory,
      linkUrl,
      size,
      title: 'hats',
      imageUrl,
    };

    wrapper = shallow(<MenuItem {...mockProps} />);
  });

  it('should render MenuItem component', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call history.push with the right string whn MenuItemContainer clicked', () => {
    wrapper.find('MenuItemContainer').simulate('click');
    expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.url}${linkUrl}`);
  });

  it('should pass size to MenuItemContainer as the prop size', () => {
    expect(wrapper.find('MenuItemContainer').prop('size')).toBe(size);
  });

  it('should pass imageUrl to BackgroundImageContainer as the prop imageUrl', () => {
    expect(wrapper.find('BackgroundImageContainer').prop('imageUrl')).toBe(imageUrl);
  });
});

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { CollectionPreview } from './CollectionPreview';

describe('CollectionPreview component', () => {
  let wrapper;
  let mockMatch;
  let mockHistory;
  const mockRouteName = 'hats';

  beforeEach(() => {
    mockMatch = { path: '/shop' };
    mockHistory = { push: jest.fn() };
    const mockProps = {
      match: mockMatch,
      history: mockHistory,
      routeName: mockRouteName,
      title: 'hats',
      items: [],
    };

    wrapper = shallow(<CollectionPreview {...mockProps} />);
  });

  it('should render CollectionPreview component', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call history.push with the right string when TitleContainer clicked', () => {
    wrapper.find('.title-container').simulate('click');
    expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.path}/${mockRouteName}`);
  });
});

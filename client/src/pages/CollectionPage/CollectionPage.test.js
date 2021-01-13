import { shallow } from 'enzyme';

import { CollectionPage } from './CollectionPage';
import CollectionItem from '../../components/CollectionItem/CollectionItem';

describe('CollectionPage', () => {
  let wrapper;
  let mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];
  beforeEach(() => {
    const mockCollection = {
      items: mockItems,
      title: 'Test',
    };
    wrapper = shallow(<CollectionPage collection={mockCollection} />);
  });

  it('should render CollectionPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the same number of CollectionsItems as collection array', () => {
    expect(wrapper.find(CollectionItem).length).toBe(mockItems.length);
  });
});

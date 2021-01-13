import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { CartIcon } from './CartIcon';

describe('CartIcon component', () => {
  let wrapper;
  let mockToggleCartHidden;

  beforeEach(() => {
    mockToggleCartHidden = jest.fn();
    const mockProps = {
      itemCount: 0,
      toggleCartHidden: mockToggleCartHidden,
    };
    wrapper = shallow(<CartIcon {...mockProps} />);
  });

  it('should render CartIcon component', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call toggleCartHidden when icon is clicked', () => {
    wrapper.find('CartIconContainer').simulate('click');
    expect(mockToggleCartHidden).toHaveBeenCalled();
  });

  it('should render the itemCount as the text', () => {
    const itemCount = parseInt(wrapper.find('ItemCountContainer').text());
    expect(itemCount).toBe(0);
  });
});

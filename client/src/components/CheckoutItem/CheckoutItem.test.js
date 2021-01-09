import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { CheckoutItem } from './CheckoutItem';

describe('CheckoutItem component', () => {
  let wrapper;
  let mockClearItem;
  let mockAddItem;
  let mockRemoveItem;

  beforeEach(() => {
    mockClearItem = jest.fn();
    mockAddItem = jest.fn();
    mockRemoveItem = jest.fn();
    const mockProps = {
      cartItem: {
        imageUrl: 'www.testImage.com',
        price: 20,
        name: 'hats',
        quantity: 3,
      },
      clearItem: mockClearItem,
      addItem: mockAddItem,
      removeItem: mockRemoveItem,
    };
    wrapper = shallow(<CheckoutItem {...mockProps} />);
  });

  it('should render CheckoutItem component', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call clearItem when remove button is clicked', () => {
    wrapper.find('.remove-button').simulate('click');
    expect(mockClearItem).toHaveBeenCalled();
  });

  it('should call removeItem when left minus is clicked', () => {
    wrapper.find('.quantity-container').childAt(0).simulate('click');
    expect(mockRemoveItem).toHaveBeenCalled();
  });

  it('should call addItem when rihgt plus is clicked', () => {
    wrapper.find('.quantity-container').childAt(2).simulate('click');
    expect(mockAddItem).toHaveBeenCalled();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { CartDropdown } from './CartDropdown';

import CartItem from '../CartItem/CartItem';

import { toggleCartHidden } from '../../redux/cart/cartActions';

describe('CartDropdown component', () => {
  let wrapper;
  let mockHistory;
  let mockDispatch;
  const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeEach(() => {
    mockHistory = { push: jest.fn() };
    mockDispatch = jest.fn();
    const mockProps = {
      cartItems: mockCartItems,
      history: mockHistory,
      dispatch: mockDispatch,
    };
    wrapper = shallow(<CartDropdown {...mockProps} />);
  });

  it('should render CartDropdown component', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call history.push when button is clicked', () => {
    wrapper.find('CartDropdownButton').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
  });

  it('should render an equal number of CartItem components as the cartItems prop', () => {
    expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
  });

  it('should render EmptyMessageContainer if cartItems is empty', () => {
    const mockProps = { cartItems: [], history: mockHistory, dispatch: mockDispatch };
    const newWrapper = shallow(<CartDropdown {...mockProps} />);
    expect(newWrapper.exists('EmptyMessageContainer')).toEqual(true);
  });
});

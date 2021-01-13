import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { FormInput } from './FormInput';

describe('FormInput component', () => {
  let wrapper;
  let mockHandleChange;

  beforeEach(() => {
    mockHandleChange = jest.fn();
    const mockProps = {
      label: 'email',
      value: 'test@gmail.com',
      handleChange: mockHandleChange,
    };

    wrapper = shallow(<FormInput {...mockProps} />);
  });

  it('should render FormInput component', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call handleChange method when input changes', () => {
    wrapper.find('FormInputContainer').simulate('change');
    expect(mockHandleChange).toHaveBeenCalled();
  });

  it('should render FormInputLabel if there is a label', () => {
    expect(wrapper.exists('FormInputLabel')).toBe(true);
  });

  it('should not render FormInputLabel if there is no label', () => {
    const mockNewProps = {
      label: '',
      value: 'test@gmail.com',
      handleChange: mockHandleChange,
    };

    const newWrapper = shallow(<FormInput {...mockNewProps} />);
    expect(newWrapper.exists('FormInputLabel')).toBe(false);
  });
});

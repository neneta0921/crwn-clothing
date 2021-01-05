import {
  FormInputContainer,
  FormInputLabel,
  GroupContainer
} from './FormInputStyles'

export const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label
      ? (<FormInputLabel>
          { label }
        </FormInputLabel>)
      : null
    }
  </GroupContainer>
)
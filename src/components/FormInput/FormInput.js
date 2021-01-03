import {
  FormInputContainer,
  FormInputLabel,
  GroupContainer
} from './FormInput.styles'

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
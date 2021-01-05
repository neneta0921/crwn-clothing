import { CustomButtonContainer }  from './CustomButtonStyles'

export const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>
    {children}
  </CustomButtonContainer>
)
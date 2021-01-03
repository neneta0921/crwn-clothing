import { CustomButtonContainer }  from './CustomButtonComponents'

export const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>
    {children}
  </CustomButtonContainer>
)
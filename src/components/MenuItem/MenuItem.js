import { withRouter } from 'react-router-dom';

import {
  BackgroundImageContainer,
  MenuItemContainer,
  ContentContainer,
  ContentSubtitle,
  ContentTitle
} from './MenuItem.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImageContainer className='background-image' imageUrl={imageUrl} />
    <ContentContainer className='content'>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
)

export default withRouter(MenuItem)
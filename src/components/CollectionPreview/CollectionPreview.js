import { CollectionItem } from '../CollectionItem/CollectionItem';
import './CollectionPreview.scss';

export const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h2 className='title'>{title.toUpperCase()}</h2>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({id, ...otherItemProps}) => (
          <CollectionItem key={id} {...otherItemProps} />
      ))}
    </div>
  </div>
)
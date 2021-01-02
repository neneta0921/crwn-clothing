import { CollectionPreview } from '../../components/CollectionPreview/CollectionPreview';
import { SHOP_DATA } from '../../data/ShopData'

export const ShopPage = () => (
  <div className='shop-page'>
    {
      SHOP_DATA.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))
    }
  </div>
)
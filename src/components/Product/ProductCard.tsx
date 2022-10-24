import { FC, memo } from 'react'
import { useGetProductImagesQuery } from '../../services/products.api'
import { Button } from '../UI'
import styles from './Product.module.css'

interface IProps {
  id: string | number
  name: string
  category_id: number
  description: string
}
const ProductCard: FC<IProps> = ({ name, id, category_id, description }) => {
  const { data } = useGetProductImagesQuery({
    sort: '',
    range: '',
    filter: `{"product_id": ${id}}`,
  })

  const imageUrl =
    data && data.length > 0
      ? `https://test2.sionic.ru${data[0]?.image_url}`
      : 'https://deconova.eu/wp-content/uploads/2016/02/default-placeholder.png'

  return (
    <div className={styles.product_card}>
      <div className={styles.product_image}>
        <img src={imageUrl} alt={name} />
      </div>
      {name}
      <div>
        <Button title="Добавить в корзину" />
      </div>
    </div>
  )
}

export default memo(ProductCard)

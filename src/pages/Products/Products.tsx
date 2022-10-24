import { FC, memo } from 'react'
import { ProductCard } from '../../components/Product'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useGetCategoryQuery } from '../../services/sionic.api'
import { useGetProductsQuery } from '../../services/products.api'
import { IProduct } from '../../utils/types'
import styles from './Products.module.css'

const Products: FC = () => {
  const { currentCategory } = useTypedSelector((state) => state.reducer)
  const { data: categoty } = useGetCategoryQuery(
    { id: currentCategory || '' },
    {
      refetchOnMountOrArgChange: true,
    }
  )

  const { data } = useGetProductsQuery({
    range: `[${[0, 24].join(',')}]`,
    sort: `[${[].join(',')}]`,
    filter: `{
      "category_id": ${categoty?.id}
    }`,
  })

  console.log('data', data, categoty, currentCategory)

  return (
    <div className={styles.products_container}>
      Products {currentCategory} {categoty?.name}
      {data && (
        <div className={styles.products}>
          {data.map((product: IProduct) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              category_id={product.category_id}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default memo(Products)

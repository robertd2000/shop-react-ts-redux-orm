import { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import { useGetCategoriesQuery } from '../../services/sionic.api'
import { useActions } from '../../hooks/useActions'
import { RouteNames } from '../../routes'

const Home: FC = () => {
  const { data, isFetching, isLoading } = useGetCategoriesQuery({
    sort: [],
    range: [],
  })
  const { setCategory } = useActions()

  console.log(data)

  return (
    <div>
      {data &&
        !isFetching &&
        data.map((category) => (
          <div key={category.id}>
            <Link
              onClick={() => setCategory(category.id)}
              to={RouteNames.PRODUCTS}
            >
              {category.name}
            </Link>
          </div>
        ))}
    </div>
  )
}

export default memo(Home)

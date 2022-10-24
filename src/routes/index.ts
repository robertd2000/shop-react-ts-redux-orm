import Home from '../pages/Home/Home'
import Cart from '../pages/Cart/Cart'
import Products from '../pages/Products/Products'
import Product from '../pages/Product/Product'

export interface IRoute {
  path: string
  element: React.ComponentType
}

export enum RouteNames {
  HOME = '/',
  PRODUCTS = '/products',
  PRODUCT = '/products/:id',
  CART = '/cart',
}

export const routes: IRoute[] = [
  { path: RouteNames.HOME, element: Home },
  { path: RouteNames.PRODUCTS, element: Products },
  { path: RouteNames.PRODUCT, element: Product },
  { path: RouteNames.CART, element: Cart },
]

import {
  IProduct,
  IProductImage,
  IProductVariation,
  IProductVariationProperty,
  IProductVariationPropertyListValue,
  IProductVariationPropertyValue,
} from '../utils/types'
import { api } from './sionic.api'

api.injectEndpoints({
  endpoints: (builder) => ({
    //Products
    getProducts: builder.query<
      IProduct[],
      { sort: string[]; range: number[]; filter: { category_id: number } }
    >({
      query: ({ sort = [], range = [], filter }) => {
        return `Products?sort=${sort}&range=${range}&filter=${filter}`
      },
    }),
    getProduct: builder.query<IProduct, { id: number }>({
      query: ({ id }) => `Products/${id}`,
    }),
    //ProductImages
    getProductImages: builder.query<
      IProductImage[],
      { sort: string[]; range: number[]; filter: { product_id: number } }
    >({
      query: ({ sort = [], range = [], filter }) =>
        `ProductImages?sort=${sort}&range=${range}}&filter=${filter}`,
    }),
    getProductImage: builder.query<IProductImage, { id: number }>({
      query: ({ id }) => `ProductImages/${id}`,
    }),

    //ProductVariations
    getProductVariations: builder.query<IProductVariation[], null>({
      query: () => `ProductVariations`,
    }),
    getProductVariation: builder.query<IProductVariation, { id: number }>({
      query: ({ id }) => `ProductVariations/${id}`,
    }),
    //Свойства вариаций: ProductVariationProperties
    getProductVariationProperties: builder.query<
      IProductVariationProperty[],
      null
    >({
      query: () => `ProductVariationProperties`,
    }),
    getProductVariationProperty: builder.query<
      IProductVariationProperty,
      { id: number }
    >({
      query: ({ id }) => `ProductVariationProperties/${id}`,
    }),

    //ProductVariationPropertyListValues
    getProductVariationPropertyListValues: builder.query<
      IProductVariationPropertyListValue[],
      null
    >({
      query: () => `ProductVariationProperties`,
    }),
    getProductVariationPropertyListValue: builder.query<
      IProductVariationPropertyListValue,
      { id: number }
    >({
      query: ({ id }) => `ProductVariationProperties/${id}`,
    }),

    //ProductVariationPropertyValues
    getProductVariationPropertyValues: builder.query<
      IProductVariationPropertyValue[],
      null
    >({
      query: () => `ProductVariationProperties`,
    }),
    getProductVariationPropertyValue: builder.query<
      IProductVariationPropertyValue,
      { id: number }
    >({
      query: ({ id }) => `ProductVariationProperties/${id}`,
    }),
  }),
})

export const { useGetProductsQuery, useGetProductImagesQuery } = api

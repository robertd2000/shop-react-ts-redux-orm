import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICategory } from "../utils/types";

const baseUrl = "https://test2.sionic.ru/api/";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    //Categories
    getCategories: builder.query<
      ICategory[],
      { sort: string[]; range: number[] }
    >({
      query: ({ sort = [], range = [] }) =>
        `Categories?sort=${sort}&range=${range}}`
    }),
    getCategory: builder.query<ICategory, { id: number | string }>({
      query: ({ id }) => {
        return `Categories/${id}`;
      }
    })
  })
});

export const { useGetCategoriesQuery, useGetCategoryQuery } = api;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({}),
})

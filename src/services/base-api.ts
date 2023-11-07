import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.flashcards.andrii.es',
  credentials: 'include',
  prepareHeaders: headers => {
    headers.append('x-auth-skip', 'true')
  },
})

export const baseApi = createApi({
  baseQuery,
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['Decks'],
})

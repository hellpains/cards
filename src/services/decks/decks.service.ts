import { baseApi } from '@/services/base-api'

import { DecksResponse } from './decks.types'

export const DecksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<any, any>({
        invalidatesTags: ['Decks'],
        query: (body: any) => ({
          body,
          method: 'POST',
          url: `v1/decks`,
        }),
      }),
      getDecks: builder.query<DecksResponse, void>({
        providesTags: ['Decks'],
        query: () => `v1/decks`,
      }),
    }
  },
})

export const { useCreateDeckMutation, useGetDecksQuery } = DecksService

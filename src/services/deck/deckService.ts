import { baseApi } from '@/services/base-api'
import { GetDeckResponse } from '@/services/deck/deck.types'

export const deckService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDeck: builder.query<GetDeckResponse, string>({
        providesTags: ['Cards'],
        query: id => `v1/cards/${id}`,
      }),
    }
  },
})

export const { useGetDeckQuery } = deckService

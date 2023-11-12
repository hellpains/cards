import { baseApi } from '@/services/base-api'
import { GetCardsResponse } from '@/services/cards/cards.types'

export const cardsService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getCards: builder.query<GetCardsResponse, string>({
        providesTags: ['Cards'],
        query: id => `v1/cards/${id}`,
      }),
    }
  },
})

export const { useGetCardsQuery } = cardsService

import { baseApi } from '@/services/base-api'

import { LoginArgs, UpdateUserBody, UpdateUserResponse, User } from './auth.types'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<void, LoginArgs>({
        invalidatesTags: ['Me'],
        query: body => ({
          body,
          method: 'POST',
          url: `v1/auth/login`,
        }),
      }),
      logout: builder.mutation<void, void>({
        invalidatesTags: ['Me'],
        query: () => ({
          method: 'POST',
          url: `v1/auth/logout`,
        }),
      }),
      me: builder.query<User, void>({
        providesTags: ['Me'],
        query: () => `v1/auth/me`,
      }),
      recoverPassword: builder.mutation<any, any>({
        query: email => ({
          body: {
            email,
            html: '<h1>Hi, ##name##</h1><p>Click <a href="/new-password/##token##">here</a> to recover your password </p>',
            subject: 'Сброс пароля',
          },
          method: 'POST',
          url: `v1/auth/recover-password`,
        }),
      }),
      resetPassword: builder.mutation<string, any>({
        query: body => ({
          body: { password: body.password },
          method: 'POST',
          url: `v1/auth/reset-password/${body.token}`,
        }),
      }),
      signUp: builder.mutation<any, any>({
        query: body => ({
          body,
          method: 'POST',
          url: `v1/auth/sign-up`,
        }),
      }),
      updateUser: builder.mutation<UpdateUserResponse, UpdateUserBody>({
        invalidatesTags: ['Me'],
        query: body => {
          const formData = new FormData()

          body.avatar && formData.append('avatar', body.avatar)
          body.name && formData.append('name', body.name)

          return {
            body: formData,
            formData: true,
            method: 'PATCH',
            url: `v1/auth/me`,
          }
        },
      }),
    }
  },
})

export const {
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
  useRecoverPasswordMutation,
  useResetPasswordMutation,
  useSignUpMutation,
  useUpdateUserMutation,
} = authService

import { useState } from 'react'

import {
  // CheckEmail,
  // ForgotPassword,
  Header,
  SignIn,
  // PersonalInformation,
  // SignIn,
  // SignUpj,
} from '@/components'
import { useGetDecksQuery } from '@/services/decks/decks.service'

export const SignInPage = () => {
  const [value, setValue] = useState('')
  const { data } = useGetDecksQuery()

  console.log(data)

  return (
    <div>
      <div style={{ height: '100px' }}></div>
      <input onChange={e => setValue(e.currentTarget.value)} type={'text'} value={value} />
      <Header />
      <SignIn onSubmit={() => {}} />
    </div>
  )
}

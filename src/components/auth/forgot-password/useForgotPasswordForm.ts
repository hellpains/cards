import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const forgotPasswordSchema = z.object({
  email: z.string().email(),
})

export type FormValues = z.infer<typeof forgotPasswordSchema>
export const useForgotPasswordForm = () => {
  return useForm<FormValues>({
    defaultValues: { email: '' },
    resolver: zodResolver(forgotPasswordSchema),
  })
}

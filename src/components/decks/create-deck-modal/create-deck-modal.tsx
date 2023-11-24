import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/components'
import { ControlledTextField } from '@/components/controlled/controlled-textField'
import { Dialog, DialogProps } from '@/components/ui/dialog'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './create-deck-modal.module.scss'

const CreateDeckSchema = z.object({
  isPrivate: z.boolean(),
  name: z.string(),
})

type FormValues = z.infer<typeof CreateDeckSchema>

type DeckModalProps = Pick<DialogProps, 'onCancel' | 'onOpenChange' | 'open'> & {
  defaultValues?: any
  onConfirm: any
}
export const CreateDeckModal = ({
  defaultValues = { isPrivate: false, name: '' },
  onCancel,
  onConfirm,
  ...dialogProps
}: DeckModalProps) => {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(CreateDeckSchema),
  })

  const onSubmit = handleSubmit(data => {
    onConfirm(data)
    dialogProps.onOpenChange?.(false)
    reset()
  })
  const handleCancel = () => {
    reset()
    onCancel?.()
  }

  return (
    <Dialog
      confirmText={'Add New Deck'}
      onCancel={handleCancel}
      onConfirm={onSubmit}
      title={'Add New Deck'}
      {...dialogProps}
    >
      <form onSubmit={onSubmit}>
        <div className={s.container}>
          <ControlledTextField control={control} label={'Name Deck'} name={'name'} />
          <ControlledCheckbox control={control} label={'Private deck'} name={'isPrivate'} />
        </div>
      </form>
    </Dialog>
  )
}

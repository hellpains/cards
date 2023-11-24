import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/components'
import { ControlledTextField } from '@/components/controlled/controlled-textField'
import { Dialog, DialogProps } from '@/components/ui/dialog'
import { UpdateDeckData } from '@/services'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './update-deck-modal.module.scss'

const UpdateDeckSchema = z.object({
  isPrivate: z.boolean(),
  name: z.string(),
})

type FormValues = z.infer<typeof UpdateDeckSchema>

type Props = Pick<DialogProps, 'onCancel' | 'onOpenChange' | 'open'> & {
  defaultValues?: UpdateDeckData
  onConfirm: (data: UpdateDeckData) => void
}
export const UpdateDeckModal = ({
  defaultValues = {
    isPrivate: false,
    name: '',
  },
  onCancel,
  onConfirm,
  ...modalProps
}: Props) => {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(UpdateDeckSchema),
  })

  const onSubmitHandler = handleSubmit((data: UpdateDeckData) => {
    onConfirm(data)
    modalProps.onOpenChange?.(false)
    reset()
  })
  const handleCancel = () => {
    reset()
    onCancel?.()
  }

  return (
    <Dialog
      confirmText={'Save Changes'}
      onCancel={handleCancel}
      onConfirm={onSubmitHandler}
      title={'Edit Deck'}
      {...modalProps}
    >
      <form onSubmit={onSubmitHandler}>
        <div className={s.container}>
          <ControlledTextField control={control} label={'Name Deck'} name={'name'} />
          <ControlledCheckbox control={control} label={'Private deck'} name={'isPrivate'} />
        </div>
      </form>
    </Dialog>
  )
}

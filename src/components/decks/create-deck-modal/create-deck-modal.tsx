import { useForm } from 'react-hook-form'

import { ControlledCheckbox, Modal } from '@/components'
import { ControlledTextField } from '@/components/controlled/controlled-textField'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './create-deck-modal.module.scss'

const CreateDeckSchema = z.object({
  isPrivate: z.boolean(),
  name: z.string(),
})

type FormValues = z.infer<typeof CreateDeckSchema>

type DeckModalProps = {
  defaultValues?: any
  onConfirm: any
  open: boolean
  setOpen: (open: boolean) => void
}
export const CreateDeckModal = ({
  defaultValues = {
    isPrivate: false,
    name: '',
  },
  onConfirm,
  open,
  setOpen,
  ...modalProps
}: DeckModalProps) => {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(CreateDeckSchema),
  })

  const onSubmitHandler = handleSubmit(data => {
    onConfirm(data)
    setOpen(false)
    reset()
  })

  return (
    <Modal
      confirmText={'Add New Pack'}
      handleCancel={() => setOpen(false)}
      handleConfirm={onSubmitHandler}
      open={open}
      setOpen={setOpen}
      title={'Add New Deck'}
      {...modalProps}
    >
      <form onSubmit={onSubmitHandler}>
        <div className={s.container}>
          <ControlledTextField control={control} label={'Name Deck'} name={'name'} />
          <ControlledCheckbox control={control} label={'Private deck'} name={'isPrivate'} />
        </div>
      </form>
    </Modal>
  )
}

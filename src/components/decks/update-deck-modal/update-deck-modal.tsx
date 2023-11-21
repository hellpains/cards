import { useForm } from 'react-hook-form'

import { ControlledCheckbox, Modal } from '@/components'
import { ControlledTextField } from '@/components/controlled/controlled-textField'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './update-deck-modal.module.scss'

const UpdateDeckSchema = z.object({
  isPrivate: z.boolean(),
  name: z.string(),
})

type FormValues = z.infer<typeof UpdateDeckSchema>
type Data = { isPrivate: boolean; name: string }

type Props = {
  defaultValues?: Data
  dontShowTrigger?: boolean
  onConfirm: (data: Data) => void
  open: boolean
  setOpen: (open: boolean) => void
}
export const UpdateDeckModal = ({
  defaultValues = {
    isPrivate: false,
    name: '',
  },
  dontShowTrigger,
  onConfirm,
  open,
  setOpen,
  ...modalProps
}: Props) => {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(UpdateDeckSchema),
  })

  const onSubmitHandler = handleSubmit((data: Data) => {
    onConfirm(data)
    setOpen(false)
    reset()
  })

  return (
    <Modal
      confirmText={'Save Changes'}
      dontShowTrigger={dontShowTrigger}
      handleCancel={() => setOpen(false)}
      handleConfirm={onSubmitHandler}
      open={open}
      setOpen={setOpen}
      title={'Edit Deck'}
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

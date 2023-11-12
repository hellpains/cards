import { Modal, Typography } from '@/components'

import s from './delete-deck-modal.module.scss'

type Props = {
  deckToDeleteName: string | undefined
  defaultValues?: any
  dontShowTrigger?: boolean
  onConfirm: any
  open: boolean
  setOpen: (open: boolean) => void
}
export const DeleteDeckModal = ({
  deckToDeleteName,
  dontShowTrigger,
  onConfirm,
  open,
  setOpen,
  ...modalProps
}: Props) => {
  return (
    <Modal
      confirmText={'Delete Deck'}
      dontShowTrigger={dontShowTrigger}
      handleCancel={() => setOpen(false)}
      handleConfirm={onConfirm}
      open={open}
      setOpen={setOpen}
      title={'Delete Deck'}
      {...modalProps}
    >
      <div className={s.container}>
        <Typography>
          Do you really want to remove <b>{deckToDeleteName}</b>? All cards will be deleted.
        </Typography>
      </div>
    </Modal>
  )
}

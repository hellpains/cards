import { Typography } from '@/components'
import { Dialog, DialogProps } from '@/components/ui/dialog'

import s from './delete-deck-modal.module.scss'

type Props = Pick<DialogProps, 'onCancel' | 'onOpenChange' | 'open'> & {
  deckToDeleteName: string | undefined
  onConfirm: any
}
export const DeleteDeckModal = ({ deckToDeleteName, onConfirm, ...modalProps }: Props) => {
  return (
    <Dialog confirmText={'Delete Deck'} onConfirm={onConfirm} title={'Delete Deck'} {...modalProps}>
      <div className={s.container}>
        <Typography>
          Do you really want to remove <b>{deckToDeleteName}</b>? All cards will be deleted.
        </Typography>
      </div>
    </Dialog>
  )
}

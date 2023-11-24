import { Button, Modal, ModalPropsType } from '@/components'

import s from './dialog.module.scss'

export type DialogProps = ModalPropsType & {
  cancelText?: string
  confirmText?: string
  onCancel?: () => void
  onConfirm?: () => void
}
export const Dialog = ({
  cancelText = 'Cancel',
  children,
  confirmText = 'OK',
  onCancel,
  onConfirm,
  ...rest
}: DialogProps) => {
  return (
    <Modal {...rest}>
      {children}
      <div className={s.buttons}>
        <Button onClick={onCancel} variant={'secondary'}>
          {cancelText}
        </Button>
        <Button onClick={onConfirm}>{confirmText}</Button>
      </div>
    </Modal>
  )
}

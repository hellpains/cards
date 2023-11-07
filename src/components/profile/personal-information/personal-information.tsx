import { ChangeEvent, useState } from 'react'

import { Edit, Logout } from '@/assets'
import { Button, Card, TextField, Typography } from '@/components'
import { Image } from '@/components/ui/image'

import s from './personal-information.module.scss'

type Props = {
  avatarUrl?: string
  email?: string
  name?: string
}
export const PersonalInformation = ({
  avatarUrl = 'https://sunmag.me/wp-content/uploads/2019/11/sunmag-005-small-avatar.png',
  email = 'rustam2004sadulaev@mail.ru',
  name = 'hellpains',
}: Props) => {
  const [edit, setEdit] = useState(false)
  const [nickname, setNickname] = useState(name)

  const onChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.currentTarget.value)
  }
  const onSavedChanges = () => {
    setEdit(false)
    setNickname(name)
  }

  return (
    <Card className={s.personalInformation}>
      <Typography className={s.title} variant={'large'}>
        Personal Information
      </Typography>
      <div className={s.avatar}>
        <Image height={96} src={avatarUrl} width={96} />
        <div className={s.editAvatar}>
          <Edit />
        </div>
      </div>
      {!edit ? (
        <div>
          <div className={s.nameContainer}>
            <Typography className={s.name} variant={'h1'}>
              {name}
            </Typography>
            <div className={s.edit} onClick={() => setEdit(prev => !prev)}>
              <Edit />
            </div>
          </div>
          <Typography className={s.email} variant={'body2'}>
            {email}
          </Typography>
          <div className={s.button}>
            <Button variant={'secondary'}>
              <div className={s.buttonIcon}>
                <Logout />
              </div>
              Logout
            </Button>
          </div>
        </div>
      ) : (
        <div className={s.changeName} style={{ padding: '0 36px' }}>
          <TextField
            className={s.input}
            label={'Nickmame'}
            onChange={onChangeNickname}
            value={nickname}
          />
          <Button className={s.buttonChangeName} fullWidth onClick={onSavedChanges}>
            Save Changes
          </Button>
        </div>
      )}
    </Card>
  )
}

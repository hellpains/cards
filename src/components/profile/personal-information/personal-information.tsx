import { ChangeEvent, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Edit, Logout } from '@/assets'
import { Button, Card, Typography } from '@/components'
import { ControlledTextField } from '@/components/controlled/controlled-textField'
import { Image } from '@/components/ui/image'
import { useLogoutMutation, useMeQuery, useUpdateUserMutation } from '@/services/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './personal-information.module.scss'

const updateUserSchema = z.object({
  name: z.string().min(3),
})

type FormValues = z.infer<typeof updateUserSchema>
export const PersonalInformation = () => {
  const [edit, setEdit] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [updateUser] = useUpdateUserMutation()
  const [logout] = useLogoutMutation()

  const { data: user } = useMeQuery()

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: user?.name,
    },
    resolver: zodResolver(updateUserSchema),
  })

  const onSubmit = (values: any) => {
    updateUser(values)
    setEdit(false)
  }
  const handleLogout = () => {
    logout()
  }

  return (
    <Card className={s.personalInformation}>
      <Typography className={s.title} variant={'large'}>
        Personal Information
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ChangeAvatar inputRef={inputRef} />
        {!edit && (
          <div>
            <div className={s.nameContainer}>
              <Typography className={s.name} variant={'h1'}>
                {user?.name}
              </Typography>
              <div className={s.edit} onClick={() => setEdit(prev => !prev)}>
                <Edit />
              </div>
            </div>
            <Typography className={s.email} variant={'body2'}>
              {user?.email}
            </Typography>
            <div className={s.button}>
              <Button onClick={handleLogout} variant={'secondary'}>
                <div className={s.buttonIcon}>
                  <Logout />
                </div>
                Logout
              </Button>
            </div>
          </div>
        )}
        {edit && (
          <div className={s.changeName}>
            <ControlledTextField
              className={s.input}
              control={control}
              label={'Nickmame'}
              name={'name'}
            />
            <Button className={s.buttonChangeName} fullWidth type={'submit'}>
              Save Changes
            </Button>
          </div>
        )}
      </form>
    </Card>
  )
}

type ChangeAvatarProps = {
  inputRef: any
}
const ChangeAvatar = ({ inputRef }: ChangeAvatarProps) => {
  const [updateUser] = useUpdateUserMutation()
  const { data: user } = useMeQuery()
  const selectFileHandler = () => {
    inputRef && inputRef.current?.click()
  }

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      updateUser({ avatar: file })
    }
  }

  return (
    <div className={s.avatar}>
      <Image
        height={96}
        src={user?.avatar ?? 'https://variety.com/wp-content/uploads/2021/04/Avatar.jpg'}
        width={96}
      />

      <button className={s.editAvatar} onClick={selectFileHandler} type={'button'}>
        <Edit />
      </button>
      <input
        accept={'image/jpeg, image/jpg'}
        name={'avatar'}
        onChange={uploadHandler}
        ref={inputRef}
        style={{ display: 'none' }}
        type={'file'}
      />
    </div>
  )
}

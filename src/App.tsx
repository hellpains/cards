import { Provider } from 'react-redux'

import { DropdownMenu } from '@/components/ui/dropdown-menu'
import { Image } from '@/components/ui/image'
import { Router } from '@/router'
import { store } from '@/services'

function App() {
  return (
    <Provider store={store}>
      <Router />
      <div
        style={{
          alignItems: 'center',
          backgroundColor: 'gray',
          display: 'flex',
          height: '200px',
          justifyContent: 'center',
          width: '600px',
        }}
      >
        <DropdownMenu email={'rustam2004sadulaev@mail.ru'} name={'hellpains'} variant={'edit'}>
          <Image
            height={36}
            src={'https://sunmag.me/wp-content/uploads/2019/11/sunmag-005-small-avatar.png'}
            width={36}
          />
        </DropdownMenu>
      </div>
    </Provider>
  )
}

export default App

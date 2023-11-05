import { Provider } from 'react-redux'

import { Card } from '@/components'
import { Router } from '@/router'

import { store } from './services/store'

function App() {
  return (
    <Provider store={store}>
      <Router />
      {/*<Card />*/}
    </Provider>
  )
}

export default App
// SignIn onSubmit={() => {}}

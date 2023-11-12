import { Provider } from 'react-redux'

import { Router } from '@/router'
import { store } from '@/services'
// import { useMeQuery } from '@/services/auth'

function App() {
  // const { data } = useMeQuery()

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App

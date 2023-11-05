import { Provider } from 'react-redux'

import { SignIn } from './components'
import { store } from './services/store'

function App() {
  return (
    <Provider store={store}>
      <SignIn onSubmit={() => {}} />
    </Provider>
  )
}

export default App

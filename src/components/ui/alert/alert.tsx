import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export const Alert = () => {
  return (
    <ToastContainer
      autoClose={5000}
      closeOnClick
      draggable={false}
      hideProgressBar={false}
      // limit={1}
      newestOnTop={false}
      pauseOnFocusLoss
      pauseOnHover
      position={'bottom-right'}
      rtl={false}
      theme={'colored'}
    />
  )
}

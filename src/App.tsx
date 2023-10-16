import { useState } from 'react'

import { Select } from '@/components/ui/select'

function App() {
  const [value, setValue] = useState('2')

  const options = [
    { title: 'Moscow', value: '1' },
    { title: 'Russia', value: '2' },
    { title: 'Minks', value: '3' },
    { title: 'Grozny', value: '4' },
  ]

  return (
    <div>
      <Select className={'asdfasdf'} options={options} setValue={setValue} value={value} />
    </div>
  )
}

export default App

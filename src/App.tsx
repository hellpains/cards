import { useState } from 'react'

import { Pagination } from '@/components'

const message = [
  { id: 1, message: '1' },
  { id: 2, message: '2' },
  { id: 3, message: '3' },
  { id: 4, message: '4' },
  { id: 5, message: '5' },
  { id: 6, message: '6' },
  { id: 7, message: '7' },
  { id: 8, message: '8' },
  { id: 9, message: '9' },
  { id: 10, message: '10' },
  { id: 11, message: '11' },
  { id: 12, message: '12' },
  { id: 13, message: '13' },
  { id: 14, message: '14' },
  { id: 15, message: '15' },
  { id: 16, message: '16' },
  { id: 17, message: '17' },
  { id: 18, message: '18' },
  { id: 19, message: '19' },
  { id: 20, message: '20' },
  { id: 21, message: '21' },
  { id: 22, message: '22' },
  { id: 23, message: '23' },
  { id: 24, message: '24' },
  { id: 25, message: '25' },
  { id: 26, message: '26' },
  { id: 27, message: '27' },
  { id: 28, message: '28' },
  { id: 29, message: '29' },
  { id: 30, message: '30' },
  { id: 31, message: '31' },
  { id: 32, message: '32' },
  { id: 33, message: '33' },
  { id: 34, message: '34' },
  { id: 35, message: '35' },
  { id: 36, message: '36' },
  { id: 37, message: '37' },
  { id: 39, message: '39' },
  { id: 40, message: '40' },
  { id: 41, message: '41' },
  { id: 42, message: '42' },
  { id: 43, message: '43' },
  { id: 44, message: '44' },
  { id: 45, message: '45' },
  { id: 46, message: '46' },
  { id: 47, message: '47' },
  { id: 48, message: '48' },
  { id: 49, message: '49' },
  { id: 50, message: '50' },
  { id: 51, message: '51' },
  { id: 52, message: '52' },
  { id: 53, message: '53' },
  { id: 54, message: '54' },
  { id: 55, message: '55' },
  { id: 56, message: '56' },
  { id: 57, message: '57' },
  { id: 58, message: '58' },
  { id: 59, message: '59' },
  { id: 60, message: '60' },
  { id: 61, message: '61' },
  { id: 62, message: '62' },
  { id: 63, message: '63' },
  { id: 64, message: '64' },
  { id: 65, message: '65' },
  { id: 66, message: '66' },
  { id: 67, message: '67' },
  { id: 68, message: '68' },
  { id: 69, message: '69' },
  { id: 70, message: '70' },
  { id: 71, message: '71' },
]

function App() {
  const [page, setPage] = useState(5)
  const [limit, setLimit] = useState(5)

  const array = []

  for (let i = (page - 1) * limit; i < page * limit && message[i]; i++) {
    array.push(message[i])
  }

  const totalPage = Math.ceil(message.length / limit)

  return (
    <div>
      <ul>
        {array.map((post, i) => (
          <li key={i}>{post.message}</li>
        ))}
      </ul>
      <Pagination
        limit={limit}
        page={page}
        setLimit={setLimit}
        setPage={setPage}
        totalPage={totalPage}
      />
    </div>
  )
}

export default App

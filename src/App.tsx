import { useEffect, useState } from 'react'

import { Pagination } from '@/components'
import axios from 'axios'

export type PhotoType = {
  albumId: number
  id: number
  thumbnailUrl: string
  title: string
  url: string
}

function App() {
  const [posts, setPosts] = useState<PhotoType[]>([])
  const [page, setPage] = useState(2)
  const [limit, setLimit] = useState(10)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`)

      setPosts(res.data)
    }

    fetchPosts()
  }, [])

  const indexOfLastPost = page * limit
  const indexOfFirstPost = indexOfLastPost - limit
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber: number) => setPage(pageNumber)

  const totalPage = Math.ceil(posts.length / limit)

  return (
    <div>
      <h1>Posts</h1>
      <div>
        <ul>
          {currentPosts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
      <Pagination
        limit={limit}
        page={page}
        paginate={paginate}
        setLimit={setLimit}
        setPage={setPage}
        totalPage={totalPage}
      />
    </div>
  )
}

export default App

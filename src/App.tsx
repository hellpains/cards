import { useEffect, useState } from 'react'

import { Pagination } from '@/components'
import axios from 'axios'

type PhotoType = {
  albumId: number
  id: number
  thumbnailUrl: string
  title: string
  url: string
}

function App() {
  const [posts, setPosts] = useState<PhotoType[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState('10')

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`)

      setPosts(res.data)
    }

    fetchPosts()
  }, [])

  const indexOfLastPost = currentPage * +limit
  const indexOfFirstPost = indexOfLastPost - +limit
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

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
        currentPage={currentPage}
        limit={limit}
        paginate={paginate}
        setCurrentPage={setCurrentPage}
        setLimit={setLimit}
        totalPosts={posts.length}
      />
    </div>
  )
}

export default App

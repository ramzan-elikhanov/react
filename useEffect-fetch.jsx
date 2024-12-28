import { useEffect, useState } from 'react'

export default function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    async function getData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      if (data && data.length) setData(data)
    }

    getData()
  }, [])
  return (
    <>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}

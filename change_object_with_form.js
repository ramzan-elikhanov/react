import { useState } from 'react'

export default function Profile() {
  const [newName, setNewName] = useState('')
  const [newAge, setNewAge] = useState('')
  const [user, setUser] = useState({
    name: 'ramzan',
    age: 38,
  })

  const addNewName = (event) => {
    setNewName(event.target.value)
  }

  const addNewAge = (event) => {
    setNewAge(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({ ...user, name: newName, age: newAge })
    setNewName('')
    setNewAge('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new name"
          onChange={addNewName}
          value={newName}
        />
        <input
          type="text"
          placeholder="Add new age"
          onChange={addNewAge}
          value={newAge}
        />
        <button type="submit">Change Info</button>
      </form>

      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
    </>
  )
}

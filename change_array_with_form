import { useState } from 'react'

export default function TodoList() {
  const [items, setItems] = useState([])

  const [newItem, setNewItem] = useState('')

  const addNewItem = (e) => {
    setNewItem(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setItems([...items, newItem])
    setNewItem('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new item"
          value={newItem}
          onChange={addNewItem}
        />
        <button type="submit">Add item</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={Math.floor(Math.random() * 100)}>{item}</li>
        ))}
      </ul>
    </>
  )
}

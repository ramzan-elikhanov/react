import { useState } from 'react'

export default function ShoppingList() {
  const [nameProduct, setNameProduct] = useState('')
  const [quantityProduct, setQuantityProduct] = useState('')
  const [products, setProducts] = useState([])

  const addProduct = (event) => {
    setNameProduct(event.target.value)
  }

  const addQuantityProduct = (event) => {
    setQuantityProduct(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newProduct = {
      id: Math.floor(Math.random() * 1000),
      name: nameProduct,
      quantity: quantityProduct,
    }
    setProducts([...products, newProduct])
    setNameProduct('')
    setQuantityProduct('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add name product"
          onChange={addProduct}
          value={nameProduct}
        />
        <input
          type="text"
          placeholder="Add quantity"
          onChange={addQuantityProduct}
          value={quantityProduct}
        />
        <button type="submit">Add Product</button>
      </form>
      <>
        {products.map(({ id, name, quantity }) => (
          <div key={id}>
            <h3>{name}</h3>
            <h3>{quantity}</h3>
          </div>
        ))}
      </>
    </>
  )
}

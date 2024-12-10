import React from 'react'

export default function Main() {
  
  const ingredients = ['Chicken', 'Oregano', 'Tomatoes']
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newIngredient = formData.get('ingredient')
    ingredients.push(newIngredient)
    console.log(ingredients)
  }
  
  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </main>
  )
}

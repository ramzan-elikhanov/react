import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {

  // const data = Object.fromEntries(formData)
  //   const dietaryRestrictions = formData.getAll('dietaryRestrictions')
  //   const allData = {
  //     ...data, 
  //     dietaryRestrictions
  //   }
  //   console.log(allData)

  function signUp(formData) {
    const email = formData.get("email")
    const password = formData.get("password")
    const employmentStatus = formData.get("employmentStatus")
    const dietaryRestrictions = formData.getAll("dietaryRestrictions")
    const favColor = formData.get("favColor")
    console.log(favColor)
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>

        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" defaultValue="This is a description"></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
        </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
        </label>
          <label>
            <input type="radio" name="employmentStatus" defaultChecked={true} value="full-time" />
            Full-time
        </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
        </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
        </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
            Gluten-free
        </label>
        </fieldset>

        <label htmlFor="favColor">What is your favorite color?</label>
        <select id="favColor" name="favColor" defaultValue="" required>
          <option value="" disabled>-- Choose a color --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>

        <button>Submit</button>

      </form>
    </section>
  )
}

// index.css

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 10px;
    background-color: #2DD4BF;
    color: #262626;
}

h1 {
    text-align: center;
}

form {
    padding-inline: 40px;
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 4px;
}

input[type="email"], input[type="password"] {
    border-radius: 100px;
    border: 1px solid #0D9488;
    height: 2rem;
    text-indent: 10px;
    margin-bottom: 20px;
}

textarea {
    margin-bottom: 20px;
}

input[type="checkbox"], input[type="radio"] {
    margin-right: 10px;
}

fieldset {
    border: 1px solid #262626;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
}

button {
    border-radius: 100px;
    border: 1px solid #0D9488;
    padding: 10px 30px;
    cursor: pointer;
    margin-top: 20px;
    transition: all 0.1s ease-in-out;
}

button:hover {
    background-color: #115E59;
    border-color: #042F2E;
    color: white;
}





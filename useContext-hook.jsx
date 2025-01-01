// App.jsx

import ComponentA from './components/ComponentA'
import { createContext } from 'react'

export const Name = createContext()
export const Age = createContext()

export default function App() {
  const name = 'Ramzan E.'
  const age = 38
  return (
    <Name.Provider value={name}>
      <Age.Provider value={age}>
        <ComponentA />
      </Age.Provider>
    </Name.Provider>
  )
}

// ComponentC.jsx

import { Name, Age } from '../App'
import { useContext } from 'react'

export default function ComponentC() {
  const name = useContext(Name)
  const age = useContext(Age)

  return (
    <h1>
      My name is {name} and I am {age} years old
    </h1>
  )
}



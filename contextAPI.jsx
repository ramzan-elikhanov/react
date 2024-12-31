// App.jsx

import ComponentA from './components/ComponentA'
import { createContext } from 'react'

export const Data = createContext()
export const Age = createContext()

export default function App() {
  const name = 'Ramzan E.'
  const age = 38
  return (
    <Data.Provider value={name}>
      <Age.Provider value={age}>
        <ComponentA />
      </Age.Provider>
    </Data.Provider>
  )
}

// ComponentC.jsx

import { Data, Age } from '../App'

export default function ComponentC() {
  return (
    <Data.Consumer>
      {(name) => {
        return (
          <Age.Consumer>
            {(age) => {
              return (
                <h1>
                  My name is {name} and I am {age} years old
                </h1>
              )
            }}
          </Age.Consumer>
        )
      }}
    </Data.Consumer>
  )
}


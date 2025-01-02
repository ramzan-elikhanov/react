// reducer function and initialState

const initialState = { count: 0 }

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }

    case 'decrement':
      return { ...state, count: state.count - 1 }

    case 'incrementByAmount':
      return { ...state, count: state.count + action.userValue }

    case 'decrementByAmount':
      return { ...state, count: state.count - action.userValue }

    case 'reset':
      return { ...state, count: 0 }

    default:
      return state
  }
}

export { counterReducer, initialState }

// Counter.jsx

import { useReducer, useState } from 'react'
import { counterReducer, initialState } from '../counterReducer'

export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState)
  const [inputValue, setInputValue] = useState(0)

  const incrementByAmount = () => {
    dispatch({ type: 'incrementByAmount', userValue: +inputValue })
    setInputValue(0)
  }

  const decrementByAmount = () => {
    dispatch({ type: 'decrementByAmount', userValue: +inputValue })
    setInputValue(0)
  }
  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
      <p>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={incrementByAmount}>Add</button>
        <button onClick={decrementByAmount}>Subtract</button>
      </p>
    </>
  )
}


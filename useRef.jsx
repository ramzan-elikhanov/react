// FocusInput
import { useRef } from 'react'

export default function FocusInput() {
  const inputElement = useRef(null)

  const focusInputElement = () => {
    inputElement.current.focus()
  }
  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInputElement()}>focus</button>
    </>
  )
}

// Timer
import { useState, useEffect, useRef } from 'react'

export default function Timer() {
  const [count, setCount] = useState(0)

  const countRef = useRef(null)

  useEffect(() => {
    countRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 1000)

    return () => {
      clearInterval(countRef.current)
    }
  }, [])
  return (
    <>
      <h1>Timer: {count}</h1>
      <button onClick={() => clearInterval(countRef.current)}>
        Stop count
      </button>
    </>
  )
}

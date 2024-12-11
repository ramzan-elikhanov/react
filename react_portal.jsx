// App.jsx
import CopyInput from './components/CopyInput'

export default function App() {
  return (
    <>
      <CopyInput />
    </>
  )
}

// CopyInput.jsx
import { useState } from 'react'
import PopupContent from './PopupContent'

export default function CopyInput() {
  const [inputValue, setInputValue] = useState('')
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>Copy</button>
      <PopupContent copied={copied} />
    </>
  )
}

// PopupContent.jsx
import { createPortal } from 'react-dom'

export default function PopupContent({ copied }) {
  return createPortal(
    <section>
      {copied && (
        <div style={{ color: 'red', position: 'absolute', bottom: '30px' }}>
          Было скопировано!!!
        </div>
      )}
    </section>,
    document.getElementById('popup')
  )
}



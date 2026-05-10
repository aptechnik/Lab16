import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <img src="/photo_2026-01-17_15-35-41.jpg" alt="" height="200" onClick={() => setCount((count) => count + 1)} />
    <p>песик взорван {count} раз</p>
    </>
  )
}

export default App

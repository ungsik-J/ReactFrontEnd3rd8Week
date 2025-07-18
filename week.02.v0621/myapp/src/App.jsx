import { useState } from 'react'
import './App.css'

import UseEffect from './component/UseEffect'

function App() {
  const [count, setCount] = useState(0)

  const [visible, setVisible] = useState(false)

  return (
    <>
      <div>
        <button onClick={() => { setVisible(!visible) }}>
          {visible ? "hide" : "show"}
        </button>
      </div>
      {visible && <UseEffect />}
    </>
  )
}

export default App

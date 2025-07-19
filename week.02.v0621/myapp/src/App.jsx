import { useState } from 'react'
import './App.css'

import UseEffect from './component/UseEffect'
import ProductList from './component/ProductList'

function App() {

  /** UseEffect ****************************************************************
  const [visible, setVisible] = useState(false)
    return (
      <>
        <div>
          <div>
            <button onClick={() => { setVisible(!visible) }}>
              {visible ? "hide" : "show"}
            </button>
          </div>
          <div>{visible && <UseEffect />}</div>
        </div>
      </>
    )
  *************************************************************************** */
  return (
    <>
      <ProductList />
    </>
  )
}

export default App

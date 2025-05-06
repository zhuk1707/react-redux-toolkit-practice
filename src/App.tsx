import { useState } from 'react'
import reduxLogo from '/redux.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={reduxLogo} className="logo redux" alt="" />
        </a>
      </div>

      <h1>Redux Toolkit</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>

    </>
  )
}

export default App

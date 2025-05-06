import reduxLogo from '/redux.svg'
import './App.css'
import {Counter} from "./components/Counter.tsx";

function App() {

  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={reduxLogo} className="logo redux" alt=""/>
        </a>
      </div>

      <h1>Redux Toolkit</h1>

      <Counter/>


    </>
  )
}

export default App

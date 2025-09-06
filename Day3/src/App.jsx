import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './user'


function App() {
   const [counter, setCounter] = useState(0);

  return (
    <>
      <User />
      <h1>Code Step by Step</h1>
      <h1>Hello React 19</h1>
      <h1>Counter Val: {counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>Increase Counter Val</button>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Nav/>
   <div>
    <h1>hello</h1>
   </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

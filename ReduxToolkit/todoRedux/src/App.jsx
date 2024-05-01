import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import Todos from './components/Todos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todo />
      <Todos />
    </>
  )
}

export default App

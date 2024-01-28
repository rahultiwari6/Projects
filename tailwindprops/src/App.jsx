import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './component/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 mb-4 text-black'>Hello World</h1>
     <Card username="Rahul" btnText="Click here"/>
     <Card username="Sachin" btnText="Visit me"/>
    </>
  )
}

export default App

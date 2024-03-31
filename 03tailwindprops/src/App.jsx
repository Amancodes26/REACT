import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "AMAN",
    age: 21
  }
  return (
    <>
       <h1 className=" bg-green-400 pb-1 text-black rounded-xl uppercase mb-3">Testing Tailwind</h1>
       <Card username="ABHILASH" btnTEXT="CLICK ME"/>
        <Card username="AMAN"/>
    </>
  )
}

export default App
